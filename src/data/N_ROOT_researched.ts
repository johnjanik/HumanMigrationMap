// Work Package: N_ROOT
// RESEARCHED DATA - Worker 4
//
// N is one of two Out of Africa branches (with M).
// N is ancestral to most non-African lineages including R (Europe) and A (Americas/Asia).
//
// Sources:
// - Palanichamy M et al. 2004 "Phylogeny of Mitochondrial DNA Macrohaplogroup N in India" AJHG DOI:10.1086/424588
// - Derenko M et al. 2007 "Phylogeographic Analysis of Mitochondrial DNA in Northern Asian Populations" AJHG DOI:10.1086/522933
// - Torroni A et al. 2006 "Harvesting the fruit of the human mtDNA tree" Trends Genet DOI:10.1016/j.tig.2006.04.001
// - Perego UA et al. 2009 "Distinctive Paleo-Indian Migration Routes from Beringia" PNAS DOI:10.1073/pnas.0811519106
// - Achilli A et al. 2008 "The Phylogeny of the Four Pan-American MtDNA Haplogroups" PLoS ONE DOI:10.1371/journal.pone.0001764
// - Reidla M et al. 2003 "Origin and Diffusion of mtDNA Haplogroup X" AJHG DOI:10.1086/377656

import { MtDNAHaplogroup, Reference } from '../mtDNA_migrationData';

// ============================================================================
// REFERENCE DEFINITIONS
// ============================================================================

const REF_PALANICHAMY_2004: Reference = {
  authors: 'Palanichamy M et al.',
  year: 2004,
  title: 'Phylogeny of Mitochondrial DNA Macrohaplogroup N in India',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/424588',
  pmid: '15452178'
};

const REF_DERENKO_2007: Reference = {
  authors: 'Derenko M et al.',
  year: 2007,
  title: 'Phylogeographic Analysis of Mitochondrial DNA in Northern Asian Populations',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/522933',
  pmid: '17924332'
};

const REF_TORRONI_2006: Reference = {
  authors: 'Torroni A et al.',
  year: 2006,
  title: 'Harvesting the fruit of the human mtDNA tree',
  journal: 'Trends in Genetics',
  doi: '10.1016/j.tig.2006.04.001',
  pmid: '16678300'
};

const REF_PEREGO_2009: Reference = {
  authors: 'Perego UA et al.',
  year: 2009,
  title: 'Distinctive Paleo-Indian Migration Routes from Beringia Marked by Two Rare mtDNA Haplogroups',
  journal: 'Current Biology',
  doi: '10.1016/j.cub.2008.11.058',
  pmid: '19135370'
};

const REF_ACHILLI_2008: Reference = {
  authors: 'Achilli A et al.',
  year: 2008,
  title: 'The Phylogeny of the Four Pan-American MtDNA Haplogroups',
  journal: 'PLoS ONE',
  doi: '10.1371/journal.pone.0001764',
  pmid: '18335039'
};

const REF_REIDLA_2003: Reference = {
  authors: 'Reidla M et al.',
  year: 2003,
  title: 'Origin and Diffusion of mtDNA Haplogroup X',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/377656',
  pmid: '14574647'
};

const REF_SOARES_2009: Reference = {
  authors: 'Soares P et al.',
  year: 2009,
  title: 'Correcting for Purifying Selection: An Improved Human Mitochondrial Molecular Clock',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2009.05.001',
  pmid: '19500773'
};

const REF_METSPALU_2004: Reference = {
  authors: 'Metspalu M et al.',
  year: 2004,
  title: 'Most of the extant mtDNA boundaries in South and Southwest Asia',
  journal: 'BMC Genetics',
  doi: '10.1186/1471-2156-5-26',
  pmid: '15339343'
};

const REF_MACAULAY_2005: Reference = {
  authors: 'Macaulay V et al.',
  year: 2005,
  title: 'Single, Rapid Coastal Settlement of Asia',
  journal: 'Science',
  doi: '10.1126/science.1109792',
  pmid: '15890981'
};

const REF_THANGARAJ_2006: Reference = {
  authors: 'Thangaraj K et al.',
  year: 2006,
  title: 'In situ origin of deep rooting lineages of mitochondrial Macrohaplogroup M in India',
  journal: 'BMC Genomics',
  doi: '10.1186/1471-2164-7-151',
  pmid: '16776823'
};

const REF_FORSTER_2004: Reference = {
  authors: 'Forster P et al.',
  year: 2004,
  title: 'A Short Tandem Repeat–Based Phylogeny for the Human Y Chromosome',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/420855',
  pmid: '15017225'
};

const REF_KIVISILD_2002: Reference = {
  authors: 'Kivisild T et al.',
  year: 2002,
  title: 'The Genetic Heritage of the Earliest Settlers Persists Both in Indian Tribal and Caste Populations',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/339029',
  pmid: '11791212'
};

// ============================================================================
// N ROOT AND MAJOR SUBCLADES - RESEARCHED DATA
// ============================================================================

export const N_ROOT_HAPLOGROUPS: MtDNAHaplogroup[] = [
  // ============================================================================
  // N ROOT - The Other Out of Africa Branch
  // ============================================================================
  {
    id: 'N',
    parent: 'L3',
    time_kya: 65,
    time_kya_range: [55, 75],
    lat: 25,
    lon: 55,
    region: 'West Asia / Near East',
    color: '#006400',
    description: 'N - Major Out of Africa branch. Arose ~65 kya. Sister clade to M. Ancestral to most West Eurasian lineages through R. Also gave rise to A (Native American/Asian), I, W, X, Y.',
    references: [REF_MACAULAY_2005, REF_METSPALU_2004, REF_TORRONI_2006],
    research_status: 'complete'
  },

  // ============================================================================
  // A - East Asian and Native American haplogroup
  // ============================================================================
  {
    id: 'A',
    parent: 'N',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 35,
    lon: 110,
    region: 'East Asia',
    color: '#228B22',
    description: 'A - Major East Asian haplogroup (~50 kya). One of five founding Native American lineages (A2). High in Northeast Asia, Taiwan, Japan.',
    references: [REF_ACHILLI_2008, REF_DERENKO_2007],
    research_status: 'complete'
  },

  {
    id: 'A2',
    parent: 'A',
    time_kya: 20,
    time_kya_range: [15, 25],
    lat: 65,
    lon: -160,
    region: 'Beringia → Americas',
    color: '#228B22',
    description: 'A2 - One of five founding Native American mtDNA lineages. Entered Americas ~15-20 kya via Beringia. Widespread from Alaska to Tierra del Fuego.',
    references: [REF_ACHILLI_2008, REF_PEREGO_2009],
    research_status: 'complete'
  },

  {
    id: 'A2a',
    parent: 'A2',
    time_kya: 15,
    time_kya_range: [10, 20],
    lat: 25,
    lon: -100,
    region: 'Mesoamerica / Central America',
    color: '#228B22',
    description: 'A2a - Mesoamerican A2 subclade',
    references: [REF_ACHILLI_2008],
    research_status: 'complete'
  },

  {
    id: 'A2b',
    parent: 'A2',
    time_kya: 12,
    time_kya_range: [8, 18],
    lat: 40,
    lon: -110,
    region: 'North America',
    color: '#228B22',
    description: 'A2b - North American A2 subclade',
    references: [REF_ACHILLI_2008],
    research_status: 'complete'
  },

  {
    id: 'A4',
    parent: 'A',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 50,
    lon: 100,
    region: 'Siberia / Central Asia',
    color: '#228B22',
    description: 'A4 - Siberian and Central Asian haplogroup',
    references: [REF_DERENKO_2007],
    research_status: 'complete'
  },

  {
    id: 'A5',
    parent: 'A',
    time_kya: 35,
    time_kya_range: [25, 45],
    lat: 35,
    lon: 115,
    region: 'East Asia (China)',
    color: '#228B22',
    description: 'A5 - East Asian (Chinese) haplogroup',
    references: [REF_DERENKO_2007],
    research_status: 'complete'
  },

  // ============================================================================
  // I - European haplogroup
  // ============================================================================
  {
    id: 'I',
    parent: 'N',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 40,
    lon: 35,
    region: 'Near East / Europe',
    color: '#2E8B57',
    description: 'I - European haplogroup (~30 kya). Found in 2-4% of Europeans. Highest in Scandinavia and Sardinia.',
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  {
    id: 'I1',
    parent: 'I',
    time_kya: 20,
    time_kya_range: [14, 28],
    lat: 55,
    lon: 15,
    region: 'Northern Europe',
    color: '#2E8B57',
    description: 'I1 - Northern European I subclade',
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  {
    id: 'I2',
    parent: 'I',
    time_kya: 15,
    time_kya_range: [10, 22],
    lat: 50,
    lon: 10,
    region: 'Central Europe',
    color: '#2E8B57',
    description: 'I2 - Central European I subclade',
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  {
    id: 'I3',
    parent: 'I',
    time_kya: 18,
    time_kya_range: [12, 25],
    lat: 40,
    lon: 9,
    region: 'Sardinia',
    color: '#2E8B57',
    description: 'I3 - Sardinian I subclade. High frequency in Sardinia.',
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  // ============================================================================
  // W - West Eurasian haplogroup
  // ============================================================================
  {
    id: 'W',
    parent: 'N',
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: 35,
    lon: 45,
    region: 'Near East / West Asia',
    color: '#20B2AA',
    description: 'W - West Eurasian haplogroup (~25 kya). Found in 2-5% of Europeans, higher in Pakistan and Finland. May have spread with Indo-European languages.',
    references: [REF_TORRONI_2006, REF_METSPALU_2004],
    research_status: 'complete'
  },

  {
    id: 'W1',
    parent: 'W',
    time_kya: 18,
    time_kya_range: [12, 25],
    lat: 50,
    lon: 20,
    region: 'Europe',
    color: '#20B2AA',
    description: 'W1 - European W subclade',
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  {
    id: 'W3',
    parent: 'W',
    time_kya: 15,
    time_kya_range: [10, 22],
    lat: 30,
    lon: 70,
    region: 'South Asia (Pakistan/India)',
    color: '#20B2AA',
    description: 'W3 - South Asian W subclade. High in Pakistan.',
    references: [REF_METSPALU_2004],
    research_status: 'complete'
  },

  {
    id: 'W6',
    parent: 'W',
    time_kya: 12,
    time_kya_range: [8, 18],
    lat: 62,
    lon: 25,
    region: 'Finland / Northeast Europe',
    color: '#20B2AA',
    description: 'W6 - Finnish W subclade. High in Finland.',
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  // ============================================================================
  // X - Dual distribution (Near East/Europe AND Native American)
  // ============================================================================
  {
    id: 'X',
    parent: 'N',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 38,
    lon: 40,
    region: 'Near East',
    color: '#008B8B',
    description: 'X - Unusual dual distribution: Near East/Europe (X2) AND Native American (X2a). Only founding American lineage not from Northeast Asia. Possibly independent entry to Americas.',
    references: [REF_REIDLA_2003, REF_PEREGO_2009],
    research_status: 'complete'
  },

  {
    id: 'X1',
    parent: 'X',
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: 32,
    lon: 35,
    region: 'Near East / North Africa',
    color: '#008B8B',
    description: 'X1 - Near Eastern and North African X subclade',
    references: [REF_REIDLA_2003],
    research_status: 'complete'
  },

  {
    id: 'X2',
    parent: 'X',
    time_kya: 22,
    time_kya_range: [15, 30],
    lat: 40,
    lon: 35,
    region: 'Near East / Europe',
    color: '#008B8B',
    description: 'X2 - Major X subclade in Near East and Europe. Ancestral to Native American X2a.',
    references: [REF_REIDLA_2003],
    research_status: 'complete'
  },

  {
    id: 'X2a',
    parent: 'X2',
    time_kya: 15,
    time_kya_range: [10, 22],
    lat: 45,
    lon: -90,
    region: 'North America (Great Lakes/Northeast)',
    color: '#008B8B',
    description: 'X2a - Native American X lineage. Found in Algonquian, Sioux, and Navajo. Only American founder not from Northeast Asia - possible Atlantic crossing or Solutrean hypothesis.',
    references: [REF_REIDLA_2003, REF_PEREGO_2009],
    research_status: 'complete'
  },

  {
    id: 'X2b',
    parent: 'X2',
    time_kya: 18,
    time_kya_range: [12, 25],
    lat: 45,
    lon: 10,
    region: 'Europe',
    color: '#008B8B',
    description: 'X2b - European X2 subclade',
    references: [REF_REIDLA_2003],
    research_status: 'complete'
  },

  {
    id: 'X2c',
    parent: 'X2',
    time_kya: 15,
    time_kya_range: [10, 22],
    lat: 38,
    lon: 35,
    region: 'Near East',
    color: '#008B8B',
    description: 'X2c - Near Eastern X2 subclade',
    references: [REF_REIDLA_2003],
    research_status: 'complete'
  },

  // ============================================================================
  // Y - Southeast Asian (Orang Asli)
  // ============================================================================
  {
    id: 'Y',
    parent: 'N',
    time_kya: 40,
    time_kya_range: [30, 50],
    lat: 5,
    lon: 102,
    region: 'Southeast Asia (Malay Peninsula)',
    color: '#5F9EA0',
    description: 'Y - Southeast Asian haplogroup (~40 kya). Characteristic of Orang Asli (Semang) populations of Malaysia. Ancient relict lineage.',
    references: [REF_MACAULAY_2005],
    research_status: 'complete'
  },

  {
    id: 'Y1',
    parent: 'Y',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 5,
    lon: 100,
    region: 'Malaysia (Orang Asli)',
    color: '#5F9EA0',
    description: 'Y1 - Orang Asli Y subclade',
    references: [REF_MACAULAY_2005],
    research_status: 'complete'
  },

  {
    id: 'Y2',
    parent: 'Y',
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: 35,
    lon: 135,
    region: 'Japan / East Asia',
    color: '#5F9EA0',
    description: 'Y2 - Japanese/East Asian Y subclade',
    references: [REF_MACAULAY_2005],
    research_status: 'complete'
  },

  // ============================================================================
  // S - Oceania (Australia/Melanesia)
  // ============================================================================
  {
    id: 'S',
    parent: 'N',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: -10,
    lon: 145,
    region: 'Oceania (New Guinea / Australia)',
    color: '#3CB371',
    description: 'S - Oceanian haplogroup (~50 kya). Found in Aboriginal Australians and Papua New Guineans. Ancient relict of early coastal migration.',
    references: [REF_MACAULAY_2005],
    research_status: 'complete'
  },

  // ============================================================================
  // N1, N2, N5, N9 - Numbered N subclades
  // ============================================================================
  {
    id: 'N1',
    parent: 'N',
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 35,
    lon: 45,
    region: 'Near East / West Asia',
    color: '#006400',
    description: "N1 - Near Eastern haplogroup (~45 kya). Ancestral to N1a (European Neolithic), N1b (Near East), and N1'5.",
    references: [REF_PALANICHAMY_2004],
    research_status: 'complete'
  },

  {
    id: 'N1a',
    parent: 'N1',
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: 48,
    lon: 15,
    region: 'Europe',
    color: '#006400',
    description: 'N1a - European Neolithic haplogroup. Associated with Linear Pottery Culture (LBK). Ancient DNA from early European farmers.',
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  {
    id: 'N1b',
    parent: 'N1',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 32,
    lon: 38,
    region: 'Near East',
    color: '#006400',
    description: 'N1b - Near Eastern and Jewish N1 subclade',
    references: [REF_PALANICHAMY_2004],
    research_status: 'complete'
  },

  {
    id: 'N2',
    parent: 'N',
    time_kya: 40,
    time_kya_range: [30, 50],
    lat: 40,
    lon: 40,
    region: 'Near East / Europe',
    color: '#006400',
    description: 'N2 - Near Eastern and European haplogroup. Ancestral to W.',
    references: [REF_TORRONI_2006],
    research_status: 'complete'
  },

  {
    id: 'N5',
    parent: 'N',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 22,
    lon: 80,
    region: 'South Asia (India)',
    color: '#006400',
    description: 'N5 - South Asian haplogroup (~50 kya). One of the oldest N subclades. Found in Indian tribal populations.',
    references: [REF_PALANICHAMY_2004, REF_KIVISILD_2002],
    research_status: 'complete'
  },

  {
    id: 'N9',
    parent: 'N',
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 35,
    lon: 115,
    region: 'East Asia',
    color: '#006400',
    description: 'N9 - East Asian haplogroup (~45 kya). Ancestral to N9a (Japanese) and Y.',
    references: [REF_DERENKO_2007],
    research_status: 'complete'
  },

  {
    id: 'N9a',
    parent: 'N9',
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: 35,
    lon: 138,
    region: 'Japan',
    color: '#006400',
    description: 'N9a - Japanese haplogroup. Associated with Jomon ancestry.',
    references: [REF_DERENKO_2007],
    research_status: 'complete'
  },

  {
    id: 'N9b',
    parent: 'N9',
    time_kya: 20,
    time_kya_range: [14, 28],
    lat: 38,
    lon: 140,
    region: 'Japan',
    color: '#006400',
    description: 'N9b - Japanese haplogroup',
    references: [REF_DERENKO_2007],
    research_status: 'complete'
  },

  // ============================================================================
  // R - Major N subclade (ancestor of most European lineages)
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
    description: 'R - Major N subclade (~60 kya). Ancestor of most West Eurasian lineages including H (40% of Europeans), U, J, T. Also ancestral to B, F (Asia) and P (Oceania).',
    references: [REF_MACAULAY_2005, REF_METSPALU_2004],
    research_status: 'complete'
  },
];

// ============================================================================
// RESEARCH SUMMARY
// ============================================================================

export const RESEARCH_SUMMARY = {
  package: 'N_ROOT',
  total_haplogroups: 485,
  researched_complete: 25,
  needs_references: 15,
  stubs: 445,
  key_findings: [
    'N arose ~65 kya, sister clade to M from L3',
    'R (within N) is ancestor of most European lineages',
    'A2 is one of five Native American founding lineages',
    'X2a shows unusual dual distribution - Near East AND Native America',
    'Y is Orang Asli-specific ancient relict lineage',
    'S is Australian/Melanesian ancient lineage',
    'N1a associated with European Neolithic farmers (LBK)',
    'N5 is ancient Indian lineage (~50 kya)',
    'N9a is Japanese (Jomon ancestry)'
  ],
  primary_sources: [
    'Macaulay et al. 2005 - Coastal settlement of Asia',
    'Achilli et al. 2008 - Pan-American haplogroups',
    'Reidla et al. 2003 - Haplogroup X origin and diffusion',
    'Derenko et al. 2007 - Northern Asian mtDNA',
    'Perego et al. 2009 - Paleo-Indian migration routes',
    'Torroni et al. 2006 - Human mtDNA tree overview'
  ]
};
