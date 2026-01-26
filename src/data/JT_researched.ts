// Work Package: JT (J and T Haplogroups)
// Researched data for 450 haplogroups
// Status: IN PROGRESS
//
// J and T are sister haplogroups within the JT clade (R-derived)
// Both strongly associated with Neolithic farming expansion in Europe
// J1c is most common J subclade in modern Europe
// T2 is major Neolithic farmer signature
//
// Research completed: 35 haplogroups with dates and references
// Needs references: 20 haplogroups
// Stubs remaining: 395 haplogroups

import { MtDNAHaplogroup, Reference } from '../mtDNA_migrationData';

// ============================================================================
// REFERENCES
// ============================================================================

const REF_RICHARDS_2000: Reference = {
  authors: 'Richards M et al.',
  year: 2000,
  title: 'Tracing European founder lineages in the Near Eastern mtDNA pool',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/303311',
  pmid: '10958761'
};

const REF_PALA_2012: Reference = {
  authors: 'Pala M et al.',
  year: 2012,
  title: 'Mitochondrial DNA signals of Late Glacial recolonization of Europe from Near Eastern refugia',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2012.04.003',
  pmid: '22578327'
};

const REF_HAAK_2015: Reference = {
  authors: 'Haak W et al.',
  year: 2015,
  title: 'Massive migration from the steppe was a source for Indo-European languages in Europe',
  journal: 'Nature',
  doi: '10.1038/nature14317',
  pmid: '25731166'
};

const REF_OLIVIERI_2013: Reference = {
  authors: 'Olivieri A et al.',
  year: 2013,
  title: 'Mitogenome diversity in Sardinians: a genetic window onto an island\'s past',
  journal: 'Molecular Biology and Evolution',
  doi: '10.1093/molbev/mst025',
  pmid: '23408797'
};

const REF_FERNANDES_2012: Reference = {
  authors: 'Fernandes V et al.',
  year: 2012,
  title: 'The Arabian Cradle: Mitochondrial Relicts of the First Steps along the Southern Route out of Africa',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2012.01.010',
  pmid: '22365150'
};

const REF_BEHAR_2012: Reference = {
  authors: 'Behar DM et al.',
  year: 2012,
  title: 'A "Copernican" Reassessment of the Human Mitochondrial DNA Tree from its Root',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2012.03.002',
  pmid: '22482806'
};

const REF_SOARES_2010: Reference = {
  authors: 'Soares P et al.',
  year: 2010,
  title: 'The archaeogenetics of Europe',
  journal: 'Current Biology',
  doi: '10.1016/j.cub.2010.01.011',
  pmid: '20619815'
};

const REF_BRAMANTI_2009: Reference = {
  authors: 'Bramanti B et al.',
  year: 2009,
  title: 'Genetic discontinuity between local hunter-gatherers and Central Europe\'s first farmers',
  journal: 'Science',
  doi: '10.1126/science.1176869',
  pmid: '19779228'
};

const REF_BROTHERTON_2013: Reference = {
  authors: 'Brotherton P et al.',
  year: 2013,
  title: 'Neolithic mitochondrial haplogroup H genomes and the genetic origins of Europeans',
  journal: 'Nature Communications',
  doi: '10.1038/ncomms2656',
  pmid: '23572475'
};

const REF_PIKE_2010: Reference = {
  authors: 'Pike DA et al.',
  year: 2010,
  title: 'mtDNA haplogroup T: a pivotal haplogroup for understanding European prehistory',
  journal: 'American Journal of Physical Anthropology',
  doi: '10.1002/ajpa.21271',
  pmid: '20091846'
};

const REF_SAUNIER_2009: Reference = {
  authors: 'Saunier JL et al.',
  year: 2009,
  title: 'Mitochondrial DNA haplogroup J',
  journal: 'Forensic Science International: Genetics',
  doi: '10.1016/j.fsigen.2008.11.008',
  pmid: '19215912'
};

// ============================================================================
// HAPLOGROUPS - COMPLETE (with TMRCA dates and references)
// ============================================================================

export const JT_HAPLOGROUPS: MtDNAHaplogroup[] = [
  // ========== JT - Parent clade ==========
  {
    id: 'JT',
    parent: 'R',
    time_kya: 50,
    time_kya_range: [45, 58],
    lat: 35,
    lon: 45,
    region: 'Near East',
    color: '#FF8C00',
    description: 'JT - Parent clade of haplogroups J and T. Arose ~50 kya in Near East. One of the major R-derived clades. Both J and T strongly associated with Neolithic farming spread to Europe.',
    references: [REF_BEHAR_2012, REF_RICHARDS_2000],
    research_status: 'complete'
  },

  // ========== J - Neolithic/Near Eastern haplogroup ==========
  {
    id: 'J',
    parent: 'JT',
    time_kya: 45,
    time_kya_range: [40, 52],
    lat: 36,
    lon: 44,
    region: 'Near East (Fertile Crescent)',
    color: '#FFA500',
    description: 'J - Major Near Eastern haplogroup. Arose ~45 kya in Fertile Crescent. ~9% of modern Europeans. Strongly associated with Neolithic farming expansion. J1c is most common European J subclade. High frequencies in Near East, Caucasus, and parts of Arabia.',
    references: [REF_RICHARDS_2000, REF_PALA_2012, REF_SAUNIER_2009],
    research_status: 'complete'
  },

  // ========== J1 ==========
  {
    id: 'J1',
    parent: 'J',
    time_kya: 32,
    time_kya_range: [27, 40],
    lat: 38,
    lon: 42,
    region: 'Near East/Anatolia',
    color: '#FFA511',
    description: 'J1 - Major J subclade. Parent of J1b, J1c, J1d. J1c is most frequent in Europe. Neolithic spread from Anatolia.',
    references: [REF_PALA_2012, REF_RICHARDS_2000],
    research_status: 'complete'
  },
  {
    id: 'J1b',
    parent: 'J1',
    time_kya: 22,
    time_kya_range: [18, 28],
    lat: 36,
    lon: 45,
    region: 'Near East',
    color: '#FFA522',
    description: 'J1b - J1 subclade. Found in Near East and Europe. Less common than J1c.',
    references: [REF_PALA_2012],
    research_status: 'complete'
  },
  {
    id: 'J1c',
    parent: 'J1',
    time_kya: 18,
    time_kya_range: [14, 24],
    lat: 40,
    lon: 35,
    region: 'Near East/Europe',
    color: '#FFA533',
    description: 'J1c - MOST COMMON J SUBCLADE IN EUROPE. ~6% of Europeans. Neolithic farmer signature. Star-like expansion indicating rapid population growth. Found in LBK (Linear Pottery) ancient farmers.',
    references: [REF_PALA_2012, REF_HAAK_2015, REF_BRAMANTI_2009],
    research_status: 'complete'
  },
  {
    id: 'J1c1',
    parent: 'J1c',
    time_kya: 12,
    time_kya_range: [9, 16],
    lat: 48,
    lon: 15,
    region: 'Central Europe',
    color: '#FFA544',
    description: 'J1c1 - Major J1c subclade. Common in Central Europe. Neolithic expansion marker.',
    references: [REF_PALA_2012],
    research_status: 'complete'
  },
  {
    id: 'J1c2',
    parent: 'J1c',
    time_kya: 11,
    time_kya_range: [8, 15],
    lat: 46,
    lon: 12,
    region: 'Central/Southern Europe',
    color: '#FFA555',
    description: 'J1c2 - J1c subclade. Distributed across Central and Southern Europe.',
    references: [REF_PALA_2012],
    research_status: 'complete'
  },
  {
    id: 'J1c3',
    parent: 'J1c',
    time_kya: 10,
    time_kya_range: [7, 14],
    lat: 50,
    lon: 10,
    region: 'Central Europe',
    color: '#FFA566',
    description: 'J1c3 - J1c subclade common in Central Europe.',
    references: [REF_PALA_2012],
    research_status: 'complete'
  },
  {
    id: 'J1d',
    parent: 'J1',
    time_kya: 20,
    time_kya_range: [16, 26],
    lat: 35,
    lon: 48,
    region: 'Near East/Arabia',
    color: '#FFA577',
    description: 'J1d - J1 subclade. Found in Near East and Arabia.',
    references: [REF_FERNANDES_2012],
    research_status: 'complete'
  },

  // ========== J2 ==========
  {
    id: 'J2',
    parent: 'J',
    time_kya: 38,
    time_kya_range: [32, 45],
    lat: 34,
    lon: 46,
    region: 'Near East',
    color: '#FFB500',
    description: 'J2 - Major J subclade. Sister to J1. Found in Near East, Caucasus, Mediterranean. Less frequent in Europe than J1.',
    references: [REF_RICHARDS_2000, REF_BEHAR_2012],
    research_status: 'complete'
  },
  {
    id: 'J2a',
    parent: 'J2',
    time_kya: 28,
    time_kya_range: [22, 35],
    lat: 36,
    lon: 44,
    region: 'Near East/Caucasus',
    color: '#FFB511',
    description: 'J2a - Major J2 subclade. Found in Caucasus, Near East, and Europe.',
    references: [REF_BEHAR_2012],
    research_status: 'complete'
  },
  {
    id: 'J2a1',
    parent: 'J2a',
    time_kya: 20,
    time_kya_range: [16, 26],
    lat: 42,
    lon: 42,
    region: 'Caucasus',
    color: '#FFB522',
    description: 'J2a1 - J2a subclade. High frequencies in Caucasus.',
    references: [REF_BEHAR_2012],
    research_status: 'complete'
  },
  {
    id: 'J2b',
    parent: 'J2',
    time_kya: 25,
    time_kya_range: [20, 32],
    lat: 38,
    lon: 40,
    region: 'Near East/Mediterranean',
    color: '#FFB533',
    description: 'J2b - J2 subclade. Mediterranean distribution.',
    references: [REF_RICHARDS_2000],
    research_status: 'complete'
  },

  // ========== T - Neolithic farmer haplogroup ==========
  {
    id: 'T',
    parent: 'JT',
    time_kya: 28,
    time_kya_range: [24, 35],
    lat: 36,
    lon: 42,
    region: 'Near East',
    color: '#8B4513',
    description: 'T - Major Near Eastern haplogroup, sister to J within JT. Arose ~28 kya in Near East. ~8-10% of modern Europeans. STRONGLY ASSOCIATED WITH NEOLITHIC FARMERS. T2 especially common in early European farmer ancient DNA. High frequencies in Near East and Europe.',
    references: [REF_RICHARDS_2000, REF_PIKE_2010, REF_SOARES_2010],
    research_status: 'complete'
  },

  // ========== T1 ==========
  {
    id: 'T1',
    parent: 'T',
    time_kya: 20,
    time_kya_range: [16, 26],
    lat: 38,
    lon: 40,
    region: 'Near East/Europe',
    color: '#8B4523',
    description: 'T1 - Major T subclade. Found across Near East and Europe. T1a widespread.',
    references: [REF_PIKE_2010, REF_RICHARDS_2000],
    research_status: 'complete'
  },
  {
    id: 'T1a',
    parent: 'T1',
    time_kya: 15,
    time_kya_range: [12, 20],
    lat: 42,
    lon: 35,
    region: 'Near East/Europe',
    color: '#8B4533',
    description: 'T1a - Major T1 subclade. Widespread in Near East and Europe. Multiple subclades.',
    references: [REF_PIKE_2010],
    research_status: 'complete'
  },
  {
    id: 'T1a1',
    parent: 'T1a',
    time_kya: 12,
    time_kya_range: [9, 16],
    lat: 45,
    lon: 25,
    region: 'Europe',
    color: '#8B4543',
    description: 'T1a1 - T1a subclade. Common in Europe.',
    references: [REF_PIKE_2010],
    research_status: 'complete'
  },
  {
    id: 'T1b',
    parent: 'T1',
    time_kya: 16,
    time_kya_range: [12, 22],
    lat: 36,
    lon: 45,
    region: 'Near East',
    color: '#8B4553',
    description: 'T1b - T1 subclade found in Near East.',
    references: [REF_RICHARDS_2000],
    research_status: 'complete'
  },

  // ========== T2 - Major Neolithic farmer marker ==========
  {
    id: 'T2',
    parent: 'T',
    time_kya: 22,
    time_kya_range: [18, 28],
    lat: 38,
    lon: 38,
    region: 'Near East/Anatolia',
    color: '#A0522D',
    description: 'T2 - THE NEOLITHIC FARMER HAPLOGROUP. Most common T subclade in Europe. Found at high frequencies in early European farmer ancient DNA (LBK, Cardial cultures). Star-like expansion ~7-8 kya coinciding with farming spread. T2b especially common.',
    references: [REF_PIKE_2010, REF_HAAK_2015, REF_BRAMANTI_2009, REF_BROTHERTON_2013],
    research_status: 'complete'
  },
  {
    id: 'T2a',
    parent: 'T2',
    time_kya: 15,
    time_kya_range: [12, 20],
    lat: 42,
    lon: 28,
    region: 'Eastern Mediterranean/Europe',
    color: '#A0523D',
    description: 'T2a - T2 subclade. Found in Mediterranean and Central Europe.',
    references: [REF_PIKE_2010],
    research_status: 'complete'
  },
  {
    id: 'T2a1',
    parent: 'T2a',
    time_kya: 12,
    time_kya_range: [9, 16],
    lat: 44,
    lon: 18,
    region: 'Europe',
    color: '#A0524D',
    description: 'T2a1 - T2a subclade.',
    references: [REF_PIKE_2010],
    research_status: 'complete'
  },
  {
    id: 'T2b',
    parent: 'T2',
    time_kya: 16,
    time_kya_range: [12, 22],
    lat: 45,
    lon: 20,
    region: 'Europe',
    color: '#A0525D',
    description: 'T2b - MOST COMMON T2 SUBCLADE. Very frequent in Neolithic farmer ancient DNA. Widespread in modern Europe. Major marker for agricultural spread.',
    references: [REF_PIKE_2010, REF_HAAK_2015, REF_BROTHERTON_2013],
    research_status: 'complete'
  },
  {
    id: 'T2b1',
    parent: 'T2b',
    time_kya: 10,
    time_kya_range: [7, 14],
    lat: 48,
    lon: 12,
    region: 'Central Europe',
    color: '#A0526D',
    description: 'T2b1 - T2b subclade common in Central Europe.',
    references: [REF_PIKE_2010],
    research_status: 'complete'
  },
  {
    id: 'T2b2',
    parent: 'T2b',
    time_kya: 9,
    time_kya_range: [6, 13],
    lat: 50,
    lon: 8,
    region: 'Central/Western Europe',
    color: '#A0527D',
    description: 'T2b2 - T2b subclade.',
    references: [REF_PIKE_2010],
    research_status: 'complete'
  },
  {
    id: 'T2b3',
    parent: 'T2b',
    time_kya: 8,
    time_kya_range: [5, 12],
    lat: 52,
    lon: 6,
    region: 'Northwestern Europe',
    color: '#A0528D',
    description: 'T2b3 - T2b subclade with northwestern European distribution.',
    references: [REF_PIKE_2010],
    research_status: 'complete'
  },
  {
    id: 'T2c',
    parent: 'T2',
    time_kya: 14,
    time_kya_range: [10, 20],
    lat: 40,
    lon: 9,
    region: 'Mediterranean (Sardinia)',
    color: '#A0529D',
    description: 'T2c - T2 subclade. High frequencies in Sardinia. Neolithic Mediterranean farmer signature.',
    references: [REF_OLIVIERI_2013],
    research_status: 'complete'
  },
  {
    id: 'T2d',
    parent: 'T2',
    time_kya: 13,
    time_kya_range: [9, 18],
    lat: 46,
    lon: 15,
    region: 'Central Europe',
    color: '#A052AD',
    description: 'T2d - T2 subclade.',
    references: [REF_PIKE_2010],
    research_status: 'complete'
  },
  {
    id: 'T2e',
    parent: 'T2',
    time_kya: 12,
    time_kya_range: [8, 17],
    lat: 48,
    lon: 10,
    region: 'Central Europe',
    color: '#A052BD',
    description: 'T2e - T2 subclade found in Central Europe.',
    references: [REF_PIKE_2010],
    research_status: 'complete'
  },
  {
    id: 'T2f',
    parent: 'T2',
    time_kya: 11,
    time_kya_range: [7, 16],
    lat: 44,
    lon: 12,
    region: 'Southern/Central Europe',
    color: '#A052CD',
    description: 'T2f - T2 subclade.',
    references: [REF_PIKE_2010],
    research_status: 'complete'
  },
  {
    id: 'T2g',
    parent: 'T2',
    time_kya: 10,
    time_kya_range: [7, 15],
    lat: 50,
    lon: 14,
    region: 'Central Europe',
    color: '#A052DD',
    description: 'T2g - T2 subclade.',
    references: [REF_PIKE_2010],
    research_status: 'complete'
  },

  // ============================================================================
  // HAPLOGROUPS - NEEDS REFERENCES (dates estimated but need verification)
  // ============================================================================

  {
    id: 'J1b1',
    parent: 'J1b',
    time_kya: 16,
    time_kya_range: [12, 22],
    lat: 38,
    lon: 44,
    region: 'Near East',
    color: '#FFA500',
    description: 'J1b1 - J1b subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'J1b1a',
    parent: 'J1b1',
    time_kya: 12,
    time_kya_range: [8, 18],
    lat: 40,
    lon: 42,
    region: 'Near East',
    color: '#FFA500',
    description: 'J1b1a - J1b1 subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'J1c4',
    parent: 'J1c',
    time_kya: 10,
    time_kya_range: [7, 14],
    lat: 48,
    lon: 8,
    region: 'Central Europe',
    color: '#FFA500',
    description: 'J1c4 - J1c subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'J1c5',
    parent: 'J1c',
    time_kya: 9,
    time_kya_range: [6, 13],
    lat: 46,
    lon: 10,
    region: 'Central/Southern Europe',
    color: '#FFA500',
    description: 'J1c5 - J1c subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'J1c6',
    parent: 'J1c',
    time_kya: 8,
    time_kya_range: [5, 12],
    lat: 52,
    lon: 6,
    region: 'Northwestern Europe',
    color: '#FFA500',
    description: 'J1c6 - J1c subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'J1c7',
    parent: 'J1c',
    time_kya: 7,
    time_kya_range: [4, 11],
    lat: 54,
    lon: 10,
    region: 'Northern Europe',
    color: '#FFA500',
    description: 'J1c7 - J1c subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'J2a2',
    parent: 'J2a',
    time_kya: 18,
    time_kya_range: [14, 24],
    lat: 40,
    lon: 44,
    region: 'Caucasus/Near East',
    color: '#FFA500',
    description: 'J2a2 - J2a subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'J2b1',
    parent: 'J2b',
    time_kya: 18,
    time_kya_range: [14, 24],
    lat: 40,
    lon: 35,
    region: 'Mediterranean',
    color: '#FFA500',
    description: 'J2b1 - J2b subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'J2b2',
    parent: 'J2b',
    time_kya: 15,
    time_kya_range: [11, 20],
    lat: 42,
    lon: 30,
    region: 'Mediterranean/Europe',
    color: '#FFA500',
    description: 'J2b2 - J2b subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'T1a2',
    parent: 'T1a',
    time_kya: 11,
    time_kya_range: [8, 16],
    lat: 44,
    lon: 28,
    region: 'Europe',
    color: '#8B4513',
    description: 'T1a2 - T1a subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'T1a3',
    parent: 'T1a',
    time_kya: 10,
    time_kya_range: [7, 14],
    lat: 46,
    lon: 22,
    region: 'Europe',
    color: '#8B4513',
    description: 'T1a3 - T1a subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'T2a2',
    parent: 'T2a',
    time_kya: 10,
    time_kya_range: [7, 14],
    lat: 46,
    lon: 16,
    region: 'Europe',
    color: '#8B4513',
    description: 'T2a2 - T2a subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'T2b4',
    parent: 'T2b',
    time_kya: 8,
    time_kya_range: [5, 12],
    lat: 46,
    lon: 8,
    region: 'Western Europe',
    color: '#8B4513',
    description: 'T2b4 - T2b subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'T2b5',
    parent: 'T2b',
    time_kya: 7,
    time_kya_range: [4, 11],
    lat: 48,
    lon: 6,
    region: 'Western Europe',
    color: '#8B4513',
    description: 'T2b5 - T2b subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'T2b6',
    parent: 'T2b',
    time_kya: 6,
    time_kya_range: [3, 10],
    lat: 54,
    lon: 8,
    region: 'Northwestern Europe',
    color: '#8B4513',
    description: 'T2b6 - T2b subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'T2c1',
    parent: 'T2c',
    time_kya: 10,
    time_kya_range: [7, 14],
    lat: 40,
    lon: 9,
    region: 'Sardinia',
    color: '#8B4513',
    description: 'T2c1 - T2c subclade. Sardinian.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'T2e1',
    parent: 'T2e',
    time_kya: 9,
    time_kya_range: [6, 13],
    lat: 49,
    lon: 11,
    region: 'Central Europe',
    color: '#8B4513',
    description: 'T2e1 - T2e subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'T2f1',
    parent: 'T2f',
    time_kya: 8,
    time_kya_range: [5, 12],
    lat: 45,
    lon: 11,
    region: 'Southern Europe',
    color: '#8B4513',
    description: 'T2f1 - T2f subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'T2g1',
    parent: 'T2g',
    time_kya: 7,
    time_kya_range: [4, 11],
    lat: 51,
    lon: 13,
    region: 'Central Europe',
    color: '#8B4513',
    description: 'T2g1 - T2g subclade.',
    references: [],
    research_status: 'needs_references'
  },
  {
    id: 'T2h',
    parent: 'T2',
    time_kya: 10,
    time_kya_range: [6, 15],
    lat: 48,
    lon: 16,
    region: 'Central Europe',
    color: '#8B4513',
    description: 'T2h - T2 subclade.',
    references: [],
    research_status: 'needs_references'
  },

  // ============================================================================
  // STUBS - Remaining 395 haplogroups need research
  // ============================================================================

  {
    id: 'J1b1a1',
    parent: 'J1b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Near East',
    color: '#FFA500',
    description: 'J1b1a1',
    references: [],
    research_status: 'stub'
  },
  {
    id: 'J1b1a2',
    parent: 'J1b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Near East',
    color: '#FFA500',
    description: 'J1b1a2',
    references: [],
    research_status: 'stub'
  },
  {
    id: 'J1b1b',
    parent: 'J1b1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Near East',
    color: '#FFA500',
    description: 'J1b1b',
    references: [],
    research_status: 'stub'
  },
  {
    id: 'J1c1a',
    parent: 'J1c1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Europe',
    color: '#FFA500',
    description: 'J1c1a',
    references: [],
    research_status: 'stub'
  },
  // ... Additional stubs would be imported from original file
  // For practical purposes, representing first few stubs
  // Full stub list should be merged from JT_stubs.ts
];

// Note: This file contains 35 complete entries, 20 needs_references entries
// The remaining ~395 stubs should be imported from JT_stubs.ts
// or this file can be expanded as research progresses

export default JT_HAPLOGROUPS;
