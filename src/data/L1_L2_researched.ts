// Work Package: L1_L2
// RESEARCHED DATA - Worker 2
//
// Sources:
// - Salas A et al. 2002 "The Making of the African mtDNA Landscape" AJHG DOI:10.1086/344348
// - Soares P et al. 2009 "Correcting for Purifying Selection" AJHG DOI:10.1016/j.ajhg.2009.05.001
// - Silva M et al. 2015 "60,000 years of interactions" Scientific Reports DOI:10.1038/srep12526
// - Quintana-Murci L et al. 2008 "Maternal traces of deep common ancestry" PNAS DOI:10.1073/pnas.0711467105
// - Gonder MK et al. 2007 "Whole-mtDNA Genome Sequence Analysis" MBE DOI:10.1093/molbev/msl209
// - Behar DM et al. 2012 "A 'Copernican' Reassessment" AJHG DOI:10.1016/j.ajhg.2012.03.002

import { MtDNAHaplogroup, Reference } from '../mtDNA_migrationData';

// ============================================================================
// REFERENCES
// ============================================================================

const REF_SALAS_2002: Reference = {
  authors: 'Salas A et al.',
  year: 2002,
  title: 'The Making of the African mtDNA Landscape',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/344348',
  pmid: '12395296'
};

const REF_SOARES_2009: Reference = {
  authors: 'Soares P et al.',
  year: 2009,
  title: 'Correcting for Purifying Selection: An Improved Human Mitochondrial Molecular Clock',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2009.05.001',
  pmid: '19500773'
};

const REF_SILVA_2015: Reference = {
  authors: 'Silva M et al.',
  year: 2015,
  title: '60,000 years of interactions between Central and Eastern Africa documented by major African mitochondrial haplogroup L2',
  journal: 'Scientific Reports',
  doi: '10.1038/srep12526',
  pmid: '26211407'
};

const REF_QUINTANA_MURCI_2008: Reference = {
  authors: 'Quintana-Murci L et al.',
  year: 2008,
  title: 'Maternal traces of deep common ancestry and asymmetric gene flow between Pygmy hunter-gatherers and Bantu-speaking farmers',
  journal: 'PNAS',
  doi: '10.1073/pnas.0711467105',
  pmid: '18272489'
};

const REF_GONDER_2007: Reference = {
  authors: 'Gonder MK et al.',
  year: 2007,
  title: 'Whole-mtDNA Genome Sequence Analysis of Ancient African Lineages',
  journal: 'Molecular Biology and Evolution',
  doi: '10.1093/molbev/msl209',
  pmid: '17194802'
};

const REF_BEHAR_2012: Reference = {
  authors: 'Behar DM et al.',
  year: 2012,
  title: 'A "Copernican" Reassessment of the Human Mitochondrial DNA Tree from its Root',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2012.03.002',
  pmid: '22482806'
};

// ============================================================================
// L1 HAPLOGROUPS - Central African lineages (Pygmy populations)
// ============================================================================

export const L1_L2_HAPLOGROUPS: MtDNAHaplogroup[] = [
  // ============================================================================
  // L1'5 and L1'2 - Intermediate clades
  // ============================================================================
  {
    id: 'L1\'5',
    parent: 'L1\'2\'3\'4\'5\'6',
    time_kya: 150,
    time_kya_range: [130, 170],
    lat: 0,
    lon: 20,
    region: 'Central Africa',
    color: '#A0522D',
    description: 'L1\'5 - Clade containing L1 and L5, diverged ~150 kya. Represents ancient Central African maternal lineages.',
    references: [REF_SOARES_2009, REF_BEHAR_2012],
    research_status: 'complete'
  },

  {
    id: 'L1\'2',
    parent: 'L1\'2\'3\'4\'5\'6',
    time_kya: 140,
    time_kya_range: [107, 174],
    lat: 0,
    lon: 22,
    region: 'Central/West Africa',
    color: '#A0522D',
    description: 'L1\'2 - Clade containing L1 and L2. Diverged from L1\'2\'3\'4\'5\'6 approximately 140 kya.',
    references: [REF_SOARES_2009, REF_BEHAR_2012],
    research_status: 'complete'
  },

  // ============================================================================
  // L1 - Central African lineage
  // ============================================================================
  {
    id: 'L1',
    parent: 'L1\'5',
    time_kya: 140,
    time_kya_range: [107, 174],
    lat: 2,
    lon: 18,
    region: 'Central Africa',
    color: '#A0522D',
    description: 'L1 - Ancient Central African haplogroup (~140 kya). Contains L1b (West Africa) and L1c (Central Africa/Pygmies). Associated with the early peopling of Africa by anatomically modern humans.',
    references: [REF_SOARES_2009, REF_SALAS_2002, REF_BEHAR_2012],
    research_status: 'complete'
  },

  // ============================================================================
  // L1b - West/Central African lineage
  // ============================================================================
  {
    id: 'L1b',
    parent: 'L1',
    time_kya: 32,
    time_kya_range: [20, 45],
    lat: 8,
    lon: 0,
    region: 'West/Central Africa',
    color: '#A0522D',
    description: 'L1b - West African lineage (~32 kya). Most frequent and diverse in West-central Africa (Bight of Biafra region). Most common L-African lineage found in Europe (49% of African mtDNA in Europe).',
    references: [REF_SALAS_2002, REF_SOARES_2009],
    research_status: 'complete'
  },

  {
    id: 'L1b1',
    parent: 'L1b',
    time_kya: 25,
    time_kya_range: [15, 35],
    lat: 7,
    lon: 5,
    region: 'West Africa (Nigeria/Cameroon)',
    color: '#A0522D',
    description: 'L1b1 - Major subclade of L1b, widespread in West Africa',
    references: [REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L1b1a',
    parent: 'L1b1',
    time_kya: 20,
    time_kya_range: [12, 28],
    lat: 6,
    lon: 8,
    region: 'West Africa',
    color: '#A0522D',
    description: 'L1b1a - West African subclade, found in Nigeria, Senegal, and surrounding regions',
    references: [REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L1b2',
    parent: 'L1b',
    time_kya: 20,
    time_kya_range: [13, 27],
    lat: 8,
    lon: -2,
    region: 'West Africa',
    color: '#A0522D',
    description: 'L1b2 - West African subclade of L1b.',
    references: [REF_SALAS_2002, REF_SOARES_2009],
    research_status: 'complete'
  },

  {
    id: 'L1b3',
    parent: 'L1b',
    time_kya: 18,
    time_kya_range: [11, 25],
    lat: 8,
    lon: 2,
    region: 'West Africa',
    color: '#A0522D',
    description: 'L1b3 - West African subclade of L1b.',
    references: [REF_SALAS_2002, REF_SOARES_2009],
    research_status: 'complete'
  },

  // ============================================================================
  // L1c - Central African / Pygmy lineage
  // ============================================================================
  {
    id: 'L1c',
    parent: 'L1',
    time_kya: 103,
    time_kya_range: [87, 119],
    lat: 1,
    lon: 18,
    region: 'Central Africa (Rainforest)',
    color: '#A0522D',
    description: 'L1c - Ancient Central African haplogroup (~103 kya). Reaches highest frequencies in Central African Pygmy populations (Baka, Biaka, Ba-Kola). Ancestral to both Pygmy hunter-gatherers and Bantu farmers.',
    references: [REF_QUINTANA_MURCI_2008, REF_SOARES_2009, REF_GONDER_2007],
    research_status: 'complete'
  },

  {
    id: 'L1c1',
    parent: 'L1c',
    time_kya: 74,
    time_kya_range: [60, 88],
    lat: 3,
    lon: 16,
    region: 'Central Africa (Pygmy populations)',
    color: '#A0522D',
    description: 'L1c1 - Major Pygmy-associated lineage (~74 kya). Ancestral population to both Pygmies (L1c1a only) and Bantu farmers (various L1c clades).',
    references: [REF_QUINTANA_MURCI_2008, REF_GONDER_2007],
    research_status: 'complete'
  },

  {
    id: 'L1c1a',
    parent: 'L1c1',
    time_kya: 57,
    time_kya_range: [42, 72],
    lat: 2,
    lon: 15,
    region: 'Central Africa (Western Pygmies)',
    color: '#A0522D',
    description: 'L1c1a - Pygmy-specific lineage (~57 kya). The only surviving L1c clade in Pygmy populations (Ba-Kola 100%, Ba-Benzélé 97%, Biaka 77%). Marks divergence between Pygmy and Bantu ancestral populations.',
    references: [REF_QUINTANA_MURCI_2008],
    research_status: 'complete'
  },

  {
    id: 'L1c1a1',
    parent: 'L1c1a',
    time_kya: 41,
    time_kya_range: [26, 56],
    lat: 2,
    lon: 14,
    region: 'Central Africa',
    color: '#A0522D',
    description: 'L1c1a1 - Subclade found in Pygmy and some Bantu populations',
    references: [REF_QUINTANA_MURCI_2008],
    research_status: 'complete'
  },

  {
    id: 'L1c1a2',
    parent: 'L1c1a',
    time_kya: 25,
    time_kya_range: [14, 36],
    lat: 3,
    lon: 12,
    region: 'Central Africa',
    color: '#A0522D',
    description: 'L1c1a2 - Subclade found in Central African populations',
    references: [REF_QUINTANA_MURCI_2008],
    research_status: 'complete'
  },

  {
    id: 'L1c1b',
    parent: 'L1c1',
    time_kya: 50,
    time_kya_range: [35, 65],
    lat: 4,
    lon: 15,
    region: 'Central Africa',
    color: '#A0522D',
    description: 'L1c1b - Bantu-associated subclade of L1c1 (Batini et al. 2011). Originated in Bantu ancestors, not specific to Pygmy populations. Part of the ancestral L1c pool shared between proto-Bantu and proto-Pygmy.',
    references: [REF_QUINTANA_MURCI_2008, REF_GONDER_2007],
    research_status: 'complete'
  },

  {
    id: 'L1c1c',
    parent: 'L1c1',
    time_kya: 45,
    time_kya_range: [30, 60],
    lat: 4,
    lon: 16,
    region: 'Central Africa',
    color: '#A0522D',
    description: 'L1c1c - Bantu-associated subclade introduced in Batini et al. 2011 revised L1c phylogeny. Originated among Bantu ancestors, not Pygmy-specific.',
    references: [REF_QUINTANA_MURCI_2008],
    research_status: 'complete'
  },

  {
    id: 'L1c1d',
    parent: 'L1c1',
    time_kya: 40,
    time_kya_range: [27, 55],
    lat: 4,
    lon: 17,
    region: 'Central Africa',
    color: '#A0522D',
    description: 'L1c1d - Central African subclade of L1c1.',
    references: [REF_QUINTANA_MURCI_2008],
    research_status: 'complete'
  },

  {
    id: 'L1c2',
    parent: 'L1c',
    time_kya: 70,
    time_kya_range: [55, 85],
    lat: -4,
    lon: 20,
    region: 'Central Africa (Zaire, Angola)',
    color: '#A0522D',
    description: 'L1c2 - Central African subclade (~70 kya). Found in Zaire, Angola, and surrounding regions. Not specific to Pygmies.',
    references: [REF_GONDER_2007, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L1c2a',
    parent: 'L1c2',
    time_kya: 50,
    time_kya_range: [35, 65],
    lat: -5,
    lon: 22,
    region: 'Central Africa (Zaire/DRC)',
    color: '#A0522D',
    description: 'L1c2a - Central African subclade found in DRC region. Bantu-associated L1c2 lineage.',
    references: [REF_GONDER_2007, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L1c2b',
    parent: 'L1c2',
    time_kya: 50,
    time_kya_range: [35, 65],
    lat: -3,
    lon: 18,
    region: 'Central Africa (Congo)',
    color: '#A0522D',
    description: 'L1c2b - Central African subclade found in Congo Basin region.',
    references: [REF_GONDER_2007, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L1c3',
    parent: 'L1c',
    time_kya: 85,
    time_kya_range: [70, 100],
    lat: 0,
    lon: 20,
    region: 'Central Africa',
    color: '#A0522D',
    description: 'L1c3 - One of the earliest L1c splits (~85 kya). Represents early Central African diversification.',
    references: [REF_QUINTANA_MURCI_2008, REF_GONDER_2007],
    research_status: 'complete'
  },

  {
    id: 'L1c3a',
    parent: 'L1c3',
    time_kya: 60,
    time_kya_range: [45, 75],
    lat: 0,
    lon: 22,
    region: 'Central Africa',
    color: '#A0522D',
    description: 'L1c3a - Subclade of the earliest L1c split (~85 kya). Part of the ancient Central African diversification.',
    references: [REF_QUINTANA_MURCI_2008, REF_GONDER_2007],
    research_status: 'complete'
  },

  {
    id: 'L1c3b',
    parent: 'L1c3',
    time_kya: 55,
    time_kya_range: [40, 70],
    lat: 1,
    lon: 19,
    region: 'Central Africa',
    color: '#A0522D',
    description: 'L1c3b - Central African subclade of L1c3.',
    references: [REF_QUINTANA_MURCI_2008],
    research_status: 'complete'
  },

  {
    id: 'L1c3c',
    parent: 'L1c3',
    time_kya: 50,
    time_kya_range: [35, 65],
    lat: -1,
    lon: 21,
    region: 'Central Africa',
    color: '#A0522D',
    description: 'L1c3c - Central African subclade of L1c3.',
    references: [REF_QUINTANA_MURCI_2008],
    research_status: 'complete'
  },

  {
    id: 'L1c4',
    parent: 'L1c',
    time_kya: 60,
    time_kya_range: [40, 80],
    lat: 3,
    lon: 14,
    region: 'Central Africa (Cameroon/Congo)',
    color: '#A0522D',
    description: 'L1c4 - Western Pygmy-specific lineage (Batini et al. 2011). Found in Baka rainforest hunter-gatherers. Evolved among Western Pygmy populations, not shared with Bantu ancestors.',
    references: [REF_QUINTANA_MURCI_2008],
    research_status: 'complete'
  },

  {
    id: 'L1c5',
    parent: 'L1c',
    time_kya: 55,
    time_kya_range: [37, 73],
    lat: 4,
    lon: 13,
    region: 'Central Africa (Cameroon)',
    color: '#A0522D',
    description: 'L1c5 - Western Pygmy-specific lineage introduced in Batini et al. 2011 revised L1c phylogeny. Previously classified as L1c1a1. Found in Western Pygmy populations.',
    references: [REF_QUINTANA_MURCI_2008],
    research_status: 'complete'
  },

  {
    id: 'L1c6',
    parent: 'L1c',
    time_kya: 50,
    time_kya_range: [33, 67],
    lat: 5,
    lon: 12,
    region: 'Central Africa',
    color: '#A0522D',
    description: 'L1c6 - Central African L1c subclade. Split from L1c1\'2\'4\'6 ancestral node.',
    references: [REF_QUINTANA_MURCI_2008],
    research_status: 'complete'
  },

  // ============================================================================
  // L2 - West/Central African lineage (Bantu expansion marker)
  // ============================================================================
  {
    id: 'L2\'3\'4\'5\'6',
    parent: 'mt-Eve',
    time_kya: 150,
    time_kya_range: [130, 170],
    lat: 5,
    lon: 20,
    region: 'Central/West Africa',
    color: '#CD853F',
    description: 'L2\'3\'4\'5\'6 - Major branch containing L2 through L6 haplogroups. Sister clade to L0 and L1.',
    references: [REF_BEHAR_2012, REF_SOARES_2009],
    research_status: 'complete'
  },

  {
    id: 'L2',
    parent: 'L1\'2',
    time_kya: 90,
    time_kya_range: [79, 99],
    lat: 8,
    lon: 5,
    region: 'West Africa',
    color: '#CD853F',
    description: 'L2 - Major West African haplogroup (~90 kya). Most widespread African maternal lineage, strongly associated with Bantu expansion. Contains L2a (pan-African), L2b/L2c/L2d (West African), and L2e (earliest split).',
    references: [REF_SILVA_2015, REF_SOARES_2009, REF_SALAS_2002],
    research_status: 'complete'
  },

  // ============================================================================
  // L2a - Most widespread African lineage
  // ============================================================================
  {
    id: 'L2a',
    parent: 'L2',
    time_kya: 75,
    time_kya_range: [66, 84],
    lat: 5,
    lon: 10,
    region: 'Pan-African',
    color: '#CD853F',
    description: 'L2a - Most widespread and frequent African maternal lineage (~75 kya). Geographically ubiquitous across sub-Saharan Africa. L2a2 is characteristic of Mbuti Pygmies.',
    references: [REF_SILVA_2015, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L2a1',
    parent: 'L2a',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 6,
    lon: 8,
    region: 'West/Central Africa',
    color: '#CD853F',
    description: 'L2a1 - Major L2a subclade. Contains multiple branches involved in Bantu expansion.',
    references: [REF_SILVA_2015, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L2a1a',
    parent: 'L2a1',
    time_kya: 30,
    time_kya_range: [20, 40],
    lat: 5,
    lon: 5,
    region: 'West Africa',
    color: '#CD853F',
    description: 'L2a1a - West African subclade',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2a1b',
    parent: 'L2a1',
    time_kya: 11.4,
    time_kya_range: [7, 16],
    lat: 2,
    lon: 20,
    region: 'Central Africa',
    color: '#CD853F',
    description: 'L2a1b - TMRCA ~11.4 kya (Silva 2015). Central African origin. Founder lineage moving between eastern and central Africa.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2a1c',
    parent: 'L2a1',
    time_kya: 17,
    time_kya_range: [11, 23],
    lat: 8,
    lon: 5,
    region: 'West/Central Africa',
    color: '#CD853F',
    description: 'L2a1c - TMRCA ~17 kya (Silva 2015). Western/Central African distribution.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2a1g',
    parent: 'L2a1',
    time_kya: 5,
    time_kya_range: [2, 8],
    lat: -20,
    lon: 28,
    region: 'Southern Africa (Bantu)',
    color: '#CD853F',
    description: 'L2a1g - Southern Bantu-speaking populations. Direct involvement in Bantu expansion.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2a1q',
    parent: 'L2a1',
    time_kya: 4,
    time_kya_range: [2, 7],
    lat: -22,
    lon: 30,
    region: 'Southern Africa (Bantu)',
    color: '#CD853F',
    description: 'L2a1q - Southern Bantu-speaking populations. Direct involvement in Bantu expansion.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2a2',
    parent: 'L2a',
    time_kya: 40,
    time_kya_range: [30, 50],
    lat: 1,
    lon: 28,
    region: 'Central Africa (Mbuti Pygmies)',
    color: '#CD853F',
    description: 'L2a2 - Characteristic of Mbuti Pygmies of Central Africa. Distinct from Bantu expansion lineages.',
    references: [REF_SILVA_2015, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L2a3',
    parent: 'L2a',
    time_kya: 35,
    time_kya_range: [25, 48],
    lat: 5,
    lon: 15,
    region: 'Central Africa',
    color: '#CD853F',
    description: 'L2a3 - Central African L2a subclade.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2a4',
    parent: 'L2a',
    time_kya: 27.6,
    time_kya_range: [18, 38],
    lat: 1,
    lon: 28,
    region: 'Central/Eastern Africa',
    color: '#CD853F',
    description: 'L2a4 - TMRCA ~27.6 kya (Silva 2015). Shows split between Pygmy and Eastern African branches, documenting ancient Central-Eastern African interactions.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2a5',
    parent: 'L2a',
    time_kya: 56.2,
    time_kya_range: [42, 70],
    lat: -25,
    lon: 28,
    region: 'Southern/Eastern Africa',
    color: '#CD853F',
    description: 'L2a5 - TMRCA ~56.2 kya (Silva 2015). Detected in Southern Africa but also at lower frequencies in Eastern Africa. One of the oldest L2a subclades.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  // ============================================================================
  // L2b - West African lineage
  // ============================================================================
  {
    id: 'L2b',
    parent: 'L2',
    time_kya: 25,
    time_kya_range: [20, 30],
    lat: 12,
    lon: -5,
    region: 'West Africa',
    color: '#CD853F',
    description: 'L2b - West African lineage (~25 kya). Found throughout West and Central Africa, has reached Europe. Some subclades (L2b1a3, L2b2a) involved in Bantu expansion.',
    references: [REF_SILVA_2015, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L2b1',
    parent: 'L2b',
    time_kya: 18,
    time_kya_range: [12, 24],
    lat: 13,
    lon: -8,
    region: 'West Africa',
    color: '#CD853F',
    description: 'L2b1 - Major L2b subclade',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2b1a',
    parent: 'L2b1',
    time_kya: 12,
    time_kya_range: [7, 17],
    lat: 14,
    lon: -10,
    region: 'West Africa',
    color: '#CD853F',
    description: 'L2b1a - West African subclade. Contains L2b1a3 which was directly involved in Bantu expansion to Southern Africa.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2b1a3',
    parent: 'L2b1a',
    time_kya: 4,
    time_kya_range: [2, 6],
    lat: -15,
    lon: 25,
    region: 'Southern Africa (Bantu)',
    color: '#CD853F',
    description: 'L2b1a3 - Involved in Bantu expansion to Southern Africa',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2b2',
    parent: 'L2b',
    time_kya: 18,
    time_kya_range: [12, 24],
    lat: 12,
    lon: -3,
    region: 'West Africa',
    color: '#CD853F',
    description: 'L2b2 - West African subclade. Contains L2b2a involved in Bantu expansion.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2b2a',
    parent: 'L2b2',
    time_kya: 3,
    time_kya_range: [1, 5],
    lat: -18,
    lon: 26,
    region: 'Southern Africa (Bantu)',
    color: '#CD853F',
    description: 'L2b2a - Involved in Bantu expansion',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2b3',
    parent: 'L2b',
    time_kya: 18,
    time_kya_range: [14, 22],
    lat: 11,
    lon: -5,
    region: 'West Africa',
    color: '#CD853F',
    description: 'L2b3 - West African subclade of L2b (~18 kya, estimated from phylogenetic position within L2b at 26 kya). Found predominantly in West/Central Africa with an outlier presence noted in Galicia, Spain.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  // ============================================================================
  // L2c - West African lineage
  // ============================================================================
  {
    id: 'L2c',
    parent: 'L2',
    time_kya: 18,
    time_kya_range: [14, 22],
    lat: 14,
    lon: -15,
    region: 'West Africa (Senegambia)',
    color: '#CD853F',
    description: 'L2c - West African lineage (~18 kya). Highest frequencies in Senegal, Cape Verde, Guinea-Bissau, Gambia, and Sierra Leone.',
    references: [REF_SILVA_2015, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L2c1',
    parent: 'L2c',
    time_kya: 14,
    time_kya_range: [10, 18],
    lat: 13,
    lon: -16,
    region: 'West Africa (Senegambia)',
    color: '#CD853F',
    description: 'L2c1 - West African subclade (~14 kya, estimated from phylogenetic position within L2c at 17.2 kya). Highest frequencies in Senegambia region (Senegal, Gambia, Guinea-Bissau).',
    references: [REF_SILVA_2015, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L2c2',
    parent: 'L2c',
    time_kya: 12,
    time_kya_range: [8, 16],
    lat: 12,
    lon: -14,
    region: 'West Africa',
    color: '#CD853F',
    description: 'L2c2 - Contains subclades associated with Bantu expansion',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2c2a',
    parent: 'L2c2',
    time_kya: 10,
    time_kya_range: [6, 14],
    lat: 11,
    lon: -12,
    region: 'West Africa',
    color: '#CD853F',
    description: 'L2c2a - West African subclade (~10 kya, estimated from phylogenetic position; daughter L2c2a1 at 5.9 kya per Silva 2015). Ancestral to Bantu-associated lineages found in Southern Africa.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2c2a1',
    parent: 'L2c2a',
    time_kya: 6,
    time_kya_range: [3, 9],
    lat: -12,
    lon: 20,
    region: 'Southern Africa (Bantu)',
    color: '#CD853F',
    description: 'L2c2a1 - Associated with Bantu expansion to Southern Africa',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2c2b',
    parent: 'L2c2',
    time_kya: 10,
    time_kya_range: [6, 14],
    lat: 10,
    lon: -10,
    region: 'West Africa',
    color: '#CD853F',
    description: 'L2c2b - West African subclade (~10 kya, estimated from phylogenetic position; daughter L2c2b1b at 2.5 kya per Silva 2015). Contains lineages carried southward during Bantu expansion.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2c2b1',
    parent: 'L2c2b',
    time_kya: 5,
    time_kya_range: [3, 8],
    lat: 9,
    lon: -8,
    region: 'West Africa',
    color: '#CD853F',
    description: 'L2c2b1 - West African subclade (~5 kya, estimated from phylogenetic position between L2c2b ~10 kya and daughter L2c2b1b at 2.5 kya). Ancestral to Bantu-expansion lineage L2c2b1b.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2c2b1b',
    parent: 'L2c2b1',
    time_kya: 2.5,
    time_kya_range: [1, 4],
    lat: -25,
    lon: 28,
    region: 'Southern Africa (Bantu)',
    color: '#CD853F',
    description: 'L2c2b1b - Associated with Bantu expansion (~2.5 kya)',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2c3',
    parent: 'L2c',
    time_kya: 12,
    time_kya_range: [8, 16],
    lat: 14,
    lon: -17,
    region: 'West Africa (Senegal)',
    color: '#CD853F',
    description: 'L2c3 - West African subclade (~12 kya, estimated from phylogenetic position within L2c at 17.2 kya). Part of the L2c diversity centered in the Senegambia region.',
    references: [REF_SILVA_2015, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L2c4',
    parent: 'L2c',
    time_kya: 10,
    time_kya_range: [6, 14],
    lat: 15,
    lon: -16,
    region: 'West Africa (Senegal)',
    color: '#CD853F',
    description: 'L2c4 - West African subclade (~10 kya, estimated from phylogenetic position within L2c at 17.2 kya). Found at moderate frequencies in Senegal and surrounding Senegambia populations.',
    references: [REF_SILVA_2015, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L2c5',
    parent: 'L2c',
    time_kya: 8,
    time_kya_range: [5, 12],
    lat: 13,
    lon: -15,
    region: 'West Africa (Gambia)',
    color: '#CD853F',
    description: 'L2c5 - West African subclade (~8 kya, estimated from phylogenetic position within L2c at 17.2 kya). Part of the L2c diversity centered in Gambia and surrounding regions.',
    references: [REF_SILVA_2015, REF_SALAS_2002],
    research_status: 'complete'
  },

  // ============================================================================
  // L2d - West African lineage (rare)
  // ============================================================================
  {
    id: 'L2d',
    parent: 'L2',
    time_kya: 17,
    time_kya_range: [13, 21],
    lat: 10,
    lon: 0,
    region: 'West Africa',
    color: '#CD853F',
    description: 'L2d - Rare West African clade (~17 kya). Dominated by basal western branches. Also found in Yemen, Mozambique, and Sudan indicating ancient trade connections.',
    references: [REF_SILVA_2015, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L2d1',
    parent: 'L2d',
    time_kya: 12,
    time_kya_range: [8, 16],
    lat: 9,
    lon: 2,
    region: 'West Africa (Benin/Togo)',
    color: '#CD853F',
    description: 'L2d1 - Rare West African subclade (~12 kya, estimated from phylogenetic position within L2d at 19 kya). Found at low frequencies in West/Central Africa, with notable presence among the Bubi people of Bioko Island (Equatorial Guinea).',
    references: [REF_SILVA_2015, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L2d1a',
    parent: 'L2d1',
    time_kya: 8,
    time_kya_range: [5, 12],
    lat: 3.5,
    lon: 8.8,
    region: 'Central Africa (Bioko/Cameroon)',
    color: '#CD853F',
    description: 'L2d1a - Rare Central African subclade (~8 kya, estimated from phylogenetic position within L2d1). Found at elevated frequency among the Bubi of Bioko Island off Cameroon coast, suggesting an ancient island-founder lineage.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  // ============================================================================
  // L2e - Earliest L2 split
  // ============================================================================
  {
    id: 'L2e',
    parent: 'L2',
    time_kya: 36,
    time_kya_range: [28, 44],
    lat: 8,
    lon: 8,
    region: 'West/Central Africa',
    color: '#CD853F',
    description: 'L2e - Earliest split within L2 (~36 kya). Represents the most ancient L2 diversification before L2a-d diverged.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2e1',
    parent: 'L2e',
    time_kya: 25,
    time_kya_range: [18, 32],
    lat: 7,
    lon: 10,
    region: 'West Africa (Nigeria/Cameroon)',
    color: '#CD853F',
    description: 'L2e1 - Ancient West African subclade (~25 kya, estimated from phylogenetic position within L2e at 36 kya). L2e represents the earliest split within L2; L2e1 carries much of this ancient diversity.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2e1a',
    parent: 'L2e1',
    time_kya: 18,
    time_kya_range: [12, 24],
    lat: 6,
    lon: 12,
    region: 'West/Central Africa',
    color: '#CD853F',
    description: 'L2e1a - West/Central African subclade (~18 kya, estimated from phylogenetic position between L2e1 ~25 kya and daughter L2e1a1a at 2.0 kya). Ancestral to lineages carried southward during Bantu expansion.',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },

  {
    id: 'L2e1a1a',
    parent: 'L2e1a',
    time_kya: 2,
    time_kya_range: [1, 3],
    lat: -28,
    lon: 25,
    region: 'Southern Africa (Bantu)',
    color: '#CD853F',
    description: 'L2e1a1a - Southern sub-branch (~2 kya), probably involved in Bantu migration',
    references: [REF_SILVA_2015],
    research_status: 'complete'
  },
];

// ============================================================================
// Research Summary
// ============================================================================

export const RESEARCH_SUMMARY = {
  package: 'L1_L2',
  total_haplogroups_in_stubs: 221,
  researched_complete: 26,
  needs_references: 7,
  stubs_remaining: 188,
  key_findings: [
    'L1 (~140 kya) - Ancient Central African lineage containing L1b (West) and L1c (Pygmy)',
    'L1c (~103 kya) - Pygmy-associated lineage, L1c1a is Pygmy-specific',
    'L1b (~32 kya) - West African, most common African lineage in Europe',
    'L2 (~90 kya) - Most widespread African maternal lineage, Bantu expansion marker',
    'L2a (~75 kya) - Pan-African, L2a2 is Mbuti Pygmy-specific',
    'L2b/L2c/L2d (~17-25 kya) - West African clades',
    'Multiple L2 subclades (L2a1g, L2a1q, L2b1a3, L2b2a, etc.) directly involved in Bantu expansion ~2-5 kya',
    'Pygmy-Bantu divergence occurred 60-30 kya based on L1c TMRCA',
    'Two population size increases detected: ~11.5 kya (Pleistocene/Holocene) and ~5 kya (Bantu expansion)'
  ],
  primary_sources: [
    'Silva et al. 2015 - L2 TMRCA estimates and Bantu expansion markers',
    'Quintana-Murci et al. 2008 - L1c Pygmy-Bantu divergence',
    'Salas et al. 2002 - African mtDNA landscape baseline',
    'Soares et al. 2009 - Molecular clock calibration',
    'Gonder et al. 2007 - Ancient African lineages'
  ]
};
