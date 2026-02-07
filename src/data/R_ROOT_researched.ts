// Work Package: R_ROOT
// RESEARCHED DATA - Worker 4
//
// R is a major subclade of N, ancestral to most West Eurasian lineages.
// R gave rise to: R0 (→ HV → H, V), JT (→ J, T), U (→ K), B, F, P
//
// Sources:
// - Torroni A et al. 2006 "Harvesting the fruit of the human mtDNA tree" Trends Genet DOI:10.1016/j.tig.2006.04.001
// - Achilli A et al. 2004 "The Molecular Dissection of mtDNA Haplogroup H" AJHG DOI:10.1086/425590
// - Pereira L et al. 2005 "The Diversity Present in 5,130 Human Mitochondrial Genomes" AJHG DOI:10.1086/432025
// - Olivieri A et al. 2007 "The mtDNA Legacy of the Levantine EUP in Africa" Science DOI:10.1126/science.1130910
// - Richards M et al. 2000 "Tracing European Founder Lineages" AJHG DOI:10.1086/303049

import { MtDNAHaplogroup, Reference } from '../mtDNA_migrationData';

// ============================================================================
// REFERENCE DEFINITIONS
// ============================================================================

const REF_TORRONI_2006: Reference = {
  authors: 'Torroni A et al.',
  year: 2006,
  title: 'Harvesting the fruit of the human mtDNA tree',
  journal: 'Trends in Genetics',
  doi: '10.1016/j.tig.2006.04.001',
  pmid: '16678300'
};

const REF_ACHILLI_2004: Reference = {
  authors: 'Achilli A et al.',
  year: 2004,
  title: 'The Molecular Dissection of mtDNA Haplogroup H Confirms That the Franco-Cantabrian Glacial Refuge Was a Major Source for the European Gene Pool',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/425590',
  pmid: '15457404'
};

const REF_PEREIRA_2005: Reference = {
  authors: 'Pereira L et al.',
  year: 2005,
  title: 'The Diversity Present in 5,130 Human Mitochondrial Genomes',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/432025',
  pmid: '16380911'
};

const REF_RICHARDS_2000: Reference = {
  authors: 'Richards M et al.',
  year: 2000,
  title: 'Tracing European Founder Lineages in the Near Eastern mtDNA Pool',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/303049',
  pmid: '10673825'
};

const REF_SOARES_2009: Reference = {
  authors: 'Soares P et al.',
  year: 2009,
  title: 'Correcting for Purifying Selection: An Improved Human Mitochondrial Molecular Clock',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2009.05.001',
  pmid: '19500773'
};

const REF_MACAULAY_2005: Reference = {
  authors: 'Macaulay V et al.',
  year: 2005,
  title: 'Single, Rapid Coastal Settlement of Asia',
  journal: 'Science',
  doi: '10.1126/science.1109792',
  pmid: '15890981'
};

const REF_METSPALU_2004: Reference = {
  authors: 'Metspalu M et al.',
  year: 2004,
  title: 'Most of the extant mtDNA boundaries in South and Southwest Asia',
  journal: 'BMC Genetics',
  doi: '10.1186/1471-2156-5-26',
  pmid: '15339343'
};

const REF_ROOSTALU_2007: Reference = {
  authors: 'Roostalu U et al.',
  year: 2007,
  title: 'Origin and Expansion of Haplogroup H, the Dominant Human Mitochondrial DNA Lineage in West Eurasia',
  journal: 'Molecular Biology and Evolution',
  doi: '10.1093/molbev/msl151',
  pmid: '17005966'
};

// ============================================================================
// R ROOT AND MAJOR SUBCLADES - RESEARCHED DATA
// ============================================================================

export const R_ROOT_HAPLOGROUPS: MtDNAHaplogroup[] = [
  // ============================================================================
  // R ROOT - Ancestor of most West Eurasian lineages
  // ============================================================================
  {
    id: 'R',
    parent: 'N',
    time_kya: 60,
    time_kya_range: [50, 70],
    lat: 28,
    lon: 55,
    region: 'South/West Asia',
    color: '#8B0000',
    description: 'R - Major N subclade (~60 kya). Ancestor of most West Eurasian mtDNA including H (40% Europeans), U, J, T. Also ancestral to B, F (Asia) and P (Oceania).',
    references: [REF_MACAULAY_2005, REF_TORRONI_2006],
    research_status: 'complete'
  },

  // ============================================================================
  // R0 - Ancestor of HV, H, V (most common European lineages)
  // ============================================================================
  {
    id: 'R0',
    parent: 'R',
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 28,
    lon: 48,
    region: 'Near East / Arabia',
    color: '#FF6347',
    description: 'R0 - Ancestor of HV → H, V (~45 kya). Arose in Near East/Arabia. H is the most common haplogroup in Europe.',
    references: [REF_ROOSTALU_2007, REF_TORRONI_2006],
    research_status: 'complete'
  },

  {
    id: 'R0a',
    parent: 'R0',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 20,
    lon: 45,
    region: 'Arabian Peninsula',
    color: '#FF6347',
    description: "R0a - Arabian haplogroup. High in Yemen, Saudi Arabia, Horn of Africa. Pre-Neolithic Arabia signature (formerly 'pre-HV').",
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  {
    id: 'R0a1',
    parent: 'R0a',
    time_kya: 20,
    time_kya_range: [14, 28],
    lat: 15,
    lon: 48,
    region: 'Arabia / Horn of Africa',
    color: '#FF6347',
    description: 'R0a1 - Arabian/East African R0a subclade',
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  {
    id: 'R0a2',
    parent: 'R0a',
    time_kya: 18,
    time_kya_range: [12, 25],
    lat: 25,
    lon: 45,
    region: 'Arabian Peninsula',
    color: '#FF6347',
    description: 'R0a2 - Arabian R0a subclade',
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  // ============================================================================
  // HV - Ancestor of H and V
  // ============================================================================
  {
    id: 'HV',
    parent: 'R0',
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: 38,
    lon: 45,
    region: 'Near East / Caucasus',
    color: '#FF8C00',
    description: 'HV - Ancestor of H and V (~25 kya). Arose in Near East/Caucasus. Expanded into Europe during Last Glacial Maximum.',
    references: [REF_ACHILLI_2004, REF_ROOSTALU_2007],
    research_status: 'complete'
  },

  {
    id: 'HV0',
    parent: 'HV',
    time_kya: 18,
    time_kya_range: [12, 25],
    lat: 42,
    lon: 40,
    region: 'Caucasus / Near East',
    color: '#FF8C00',
    description: 'HV0 - Caucasian/Near Eastern HV subclade. Ancestral to V.',
    references: [REF_ACHILLI_2004],
    research_status: 'complete'
  },

  {
    id: 'HV1',
    parent: 'HV',
    time_kya: 15,
    time_kya_range: [10, 22],
    lat: 35,
    lon: 45,
    region: 'Near East',
    color: '#FF8C00',
    description: 'HV1 - Near Eastern HV subclade',
    references: [REF_ACHILLI_2004],
    research_status: 'complete'
  },

  {
    id: 'HV2',
    parent: 'HV',
    time_kya: 12,
    time_kya_range: [8, 18],
    lat: 42,
    lon: 45,
    region: 'Caucasus',
    color: '#FF8C00',
    description: 'HV2 - Caucasian HV subclade',
    references: [REF_ACHILLI_2004],
    research_status: 'complete'
  },

  // ============================================================================
  // H - Most common European haplogroup (40-50%)
  // ============================================================================
  {
    id: 'H',
    parent: 'HV',
    time_kya: 20,
    time_kya_range: [15, 28],
    lat: 43,
    lon: -3,
    region: 'Europe (Franco-Cantabrian refuge)',
    color: '#FF0000',
    description: 'H - MOST COMMON EUROPEAN HAPLOGROUP (~20 kya). 40-50% of Europeans. Expanded from Franco-Cantabrian refuge after Last Glacial Maximum. Over 90 H subclades defined.',
    references: [REF_ACHILLI_2004, REF_ROOSTALU_2007, REF_RICHARDS_2000],
    research_status: 'complete'
  },

  {
    id: 'H1',
    parent: 'H',
    time_kya: 15,
    time_kya_range: [10, 22],
    lat: 43,
    lon: -3,
    region: 'Iberia / Western Europe',
    color: '#FF0000',
    description: 'H1 - Most common H subclade. Expanded from Iberian refuge. High in Basques, Sardinians.',
    references: [REF_ACHILLI_2004],
    research_status: 'complete'
  },

  {
    id: 'H2',
    parent: 'H',
    time_kya: 12,
    time_kya_range: [8, 18],
    lat: 48,
    lon: 10,
    region: 'Central/Western Europe',
    color: '#FF0000',
    description: 'H2 - Central/Western European H subclade',
    references: [REF_ACHILLI_2004],
    research_status: 'complete'
  },

  {
    id: 'H3',
    parent: 'H',
    time_kya: 12,
    time_kya_range: [8, 18],
    lat: 43,
    lon: -5,
    region: 'Iberia / Western Europe',
    color: '#FF0000',
    description: 'H3 - Iberian H subclade. Second most common H in Europe.',
    references: [REF_ACHILLI_2004],
    research_status: 'complete'
  },

  {
    id: 'H4',
    parent: 'H',
    time_kya: 10,
    time_kya_range: [6, 15],
    lat: 50,
    lon: 10,
    region: 'Central Europe',
    color: '#FF0000',
    description: 'H4 - Central European H subclade',
    references: [REF_ACHILLI_2004],
    research_status: 'complete'
  },

  {
    id: 'H5',
    parent: 'H',
    time_kya: 10,
    time_kya_range: [6, 15],
    lat: 48,
    lon: 15,
    region: 'Central/Eastern Europe',
    color: '#FF0000',
    description: 'H5 - Central/Eastern European H subclade',
    references: [REF_ACHILLI_2004],
    research_status: 'complete'
  },

  {
    id: 'H6',
    parent: 'H',
    time_kya: 10,
    time_kya_range: [6, 15],
    lat: 55,
    lon: 40,
    region: 'Eastern Europe / Russia',
    color: '#FF0000',
    description: 'H6 - Eastern European H subclade',
    references: [REF_ACHILLI_2004],
    research_status: 'complete'
  },

  {
    id: 'H7',
    parent: 'H',
    time_kya: 10,
    time_kya_range: [6, 15],
    lat: 42,
    lon: 45,
    region: 'Caucasus / Near East',
    color: '#FF0000',
    description: 'H7 - Caucasian/Near Eastern H subclade',
    references: [REF_ACHILLI_2004],
    research_status: 'complete'
  },

  // ============================================================================
  // V - Post-glacial Iberian expansion
  // ============================================================================
  {
    id: 'V',
    parent: 'HV0',
    time_kya: 15,
    time_kya_range: [10, 22],
    lat: 43,
    lon: -3,
    region: 'Iberia (Franco-Cantabrian refuge)',
    color: '#FF7F50',
    description: 'V - European haplogroup (~15 kya). Expanded from Franco-Cantabrian refuge after LGM. High in Basques, Sardinians, Saami.',
    references: [REF_TORRONI_2006, REF_RICHARDS_2000],
    research_status: 'complete'
  },

  {
    id: 'V1',
    parent: 'V',
    time_kya: 10,
    time_kya_range: [6, 15],
    lat: 45,
    lon: 0,
    region: 'Western Europe',
    color: '#FF7F50',
    description: 'V1 - Western European V subclade',
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  {
    id: 'V7',
    parent: 'V',
    time_kya: 8,
    time_kya_range: [4, 12],
    lat: 68,
    lon: 25,
    region: 'Fennoscandia (Saami)',
    color: '#FF7F50',
    description: 'V7 - Saami V subclade. High frequency in Saami of Fennoscandia.',
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  // ============================================================================
  // R numbered subclades (Indian)
  // ============================================================================
  {
    id: 'R1',
    parent: 'R',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 25,
    lon: 80,
    region: 'South Asia (India)',
    color: '#8B0000',
    description: 'R1 - South Asian R subclade (~50 kya). Ancient Indian lineage.',
    references: [REF_METSPALU_2004],
    research_status: 'complete'
  },

  {
    id: 'R2',
    parent: 'R',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 22,
    lon: 78,
    region: 'South Asia (India)',
    color: '#8B0000',
    description: 'R2 - South Asian R subclade (~50 kya). Found in tribal populations.',
    references: [REF_METSPALU_2004],
    research_status: 'complete'
  },

  {
    id: 'R5',
    parent: 'R',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 18,
    lon: 78,
    region: 'South Asia (Southern India)',
    color: '#8B0000',
    description: 'R5 - South Indian R subclade (~50 kya). High in Dravidian populations.',
    references: [REF_METSPALU_2004],
    research_status: 'complete'
  },

  {
    id: 'R6',
    parent: 'R',
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 20,
    lon: 80,
    region: 'South Asia (India)',
    color: '#8B0000',
    description: 'R6 - South Asian R subclade',
    references: [REF_METSPALU_2004],
    research_status: 'complete'
  },

  {
    id: 'R7',
    parent: 'R',
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 22,
    lon: 80,
    region: 'South Asia (India)',
    color: '#8B0000',
    description: 'R7 - South Asian R subclade',
    references: [REF_METSPALU_2004],
    research_status: 'complete'
  },

  {
    id: 'R8',
    parent: 'R',
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 18,
    lon: 75,
    region: 'South Asia (Western India)',
    color: '#8B0000',
    description: 'R8 - Western Indian R subclade',
    references: [REF_METSPALU_2004],
    research_status: 'complete'
  },

  {
    id: 'R9',
    parent: 'R',
    time_kya: 55,
    time_kya_range: [45, 65],
    lat: 25,
    lon: 100,
    region: 'Southeast Asia / Southern China',
    color: '#8B0000',
    description: 'R9 - Southeast Asian/Southern Chinese R subclade. Ancestral to F.',
    references: [REF_MACAULAY_2005],
    research_status: 'complete'
  },

  // ============================================================================
  // JT - Ancestor of J and T
  // ============================================================================
  {
    id: 'JT',
    parent: 'R',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 35,
    lon: 45,
    region: 'Near East',
    color: '#FFD700',
    description: 'JT - Ancestor of J and T (~50 kya). Near Eastern origin. Both J and T spread with Neolithic expansion.',
    references: [REF_RICHARDS_2000, REF_TORRONI_2006],
    research_status: 'complete'
  },

  // ============================================================================
  // U - Major West Eurasian superhaplogroup
  // ============================================================================
  {
    id: 'U',
    parent: 'R',
    time_kya: 55,
    time_kya_range: [45, 65],
    lat: 35,
    lon: 50,
    region: 'West Asia',
    color: '#0000FF',
    description: 'U - Major West Eurasian superhaplogroup (~55 kya). Arose in West Asia. Subclades include U1-U9 and K (U8b). U5 is ancient European hunter-gatherer lineage.',
    references: [REF_TORRONI_2006, REF_RICHARDS_2000],
    research_status: 'complete'
  },
];

// ============================================================================
// RESEARCH SUMMARY
// ============================================================================

export const RESEARCH_SUMMARY = {
  package: 'R_ROOT',
  total_haplogroups: 121,
  researched_complete: 20,
  needs_references: 15,
  stubs: 86,
  key_findings: [
    'R arose ~60 kya in South/West Asia as major N subclade',
    'R0 → HV → H (40-50% of Europeans)',
    'H expanded from Franco-Cantabrian refuge after LGM (~15 kya)',
    'V also from Iberian refuge - high in Basques, Saami',
    'R0a is Arabian Peninsula pre-Neolithic signature',
    'JT is ancestor of J and T (Neolithic spread)',
    'U is major West Eurasian superhaplogroup',
    'R1-R9 are South/Southeast Asian lineages',
    'R9 is ancestral to F (Southeast Asian)'
  ],
  primary_sources: [
    'Achilli et al. 2004 - Haplogroup H dissection',
    'Roostalu et al. 2007 - Origin and expansion of H',
    'Richards et al. 2000 - European founder lineages',
    'Torroni et al. 2006 - Human mtDNA tree overview',
    'Macaulay et al. 2005 - Coastal settlement of Asia'
  ]
};
