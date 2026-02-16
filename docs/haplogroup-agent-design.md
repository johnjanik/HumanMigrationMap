# Automated Haplogroup Extraction Agent

## Design Document for a Scientific Publication Monitoring Pipeline

### Overview

This document describes how to build an automated agent that:

1. Monitors scientific journals daily for new papers containing Y-haplogroup and mtDNA haplogroup data
2. Downloads relevant PDFs
3. Extracts haplogroup, dating, and geographic data using an LLM
4. Validates and formats the data to match the HumanMigrationMap schema
5. Commits the changes via a pull request for human review

---

## Architecture

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  1. MONITOR      │────>│  2. DOWNLOAD     │────>│  3. EXTRACT      │
│  PubMed/CrossRef │     │  PDF Retrieval   │     │  LLM Pipeline    │
│  RSS / API       │     │  + Storage       │     │  (Claude API)    │
└──────────────────┘     └──────────────────┘     └──────────────────┘
                                                          │
                                                          v
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  6. PR + REVIEW  │<────│  5. INTEGRATE    │<────│  4. VALIDATE     │
│  Git Branch + PR │     │  File Updates    │     │  Schema + Tree   │
│  Human Approval  │     │  TypeScript Gen  │     │  Integrity       │
└──────────────────┘     └──────────────────┘     └──────────────────┘
```

---

## 1. Publication Monitoring

### 1.1 Data Sources

**PubMed E-Utilities API** (primary — free, comprehensive, structured)

```bash
# Daily search for new haplogroup-related papers
# Base URL: https://eutils.ncbi.nlm.nih.gov/entrez/eutils/

# Step 1: Search for relevant PMIDs published in the last 24 hours
curl "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?\
db=pubmed&\
retmode=json&\
retmax=100&\
reldate=1&\
datetype=edat&\
term=(Y-chromosome+haplogroup+OR+mitochondrial+haplogroup+OR+\
ancient+DNA+haplogroup+OR+archaeogenomics+OR+paleogenomics)\
+AND+(migration+OR+phylogeograph*+OR+TMRCA+OR+ancient+DNA)"

# Step 2: Fetch abstracts for those PMIDs
curl "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?\
db=pubmed&\
id=PMID1,PMID2,PMID3&\
retmode=xml"
```

**CrossRef API** (supplementary — covers preprints, broader journals)

```bash
# Search recent works by DOI metadata
curl "https://api.crossref.org/works?\
query=haplogroup+ancient+DNA+migration&\
filter=from-pub-date:2026-02-15&\
rows=50&\
sort=published&\
order=desc" \
-H "User-Agent: HumanMigrationMap/1.0 (mailto:your@email.com)"
```

**Europe PMC API** (alternative — includes preprints and open-access full text)

```bash
curl "https://www.ebi.ac.uk/europepmc/webservices/rest/search?\
query=(haplogroup+AND+ancient+DNA)&\
fromDate=2026-02-15&\
resultType=core&\
format=json&\
pageSize=50"
```

**bioRxiv/medRxiv RSS** (preprints — early access to data before peer review)

```
https://connect.biorxiv.org/biorxiv_xml.php?subject=genetics
https://connect.biorxiv.org/biorxiv_xml.php?subject=evolutionary_biology
```

### 1.2 Relevance Filtering

Not every paper mentioning "haplogroup" contains extractable migration data. Use a two-stage filter:

**Stage 1 — Keyword pre-filter** (fast, on title + abstract):

```python
REQUIRED_TERMS = [
    "haplogroup",           # Must mention haplogroups
]

CONTEXT_TERMS = [
    # At least one of these should appear
    "ancient DNA", "aDNA", "archaeogenomic", "paleogenomic",
    "Y-chromosome", "Y-haplogroup", "mtDNA", "mitochondrial",
    "migration", "phylogeograph", "TMRCA",
    "Neolithic", "Bronze Age", "Mesolithic", "Paleolithic",
    "hunter-gatherer", "farmer", "steppe", "ancestry",
]

HAPLOGROUP_PATTERN = re.compile(
    r'\b([A-T]\d?[a-z]?\d?(?:[a-z]\d?)*'  # e.g., R1b, J2a1, U5b1b
    r'(?:-[A-Z]\d+)?'                       # e.g., -M269, -P312
    r'(?:\+\d+)?)\b'                         # e.g., H+152
)

def is_relevant(title: str, abstract: str) -> bool:
    text = f"{title} {abstract}".lower()
    has_haplogroup = any(t in text for t in REQUIRED_TERMS)
    has_context = sum(1 for t in CONTEXT_TERMS if t.lower() in text) >= 2
    has_specific = len(HAPLOGROUP_PATTERN.findall(f"{title} {abstract}")) >= 2
    return has_haplogroup and (has_context or has_specific)
```

**Stage 2 — LLM triage** (on abstract, cheap model like Haiku):

```
Prompt: "Does this paper contain extractable haplogroup data with
geographic locations and dates? Answer YES/NO with one sentence
explaining why."
```

This avoids downloading and processing papers that merely reference haplogroups in passing (e.g., a methods paper about sequencing).

### 1.3 Deduplication

Track previously processed papers to avoid re-extraction:

```python
# Store in a simple JSON ledger: docs/processed_papers.json
{
  "10.1038/s41586-026-10111-8": {
    "pmid": "39918283",
    "title": "Lasting Lower Rhine-Meuse forager ancestry...",
    "processed_date": "2026-02-16",
    "y_haplo_entries_added": 22,
    "mtdna_entries_added": 3,
    "commit": "1068ed5"
  }
}
```

---

## 2. PDF Retrieval

### 2.1 Access Strategy

Scientific PDFs have varying access levels. Try sources in order:

```python
async def retrieve_pdf(doi: str, pmid: str | None) -> Path | None:
    """Try multiple sources to get the full-text PDF."""

    # 1. Unpaywall API — finds legal open-access versions
    #    Free, requires email in User-Agent
    url = f"https://api.unpaywall.org/v2/{doi}?email=your@email.com"
    resp = await fetch_json(url)
    if resp.get("best_oa_location", {}).get("url_for_pdf"):
        return await download(resp["best_oa_location"]["url_for_pdf"])

    # 2. Europe PMC full text
    if pmid:
        url = f"https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC{pmcid}&blobtype=pdf"
        # (requires PMC ID lookup first)

    # 3. Sci-Hub (legal gray area — check your jurisdiction)
    #    Not recommended for automated pipelines

    # 4. Publisher API with institutional credentials
    #    Nature, Science, Cell Press have APIs for subscribers

    # 5. Supplementary data often freely available even when paper is paywalled
    #    Many journals host supplementary tables as open-access Excel/CSV
    supp_url = f"https://doi.org/{doi}#supplementary-information"

    # 6. Fall back to abstract-only extraction
    return None
```

### 2.2 Supplementary Table Access

The richest haplogroup data is often in supplementary tables, not the main text. For example, Olalde et al. 2026 has Supplementary Table 1 with per-individual haplogroup assignments for all 112 individuals. These are typically Excel/CSV files hosted separately.

```python
# Nature supplementary materials follow predictable URL patterns:
# https://static-content.springer.com/esm/art%3A{encoded_doi}/MediaObjects/{id}_ESM.xlsx

# Many publishers also provide supplementary data via the CrossRef API:
def get_supplementary_urls(doi: str) -> list[str]:
    resp = requests.get(f"https://api.crossref.org/works/{doi}")
    links = resp.json()["message"].get("link", [])
    return [l["URL"] for l in links if "supplementary" in l.get("content-type", "")]
```

### 2.3 Storage

```
docs/papers/
├── processed_papers.json          # Ledger of all processed papers
├── 2026/
│   ├── s41586-026-10111-8.pdf     # Full paper
│   ├── s41586-026-10111-8_supp.xlsx  # Supplementary tables
│   └── s41586-026-10111-8_extracted.json  # Raw extraction output
```

---

## 3. LLM Data Extraction

This is the core of the pipeline. The LLM reads the paper and produces structured haplogroup data.

### 3.1 Extraction Strategy

Papers contain haplogroup data in different forms:

| Data Location | Example | Extraction Difficulty |
|---|---|---|
| Supplementary Table 1 (per-individual) | "Individual I12902, Y-hg R1b-U106, mtDNA H+152, Site: Opmeer, Date: 2852-2574 BCE" | Easy — structured tabular data |
| Main text (explicit mentions) | "All 9 BB males carried R1b-L151-P312" | Medium — requires context |
| Methods section (classification criteria) | "HG-related Y-haplogroups: I2a, C1a2, R1b-V88" | Medium — definitional |
| Figures/maps (site locations) | Map with labeled archaeological sites | Hard — requires vision |
| Discussion (population-level) | "90-100% ancestry replacement in Britain" | Hard — requires synthesis |

### 3.2 Two-Pass Extraction

**Pass 1 — Structured data extraction** (supplementary tables + main text):

Use the Claude API with the PDF passed as a document:

```python
import anthropic

client = anthropic.Anthropic()

# Read the PDF
with open("paper.pdf", "rb") as f:
    pdf_data = base64.standard_b64encode(f.read()).decode("utf-8")

response = client.messages.create(
    model="claude-sonnet-4-5-20250929",
    max_tokens=8192,
    messages=[{
        "role": "user",
        "content": [
            {
                "type": "document",
                "source": {
                    "type": "base64",
                    "media_type": "application/pdf",
                    "data": pdf_data,
                },
            },
            {
                "type": "text",
                "text": EXTRACTION_PROMPT,  # See below
            }
        ],
    }],
)
```

**Pass 2 — Validation and enrichment** (separate call with extracted data):

Verify extracted coordinates against known site databases, cross-check haplogroup nomenclature against the YFull/PhyloTree references, and resolve ambiguities.

### 3.3 Extraction Prompt

```text
You are a population genetics data extraction specialist. Extract ALL
Y-chromosome haplogroup and mitochondrial DNA haplogroup data from this
paper.

For each haplogroup finding, extract:

1. **haplogroup_id**: The haplogroup designation (e.g., R1b-L151-P312,
   H+152, U5b1). Use the most specific designation available.

2. **haplogroup_type**: "Y-chromosome" or "mtDNA"

3. **time_kya**: Date in thousands of years ago (kya). Convert from BCE
   using: kya = (year_BCE + 1950) / 1000. If a range is given (e.g.,
   "4342-4171 cal BCE"), provide both time_kya and time_kya_range.

4. **latitude** and **longitude**: Geographic coordinates of the
   archaeological site or population. If only a site name is given,
   provide your best estimate of coordinates.

5. **site_name**: Archaeological site or region name.

6. **individual_id**: Ancient DNA individual identifier if available
   (e.g., I12902, SWA001).

7. **parent_haplogroup**: The parent haplogroup in the phylogenetic tree
   (e.g., R1b-M269 is parent of R1b-L151).

8. **event_type**: One of: "origin", "split", "branch", "migration",
   "expansion", "persistence", "ancient" (aDNA finding), "neolithic",
   "coastal", "glacial", "agricultural", "maritime".

9. **description**: A concise description of the finding, including the
   paper's key interpretation.

10. **classification**: If the paper classifies the haplogroup (e.g.,
    "hunter-gatherer related" vs "Neolithic farmer related"), note this.

11. **population_context**: Archaeological culture or population group
    (e.g., "Bell Beaker", "Corded Ware", "Swifterbant", "WHG").

Also extract any POPULATION-LEVEL findings, such as:
- "All 43 Early/Middle Neolithic men carried only HG Y-haplogroups"
- "90-100% ancestry replacement in Britain"
- "Female-mediated introduction of farming ancestry"

Return the data as a JSON array. Example:

```json
{
  "paper": {
    "doi": "10.1038/s41586-026-10111-8",
    "title": "Lasting Lower Rhine-Meuse forager ancestry...",
    "authors": "Olalde I, Altena E, Bourgeois Q et al.",
    "year": 2026,
    "journal": "Nature"
  },
  "haplogroup_findings": [
    {
      "haplogroup_id": "R1b-U106",
      "haplogroup_type": "Y-chromosome",
      "time_kya": 4.8,
      "time_kya_range": [4.5, 4.8],
      "latitude": 52.72,
      "longitude": 4.95,
      "site_name": "Opmeer Mienakker",
      "individual_id": "I12902",
      "parent_haplogroup": "R1b-L151",
      "event_type": "migration",
      "description": "R1b-U106 CW-associated male, earliest Corded Ware date in Western Europe (2852-2574 cal BCE)",
      "classification": "steppe-associated",
      "population_context": "Corded Ware"
    }
  ],
  "population_findings": [
    {
      "finding": "Among 43 Early/Middle Neolithic men, only hunter-gatherer Y-haplogroups (I2a, R1b-V88, C1a2) were observed",
      "region": "Lower Rhine-Meuse",
      "time_period": "6500-3000 BCE",
      "haplogroups_involved": ["I2a", "R1b-V88", "C1a2"]
    }
  ]
}
```

Be thorough. Extract EVERY haplogroup mentioned with a date or location.
Do NOT invent data. If coordinates are uncertain, flag with
"coordinates_approximate": true.
```

### 3.4 Supplementary Table Parsing

If supplementary Excel/CSV tables are available, parse them separately for per-individual data:

```python
import pandas as pd

def parse_supplementary_table(filepath: str) -> list[dict]:
    """Parse per-individual haplogroup data from supplementary tables."""
    df = pd.read_excel(filepath, sheet_name=0)

    # Common column names across archaeogenomics papers:
    col_map = {
        # Y-haplogroup columns (try multiple naming conventions)
        'y_haplo': ['Y haplogroup', 'Y-chromosome haplogroup', 'Y-hg',
                     'Y_haplogroup', 'chrY haplogroup'],
        # mtDNA columns
        'mt_haplo': ['mtDNA haplogroup', 'MT haplogroup', 'mt-hg',
                      'mitochondrial haplogroup', 'MT_haplogroup'],
        # Date columns
        'date': ['Date (cal BCE)', 'Date', 'Calibrated date',
                  'Date range', 'cal BCE'],
        # Site columns
        'site': ['Site', 'Archaeological site', 'Location', 'Locality'],
        # Individual ID
        'id': ['ID', 'Individual', 'Sample ID', 'Genetic ID',
                'Master ID'],
        # Coordinates
        'lat': ['Latitude', 'Lat', 'lat'],
        'lon': ['Longitude', 'Long', 'Lon', 'lon'],
    }

    # Fuzzy-match actual columns to expected columns
    # ... (implementation details)

    findings = []
    for _, row in df.iterrows():
        if y_haplo := get_col(row, col_map['y_haplo']):
            findings.append({
                'haplogroup_id': y_haplo,
                'haplogroup_type': 'Y-chromosome',
                'individual_id': get_col(row, col_map['id']),
                'site_name': get_col(row, col_map['site']),
                # ... etc
            })
        if mt_haplo := get_col(row, col_map['mt_haplo']):
            findings.append({
                'haplogroup_id': mt_haplo,
                'haplogroup_type': 'mtDNA',
                # ...
            })

    return findings
```

---

## 4. Data Validation

Before writing data to the project files, validate against multiple constraints.

### 4.1 Phylogenetic Tree Integrity

```python
def validate_tree_integrity(new_entries: list, existing_entries: list):
    """Ensure new entries don't break the haplogroup tree."""
    errors = []

    all_entries = existing_entries + new_entries
    parent_map = {e['child']: e['parent'] for e in all_entries}
    children = {e['child'] for e in all_entries}

    for entry in new_entries:
        # 1. Parent must exist (either in existing data or new entries)
        if entry['parent'] not in children and entry['parent'] != 'Root':
            errors.append(f"Orphan: {entry['child']}'s parent "
                         f"'{entry['parent']}' not found in tree")

        # 2. No duplicate child IDs
        existing_children = {e['child'] for e in existing_entries}
        if entry['child'] in existing_children:
            errors.append(f"Duplicate: {entry['child']} already exists")

        # 3. Child time must be <= parent time (more recent)
        parent_entry = next(
            (e for e in all_entries if e['child'] == entry['parent']), None
        )
        if parent_entry and entry['time_kya'] > parent_entry['time_kya']:
            errors.append(
                f"Time violation: {entry['child']} ({entry['time_kya']} kya) "
                f"is older than parent {entry['parent']} "
                f"({parent_entry['time_kya']} kya)"
            )

        # 4. No cycles
        visited = set()
        current = entry['child']
        while current in parent_map and current != 'Root':
            if current in visited:
                errors.append(f"Cycle detected involving {entry['child']}")
                break
            visited.add(current)
            current = parent_map[current]

    return errors
```

### 4.2 Coordinate Validation

```python
def validate_coordinates(entry: dict) -> list[str]:
    errors = []
    lat, lon = entry.get('child_lat'), entry.get('child_lon')

    if lat is not None and (lat < -90 or lat > 90):
        errors.append(f"Invalid latitude {lat} for {entry['child']}")
    if lon is not None and (lon < -180 or lon > 180):
        errors.append(f"Invalid longitude {lon} for {entry['child']}")

    # Sanity check: coordinates should be on land (optional)
    # Use a simple shapefile check or reverse geocoding

    return errors
```

### 4.3 Haplogroup Nomenclature Validation

```python
import re

# Y-chromosome haplogroup patterns (YFull v8.09 nomenclature)
Y_HAPLO_PATTERN = re.compile(
    r'^(Pre-)?[A-T]'           # Major clade letter
    r'(\d+)?'                  # Numeric subclade
    r'([a-z]\d?)*'             # Lower-case sub-branches
    r'(-[A-Z]+\d*)*'           # SNP markers (e.g., -M269, -P312)
    r'(\*)?$'                  # Paragroup marker
)

# mtDNA haplogroup patterns (PhyloTree Build 17)
MT_HAPLO_PATTERN = re.compile(
    r'^[A-Z]'                  # Major clade
    r'(\d+)?'                  # Numeric
    r'([a-z]\d?)*'             # Sub-branches
    r"(['\"]?\d*)*"            # Prime notation
    r'(\+\d+)?$'               # Position variants (e.g., H+152)
)

def validate_haplogroup_name(name: str, hg_type: str) -> bool:
    pattern = Y_HAPLO_PATTERN if hg_type == 'Y-chromosome' else MT_HAPLO_PATTERN
    return bool(pattern.match(name))
```

### 4.4 Cross-Reference Check

Compare extracted haplogroups against known reference databases:

```python
# YFull Y-chromosome tree: https://www.yfull.com/tree/
# PhyloTree mtDNA tree: https://www.phylotree.org/
# ISOGG Y-DNA Haplogroup Tree: https://isogg.org/tree/

# The project already has a CSV reference:
# docs/mtdna_haplogroups.csv (508KB, full PhyloTree hierarchy)

def check_known_haplogroup(hg_id: str, reference_csv: str) -> bool:
    """Check if haplogroup exists in reference databases."""
    df = pd.read_csv(reference_csv)
    known = set(df['haplogroup'].values)
    return hg_id in known
```

---

## 5. Data Integration

### 5.1 Mapping Extracted Data to Project Schema

**Y-haplogroup → `migrationData.ts`**:

```python
def to_migration_event(finding: dict, paper: dict) -> str:
    """Convert an extracted finding to a MigrationEvent TypeScript literal."""

    # Map event_type from extraction to project conventions
    event_type_map = {
        'origin': 'origin',
        'split': 'split',
        'branch': 'branch',
        'migration': 'migration',
        'expansion': 'expansion',
        'persistence': 'persistence',
        'ancient_dna': 'ancient',
        'neolithic_spread': 'neolithic',
        'coastal_migration': 'coastal',
        'glacial_refuge': 'glacial',
        'agricultural': 'agricultural',
        'maritime': 'maritime',
    }

    # Color assignment by major haplogroup letter
    color_map = {
        'A': '#8B0000', 'B': '#8B4513', 'C': '#FF4500',
        'D': '#FFD700', 'E': '#8B4513', 'F': '#9370DB',
        'G': '#8A2BE2', 'H': '#FF1493', 'I': '#0000FF',
        'J': '#20B2AA', 'K': '#FFB6C1', 'L': '#FFB6C1',
        'M': '#9370DB', 'N': '#32CD32', 'O': '#DC143C',
        'P': '#000080', 'Q': '#8B008B', 'R': '#000080',
        'S': '#8A2BE2', 'T': '#FF69B4',
    }

    major = re.match(r'[A-T]', finding['haplogroup_id'])
    color = color_map.get(major.group() if major else 'A', '#888888')

    ref = f"({paper['authors'].split(',')[0].split(' ')[-1]} {paper['year']})"

    return (
        f'  {{ time_kya: {finding["time_kya"]}, '
        f'parent: "{finding["parent_haplogroup"]}", '
        f'child: "{finding["haplogroup_id"]}", '
        f'event_type: "{event_type_map.get(finding["event_type"], "branch")}", '
        f'parent_lat: {finding.get("parent_lat", 0)}, '
        f'parent_lon: {finding.get("parent_lon", 0)}, '
        f'child_lat: {finding["latitude"]}, '
        f'child_lon: {finding["longitude"]}, '
        f'color: "{color}", '
        f'description: "{finding["description"]} {ref}" }},'
    )
```

**mtDNA → `*_researched.ts` files**:

```python
def determine_mtdna_file(haplogroup_id: str) -> str:
    """Route an mtDNA haplogroup to the correct data file."""
    routing = {
        'L0':  'ROOT_AND_L0_researched.ts',
        'L1':  'L1_L2_researched.ts',
        'L2':  'L1_L2_researched.ts',
        'L3':  'L3_researched.ts',
        'L4':  'L4_L5_L6_researched.ts',
        'L5':  'L4_L5_L6_researched.ts',
        'L6':  'L4_L5_L6_researched.ts',
        'M':   'M_ROOT_researched.ts',
        'C':   'M_ASIA_researched.ts',   # C,D,G,Z are M subclades
        'D':   'M_ASIA_researched.ts',
        'G':   'M_ASIA_researched.ts',
        'Z':   'M_ASIA_researched.ts',
        'N':   'N_ROOT_researched.ts',
        'A':   'N_ROOT_researched.ts',   # A is an N subclade
        'R':   'R_ROOT_researched.ts',
        'HV':  'HV_H_researched.ts',
        'H':   'HV_H_researched.ts',
        'V':   'HV_H_researched.ts',
        'U':   'U_K_researched.ts',
        'K':   'U_K_researched.ts',
        'J':   'JT_researched.ts',
        'T':   'JT_researched.ts',
        'B':   'B_F_researched.ts',
        'F':   'B_F_researched.ts',
    }

    # Match longest prefix
    for prefix_len in range(len(haplogroup_id), 0, -1):
        prefix = haplogroup_id[:prefix_len]
        if prefix in routing:
            return routing[prefix]

    return 'N_ROOT_researched.ts'  # fallback
```

### 5.2 File Modification Strategy

Use AST-aware insertion rather than string concatenation:

```python
def insert_y_haplo_entries(
    filepath: str,
    new_entries: list[str],
    section_comment: str
) -> str:
    """Insert new Y-haplogroup entries before the closing ];"""
    content = Path(filepath).read_text()

    # Find the closing of migrationEvents array
    # Insert new section before "];"
    insertion_point = content.rfind('];')

    section = f"\n  // ========== {section_comment} ==========\n"
    section += "\n".join(new_entries) + "\n"

    new_content = content[:insertion_point] + section + content[insertion_point:]
    return new_content


def insert_mtdna_entry(filepath: str, entry: dict) -> str:
    """Insert a new MtDNAHaplogroup entry in the correct position."""
    content = Path(filepath).read_text()

    # Find the array closing
    insertion_point = content.rfind('];')

    # Format the entry as TypeScript
    ts_entry = format_mtdna_typescript(entry)

    new_content = content[:insertion_point] + ts_entry + "\n" + content[insertion_point:]
    return new_content
```

### 5.3 Reference Management

Each mtDNA data file manages its own reference constants. New papers need a reference added:

```python
def generate_reference_const(paper: dict) -> str:
    """Generate a TypeScript reference constant for a paper."""
    # Create a stable constant name from author + year
    first_author = paper['authors'].split(',')[0].split(' ')[-1].upper()
    name = f"REF_{first_author}_{paper['year']}"

    return f"""const {name}: Reference = {{
  authors: '{paper["authors"]}',
  year: {paper["year"]},
  title: '{paper["title"]}',
  journal: '{paper["journal"]}',
  doi: '{paper.get("doi", "")}'
}};"""
```

---

## 6. Git Integration and Human Review

### 6.1 Branch and PR Workflow

Every paper gets its own branch and PR for review:

```bash
#!/bin/bash
# scripts/create_paper_pr.sh

DOI="$1"
BRANCH_NAME="data/$(echo $DOI | sed 's/[\/.]/-/g')"

git checkout main
git pull origin main
git checkout -b "$BRANCH_NAME"

# ... (agent modifies files) ...

git add src/data/migrationData.ts
git add src/data/*_researched.ts
git add docs/papers/

git commit -m "Add haplogroup data from $DOI

Automated extraction by haplogroup-agent.
Human review required before merge.

Co-Authored-By: haplogroup-agent <noreply@example.com>"

git push origin "$BRANCH_NAME"

gh pr create \
  --title "Data: $(cat /tmp/paper_title.txt)" \
  --body "$(cat <<'EOF'
## Automated Haplogroup Extraction

**Paper**: $TITLE
**DOI**: $DOI
**Journal**: $JOURNAL

### Entries Added
- Y-haplogroup events: $Y_COUNT
- mtDNA haplogroups: $MT_COUNT
- aDNA sites: $ADNA_COUNT

### Validation
- [ ] Tree integrity: PASSED
- [ ] Coordinate bounds: PASSED
- [ ] Haplogroup nomenclature: PASSED
- [ ] No duplicate entries: PASSED

### Requires Human Review
- [ ] Verify haplogroup assignments match paper
- [ ] Verify coordinates are correct
- [ ] Verify time_kya conversions from BCE dates
- [ ] Verify parent-child relationships
- [ ] Check descriptions for accuracy

Generated by haplogroup-agent
EOF
)"
```

### 6.2 Review Checklist

The PR body should include a structured checklist for the human reviewer:

1. **Data accuracy** — Do the extracted haplogroups match what's in the paper?
2. **Coordinates** — Are site locations correct? (Compare against paper's maps)
3. **Dates** — Are BCE-to-kya conversions correct? (kya = (BCE + 1950) / 1000)
4. **Tree structure** — Do parent-child relationships match known phylogeny?
5. **Deduplication** — Are any entries duplicating existing data?
6. **Descriptions** — Do they accurately reflect the paper's findings?

---

## 7. Implementation: Orchestrator

### 7.1 Technology Choice

**Recommended: Claude Code with Agent SDK** or a simple Python script using the Anthropic SDK, scheduled via cron or GitHub Actions.

The pipeline is sequential and stateful (tracks processed papers), making a simple script preferable over a complex framework.

### 7.2 Daily Pipeline Script

```python
#!/usr/bin/env python3
"""
Daily haplogroup extraction pipeline.

Run via cron:
  0 6 * * * cd /home/john/Projects/HumanMigrationMap && python scripts/daily_extract.py

Or via GitHub Actions (see section 7.3).
"""

import json
import asyncio
from pathlib import Path
from datetime import date

# Local modules (see sections above for implementations)
from monitor import search_pubmed, search_crossref, is_relevant
from retrieve import retrieve_pdf, retrieve_supplementary
from extract import extract_haplogroups_from_pdf, parse_supplementary
from validate import (
    validate_tree_integrity,
    validate_coordinates,
    validate_haplogroup_name,
)
from integrate import (
    insert_y_haplo_entries,
    insert_mtdna_entry,
    determine_mtdna_file,
    to_migration_event,
)
from git_ops import create_branch, commit_and_pr

LEDGER_PATH = Path("docs/papers/processed_papers.json")
PAPERS_DIR = Path("docs/papers") / str(date.today().year)


async def main():
    # Load ledger of already-processed papers
    ledger = json.loads(LEDGER_PATH.read_text()) if LEDGER_PATH.exists() else {}

    # 1. Find new papers
    print("Searching for new papers...")
    candidates = await search_pubmed() + await search_crossref()

    # 2. Filter for relevance
    relevant = [p for p in candidates if is_relevant(p['title'], p['abstract'])]
    new_papers = [p for p in relevant if p['doi'] not in ledger]

    print(f"Found {len(new_papers)} new relevant papers")

    for paper in new_papers:
        print(f"\nProcessing: {paper['title'][:80]}...")

        try:
            # 3. Download PDF and supplementary data
            pdf_path = await retrieve_pdf(paper['doi'], paper.get('pmid'))
            supp_paths = await retrieve_supplementary(paper['doi'])

            if not pdf_path and not supp_paths:
                print(f"  Could not retrieve content, skipping")
                continue

            # 4. Extract haplogroup data
            findings = []
            if pdf_path:
                findings += await extract_haplogroups_from_pdf(pdf_path)
            for supp in supp_paths:
                findings += parse_supplementary(supp)

            if not findings:
                print(f"  No haplogroup data found, skipping")
                continue

            print(f"  Extracted {len(findings)} haplogroup findings")

            # 5. Validate
            y_findings = [f for f in findings if f['haplogroup_type'] == 'Y-chromosome']
            mt_findings = [f for f in findings if f['haplogroup_type'] == 'mtDNA']

            errors = validate_tree_integrity(y_findings, get_existing_y_events())
            errors += validate_tree_integrity(mt_findings, get_existing_mt_events())
            for f in findings:
                errors += validate_coordinates(f)

            if errors:
                print(f"  Validation warnings: {len(errors)}")
                for e in errors[:5]:
                    print(f"    - {e}")
                # Continue but flag in PR

            # 6. Integrate into project files
            branch = create_branch(paper['doi'])

            if y_findings:
                y_entries = [to_migration_event(f, paper) for f in y_findings]
                insert_y_haplo_entries(
                    "src/data/migrationData.ts",
                    y_entries,
                    f"{paper['authors'].split(',')[0]} {paper['year']}, {paper['journal']}"
                )

            for f in mt_findings:
                target_file = determine_mtdna_file(f['haplogroup_id'])
                insert_mtdna_entry(f"src/data/{target_file}", f)

            # 7. Save extraction output and commit
            PAPERS_DIR.mkdir(parents=True, exist_ok=True)
            extraction_output = PAPERS_DIR / f"{paper['doi'].replace('/', '_')}_extracted.json"
            extraction_output.write_text(json.dumps(findings, indent=2))

            pr_url = commit_and_pr(paper, y_findings, mt_findings, errors)

            # 8. Update ledger
            ledger[paper['doi']] = {
                'pmid': paper.get('pmid'),
                'title': paper['title'],
                'processed_date': str(date.today()),
                'y_haplo_entries_added': len(y_findings),
                'mtdna_entries_added': len(mt_findings),
                'pr_url': pr_url,
                'validation_warnings': len(errors),
            }
            LEDGER_PATH.write_text(json.dumps(ledger, indent=2))

            print(f"  Created PR: {pr_url}")

        except Exception as e:
            print(f"  Error processing paper: {e}")
            continue


if __name__ == "__main__":
    asyncio.run(main())
```

### 7.3 GitHub Actions Scheduler

```yaml
# .github/workflows/daily-haplogroup-scan.yml
name: Daily Haplogroup Scan

on:
  schedule:
    - cron: '0 6 * * *'   # 6 AM UTC daily
  workflow_dispatch:        # Manual trigger

permissions:
  contents: write
  pull-requests: write

jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'

      - name: Install dependencies
        run: pip install anthropic pandas openpyxl requests feedparser

      - name: Run daily extraction pipeline
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NCBI_API_KEY: ${{ secrets.NCBI_API_KEY }}  # optional, higher rate limits
        run: python scripts/daily_extract.py

      - name: Upload extraction logs
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: extraction-logs
          path: docs/papers/**/*_extracted.json
```

---

## 8. Cost Estimation

### 8.1 API Costs

| Component | Daily Volume | Cost per Unit | Daily Cost |
|---|---|---|---|
| PubMed search | 1 query | Free | $0.00 |
| CrossRef search | 1 query | Free | $0.00 |
| Unpaywall lookups | ~5-20 papers | Free | $0.00 |
| Claude Haiku (triage) | ~20 abstracts | ~$0.001/abstract | ~$0.02 |
| Claude Sonnet (extraction) | ~2-5 papers | ~$0.05-0.15/paper | ~$0.10-0.75 |
| **Total** | | | **~$0.12-0.77/day** |

Most days will have 0-2 relevant papers. High-volume days (e.g., when Nature or Science publish a major archaeogenomics study) may have up to 5.

### 8.2 Rate Limits

- **PubMed**: 3 requests/second without API key, 10/second with NCBI API key
- **CrossRef**: Polite pool (50 req/sec) with `mailto:` in User-Agent
- **Unpaywall**: 100,000 requests/day
- **Claude API**: Standard rate limits per plan

---

## 9. Handling Edge Cases

### 9.1 Papers with Only Population-Level Data

Some papers report ancestry proportions or PCA results without individual haplogroup assignments. These should still be captured as population-level findings but may not produce individual MigrationEvent entries.

**Strategy**: Extract as metadata attached to existing haplogroup nodes (update descriptions of existing entries rather than creating new ones).

### 9.2 Conflicting Data

A new paper may reassign a haplogroup's TMRCA, origin location, or phylogenetic position, contradicting existing data.

**Strategy**: Never auto-modify existing entries. Instead, create a separate `conflicts.json` log and flag in the PR for human resolution.

```json
{
  "conflict": "TMRCA disagreement",
  "haplogroup": "R1b-M269",
  "existing_value": {"time_kya": 5.0, "source": "existing data"},
  "new_value": {"time_kya": 5.3, "source": "Doe et al. 2026"},
  "resolution": "pending_human_review"
}
```

### 9.3 Preprints vs Peer-Reviewed

bioRxiv preprints may be revised or retracted. Track preprints separately and flag them:

```python
is_preprint = paper['journal'] in ['bioRxiv', 'medRxiv', 'Research Square']
# Add "(preprint)" suffix to descriptions
# Re-check when peer-reviewed version appears (match by title/authors)
```

### 9.4 Paywalled Papers

When only the abstract is available:

1. Extract what you can from the abstract (often mentions key haplogroups)
2. Check if supplementary data is freely available (often is)
3. Log as "partial extraction" and revisit when open-access version appears
4. Use the Europe PMC API to check for author manuscripts (6-12 month embargo)

---

## 10. Testing the Pipeline

### 10.1 Test with Known Papers

Use papers already processed manually as ground truth:

```python
TEST_PAPERS = [
    {
        "doi": "10.1038/s41586-026-10111-8",
        "expected_y_haplo": ["R1b-L151", "R1b-U106", "R1b-DF19",
                             "I2a-LRM", "C1a2-LRM", "R1b-V88-LRM"],
        "expected_mtdna": ["H+152", "K1e"],
        "expected_adna_sites": ["Opmeer Mienakker", "Oostwoud Tuithoorn",
                                "Ottoland Kromme Elleboog"],
    },
    # Add more test cases as papers are manually processed
]

def test_extraction_accuracy():
    for test in TEST_PAPERS:
        findings = extract_haplogroups_from_pdf(f"docs/{test['doi']}.pdf")
        extracted_ids = {f['haplogroup_id'] for f in findings}

        for expected in test['expected_y_haplo']:
            assert expected in extracted_ids, \
                f"Missing Y-haplogroup: {expected}"
```

### 10.2 Dry Run Mode

```bash
# Run pipeline without creating branches or PRs
python scripts/daily_extract.py --dry-run

# Process a specific paper for testing
python scripts/daily_extract.py --doi "10.1038/s41586-026-10111-8" --dry-run
```

---

## 11. Future Enhancements

1. **Figure/map extraction**: Use Claude's vision to extract coordinates from paper figures showing archaeological site maps

2. **Citation graph monitoring**: Track papers that cite key archaeogenomics studies to find follow-up data

3. **Haplogroup tree auto-update**: Periodically sync against the latest YFull and PhyloTree builds to catch reclassifications

4. **Interactive review UI**: Build a small web interface showing extracted data on the Fuller map for visual verification before merge

5. **Cross-paper synthesis**: Detect when multiple papers provide data for the same region/period and flag potential conflicts or complementary data

6. **Allen Ancient DNA Resource (AADR) integration**: The Harvard AADR dataset (https://reich.hms.harvard.edu/allen-ancient-dna-resource-aadr-downloadable-genotypes-present-day-and-ancient-dna-data) publishes periodic updates with standardized haplogroup calls for thousands of individuals
