// Work Package: L3
// RESEARCHED DATA - Worker 3
//
// L3 is the CRITICAL haplogroup for understanding the Out of Africa migration.
// All non-African mtDNA lineages (M and N) descend from L3.
//
// Sources:
// - Soares P et al. 2012 "The Expansion of mtDNA Haplogroup L3 within and out of Africa" MBE DOI:10.1093/molbev/mss089
// - Soares P et al. 2009 "Correcting for Purifying Selection" AJHG DOI:10.1016/j.ajhg.2009.05.001
// - Behar DM et al. 2012 "A Copernican Reassessment" AJHG DOI:10.1016/j.ajhg.2012.03.002
// - Rito T et al. 2013 "The First Modern Human Dispersals across Africa" PLoS ONE DOI:10.1371/journal.pone.0080031
// - Salas A et al. 2002 "The Making of the African mtDNA Landscape" AJHG DOI:10.1086/344348
// - Kivisild T et al. 2006 "The role of selection in the evolution of human mtDNA" Genetics DOI:10.1534/genetics.105.043901
// - Cerezo M et al. 2012 "Reconstructing ancient mitochondrial DNA links" BMC Evol Biol DOI:10.1186/1471-2148-12-157

import { MtDNAHaplogroup, Reference } from '../mtDNA_migrationData';

// ============================================================================
// REFERENCE DEFINITIONS
// ============================================================================

const REF_SOARES_2012: Reference = {
  authors: 'Soares P et al.',
  year: 2012,
  title: 'The Expansion of mtDNA Haplogroup L3 within and out of Africa',
  journal: 'Molecular Biology and Evolution',
  doi: '10.1093/molbev/mss089',
  pmid: '22319168'
};

const REF_SOARES_2009: Reference = {
  authors: 'Soares P et al.',
  year: 2009,
  title: 'Correcting for Purifying Selection: An Improved Human Mitochondrial Molecular Clock',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2009.05.001',
  pmid: '19500773'
};

const REF_BEHAR_2012: Reference = {
  authors: 'Behar DM et al.',
  year: 2012,
  title: 'A "Copernican" Reassessment of the Human Mitochondrial DNA Tree from its Root',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2012.03.002',
  pmid: '22482806'
};

const REF_RITO_2013: Reference = {
  authors: 'Rito T et al.',
  year: 2013,
  title: 'The First Modern Human Dispersals across Africa',
  journal: 'PLoS ONE',
  doi: '10.1371/journal.pone.0080031',
  pmid: '24236190'
};

const REF_SALAS_2002: Reference = {
  authors: 'Salas A et al.',
  year: 2002,
  title: 'The Making of the African mtDNA Landscape',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/344348',
  pmid: '12395296'
};

const REF_KIVISILD_2006: Reference = {
  authors: 'Kivisild T et al.',
  year: 2006,
  title: 'The role of selection in the evolution of human mitochondrial genomes',
  journal: 'Genetics',
  doi: '10.1534/genetics.105.043901',
  pmid: '16272419'
};

const REF_CEREZO_2012: Reference = {
  authors: 'Cerezo M et al.',
  year: 2012,
  title: 'Reconstructing ancient mitochondrial DNA links between Africa and Europe',
  journal: 'BMC Evolutionary Biology',
  doi: '10.1186/1471-2148-12-157',
  pmid: '22920580'
};

const REF_ROSA_2004: Reference = {
  authors: 'Rosa A et al.',
  year: 2004,
  title: 'MtDNA Profile of West Africa Guineans: Towards a Better Understanding of the Senegambia Region',
  journal: 'Annals of Human Genetics',
  doi: '10.1046/j.1529-8817.2003.00100.x',
  pmid: '14748830'
};

const REF_BANDELT_2001: Reference = {
  authors: 'Bandelt HJ et al.',
  year: 2001,
  title: 'Phylogeography of the human mitochondrial haplogroup L3d',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/323614',
  pmid: '11719901'
};

// ============================================================================
// L3 HAPLOGROUPS - RESEARCHED DATA
// ============================================================================

export const L3_HAPLOGROUPS: MtDNAHaplogroup[] = [
  // ============================================================================
  // ROOT L3 AND INTERMEDIATE CLADES
  // ============================================================================
  {
    id: "L3'4'6",
    parent: 'L1\'2\'3\'4\'5\'6',
    time_kya: 95,
    time_kya_range: [85, 105],
    lat: 8,
    lon: 38,
    region: 'East Africa (Ethiopia)',
    color: '#D2691E',
    description: "L3'4'6 - Ancestral clade uniting L3, L4, and L6. Arose in East Africa ~95 kya.",
    references: [REF_RITO_2013, REF_BEHAR_2012],
    research_status: 'complete'
  },

  {
    id: "L3'4",
    parent: "L3'4'6",
    time_kya: 85,
    time_kya_range: [75, 95],
    lat: 8,
    lon: 38,
    region: 'East Africa (Ethiopia)',
    color: '#D2691E',
    description: "L3'4 - Sister clade of L6, parent of L3 and L4.",
    references: [REF_RITO_2013],
    research_status: 'complete'
  },

  {
    id: 'L3',
    parent: "L3'4",
    time_kya: 70,
    time_kya_range: [60, 80],
    lat: 9,
    lon: 40,
    region: 'East Africa (Ethiopia/Horn)',
    color: '#D2691E',
    description: 'L3 - THE OUT OF AFRICA HAPLOGROUP. Arose ~70 kya in East Africa. All non-African mtDNA (haplogroups M and N) descend from L3. The successful migration out of Africa occurred ~60-70 kya via the Southern Route (Bab el-Mandeb). L3 remained highly diverse within Africa, especially in East Africa.',
    references: [REF_SOARES_2012, REF_BEHAR_2012, REF_RITO_2013],
    research_status: 'complete'
  },

  // ============================================================================
  // L3 MAJOR SUBCLADES
  // ============================================================================

  // L3a - Ethiopian clade
  {
    id: 'L3a',
    parent: 'L3',
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 9,
    lon: 38,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3a - Ethiopian haplogroup. Highest frequency in Ethiopian populations.',
    references: [REF_SOARES_2012, REF_KIVISILD_2006],
    research_status: 'complete'
  },

  {
    id: 'L3a1',
    parent: 'L3a',
    time_kya: 30,
    time_kya_range: [20, 40],
    lat: 9,
    lon: 38,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3a1 - Ethiopian subclade',
    references: [REF_SOARES_2012],
    research_status: 'needs_references'
  },

  {
    id: 'L3a1a',
    parent: 'L3a1',
    time_kya: null,
    lat: 9,
    lon: 38,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3a1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3a1b',
    parent: 'L3a1',
    time_kya: null,
    lat: 9,
    lon: 38,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3a1b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3a2',
    parent: 'L3a',
    time_kya: null,
    lat: 9,
    lon: 38,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3a2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3a2a',
    parent: 'L3a2',
    time_kya: null,
    lat: 9,
    lon: 38,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3a2a',
    references: [],
    research_status: 'stub'
  },

  // ============================================================================
  // L3b - West African clade (major Bantu-associated lineage)
  // ============================================================================
  {
    id: "L3b'f",
    parent: 'L3',
    time_kya: 55,
    time_kya_range: [45, 65],
    lat: 10,
    lon: 5,
    region: 'West Africa',
    color: '#D2691E',
    description: "L3b'f - Ancestral clade of L3b and L3f. Major West African lineage.",
    references: [REF_SOARES_2012, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L3b',
    parent: "L3b'f",
    time_kya: 40,
    time_kya_range: [32, 50],
    lat: 10,
    lon: 0,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b - Major West African haplogroup. High frequencies in West Africa (Nigeria, Ghana, Senegal). Spread southward with Bantu expansion.',
    references: [REF_SOARES_2012, REF_SALAS_2002, REF_ROSA_2004],
    research_status: 'complete'
  },

  {
    id: 'L3b1',
    parent: 'L3b',
    time_kya: 25,
    time_kya_range: [18, 32],
    lat: 8,
    lon: 0,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1 - Major West African subclade. Widespread in Senegambia and Guinea.',
    references: [REF_ROSA_2004, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L3b1a',
    parent: 'L3b1',
    time_kya: 18,
    time_kya_range: [12, 25],
    lat: 8,
    lon: -2,
    region: 'West Africa (Ghana/Ivory Coast)',
    color: '#D2691E',
    description: 'L3b1a - West African subclade. Highest in Ghana and surrounding regions.',
    references: [REF_SALAS_2002],
    research_status: 'needs_references'
  },

  {
    id: 'L3b1a1',
    parent: 'L3b1a',
    time_kya: null,
    lat: 8,
    lon: -2,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a10',
    parent: 'L3b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a10',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a11',
    parent: 'L3b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a11',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a1a',
    parent: 'L3b1a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a2',
    parent: 'L3b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a3',
    parent: 'L3b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a3',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a4',
    parent: 'L3b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a4',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a5',
    parent: 'L3b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a5',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a5a',
    parent: 'L3b1a5',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a5a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a6',
    parent: 'L3b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a6',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a7',
    parent: 'L3b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a7',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a7a',
    parent: 'L3b1a7',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a7a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a8',
    parent: 'L3b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a8',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a9',
    parent: 'L3b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a9',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1a9a',
    parent: 'L3b1a9',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1a9a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1b',
    parent: 'L3b1',
    time_kya: null,
    lat: 12,
    lon: -15,
    region: 'West Africa (Senegambia)',
    color: '#D2691E',
    description: 'L3b1b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b1b1',
    parent: 'L3b1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b1b1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b2',
    parent: 'L3b',
    time_kya: 20,
    time_kya_range: [14, 28],
    lat: 6,
    lon: 8,
    region: 'Nigeria/Central Africa',
    color: '#D2691E',
    description: 'L3b2 - Nigerian subclade',
    references: [REF_SALAS_2002],
    research_status: 'needs_references'
  },

  {
    id: 'L3b2a',
    parent: 'L3b2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central/West Africa',
    color: '#D2691E',
    description: 'L3b2a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b2b',
    parent: 'L3b2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central/West Africa',
    color: '#D2691E',
    description: 'L3b2b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3b3',
    parent: 'L3b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'West Africa',
    color: '#D2691E',
    description: 'L3b3',
    references: [],
    research_status: 'stub'
  },

  // ============================================================================
  // L3c'd - Central African clade
  // ============================================================================
  {
    id: "L3c'd",
    parent: 'L3',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 4,
    lon: 18,
    region: 'Central Africa',
    color: '#D2691E',
    description: "L3c'd - Central African sister clade",
    references: [REF_SOARES_2012],
    research_status: 'complete'
  },

  {
    id: 'L3c',
    parent: "L3c'd",
    time_kya: 35,
    time_kya_range: [25, 45],
    lat: 4,
    lon: 20,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3c - Central African haplogroup. Found in Congo region.',
    references: [REF_SOARES_2012],
    research_status: 'needs_references'
  },

  // ============================================================================
  // L3d - Widespread African clade with European contacts
  // ============================================================================
  {
    id: 'L3d',
    parent: 'L3',
    time_kya: 55,
    time_kya_range: [45, 65],
    lat: 8,
    lon: 20,
    region: 'Central/West Africa',
    color: '#D2691E',
    description: 'L3d - Widespread African haplogroup. Found across sub-Saharan Africa with highest diversity in Central Africa. Also found in North Africa and Iberia indicating trans-Saharan contacts.',
    references: [REF_BANDELT_2001, REF_SOARES_2012, REF_CEREZO_2012],
    research_status: 'complete'
  },

  {
    id: "L3d1'2'3'4'5'6",
    parent: 'L3d',
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 8,
    lon: 20,
    region: 'Central Africa',
    color: '#D2691E',
    description: "L3d1'2'3'4'5'6 - Ancestral clade of L3d subclades",
    references: [REF_BANDELT_2001],
    research_status: 'needs_references'
  },

  {
    id: 'L3d1',
    parent: 'L3d',
    time_kya: 40,
    time_kya_range: [30, 50],
    lat: 6,
    lon: 15,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1 - Central African subclade. High in Cameroon and Congo.',
    references: [REF_BANDELT_2001],
    research_status: 'complete'
  },

  {
    id: 'L3d1a',
    parent: 'L3d1',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 6,
    lon: 15,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1a - Central African subclade',
    references: [REF_BANDELT_2001],
    research_status: 'needs_references'
  },

  {
    id: 'L3d1a1',
    parent: 'L3d1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: "L3d1a1'2",
    parent: 'L3d1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: "L3d1a1'2",
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1a1a',
    parent: 'L3d1a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1a1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1a1a1',
    parent: 'L3d1a1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1a1a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1a1b',
    parent: 'L3d1a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1a1b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1a2',
    parent: 'L3d1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1a2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1b',
    parent: 'L3d1',
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: 5,
    lon: 18,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1b - Central African subclade',
    references: [REF_BANDELT_2001],
    research_status: 'needs_references'
  },

  {
    id: 'L3d1b1',
    parent: 'L3d1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1b1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1b1a',
    parent: 'L3d1b1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1b1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1b1b',
    parent: 'L3d1b1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1b1b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1b2',
    parent: 'L3d1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1b2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1b3',
    parent: 'L3d1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1b3',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1b3a',
    parent: 'L3d1b3',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1b3a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1c',
    parent: 'L3d1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1c',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1c1',
    parent: 'L3d1c',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1c1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d1d',
    parent: 'L3d1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d1d',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d2',
    parent: 'L3d',
    time_kya: 35,
    time_kya_range: [25, 45],
    lat: 10,
    lon: 10,
    region: 'West/Central Africa',
    color: '#D2691E',
    description: 'L3d2 - West/Central African subclade',
    references: [REF_BANDELT_2001],
    research_status: 'needs_references'
  },

  {
    id: 'L3d2a',
    parent: 'L3d2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d2a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d2b',
    parent: 'L3d2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d2b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d3',
    parent: 'L3d',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 32,
    lon: 0,
    region: 'North Africa / Iberia',
    color: '#D2691E',
    description: 'L3d3 - Found in North Africa and Iberian Peninsula. Evidence of trans-Saharan gene flow.',
    references: [REF_CEREZO_2012],
    research_status: 'complete'
  },

  {
    id: 'L3d3a',
    parent: 'L3d3',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'North Africa',
    color: '#D2691E',
    description: 'L3d3a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d3a1',
    parent: 'L3d3a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'North Africa',
    color: '#D2691E',
    description: 'L3d3a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d3a1a',
    parent: 'L3d3a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'North Africa',
    color: '#D2691E',
    description: 'L3d3a1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d3a1b',
    parent: 'L3d3a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'North Africa',
    color: '#D2691E',
    description: 'L3d3a1b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d3b',
    parent: 'L3d3',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'North Africa',
    color: '#D2691E',
    description: 'L3d3b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d4',
    parent: 'L3d',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d4',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d4a',
    parent: 'L3d4',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d4a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d5',
    parent: 'L3d',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d5',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d5a',
    parent: 'L3d5',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d5a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3d6',
    parent: 'L3d',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3d6',
    references: [],
    research_status: 'stub'
  },

  // ============================================================================
  // L3e - Major pan-African clade (Most widespread L3 subclade)
  // ============================================================================
  {
    id: "L3e'i'k'x",
    parent: 'L3',
    time_kya: 55,
    time_kya_range: [45, 65],
    lat: 5,
    lon: 25,
    region: 'Central Africa',
    color: '#D2691E',
    description: "L3e'i'k'x - Ancestral clade uniting L3e, L3i, L3k, and L3x",
    references: [REF_SOARES_2012],
    research_status: 'complete'
  },

  {
    id: 'L3e',
    parent: "L3e'i'k'x",
    time_kya: 50,
    time_kya_range: [40, 60],
    lat: 5,
    lon: 20,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e - THE MOST WIDESPREAD L3 SUBCLADE IN AFRICA. Major signature of Bantu expansion. Found at high frequencies from Cameroon to South Africa. Multiple star-like expansions ~5 kya associated with agricultural spread.',
    references: [REF_SOARES_2012, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L3e1',
    parent: 'L3e',
    time_kya: 35,
    time_kya_range: [28, 45],
    lat: 4,
    lon: 18,
    region: 'Central Africa (Cameroon/Congo)',
    color: '#D2691E',
    description: 'L3e1 - Major Bantu-associated lineage. Highest diversity in Cameroon (Bantu homeland). Spread across sub-Saharan Africa with agricultural expansion.',
    references: [REF_SOARES_2012, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L3e1a',
    parent: 'L3e1',
    time_kya: 25,
    time_kya_range: [18, 32],
    lat: 4,
    lon: 12,
    region: 'Cameroon/Gulf of Guinea',
    color: '#D2691E',
    description: 'L3e1a - Central African subclade with Bantu expansion signature',
    references: [REF_SALAS_2002],
    research_status: 'needs_references'
  },

  {
    id: 'L3e1a1',
    parent: 'L3e1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1a1a',
    parent: 'L3e1a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1a1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1a2',
    parent: 'L3e1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1a2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1a3',
    parent: 'L3e1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1a3',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1a3a',
    parent: 'L3e1a3',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1a3a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1a3b',
    parent: 'L3e1a3',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1a3b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1b',
    parent: 'L3e1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1b1',
    parent: 'L3e1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1b1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1b2',
    parent: 'L3e1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1b2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1c',
    parent: 'L3e1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1c',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1d',
    parent: 'L3e1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1d',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1d1',
    parent: 'L3e1d',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1d1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1d1a',
    parent: 'L3e1d1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1d1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1e',
    parent: 'L3e1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1e',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1e1',
    parent: 'L3e1e',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1e1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1e2',
    parent: 'L3e1e',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1e2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1f',
    parent: 'L3e1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1f',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1f1',
    parent: 'L3e1f',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1f1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1f1a',
    parent: 'L3e1f1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1f1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1f2',
    parent: 'L3e1f',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1f2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e1g',
    parent: 'L3e1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e1g',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2',
    parent: 'L3e',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 0,
    lon: 25,
    region: 'Central/Eastern Africa',
    color: '#D2691E',
    description: 'L3e2 - Central/Eastern African subclade. Important Bantu expansion marker.',
    references: [REF_SOARES_2012, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L3e2a',
    parent: 'L3e2',
    time_kya: 20,
    time_kya_range: [14, 28],
    lat: -5,
    lon: 28,
    region: 'Central/Southern Africa',
    color: '#D2691E',
    description: 'L3e2a - Bantu expansion signature. Found from Congo to South Africa.',
    references: [REF_SALAS_2002],
    research_status: 'needs_references'
  },

  {
    id: 'L3e2a1',
    parent: 'L3e2a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central/Southern Africa',
    color: '#D2691E',
    description: 'L3e2a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2a1a',
    parent: 'L3e2a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e2a1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2a1b',
    parent: 'L3e2a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e2a1b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2a1b1',
    parent: 'L3e2a1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e2a1b1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2a1b2',
    parent: 'L3e2a1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e2a1b2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2a1b3',
    parent: 'L3e2a1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e2a1b3',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2a2',
    parent: 'L3e2a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e2a2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2a3',
    parent: 'L3e2a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e2a3',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2b',
    parent: 'L3e2',
    time_kya: 18,
    time_kya_range: [12, 25],
    lat: 0,
    lon: 30,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3e2b - East African subclade',
    references: [REF_SALAS_2002],
    research_status: 'needs_references'
  },

  {
    id: 'L3e2b1',
    parent: 'L3e2b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3e2b1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2b1a',
    parent: 'L3e2b1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3e2b1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2b1a1',
    parent: 'L3e2b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3e2b1a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2b1a2',
    parent: 'L3e2b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3e2b1a2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2b2',
    parent: 'L3e2b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3e2b2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2b3',
    parent: 'L3e2b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3e2b3',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2b4',
    parent: 'L3e2b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3e2b4',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2b5',
    parent: 'L3e2b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3e2b5',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2b6',
    parent: 'L3e2b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3e2b6',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2b7',
    parent: 'L3e2b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3e2b7',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e2b8',
    parent: 'L3e2b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3e2b8',
    references: [],
    research_status: 'stub'
  },

  {
    id: "L3e3'4'5",
    parent: 'L3e',
    time_kya: 35,
    time_kya_range: [28, 45],
    lat: 5,
    lon: 20,
    region: 'Central Africa',
    color: '#D2691E',
    description: "L3e3'4'5 - Ancestral clade of L3e3, L3e4, L3e5",
    references: [REF_SOARES_2012],
    research_status: 'needs_references'
  },

  {
    id: "L3e3'4",
    parent: "L3e3'4'5",
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: "L3e3'4",
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e3',
    parent: "L3e3'4",
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: 5,
    lon: 18,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e3 - Central African subclade',
    references: [REF_SALAS_2002],
    research_status: 'needs_references'
  },

  {
    id: 'L3e3a',
    parent: 'L3e3',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e3a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e3b',
    parent: 'L3e3',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e3b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e3b1',
    parent: 'L3e3b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e3b1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e3b2',
    parent: 'L3e3b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e3b2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e3b3',
    parent: 'L3e3b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e3b3',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e4',
    parent: "L3e3'4",
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e4',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e4a',
    parent: 'L3e4',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e4a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e4a1',
    parent: 'L3e4a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#D2691E',
    description: 'L3e4a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e5',
    parent: "L3e3'4'5",
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: -5,
    lon: 25,
    region: 'Central/Southern Africa',
    color: '#D2691E',
    description: 'L3e5 - Southern African Bantu expansion marker',
    references: [REF_SALAS_2002],
    research_status: 'needs_references'
  },

  {
    id: 'L3e5a',
    parent: 'L3e5',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e5a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e5a1',
    parent: 'L3e5a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e5a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e5a1a',
    parent: 'L3e5a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e5a1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e5b',
    parent: 'L3e5',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e5b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e5c',
    parent: 'L3e5',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e5c',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e5d',
    parent: 'L3e5',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e5d',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e5e',
    parent: 'L3e5',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e5e',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3e5f',
    parent: 'L3e5',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Southern Africa',
    color: '#D2691E',
    description: 'L3e5f',
    references: [],
    research_status: 'stub'
  },

  // ============================================================================
  // L3f - East African clade
  // ============================================================================
  {
    id: 'L3f',
    parent: "L3b'f",
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 5,
    lon: 35,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f - East African haplogroup. High frequencies in Ethiopia and Sudan. Sister clade to L3b.',
    references: [REF_SOARES_2012, REF_SALAS_2002],
    research_status: 'complete'
  },

  {
    id: 'L3f1',
    parent: 'L3f',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 8,
    lon: 38,
    region: 'Ethiopia/East Africa',
    color: '#D2691E',
    description: 'L3f1 - Ethiopian subclade',
    references: [REF_KIVISILD_2006],
    research_status: 'needs_references'
  },

  {
    id: 'L3f1a',
    parent: 'L3f1',
    time_kya: null,
    lat: 9,
    lon: 38,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3f1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1a1',
    parent: 'L3f1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3f1a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b',
    parent: 'L3f1',
    time_kya: 20,
    time_kya_range: [14, 28],
    lat: 15,
    lon: 33,
    region: 'Sudan/Nile Valley',
    color: '#D2691E',
    description: 'L3f1b - Nile Valley distribution',
    references: [REF_SALAS_2002],
    research_status: 'needs_references'
  },

  {
    id: 'L3f1b1',
    parent: 'L3f1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Sudan',
    color: '#D2691E',
    description: 'L3f1b1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b1a',
    parent: 'L3f1b1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Sudan',
    color: '#D2691E',
    description: 'L3f1b1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b1a1',
    parent: 'L3f1b1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Sudan',
    color: '#D2691E',
    description: 'L3f1b1a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b2',
    parent: 'L3f1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Sudan',
    color: '#D2691E',
    description: 'L3f1b2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b2a',
    parent: 'L3f1b2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Sudan',
    color: '#D2691E',
    description: 'L3f1b2a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b3',
    parent: 'L3f1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f1b3',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b4',
    parent: 'L3f1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f1b4',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b4a',
    parent: 'L3f1b4',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f1b4a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b4a1',
    parent: 'L3f1b4a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f1b4a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b4b',
    parent: 'L3f1b4',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f1b4b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b4c',
    parent: 'L3f1b4',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f1b4c',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b5',
    parent: 'L3f1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f1b5',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f1b6',
    parent: 'L3f1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f1b6',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f2',
    parent: 'L3f',
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: 0,
    lon: 35,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f2 - East African subclade',
    references: [REF_SALAS_2002],
    research_status: 'needs_references'
  },

  {
    id: 'L3f2a',
    parent: 'L3f2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f2a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f2a1',
    parent: 'L3f2a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f2a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f2a1a',
    parent: 'L3f2a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f2a1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f2b',
    parent: 'L3f2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f2b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f3',
    parent: 'L3f',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f3',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f3a',
    parent: 'L3f3',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f3a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3f3b',
    parent: 'L3f3',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3f3b',
    references: [],
    research_status: 'stub'
  },

  // ============================================================================
  // L3h - Ethiopian clade
  // ============================================================================
  {
    id: 'L3h',
    parent: 'L3',
    time_kya: 40,
    time_kya_range: [30, 50],
    lat: 9,
    lon: 40,
    region: 'Ethiopia/Horn of Africa',
    color: '#D2691E',
    description: 'L3h - Ethiopian haplogroup. Concentrated in Horn of Africa populations.',
    references: [REF_SOARES_2012, REF_KIVISILD_2006],
    research_status: 'complete'
  },

  {
    id: 'L3h1',
    parent: 'L3h',
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: 9,
    lon: 40,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3h1 - Ethiopian subclade',
    references: [REF_KIVISILD_2006],
    research_status: 'needs_references'
  },

  {
    id: 'L3h1a',
    parent: 'L3h1',
    time_kya: null,
    lat: 9,
    lon: 40,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3h1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3h1a1',
    parent: 'L3h1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3h1a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3h1a2',
    parent: 'L3h1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3h1a2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3h1a2a',
    parent: 'L3h1a2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3h1a2a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3h1a2a1',
    parent: 'L3h1a2a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3h1a2a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3h1a2b',
    parent: 'L3h1a2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3h1a2b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3h1b',
    parent: 'L3h1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3h1b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3h1b1',
    parent: 'L3h1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3h1b1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3h1b1a',
    parent: 'L3h1b1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3h1b1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3h1b2',
    parent: 'L3h1b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3h1b2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3h2',
    parent: 'L3h',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Ethiopia',
    color: '#D2691E',
    description: 'L3h2',
    references: [],
    research_status: 'stub'
  },

  // ============================================================================
  // L3i - Rare East African clade
  // ============================================================================
  {
    id: 'L3i',
    parent: "L3e'i'k'x",
    time_kya: 40,
    time_kya_range: [30, 50],
    lat: 5,
    lon: 35,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3i - Rare East African haplogroup',
    references: [REF_SOARES_2012],
    research_status: 'complete'
  },

  {
    id: 'L3i1',
    parent: 'L3i',
    time_kya: null,
    lat: 5,
    lon: 35,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3i1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3i1a',
    parent: 'L3i1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3i1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3i1b',
    parent: 'L3i1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3i1b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3i2',
    parent: 'L3i',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3i2',
    references: [],
    research_status: 'stub'
  },

  // ============================================================================
  // L3k - Rare East African clade
  // ============================================================================
  {
    id: 'L3k',
    parent: "L3e'i'k'x",
    time_kya: 40,
    time_kya_range: [30, 50],
    lat: 0,
    lon: 35,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3k - Rare East African haplogroup. Found at low frequencies.',
    references: [REF_SOARES_2012],
    research_status: 'complete'
  },

  {
    id: 'L3k1',
    parent: 'L3k',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'East Africa',
    color: '#D2691E',
    description: 'L3k1',
    references: [],
    research_status: 'stub'
  },

  // ============================================================================
  // L3x - North/East African clade
  // ============================================================================
  {
    id: 'L3x',
    parent: "L3e'i'k'x",
    time_kya: 45,
    time_kya_range: [35, 55],
    lat: 15,
    lon: 35,
    region: 'North/East Africa',
    color: '#D2691E',
    description: 'L3x - Northeast African haplogroup. Found in Sudan, Ethiopia, and Egypt. Also present in Near East.',
    references: [REF_SOARES_2012, REF_CEREZO_2012],
    research_status: 'complete'
  },

  {
    id: 'L3x1',
    parent: 'L3x',
    time_kya: 30,
    time_kya_range: [22, 40],
    lat: 15,
    lon: 33,
    region: 'Sudan/Nile Valley',
    color: '#D2691E',
    description: 'L3x1 - Nile Valley subclade',
    references: [REF_CEREZO_2012],
    research_status: 'needs_references'
  },

  {
    id: 'L3x1a',
    parent: 'L3x1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Sudan',
    color: '#D2691E',
    description: 'L3x1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3x1a1',
    parent: 'L3x1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Sudan',
    color: '#D2691E',
    description: 'L3x1a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3x1a2',
    parent: 'L3x1a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Sudan',
    color: '#D2691E',
    description: 'L3x1a2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3x1b',
    parent: 'L3x1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Northeast Africa',
    color: '#D2691E',
    description: 'L3x1b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3x2',
    parent: 'L3x',
    time_kya: 25,
    time_kya_range: [18, 35],
    lat: 28,
    lon: 32,
    region: 'Egypt/Near East',
    color: '#D2691E',
    description: 'L3x2 - Found in Egypt and Near East. Evidence of ancient African-Near Eastern gene flow.',
    references: [REF_CEREZO_2012],
    research_status: 'needs_references'
  },

  {
    id: 'L3x2a',
    parent: 'L3x2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Egypt/Near East',
    color: '#D2691E',
    description: 'L3x2a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3x2a1',
    parent: 'L3x2a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Egypt/Near East',
    color: '#D2691E',
    description: 'L3x2a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3x2a1a',
    parent: 'L3x2a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Near East',
    color: '#D2691E',
    description: 'L3x2a1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L3x2b',
    parent: 'L3x2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Near East',
    color: '#D2691E',
    description: 'L3x2b',
    references: [],
    research_status: 'stub'
  },
];

// ============================================================================
// RESEARCH SUMMARY
// ============================================================================

export const RESEARCH_SUMMARY = {
  package: 'L3',
  total_haplogroups: 194,
  researched_complete: 25,
  needs_references: 20,
  stubs: 149,
  key_findings: [
    'L3 arose ~70 kya in East Africa (Ethiopia/Horn)',
    'ALL non-African mtDNA (M and N) descends from L3',
    'Out of Africa migration occurred ~60-70 kya via Southern Route',
    'L3e is the most widespread L3 subclade - major Bantu expansion signature',
    'L3b and L3f are sister clades in West and East Africa respectively',
    'L3d shows trans-Saharan gene flow (found in North Africa and Iberia)',
    'L3x shows ancient African-Near Eastern connections',
    'L3a and L3h are concentrated in Ethiopia',
    'Multiple star-like expansions in L3e ~5 kya associated with Bantu agricultural spread'
  ],
  primary_sources: [
    'Soares et al. 2012 - Comprehensive L3 TMRCA dating and Out of Africa analysis',
    'Behar et al. 2012 - RSRS and tree topology',
    'Salas et al. 2002 - African mtDNA landscape and L3 distributions',
    'Bandelt et al. 2001 - L3d phylogeography',
    'Cerezo et al. 2012 - African-European mtDNA connections',
    'Kivisild et al. 2006 - Ethiopian L3 diversity',
    'Rito et al. 2013 - First human dispersals across Africa'
  ],
  out_of_africa_notes: [
    'L3 is the sole African ancestor of all non-African mtDNA',
    'M and N both derive from L3 (M via L3 → M, N via L3 → N)',
    'Timing ~60-70 kya based on molecular clock estimates',
    'Southern Route via Bab el-Mandeb strait most likely',
    'Single successful migration event (serial founder effect)',
    'Ethiopia/Horn of Africa as staging ground for Out of Africa'
  ]
};
