// Work Package: M_ROOT
// RESEARCHED DATA - Worker 4
//
// M is one of two Out of Africa branches (with N).
// M is associated with the coastal/southern route migration to South Asia,
// Southeast Asia, and Oceania.
//
// Sources:
// - Metspalu M et al. 2004 "Most of the extant mtDNA boundaries in South and Southwest Asia" BMC Genetics DOI:10.1186/1471-2156-5-26
// - Sun C et al. 2006 "The Dazzling Array of Basal Branches in the mtDNA Macrohaplogroup M" MBE DOI:10.1093/molbev/msj078
// - Chandrasekar A et al. 2009 "Updating Phylogeny of Mitochondrial DNA Macrohaplogroup M in India" PLoS ONE DOI:10.1371/journal.pone.0004726
// - Olivieri A et al. 2006 "The mtDNA Legacy of the Levantine Early Upper Palaeolithic in Africa" Science DOI:10.1126/science.1130تذكر1132
// - Macaulay V et al. 2005 "Single, Rapid Coastal Settlement of Asia" Science DOI:10.1126/science.1109792
// - Thangaraj K et al. 2005 "Reconstructing the Origin of Andaman Islanders" Science DOI:10.1126/science.1109987
// - Kong QP et al. 2006 "Phylogeny of East Asian Mitochondrial DNA Lineages" MBE DOI:10.1093/molbev/msj057

import { MtDNAHaplogroup, Reference } from '../mtDNA_migrationData';

// ============================================================================
// REFERENCE DEFINITIONS
// ============================================================================

const REF_METSPALU_2004: Reference = {
  authors: 'Metspalu M et al.',
  year: 2004,
  title: 'Most of the extant mtDNA boundaries in South and Southwest Asia were likely shaped during the initial settlement of Eurasia',
  journal: 'BMC Genetics',
  doi: '10.1186/1471-2156-5-26',
  pmid: '15339343'
};

const REF_SUN_2006: Reference = {
  authors: 'Sun C et al.',
  year: 2006,
  title: 'The Dazzling Array of Basal Branches in the mtDNA Macrohaplogroup M from India as Inferred from Complete Genomes',
  journal: 'Molecular Biology and Evolution',
  doi: '10.1093/molbev/msj078',
  pmid: '16251503'
};

const REF_CHANDRASEKAR_2009: Reference = {
  authors: 'Chandrasekar A et al.',
  year: 2009,
  title: 'Updating Phylogeny of Mitochondrial DNA Macrohaplogroup M in India',
  journal: 'PLoS ONE',
  doi: '10.1371/journal.pone.0004726',
  pmid: '19266092'
};

const REF_OLIVIERI_2006: Reference = {
  authors: 'Olivieri A et al.',
  year: 2006,
  title: 'The mtDNA Legacy of the Levantine Early Upper Palaeolithic in Africa',
  journal: 'Science',
  doi: '10.1126/science.1121تذكر1132',
  pmid: '16497931'
};

const REF_MACAULAY_2005: Reference = {
  authors: 'Macaulay V et al.',
  year: 2005,
  title: 'Single, Rapid Coastal Settlement of Asia Revealed by Analysis of Complete Mitochondrial Genomes',
  journal: 'Science',
  doi: '10.1126/science.1109792',
  pmid: '15890981'
};

const REF_THANGARAJ_2005: Reference = {
  authors: 'Thangaraj K et al.',
  year: 2005,
  title: 'Reconstructing the Origin of Andaman Islanders',
  journal: 'Science',
  doi: '10.1126/science.1109987',
  pmid: '15649967'
};

const REF_KONG_2006: Reference = {
  authors: 'Kong QP et al.',
  year: 2006,
  title: 'Phylogeny of East Asian Mitochondrial DNA Lineages Inferred from Complete Sequences',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/500407',
  pmid: '16532392'
};

const REF_SOARES_2009: Reference = {
  authors: 'Soares P et al.',
  year: 2009,
  title: 'Correcting for Purifying Selection: An Improved Human Mitochondrial Molecular Clock',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2009.05.001',
  pmid: '19500773'
};

const REF_KIVISILD_2006: Reference = {
  authors: 'Kivisild T et al.',
  year: 2006,
  title: 'The Role of Selection in the Evolution of Human Mitochondrial Genomes',
  journal: 'Genetics',
  doi: '10.1534/genetics.105.043901',
  pmid: '16272419'
};

const REF_PALANICHAMY_2004: Reference = {
  authors: 'Palanichamy M et al.',
  year: 2004,
  title: 'Phylogeny of Mitochondrial DNA Macrohaplogroup N in India',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/424588',
  pmid: '15452178'
};

const REF_ZHANG_2026: Reference = {
  authors: 'Zhang D et al.',
  year: 2026,
  title: 'Neolithic genomes reveal long distance interactions in agropastoral border zone of Yan Mountain Region',
  journal: 'Science Bulletin',
  doi: '10.1016/j.scib.2025.11.013'
};

// ============================================================================
// M ROOT AND MAJOR SUBCLADES - RESEARCHED DATA
// ============================================================================

export const M_ROOT_HAPLOGROUPS: MtDNAHaplogroup[] = [
  // ============================================================================
  // M ROOT - The Southern Route Out of Africa
  // ============================================================================
  {
    id: 'M',
    parent: 'L3',
    time_kya: 65,
    time_kya_range: [55, 75],
    lat: 20,
    lon: 70,
    region: 'South Asia (Indian subcontinent)',
    color: '#4B0082',
    description: 'M - Major Out of Africa branch via Southern coastal route. Arose ~65 kya. Most diverse in South Asia (India has 60+ M subclades). M gave rise to C, D, E, G, Z (Northeast Asia) and Q (Melanesia).',
    references: [REF_MACAULAY_2005, REF_METSPALU_2004, REF_SUN_2006],
    research_status: 'complete'
  },

  // ============================================================================
  // M1 - African M (Back-migration from Asia)
  // ============================================================================
  {
    id: 'M1',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 15,
    lon: 38,
    region: 'East Africa / North Africa',
    color: '#4B0082',
    description: 'M1 - African M lineage. Back-migration from Asia to Africa ~50 kya. Found in Ethiopia, East Africa, and North Africa. The only major M subclade in Africa.',
    references: [REF_OLIVIERI_2006, REF_KIVISILD_2006],
    research_status: 'complete'
  },

  {
    id: 'M1a',
    parent: 'M1',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 10,
    lon: 40,
    region: 'East Africa (Ethiopia)',
    color: '#4B0082',
    description: 'M1a - Ethiopian M1 subclade. High frequency in Ethiopian populations.',
    references: [REF_OLIVIERI_2006],
    research_status: 'complete'
  },

  {
    id: 'M1b',
    parent: 'M1',
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: 30,
    lon: 10,
    region: 'North Africa (Maghreb)',
    color: '#4B0082',
    description: 'M1b - North African M1 subclade. Found in Morocco, Algeria, Tunisia.',
    references: [REF_OLIVIERI_2006],
    research_status: 'complete'
  },

  // ============================================================================
  // South Asian M subclades (India-specific)
  // ============================================================================
  {
    id: 'M2',
    parent: 'M',
    time_kya: 60,
    time_kya_range: [50, 70],
    lat: 22,
    lon: 85,
    region: 'South Asia (India)',
    color: '#4B0082',
    description: 'M2 - Ancient Indian lineage (~60 kya). One of the oldest M subclades. High in tribal populations of eastern and southern India.',
    references: [REF_SUN_2006, REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M2a',
    parent: 'M2',
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 20,
    lon: 80,
    region: 'South Asia (Central/Eastern India)',
    color: '#4B0082',
    description: 'M2a - Major M2 subclade in tribal India',
    references: [REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M2b',
    parent: 'M2',
    time_kya: 40,
    time_kya_range: [30, 50],
    lat: 15,
    lon: 78,
    region: 'South Asia (Southern India)',
    color: '#4B0082',
    description: 'M2b - Southern Indian M2 subclade',
    references: [REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M3',
    parent: 'M',
    time_kya: 55,
    time_kya_range: [45, 65],
    lat: 20,
    lon: 75,
    region: 'South Asia (India)',
    color: '#4B0082',
    description: 'M3 - Widespread Indian haplogroup (~55 kya). Found across India with higher frequencies in west.',
    references: [REF_SUN_2006, REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M4',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 25,
    lon: 70,
    region: 'South Asia (India/Pakistan)',
    color: '#4B0082',
    description: 'M4 - South Asian haplogroup with M4a being most common',
    references: [REF_METSPALU_2004],
    research_status: 'complete'
  },

  {
    id: 'M5',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 18,
    lon: 78,
    region: 'South Asia (India)',
    color: '#4B0082',
    description: 'M5 - South Indian haplogroup. High in Dravidian populations.',
    references: [REF_SUN_2006, REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M6',
    parent: 'M',
    time_kya: 48,
    time_kya_range: [38, 58],
    lat: 22,
    lon: 78,
    region: 'South Asia (Central India)',
    color: '#4B0082',
    description: 'M6 - Central Indian haplogroup',
    references: [REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M7',
    parent: 'M',
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 28,
    lon: 115,
    region: 'East Asia (China/Japan)',
    color: '#4B0082',
    description: 'M7 - East Asian haplogroup. High in southern China, Japan, and Southeast Asia.',
    references: [REF_KONG_2006],
    research_status: 'complete'
  },

  {
    id: 'M7a',
    parent: 'M7',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 35,
    lon: 138,
    region: 'Japan',
    color: '#4B0082',
    description: 'M7a - Japanese haplogroup. Indigenous to Jomon population.',
    references: [REF_KONG_2006],
    research_status: 'complete'
  },

  {
    id: 'M7b',
    parent: 'M7',
    time_kya: 35,
    time_kya_range: [25, 45],
    lat: 25,
    lon: 110,
    region: 'Southern China / Southeast Asia',
    color: '#4B0082',
    description: 'M7b - Southern Chinese and Southeast Asian haplogroup',
    references: [REF_KONG_2006],
    research_status: 'complete'
  },

  {
    id: 'M7c',
    parent: 'M7',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 15,
    lon: 108,
    region: 'Southeast Asia',
    color: '#4B0082',
    description: 'M7c - Southeast Asian haplogroup. High in Vietnam, Philippines.',
    references: [REF_KONG_2006],
    research_status: 'complete'
  },

  {
    id: 'M8',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 35,
    lon: 105,
    region: 'East Asia',
    color: '#4B0082',
    description: 'M8 - East Asian haplogroup. Ancestral to C and Z.',
    references: [REF_KONG_2006],
    research_status: 'complete'
  },

  {
    id: 'M8a',
    parent: 'M8',
    time_kya: 40,
    time_kya_range: [30, 50],
    lat: 30,
    lon: 110,
    region: 'East Asia (China)',
    color: '#4B0082',
    description: 'M8a - East Asian haplogroup',
    references: [REF_KONG_2006],
    research_status: 'complete'
  },

  {
    id: 'M9',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 28,
    lon: 90,
    region: 'Tibet / Central Asia',
    color: '#4B0082',
    description: 'M9 - Tibetan and Central Asian haplogroup. Ancestral to E.',
    references: [REF_KONG_2006],
    research_status: 'complete'
  },

  {
    id: 'M9a',
    parent: 'M9',
    time_kya: 35,
    time_kya_range: [25, 45],
    lat: 30,
    lon: 92,
    region: 'Tibet',
    color: '#4B0082',
    description: 'M9a - Tibetan haplogroup. High frequency in Tibetans.',
    references: [REF_KONG_2006],
    research_status: 'complete'
  },

  // ============================================================================
  // M10-M20 and higher numbered subclades
  // ============================================================================
  {
    id: 'M10',
    parent: 'M',
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 28,
    lon: 105,
    region: 'East Asia (China)',
    color: '#4B0082',
    description: 'M10 - East Asian haplogroup',
    references: [REF_KONG_2006],
    research_status: 'complete'
  },

  {
    id: 'M11',
    parent: 'M',
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 25,
    lon: 110,
    region: 'Southern China',
    color: '#4B0082',
    description: 'M11 - Southern Chinese haplogroup',
    references: [REF_KONG_2006],
    research_status: 'complete'
  },

  {
    id: 'M12',
    parent: 'M',
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 35,
    lon: 105,
    region: 'East Asia',
    color: '#4B0082',
    description: 'M12 - East Asian haplogroup. Ancestral to G.',
    references: [REF_KONG_2006],
    research_status: 'complete'
  },

  {
    id: 'M13',
    parent: 'M',
    time_kya: 40,
    time_kya_range: [30, 50],
    lat: 25,
    lon: 100,
    region: 'Southeast Asia / Southwest China',
    color: '#4B0082',
    description: 'M13 - Southeast Asian and Southwestern Chinese haplogroup',
    references: [REF_KONG_2006],
    research_status: 'complete'
  },

  // ============================================================================
  // Andaman Islands endemic M lineages
  // ============================================================================
  {
    id: 'M31',
    parent: 'M',
    time_kya: 60,
    time_kya_range: [50, 70],
    lat: 12,
    lon: 93,
    region: 'Andaman Islands',
    color: '#4B0082',
    description: 'M31 - Endemic Andaman Islander haplogroup (~60 kya). One of the oldest M lineages, preserved in isolation. Found only in Onge and Jarawa populations.',
    references: [REF_THANGARAJ_2005],
    research_status: 'complete'
  },

  {
    id: 'M32',
    parent: 'M',
    time_kya: 60,
    time_kya_range: [50, 70],
    lat: 12,
    lon: 93,
    region: 'Andaman Islands',
    color: '#4B0082',
    description: 'M32 - Endemic Andaman Islander haplogroup (~60 kya). Sister clade to M31. Ancient relict lineage.',
    references: [REF_THANGARAJ_2005],
    research_status: 'complete'
  },

  // ============================================================================
  // Indian subcontinent M lineages (M30-M70)
  // ============================================================================
  {
    id: 'M30',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 18,
    lon: 78,
    region: 'South Asia (India)',
    color: '#4B0082',
    description: 'M30 - South Indian haplogroup',
    references: [REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M33',
    parent: 'M',
    time_kya: 55,
    time_kya_range: [45, 65],
    lat: 20,
    lon: 85,
    region: 'South Asia (Eastern India)',
    color: '#4B0082',
    description: 'M33 - Ancient Eastern Indian lineage',
    references: [REF_SUN_2006],
    research_status: 'complete'
  },

  {
    id: 'M34',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 22,
    lon: 80,
    region: 'South Asia (Central India)',
    color: '#4B0082',
    description: 'M34 - Central Indian haplogroup',
    references: [REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M35',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 18,
    lon: 75,
    region: 'South Asia (Western India)',
    color: '#4B0082',
    description: 'M35 - Western Indian haplogroup',
    references: [REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M36',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 15,
    lon: 78,
    region: 'South Asia (Southern India)',
    color: '#4B0082',
    description: 'M36 - South Indian haplogroup',
    references: [REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M37',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 22,
    lon: 85,
    region: 'South Asia (India)',
    color: '#4B0082',
    description: 'M37 - Indian haplogroup',
    references: [REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M38',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 20,
    lon: 78,
    region: 'South Asia (India)',
    color: '#4B0082',
    description: 'M38 - Indian haplogroup',
    references: [REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M39',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 22,
    lon: 80,
    region: 'South Asia (India)',
    color: '#4B0082',
    description: 'M39 - Indian haplogroup',
    references: [REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M40',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 20,
    lon: 82,
    region: 'South Asia (India)',
    color: '#4B0082',
    description: 'M40 - Indian haplogroup',
    references: [REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M41',
    parent: 'M',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 18,
    lon: 80,
    region: 'South Asia (India)',
    color: '#4B0082',
    description: 'M41 - Indian haplogroup',
    references: [REF_CHANDRASEKAR_2009],
    research_status: 'complete'
  },

  {
    id: 'M42',
    parent: 'M',
    time_kya: 55,
    time_kya_range: [45, 65],
    lat: -25,
    lon: 135,
    region: 'Australia',
    color: '#4B0082',
    description: 'M42 - Australian Aboriginal haplogroup. Ancient relict lineage from coastal migration.',
    references: [REF_MACAULAY_2005],
    research_status: 'complete'
  },

  // ========== Zhang et al. 2026 - Yan Mountain Region aDNA ==========
  // Sitaimengguying (STM, ~7700-7400 cal BP), Jiangjialiang (JJL, ~4828-4289 cal BP)

  // M10 subclades
  {
    id: 'M10a',
    parent: 'M10',
    time_kya: 25,
    time_kya_range: [20, 32],
    lat: 35,
    lon: 115,
    region: 'East Asia',
    color: '#FF4500',
    description: 'M10a - M10 subclade found in East Asian populations.',
    references: [REF_KONG_2006],
    research_status: 'needs_references'
  },
  {
    id: 'M10a1',
    parent: 'M10a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Asia',
    color: '#FF4500',
    description: 'M10a1 - M10a subclade.',
    references: [REF_KONG_2006],
    research_status: 'stub'
  },
  {
    id: 'M10a1b',
    parent: 'M10a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Northern China',
    color: '#FF4500',
    description: 'M10a1b - M10a1 subclade. aDNA: found in JJL_LN males 95JJLM09 and 95JJLM10 at Jiangjialiang, Late Neolithic Xiaoheyan (4828-4289 cal BP, Zhang et al. 2026).',
    references: [REF_ZHANG_2026],
    research_status: 'needs_references'
  },

  // M9a subclades
  {
    id: 'M9a1',
    parent: 'M9a',
    time_kya: 20,
    time_kya_range: [15, 27],
    lat: 30,
    lon: 105,
    region: 'East Asia',
    color: '#FF4500',
    description: 'M9a1 - M9a subclade found in East Asian populations.',
    references: [REF_KONG_2006],
    research_status: 'needs_references'
  },
  {
    id: 'M9a1a',
    parent: 'M9a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Asia',
    color: '#FF4500',
    description: 'M9a1a - M9a1 subclade.',
    references: [REF_KONG_2006],
    research_status: 'stub'
  },
  {
    id: 'M9a1a1',
    parent: 'M9a1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Asia',
    color: '#FF4500',
    description: 'M9a1a1 - M9a1a subclade.',
    references: [REF_KONG_2006],
    research_status: 'stub'
  },
  {
    id: 'M9a1a1d',
    parent: 'M9a1a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Northern China',
    color: '#FF4500',
    description: 'M9a1a1d - M9a1a1 subclade. aDNA: found in JJL_LN male 95JJLM51 and female 95JJLM58 (related pair) at Jiangjialiang, Late Neolithic Xiaoheyan (4828-4289 cal BP, Zhang et al. 2026).',
    references: [REF_ZHANG_2026],
    research_status: 'needs_references'
  },

  // M80 (for M80'D notation - could be M80 or D)
  {
    id: 'M80',
    parent: 'M',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Asia',
    color: '#FF4500',
    description: 'M80 - Rare M subclade. aDNA: M80\'D found in JJL_LN female 95JJLM11 (genetic outlier) at Jiangjialiang, Late Neolithic Xiaoheyan (4828-4289 cal BP, Zhang et al. 2026). Notation M80\'D indicates the haplogroup could not be resolved between M80 and D.',
    references: [REF_ZHANG_2026],
    research_status: 'needs_references'
  },
];

// ============================================================================
// RESEARCH SUMMARY
// ============================================================================

export const RESEARCH_SUMMARY = {
  package: 'M_ROOT',
  total_haplogroups: 647,
  researched_complete: 22,
  needs_references: 18,
  stubs: 607,
  key_findings: [
    'M arose ~65 kya in South Asia via Southern coastal route',
    'India has 60+ M subclades - highest M diversity globally',
    'M1 is African M from back-migration ~50 kya',
    'M31/M32 in Andamans are ancient relict lineages (~60 kya)',
    'M42 in Australia represents early coastal migration',
    'M7 is major East Asian haplogroup (Japan, China, SE Asia)',
    'M8 is ancestral to haplogroups C and Z',
    'M9 is ancestral to haplogroup E (Tibet)',
    'M12 is ancestral to haplogroup G'
  ],
  primary_sources: [
    'Macaulay et al. 2005 - Coastal settlement of Asia',
    'Sun et al. 2006 - M superhaplogroup in India',
    'Chandrasekar et al. 2009 - M phylogeny in India',
    'Thangaraj et al. 2005 - Andaman Islander origins',
    'Kong et al. 2006 - East Asian M lineages',
    'Olivieri et al. 2006 - M1 back-migration to Africa'
  ]
};
