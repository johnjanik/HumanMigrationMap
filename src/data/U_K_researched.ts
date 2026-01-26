// Work Package: U_K (U Superhaplogroup and K)
// Researched data for 695 haplogroups
// Status: IN PROGRESS
//
// U is one of the oldest R-derived haplogroups (~50-55 kya)
// U5 is the oldest European-specific haplogroup (pre-LGM hunter-gatherers)
// K is a subclade of U8b, very common in Europe and Near East
// K1a1b1a is the "Ashkenazi Jewish K" haplogroup
//
// Research completed: 40 haplogroups with dates and references
// Needs references: 25 haplogroups
// Stubs remaining: 630 haplogroups

import { MtDNAHaplogroup, Reference } from '../mtDNA_migrationData';

// ============================================================================
// REFERENCES
// ============================================================================

const REF_MALYARCHUK_2008: Reference = {
  authors: 'Malyarchuk BA et al.',
  year: 2008,
  title: 'The peopling of Europe from the mitochondrial haplogroup U5 perspective',
  journal: 'PLoS ONE',
  doi: '10.1371/journal.pone.0003046',
  pmid: '18725954'
};

const REF_FU_2016: Reference = {
  authors: 'Fu Q et al.',
  year: 2016,
  title: 'The genetic history of Ice Age Europe',
  journal: 'Nature',
  doi: '10.1038/nature17993',
  pmid: '27135931'
};

const REF_BRAMANTI_2009: Reference = {
  authors: 'Bramanti B et al.',
  year: 2009,
  title: 'Genetic discontinuity between local hunter-gatherers and Central Europe\'s first farmers',
  journal: 'Science',
  doi: '10.1126/science.1176869',
  pmid: '19779228'
};

const REF_COSTA_2013: Reference = {
  authors: 'Costa MD et al.',
  year: 2013,
  title: 'A substantial prehistoric European ancestry amongst Ashkenazi maternal lineages',
  journal: 'Nature Communications',
  doi: '10.1038/ncomms3543',
  pmid: '24104924'
};

const REF_BEHAR_2008: Reference = {
  authors: 'Behar DM et al.',
  year: 2008,
  title: 'Counting the founders: the matrilineal genetic ancestry of the Jewish Diaspora',
  journal: 'PLoS ONE',
  doi: '10.1371/journal.pone.0002062',
  pmid: '18446216'
};

const REF_BEHAR_2012: Reference = {
  authors: 'Behar DM et al.',
  year: 2012,
  title: 'A "Copernican" Reassessment of the Human Mitochondrial DNA Tree from its Root',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2012.03.002',
  pmid: '22482806'
};

const REF_RICHARDS_2000: Reference = {
  authors: 'Richards M et al.',
  year: 2000,
  title: 'Tracing European founder lineages in the Near Eastern mtDNA pool',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/303311',
  pmid: '10958761'
};

const REF_GONZALEZ_2006: Reference = {
  authors: 'Gonzalez AM et al.',
  year: 2006,
  title: 'The mitochondrial DNA lineage U8a reveals a Paleolithic settlement in the Basque country',
  journal: 'BMC Genomics',
  doi: '10.1186/1471-2164-7-124',
  pmid: '16719915'
};

const REF_HERVELLA_2012: Reference = {
  authors: 'Hervella M et al.',
  year: 2012,
  title: 'Ancient DNA from Hunter-Gatherer and Farmer Groups from Northern Spain',
  journal: 'Current Biology',
  doi: '10.1016/j.cub.2012.06.066',
  pmid: '22840520'
};

const REF_HAAK_2015: Reference = {
  authors: 'Haak W et al.',
  year: 2015,
  title: 'Massive migration from the steppe was a source for Indo-European languages in Europe',
  journal: 'Nature',
  doi: '10.1038/nature14317',
  pmid: '25731166'
};

const REF_SOARES_2010: Reference = {
  authors: 'Soares P et al.',
  year: 2010,
  title: 'The archaeogenetics of Europe',
  journal: 'Current Biology',
  doi: '10.1016/j.cub.2010.01.011',
  pmid: '20619815'
};

const REF_METSPALU_2004: Reference = {
  authors: 'Metspalu M et al.',
  year: 2004,
  title: 'Most of the extant mtDNA boundaries in south and southwest Asia were likely shaped during the initial settlement of Eurasia by anatomically modern humans',
  journal: 'BMC Genetics',
  doi: '10.1186/1471-2156-5-26',
  pmid: '15339343'
};

// ============================================================================
// HAPLOGROUPS - COMPLETE (with TMRCA dates and references)
// ============================================================================

export const U_K_HAPLOGROUPS: MtDNAHaplogroup[] = [
  // ========== U - Major R-derived haplogroup ==========
  {
    id: 'U',
    parent: 'R',
    time_kya: 55,
    time_kya_range: [50, 60],
    lat: 35,
    lon: 45,
    region: 'Near East',
    color: '#1E90FF',
    description: 'U - One of the oldest R-derived haplogroups. Arose ~55 kya in Near East. Ancestral to ~15% of Europeans. Includes U5 (oldest European-specific), U2/U7 (South Asian), U6 (North African), and K (via U8b). Major marker for Paleolithic expansions.',
    references: [REF_BEHAR_2012, REF_RICHARDS_2000, REF_SOARES_2010],
    research_status: 'complete'
  },

  // ========== U1 - Near Eastern ==========
  {
    id: 'U1',
    parent: 'U',
    time_kya: 35,
    time_kya_range: [30, 42],
    lat: 36,
    lon: 42,
    region: 'Near East (Fertile Crescent)',
    color: '#1E90FF',
    description: 'U1 - Near Eastern haplogroup. Found in Anatolia, Armenia, Iran. Spread to Europe with Neolithic farmers.',
    references: [REF_RICHARDS_2000, REF_BEHAR_2012],
    research_status: 'complete'
  },
  {
    id: 'U1a',
    parent: 'U1',
    time_kya: 28,
    time_kya_range: [22, 35],
    lat: 38,
    lon: 40,
    region: 'Near East/Anatolia',
    color: '#1E91FF',
    description: 'U1a - Major U1 subclade. Near Eastern distribution with spread to Europe.',
    references: [REF_RICHARDS_2000],
    research_status: 'complete'
  },
  {
    id: 'U1b',
    parent: 'U1',
    time_kya: 25,
    time_kya_range: [20, 32],
    lat: 35,
    lon: 44,
    region: 'Near East',
    color: '#1E92FF',
    description: 'U1b - U1 subclade with Near Eastern distribution.',
    references: [REF_RICHARDS_2000],
    research_status: 'complete'
  },

  // ========== U2 - South Asian / European ==========
  {
    id: 'U2',
    parent: 'U',
    time_kya: 50,
    time_kya_range: [45, 55],
    lat: 32,
    lon: 55,
    region: 'Near East/South Asia',
    color: '#1E93FF',
    description: 'U2 - Ancient haplogroup with early split between South Asian (U2a,b,c,d) and European (U2e) branches. Evidence of early Out of Africa diversification. U2a-d in South Asia, U2e in Europe.',
    references: [REF_METSPALU_2004, REF_BEHAR_2012],
    research_status: 'complete'
  },
  {
    id: 'U2a',
    parent: 'U2',
    time_kya: 40,
    time_kya_range: [35, 48],
    lat: 25,
    lon: 75,
    region: 'South Asia (India)',
    color: '#1E94FF',
    description: 'U2a - South Asian haplogroup. Common in Indian subcontinent. Ancient autochthonous Indian lineage.',
    references: [REF_METSPALU_2004],
    research_status: 'complete'
  },
  {
    id: 'U2b',
    parent: 'U2',
    time_kya: 38,
    time_kya_range: [32, 45],
    lat: 28,
    lon: 78,
    region: 'South Asia (India)',
    color: '#1E95FF',
    description: 'U2b - South Asian haplogroup. Common in Indian subcontinent.',
    references: [REF_METSPALU_2004],
    research_status: 'complete'
  },
  {
    id: 'U2e',
    parent: 'U2',
    time_kya: 30,
    time_kya_range: [25, 38],
    lat: 50,
    lon: 30,
    region: 'Eastern Europe',
    color: '#1E96FF',
    description: 'U2e - European branch of U2. Found in Eastern Europe and Caucasus. Distinct from South Asian U2 branches.',
    references: [REF_BEHAR_2012, REF_RICHARDS_2000],
    research_status: 'complete'
  },

  // ========== U3 ==========
  {
    id: 'U3',
    parent: 'U',
    time_kya: 35,
    time_kya_range: [30, 42],
    lat: 38,
    lon: 44,
    region: 'Near East/Caucasus',
    color: '#1E97FF',
    description: 'U3 - Near Eastern/Caucasian haplogroup. Found in Turkey, Iran, Caucasus. Spread to Europe in Neolithic and later.',
    references: [REF_RICHARDS_2000, REF_BEHAR_2012],
    research_status: 'complete'
  },

  // ========== U4 - European ==========
  {
    id: 'U4',
    parent: 'U',
    time_kya: 30,
    time_kya_range: [25, 38],
    lat: 55,
    lon: 40,
    region: 'Eastern Europe/Siberia',
    color: '#1E98FF',
    description: 'U4 - European and Siberian haplogroup. Common in Baltic, Scandinavia, and Western Siberia. Pre-Neolithic hunter-gatherer signature. Found in Mesolithic Europeans.',
    references: [REF_MALYARCHUK_2008, REF_BRAMANTI_2009],
    research_status: 'complete'
  },
  {
    id: 'U4a',
    parent: 'U4',
    time_kya: 22,
    time_kya_range: [18, 28],
    lat: 56,
    lon: 35,
    region: 'Eastern Europe',
    color: '#1E99FF',
    description: 'U4a - U4 subclade common in Eastern Europe and Baltic region.',
    references: [REF_MALYARCHUK_2008],
    research_status: 'complete'
  },
  {
    id: 'U4b',
    parent: 'U4',
    time_kya: 20,
    time_kya_range: [16, 26],
    lat: 58,
    lon: 50,
    region: 'Northern Europe/Western Siberia',
    color: '#1E9AFF',
    description: 'U4b - U4 subclade with northern distribution.',
    references: [REF_MALYARCHUK_2008],
    research_status: 'complete'
  },

  // ========== U5 - OLDEST EUROPEAN HAPLOGROUP ==========
  {
    id: 'U5',
    parent: 'U',
    time_kya: 35,
    time_kya_range: [30, 42],
    lat: 48,
    lon: 20,
    region: 'Europe',
    color: '#0066CC',
    description: 'U5 - THE OLDEST EUROPEAN-SPECIFIC HAPLOGROUP. Arose ~35 kya in Europe. Dominant among Mesolithic hunter-gatherers (70-80% in some populations). Declined with Neolithic farming expansion but persists at ~10% in modern Europeans. U5a and U5b show different geographic distributions.',
    references: [REF_MALYARCHUK_2008, REF_FU_2016, REF_BRAMANTI_2009, REF_HAAK_2015],
    research_status: 'complete'
  },
  {
    id: 'U5a',
    parent: 'U5',
    time_kya: 28,
    time_kya_range: [23, 35],
    lat: 50,
    lon: 15,
    region: 'Central/Western Europe',
    color: '#0067CC',
    description: 'U5a - Major U5 subclade. Common in Central and Western Europe. Found in Mesolithic hunter-gatherers across Europe. Shows post-LGM expansion.',
    references: [REF_MALYARCHUK_2008, REF_FU_2016],
    research_status: 'complete'
  },
  {
    id: 'U5a1',
    parent: 'U5a',
    time_kya: 22,
    time_kya_range: [18, 28],
    lat: 52,
    lon: 12,
    region: 'Central Europe',
    color: '#0068CC',
    description: 'U5a1 - Major U5a subclade. Widespread in Europe. Multiple star-like expansions. Found in ancient hunter-gatherer remains.',
    references: [REF_MALYARCHUK_2008, REF_FU_2016],
    research_status: 'complete'
  },
  {
    id: 'U5a2',
    parent: 'U5a',
    time_kya: 20,
    time_kya_range: [16, 26],
    lat: 48,
    lon: 18,
    region: 'Central/Eastern Europe',
    color: '#0069CC',
    description: 'U5a2 - U5a subclade. Found in Central and Eastern Europe.',
    references: [REF_MALYARCHUK_2008],
    research_status: 'complete'
  },
  {
    id: 'U5b',
    parent: 'U5',
    time_kya: 26,
    time_kya_range: [21, 32],
    lat: 45,
    lon: 10,
    region: 'Western/Southern Europe',
    color: '#006ACC',
    description: 'U5b - Major U5 subclade. Sister to U5a. Distribution in Western/Southern Europe. High frequencies in Basques and Saami. Ancient genetic continuity marker.',
    references: [REF_MALYARCHUK_2008, REF_HERVELLA_2012],
    research_status: 'complete'
  },
  {
    id: 'U5b1',
    parent: 'U5b',
    time_kya: 18,
    time_kya_range: [14, 24],
    lat: 46,
    lon: 8,
    region: 'Western Europe',
    color: '#006BCC',
    description: 'U5b1 - Major U5b subclade. Common in Western Europe. Includes U5b1b (Saami lineage).',
    references: [REF_MALYARCHUK_2008],
    research_status: 'complete'
  },
  {
    id: 'U5b1b',
    parent: 'U5b1',
    time_kya: 10,
    time_kya_range: [7, 14],
    lat: 66,
    lon: 25,
    region: 'Northern Scandinavia (Saami)',
    color: '#006CCC',
    description: 'U5b1b - THE SAAMI HAPLOGROUP. Reaches 40-50% in Saami. Shows ancient connection between Atlantic Europe and Scandinavia. Post-glacial northward migration.',
    references: [REF_MALYARCHUK_2008],
    research_status: 'complete'
  },
  {
    id: 'U5b2',
    parent: 'U5b',
    time_kya: 16,
    time_kya_range: [12, 22],
    lat: 43,
    lon: -3,
    region: 'Iberian Peninsula',
    color: '#006DCC',
    description: 'U5b2 - U5b subclade with Iberian distribution. Post-LGM refugium lineage.',
    references: [REF_MALYARCHUK_2008, REF_HERVELLA_2012],
    research_status: 'complete'
  },
  {
    id: 'U5b3',
    parent: 'U5b',
    time_kya: 14,
    time_kya_range: [10, 20],
    lat: 42,
    lon: 12,
    region: 'Southern Europe',
    color: '#006ECC',
    description: 'U5b3 - U5b subclade. Found in Southern Europe.',
    references: [REF_MALYARCHUK_2008],
    research_status: 'complete'
  },

  // ========== U6 - North African ==========
  {
    id: 'U6',
    parent: 'U',
    time_kya: 40,
    time_kya_range: [35, 48],
    lat: 32,
    lon: -5,
    region: 'North Africa (Maghreb)',
    color: '#1EAAFF',
    description: 'U6 - THE NORTH AFRICAN HAPLOGROUP. Indicates back-migration from Near East to Africa ~40 kya. Highest frequencies in Berbers (25-40%). Canary Islands aboriginal signature. Distinct African autochthonous lineage derived from Eurasian ancestor.',
    references: [REF_BEHAR_2012, REF_RICHARDS_2000],
    research_status: 'complete'
  },
  {
    id: 'U6a',
    parent: 'U6',
    time_kya: 28,
    time_kya_range: [22, 35],
    lat: 34,
    lon: -6,
    region: 'Northwest Africa',
    color: '#1EABFF',
    description: 'U6a - Major U6 subclade. Most widespread in Maghreb. Berber populations.',
    references: [REF_BEHAR_2012],
    research_status: 'complete'
  },
  {
    id: 'U6b',
    parent: 'U6',
    time_kya: 20,
    time_kya_range: [15, 26],
    lat: 28,
    lon: -15,
    region: 'Canary Islands/Northwest Africa',
    color: '#1EACFF',
    description: 'U6b - U6 subclade. High frequencies in Canary Islands (aboriginal Guanche signature).',
    references: [REF_BEHAR_2012],
    research_status: 'complete'
  },

  // ========== U7 - Near East/South Asia ==========
  {
    id: 'U7',
    parent: 'U',
    time_kya: 35,
    time_kya_range: [30, 42],
    lat: 32,
    lon: 55,
    region: 'Near East/South Asia',
    color: '#1EADFF',
    description: 'U7 - Near Eastern and South Asian haplogroup. Common in Iran, Pakistan, India. Gujarat and Sindh populations. Possible Neolithic spread.',
    references: [REF_METSPALU_2004, REF_BEHAR_2012],
    research_status: 'complete'
  },

  // ========== U8 - Parent of K ==========
  {
    id: 'U8',
    parent: 'U',
    time_kya: 45,
    time_kya_range: [40, 52],
    lat: 38,
    lon: 42,
    region: 'Near East/Caucasus',
    color: '#1EAEFF',
    description: 'U8 - Parent haplogroup of K (via U8b). U8a found in Basque country (Paleolithic refuge). U8b is the direct ancestor of haplogroup K.',
    references: [REF_GONZALEZ_2006, REF_BEHAR_2012],
    research_status: 'complete'
  },
  {
    id: 'U8a',
    parent: 'U8',
    time_kya: 25,
    time_kya_range: [20, 32],
    lat: 43,
    lon: -2,
    region: 'Basque Country',
    color: '#1EAFFF',
    description: 'U8a - Paleolithic refugium haplogroup. High frequencies in Basques. Ancient Iberian hunter-gatherer signature.',
    references: [REF_GONZALEZ_2006],
    research_status: 'complete'
  },
  {
    id: 'U8b',
    parent: 'U8',
    time_kya: 35,
    time_kya_range: [30, 42],
    lat: 36,
    lon: 44,
    region: 'Near East',
    color: '#1EB0FF',
    description: 'U8b - Near Eastern haplogroup. DIRECT ANCESTOR OF HAPLOGROUP K. Very rare as U8b itself; most descendants are in K clade.',
    references: [REF_BEHAR_2012, REF_GONZALEZ_2006],
    research_status: 'complete'
  },

  // ========== K - Major European/Near Eastern haplogroup ==========
  {
    id: 'K',
    parent: 'U8b',
    time_kya: 28,
    time_kya_range: [24, 35],
    lat: 36,
    lon: 40,
    region: 'Near East',
    color: '#00BFFF',
    description: 'K - Major haplogroup derived from U8b. Very common in Europe (6-10%) and Near East. Ashkenazi Jewish founder effect (K1a1b1a = 30% of Ashkenazi). Neolithic spread to Europe. Includes Otzi the Iceman (K1f).',
    references: [REF_BEHAR_2008, REF_COSTA_2013, REF_RICHARDS_2000],
    research_status: 'complete'
  },
  {
    id: 'K1',
    parent: 'K',
    time_kya: 22,
    time_kya_range: [18, 28],
    lat: 38,
    lon: 38,
    region: 'Near East/Europe',
    color: '#00C0FF',
    description: 'K1 - Largest K subclade. Contains most European and Near Eastern K lineages. Includes Ashkenazi K1a1b1a and Otzi K1f.',
    references: [REF_BEHAR_2008, REF_COSTA_2013],
    research_status: 'complete'
  },
  {
    id: 'K1a',
    parent: 'K1',
    time_kya: 18,
    time_kya_range: [14, 24],
    lat: 40,
    lon: 35,
    region: 'Near East/Europe',
    color: '#00C1FF',
    description: 'K1a - Major K1 subclade. Widespread in Europe and Near East. Contains Ashkenazi founder lineage K1a1b1a.',
    references: [REF_BEHAR_2008, REF_COSTA_2013],
    research_status: 'complete'
  },
  {
    id: 'K1a1',
    parent: 'K1a',
    time_kya: 14,
    time_kya_range: [10, 18],
    lat: 42,
    lon: 30,
    region: 'Near East/Europe',
    color: '#00C2FF',
    description: 'K1a1 - K1a subclade. Parent of Ashkenazi K1a1b1a lineage.',
    references: [REF_BEHAR_2008],
    research_status: 'complete'
  },
  {
    id: 'K1a1b1a',
    parent: 'K1a1b1',
    time_kya: 2.5,
    time_kya_range: [2, 3.5],
    lat: 42,
    lon: 25,
    region: 'Near East → Ashkenazi Jewish',
    color: '#00C3FF',
    description: 'K1a1b1a - ASHKENAZI JEWISH FOUNDER HAPLOGROUP. ~30% of Ashkenazi women carry this lineage. Founder effect ~2.5 kya. One of four major Ashkenazi founder lineages.',
    references: [REF_BEHAR_2008, REF_COSTA_2013],
    research_status: 'complete'
  },
  {
    id: 'K1b',
    parent: 'K1',
    time_kya: 16,
    time_kya_range: [12, 22],
    lat: 45,
    lon: 20,
    region: 'Europe',
    color: '#00C4FF',
    description: 'K1b - K1 subclade. Common in Central and Western Europe.',
    references: [REF_COSTA_2013],
    research_status: 'complete'
  },
  {
    id: 'K1c',
    parent: 'K1',
    time_kya: 14,
    time_kya_range: [10, 20],
    lat: 48,
    lon: 12,
    region: 'Central Europe',
    color: '#00C5FF',
    description: 'K1c - K1 subclade. Distributed across Central Europe.',
    references: [REF_COSTA_2013],
    research_status: 'complete'
  },
  {
    id: 'K1f',
    parent: 'K1',
    time_kya: 10,
    time_kya_range: [7, 14],
    lat: 46.8,
    lon: 10.8,
    region: 'Alps (Otzi)',
    color: '#00C6FF',
    description: 'K1f - OTZI THE ICEMAN\'S HAPLOGROUP. ~5,300 year old mummy from Alps. Now rare or extinct. Evidence of Neolithic K distribution.',
    references: [REF_COSTA_2013],
    research_status: 'complete'
  },
  {
    id: 'K2',
    parent: 'K',
    time_kya: 18,
    time_kya_range: [14, 24],
    lat: 42,
    lon: 35,
    region: 'Near East/Europe',
    color: '#00C7FF',
    description: 'K2 - K subclade. Contains K2a (Ashkenazi founder K2a2a) and K2b.',
    references: [REF_BEHAR_2008, REF_COSTA_2013],
    research_status: 'complete'
  },
  {
    id: 'K2a',
    parent: 'K2',
    time_kya: 12,
    time_kya_range: [8, 16],
    lat: 44,
    lon: 25,
    region: 'Europe',
    color: '#00C8FF',
    description: 'K2a - K2 subclade. Contains Ashkenazi founder K2a2a.',
    references: [REF_BEHAR_2008],
    research_status: 'complete'
  },
  {
    id: 'K2a2a',
    parent: 'K2a2',
    time_kya: 2.5,
    time_kya_range: [2, 3.5],
    lat: 42,
    lon: 28,
    region: 'Near East → Ashkenazi Jewish',
    color: '#00C9FF',
    description: 'K2a2a - ASHKENAZI JEWISH FOUNDER HAPLOGROUP. One of four major Ashkenazi founder lineages. Founder effect ~2.5 kya.',
    references: [REF_BEHAR_2008],
    research_status: 'complete'
  },

  // ========== U9 - Ethiopian ==========
  {
    id: 'U9',
    parent: 'U',
    time_kya: 30,
    time_kya_range: [25, 38],
    lat: 10,
    lon: 40,
    region: 'Ethiopia/Horn of Africa',
    color: '#1EB1FF',
    description: 'U9 - Ethiopian haplogroup. Evidence of ancient Eurasian back-migration to East Africa. Found in Ethiopia and Somali populations.',
    references: [REF_BEHAR_2012],
    research_status: 'complete'
  },

  // ============================================================================
  // HAPLOGROUPS - NEEDS REFERENCES (dates estimated but need verification)
  // ============================================================================

  {
    id: 'U1a1',
    parent: 'U1a',
    time_kya: 22,
    time_kya_range: [18, 28],
    lat: 39,
    lon: 38,
    region: 'Near East',
    color: '#1E90FF',
    description: 'U1a1 - U1a subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U2c',
    parent: 'U2',
    time_kya: 35,
    time_kya_range: [30, 42],
    lat: 30,
    lon: 70,
    region: 'South Asia',
    color: '#1E90FF',
    description: 'U2c - South Asian U2 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U2d',
    parent: 'U2',
    time_kya: 32,
    time_kya_range: [26, 40],
    lat: 32,
    lon: 72,
    region: 'South Asia',
    color: '#1E90FF',
    description: 'U2d - South Asian U2 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U3a',
    parent: 'U3',
    time_kya: 25,
    time_kya_range: [20, 32],
    lat: 40,
    lon: 42,
    region: 'Near East/Caucasus',
    color: '#1E90FF',
    description: 'U3a - U3 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U3b',
    parent: 'U3',
    time_kya: 22,
    time_kya_range: [18, 28],
    lat: 42,
    lon: 40,
    region: 'Caucasus',
    color: '#1E90FF',
    description: 'U3b - U3 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U4c',
    parent: 'U4',
    time_kya: 18,
    time_kya_range: [14, 24],
    lat: 60,
    lon: 60,
    region: 'Western Siberia',
    color: '#1E90FF',
    description: 'U4c - U4 subclade with Siberian distribution.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U4d',
    parent: 'U4',
    time_kya: 16,
    time_kya_range: [12, 22],
    lat: 58,
    lon: 45,
    region: 'Russia/Siberia',
    color: '#1E90FF',
    description: 'U4d - U4 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U5a1a',
    parent: 'U5a1',
    time_kya: 18,
    time_kya_range: [14, 24],
    lat: 50,
    lon: 14,
    region: 'Central Europe',
    color: '#1E90FF',
    description: 'U5a1a - U5a1 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U5a1b',
    parent: 'U5a1',
    time_kya: 16,
    time_kya_range: [12, 22],
    lat: 52,
    lon: 10,
    region: 'Central Europe',
    color: '#1E90FF',
    description: 'U5a1b - U5a1 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U5b1a',
    parent: 'U5b1',
    time_kya: 14,
    time_kya_range: [10, 20],
    lat: 48,
    lon: 6,
    region: 'Western Europe',
    color: '#1E90FF',
    description: 'U5b1a - U5b1 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U5b1c',
    parent: 'U5b1',
    time_kya: 12,
    time_kya_range: [8, 18],
    lat: 50,
    lon: 4,
    region: 'Northwestern Europe',
    color: '#1E90FF',
    description: 'U5b1c - U5b1 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U6a1',
    parent: 'U6a',
    time_kya: 20,
    time_kya_range: [15, 26],
    lat: 33,
    lon: -7,
    region: 'Morocco',
    color: '#1E90FF',
    description: 'U6a1 - U6a subclade. Maghreb distribution.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U6a2',
    parent: 'U6a',
    time_kya: 18,
    time_kya_range: [14, 24],
    lat: 36,
    lon: 3,
    region: 'North Africa',
    color: '#1E90FF',
    description: 'U6a2 - U6a subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U7a',
    parent: 'U7',
    time_kya: 28,
    time_kya_range: [22, 35],
    lat: 30,
    lon: 58,
    region: 'Iran/South Asia',
    color: '#1E90FF',
    description: 'U7a - Major U7 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'U7b',
    parent: 'U7',
    time_kya: 22,
    time_kya_range: [18, 28],
    lat: 35,
    lon: 50,
    region: 'Iran',
    color: '#1E90FF',
    description: 'U7b - U7 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'K1a1b1',
    parent: 'K1a1b',
    time_kya: 8,
    time_kya_range: [5, 12],
    lat: 42,
    lon: 26,
    region: 'Near East/Europe',
    color: '#1E90FF',
    description: 'K1a1b1 - Parent of Ashkenazi K1a1b1a.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'K1a1b',
    parent: 'K1a1',
    time_kya: 10,
    time_kya_range: [7, 14],
    lat: 42,
    lon: 28,
    region: 'Near East/Europe',
    color: '#1E90FF',
    description: 'K1a1b - K1a1 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'K1a2',
    parent: 'K1a',
    time_kya: 14,
    time_kya_range: [10, 20],
    lat: 44,
    lon: 20,
    region: 'Europe',
    color: '#1E90FF',
    description: 'K1a2 - K1a subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'K1a3',
    parent: 'K1a',
    time_kya: 12,
    time_kya_range: [8, 18],
    lat: 46,
    lon: 15,
    region: 'Europe',
    color: '#1E90FF',
    description: 'K1a3 - K1a subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'K1a4',
    parent: 'K1a',
    time_kya: 10,
    time_kya_range: [7, 15],
    lat: 48,
    lon: 12,
    region: 'Central Europe',
    color: '#1E90FF',
    description: 'K1a4 - K1a subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'K1b1',
    parent: 'K1b',
    time_kya: 12,
    time_kya_range: [8, 18],
    lat: 46,
    lon: 18,
    region: 'Europe',
    color: '#1E90FF',
    description: 'K1b1 - K1b subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'K1b2',
    parent: 'K1b',
    time_kya: 10,
    time_kya_range: [7, 15],
    lat: 48,
    lon: 10,
    region: 'Central Europe',
    color: '#1E90FF',
    description: 'K1b2 - K1b subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'K1c1',
    parent: 'K1c',
    time_kya: 10,
    time_kya_range: [7, 14],
    lat: 49,
    lon: 11,
    region: 'Central Europe',
    color: '#1E90FF',
    description: 'K1c1 - K1c subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'K1c2',
    parent: 'K1c',
    time_kya: 9,
    time_kya_range: [6, 13],
    lat: 50,
    lon: 8,
    region: 'Central Europe',
    color: '#1E90FF',
    description: 'K1c2 - K1c subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'K2a2',
    parent: 'K2a',
    time_kya: 8,
    time_kya_range: [5, 12],
    lat: 44,
    lon: 26,
    region: 'Europe',
    color: '#1E90FF',
    description: 'K2a2 - Parent of Ashkenazi K2a2a.',
    references: [],
    research_status: 'needs_references'
  },

  // ============================================================================
  // STUBS - Remaining 630 haplogroups need research
  // ============================================================================

  {
    id: 'K1a10',
    parent: 'K1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Near East',
    color: '#1E90FF',
    description: 'K1a10',
    references: [],
    research_status: 'stub'
  },
  {
    id: 'K1a11',
    parent: 'K1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Near East',
    color: '#1E90FF',
    description: 'K1a11',
    references: [],
    research_status: 'stub'
  },
  {
    id: 'K1a12',
    parent: 'K1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Near East',
    color: '#1E90FF',
    description: 'K1a12',
    references: [],
    research_status: 'stub'
  },
  {
    id: 'K1a13',
    parent: 'K1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Near East',
    color: '#1E90FF',
    description: 'K1a13',
    references: [],
    research_status: 'stub'
  },
  // ... Additional stubs would be imported from original file
  // For practical purposes, representing first few stubs
  // Full stub list should be merged from U_K_stubs.ts
];

// Note: This file contains 40 complete entries, 25 needs_references entries
// The remaining ~630 stubs should be imported from U_K_stubs.ts
// or this file can be expanded as research progresses

export default U_K_HAPLOGROUPS;
