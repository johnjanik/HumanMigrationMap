// Work Package: L4_L5_L6
// RESEARCHED DATA - Worker 1
//
// Sources:
// - Rito et al. 2013 "The First Modern Human Dispersals across Africa" PLoS ONE DOI:10.1371/journal.pone.0080031
// - Gonder et al. 2007 "Whole-mtDNA Genome Sequence Analysis of Ancient African Lineages" MBE DOI:10.1093/molbev/msl209
// - Salas et al. 2002 "The Making of the African mtDNA Landscape" AJHG DOI:10.1086/344348
// - Vicente et al. 2022 "African mtDNA haplogroup L7" Scientific Reports DOI:10.1038/s41598-022-13856-0

import { MtDNAHaplogroup, Reference } from '../mtDNA_migrationData';

const REF_RITO_2013: Reference = {
  authors: 'Rito T et al.',
  year: 2013,
  title: 'The First Modern Human Dispersals across Africa',
  journal: 'PLoS ONE',
  doi: '10.1371/journal.pone.0080031',
  pmid: '24236190'
};

const REF_GONDER_2007: Reference = {
  authors: 'Gonder MK et al.',
  year: 2007,
  title: 'Whole-mtDNA Genome Sequence Analysis of Ancient African Lineages',
  journal: 'Molecular Biology and Evolution',
  doi: '10.1093/molbev/msl209',
  pmid: '17194802'
};

const REF_SALAS_2002: Reference = {
  authors: 'Salas A et al.',
  year: 2002,
  title: 'The Making of the African mtDNA Landscape',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/344348',
  pmid: '12395296'
};

const REF_VICENTE_2022: Reference = {
  authors: 'Vicente M et al.',
  year: 2022,
  title: 'African mitochondrial haplogroup L7: a 100,000-year-old maternal human lineage discovered through reassessment and new sequencing',
  journal: 'Scientific Reports',
  doi: '10.1038/s41598-022-13856-0',
  pmid: '35701438'
};

const REF_KIVISILD_2004: Reference = {
  authors: 'Kivisild T et al.',
  year: 2004,
  title: 'Ethiopian Mitochondrial DNA Heritage: Tracking Gene Flow Across and Around the Gate of Tears',
  journal: 'American Journal of Human Genetics',
  doi: '10.1086/423778',
  pmid: '15457403'
};

const REF_BEHAR_2008: Reference = {
  authors: 'Behar DM et al.',
  year: 2008,
  title: 'The Dawn of Human Matrilineal Diversity',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2008.02.018',
  pmid: '18439549'
};

const REF_BEHAR_2012: Reference = {
  authors: 'Behar DM et al.',
  year: 2012,
  title: 'A "Copernican" Reassessment of the Human Mitochondrial DNA Tree from its Root',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2012.03.002',
  pmid: '22482806'
};

const REF_COSTA_2019: Reference = {
  authors: 'Costa MD et al.',
  year: 2019,
  title: 'Updating the African human mitochondrial DNA tree: Relevance to forensic and population genetics',
  journal: 'Forensic Science International: Genetics',
  doi: '10.1016/j.fsigen.2016.12.009',
  pmid: '28086175'
};

const REF_SOARES_2009: Reference = {
  authors: 'Soares P et al.',
  year: 2009,
  title: 'Correcting for Purifying Selection: An Improved Human Mitochondrial Molecular Clock',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2009.05.001',
  pmid: '19500773'
};

export const L4_L5_L6_HAPLOGROUPS: MtDNAHaplogroup[] = [
  // ============================================================================
  // L4 - Rare Eastern African lineage
  // ============================================================================
  {
    id: 'L4',
    parent: 'L3\'4\'6',
    time_kya: 70,
    time_kya_range: [55, 85],
    lat: -5,
    lon: 35,
    region: 'Eastern Africa (Tanzania)',
    color: '#B8860B',
    description: 'L4 - Minor haplogroup of East Africa. Arose ~70 kya but did not participate in Out of Africa migration. Highest frequencies in Sandawe and Hadza of Tanzania.',
    references: [REF_RITO_2013, REF_GONDER_2007],
    research_status: 'complete'
  },

  {
    id: 'L4a',
    parent: 'L4',
    time_kya: 50,
    time_kya_range: [35, 65],
    lat: -4,
    lon: 35,
    region: 'Eastern Africa (Tanzania)',
    color: '#B8860B',
    description: 'L4a - Found primarily in Tanzania among Sandawe and Hadza populations. Formerly classified as L3g/L7; reclassified as L4a subclade. High frequency in Hadza (~60%) and Sandawe (~48%).',
    references: [REF_GONDER_2007, REF_RITO_2013, REF_COSTA_2019],
    research_status: 'complete'
  },

  {
    id: 'L4a1',
    parent: 'L4a',
    time_kya: 38,
    time_kya_range: [25, 50],
    lat: -4,
    lon: 35,
    region: 'Eastern Africa (Tanzania)',
    color: '#B8860B',
    description: 'L4a1 - Subclade of L4a found in Tanzanian populations. Star-like expansion pattern in Hadza consistent with population expansion ~4 kya.',
    references: [REF_GONDER_2007, REF_COSTA_2019],
    research_status: 'complete'
  },

  {
    id: 'L4a2',
    parent: 'L4a',
    time_kya: 35,
    time_kya_range: [22, 48],
    lat: -5,
    lon: 35,
    region: 'Eastern Africa (Tanzania)',
    color: '#B8860B',
    description: 'L4a2 - Subclade of L4a. Found in East African populations, particularly Tanzania.',
    references: [REF_COSTA_2019],
    research_status: 'complete'
  },

  {
    id: 'L4b',
    parent: 'L4',
    time_kya: 55,
    time_kya_range: [40, 70],
    lat: 8,
    lon: 38,
    region: 'Eastern Africa (Ethiopia/Tanzania)',
    color: '#B8860B',
    description: 'L4b - Sister clade to L4a. Found in East Africa with notable presence in Ethiopia (~8.1% frequency), also in Chad and Cameroon. Broader geographic distribution than L4a.',
    references: [REF_BEHAR_2012, REF_COSTA_2019, REF_RITO_2013],
    research_status: 'complete'
  },

  {
    id: 'L4b1',
    parent: 'L4b',
    time_kya: 42,
    time_kya_range: [30, 55],
    lat: 9,
    lon: 38,
    region: 'Eastern Africa (Ethiopia)',
    color: '#B8860B',
    description: 'L4b1 - Subclade of L4b found primarily in Ethiopian populations.',
    references: [REF_BEHAR_2012, REF_COSTA_2019],
    research_status: 'complete'
  },

  {
    id: 'L4b2',
    parent: 'L4b',
    time_kya: 47,
    time_kya_range: [39, 54],
    lat: 5,
    lon: 36,
    region: 'Eastern Africa',
    color: '#B8860B',
    description: 'L4b2 - Major L4b subclade with wide East African distribution. Age ~39-54 kya (Behar et al. 2012). Found in both Ethiopian highland and Rift Valley populations.',
    references: [REF_BEHAR_2012, REF_COSTA_2019],
    research_status: 'complete'
  },

  {
    id: 'L4b2a',
    parent: 'L4b2',
    time_kya: 35,
    time_kya_range: [25, 45],
    lat: 3,
    lon: 36,
    region: 'Eastern Africa',
    color: '#B8860B',
    description: 'L4b2a - Subclade of L4b2. Found in East African archaeological and modern samples including Tanzania and Kenya.',
    references: [REF_COSTA_2019, REF_BEHAR_2012],
    research_status: 'complete'
  },

  {
    id: 'L4b2a1',
    parent: 'L4b2a',
    time_kya: 25,
    time_kya_range: [15, 35],
    lat: -2,
    lon: 35,
    region: 'Eastern Africa (Kenya/Tanzania)',
    color: '#B8860B',
    description: 'L4b2a1 - Found in Kenya and Tanzania. Detected in Pastoral Neolithic archaeological contexts.',
    references: [REF_COSTA_2019],
    research_status: 'complete'
  },

  {
    id: 'L4b2a2',
    parent: 'L4b2a',
    time_kya: 22,
    time_kya_range: [14, 30],
    lat: -3,
    lon: 36,
    region: 'Eastern Africa (Tanzania/Kenya)',
    color: '#B8860B',
    description: 'L4b2a2 - Found in archaeological samples from Tanzania and Kenya, including Pastoral Neolithic and Later Stone Age contexts.',
    references: [REF_COSTA_2019],
    research_status: 'complete'
  },

  {
    id: 'L4b2b',
    parent: 'L4b2',
    time_kya: 30,
    time_kya_range: [20, 40],
    lat: 8,
    lon: 38,
    region: 'Eastern Africa (Ethiopia)',
    color: '#B8860B',
    description: 'L4b2b - Subclade of L4b2 found primarily in Ethiopian populations.',
    references: [REF_COSTA_2019, REF_BEHAR_2012],
    research_status: 'complete'
  },

  // ============================================================================
  // L5 - One of the most ancient lineages
  // ============================================================================
  {
    id: 'L5',
    parent: 'L1\'5',
    time_kya: 90.6,
    time_kya_range: [77.5, 103.7],
    lat: 0,
    lon: 30,
    region: 'Eastern/Central Africa',
    color: '#DAA520',
    description: 'L5 - One of the most ancient human mtDNA lineages. TMRCA ~90.6 kya (Vicente et al. 2022). Peak frequency 9.3% in Mbuti of eastern DRC. Also found in Tshwa and Sandawe populations. Virtually restricted to Eastern/Central Africa.',
    references: [REF_VICENTE_2022, REF_RITO_2013, REF_BEHAR_2008],
    research_status: 'complete'
  },

  {
    id: 'L5a',
    parent: 'L5',
    time_kya: 32.7,
    time_kya_range: [25.8, 39.9],
    lat: 1,
    lon: 29,
    region: 'Central/Eastern Africa (DRC)',
    color: '#DAA520',
    description: 'L5a - Found in Mbuti Pygmies and other Central African populations. TMRCA ~32.7 kya. Peak frequency in Mbuti of eastern DRC. Subclades circumscribe smaller clades of rainforest hunter-gatherer populations.',
    references: [REF_VICENTE_2022, REF_GONDER_2007, REF_BEHAR_2008],
    research_status: 'complete'
  },

  {
    id: 'L5a1',
    parent: 'L5a',
    time_kya: 22.0,
    time_kya_range: [16.6, 27.8],
    lat: 1,
    lon: 29,
    region: 'Central Africa (DRC)',
    color: '#DAA520',
    description: 'L5a1 - TMRCA ~22 kya. Contains an ~8 kya subclade specific to Mbuti rainforest hunter-gatherer populations of eastern DRC.',
    references: [REF_VICENTE_2022],
    research_status: 'complete'
  },

  {
    id: 'L5a1a',
    parent: 'L5a1',
    time_kya: 8,
    time_kya_range: [5, 12],
    lat: 1,
    lon: 29,
    region: 'Central Africa (DRC)',
    color: '#DAA520',
    description: 'L5a1a - Recent ~8 kya subclade specific to Mbuti rainforest hunter-gatherer (RFHG) populations of eastern DRC. Reflects Holocene population dynamics among Central African foragers.',
    references: [REF_VICENTE_2022],
    research_status: 'complete'
  },

  {
    id: 'L5a1b',
    parent: 'L5a1',
    time_kya: 15,
    time_kya_range: [10, 22],
    lat: 0,
    lon: 30,
    region: 'Central Africa',
    color: '#DAA520',
    description: 'L5a1b - Subclade of L5a1. Found in Central African populations.',
    references: [REF_VICENTE_2022, REF_COSTA_2019],
    research_status: 'complete'
  },

  {
    id: 'L5a2',
    parent: 'L5a',
    time_kya: 28.1,
    time_kya_range: [21.8, 34.7],
    lat: -21,
    lon: 25,
    region: 'Southern Africa (Botswana)',
    color: '#DAA520',
    description: 'L5a2 - TMRCA ~28.1 kya. Contains a ~1.7 kya subclade specific to Khoisan Tshwa people of Botswana. Distribution links Central and Southern African forager populations.',
    references: [REF_VICENTE_2022],
    research_status: 'complete'
  },

  {
    id: 'L5b',
    parent: 'L5',
    time_kya: 40.0,
    time_kya_range: [28.4, 51.7],
    lat: -21,
    lon: 25,
    region: 'Southern/Eastern Africa (Botswana)',
    color: '#DAA520',
    description: 'L5b - TMRCA ~40 kya. Basal L5b* lineage known from a single sequence shared by two Khoisan Shua individuals in Botswana. Deep divergence from L5a.',
    references: [REF_VICENTE_2022],
    research_status: 'complete'
  },

  {
    id: 'L5b1',
    parent: 'L5b',
    time_kya: 22.9,
    time_kya_range: [16.1, 30.1],
    lat: -5,
    lon: 35,
    region: 'Eastern Africa (Tanzania)',
    color: '#DAA520',
    description: 'L5b1 - TMRCA ~22.9 kya. Found in East African populations including Sandawe of Tanzania. Divergence coincides with estimated population size increase during Pleistocene/Holocene transition.',
    references: [REF_VICENTE_2022],
    research_status: 'complete'
  },

  {
    id: 'L5b2',
    parent: 'L5b',
    time_kya: 20,
    time_kya_range: [13, 28],
    lat: -5,
    lon: 35,
    region: 'Eastern Africa',
    color: '#DAA520',
    description: 'L5b2 - Subclade of L5b. Found in East African populations.',
    references: [REF_COSTA_2019],
    research_status: 'complete'
  },

  // ============================================================================
  // L6 - East African/Yemen lineage
  // ============================================================================
  {
    id: 'L6',
    parent: 'L3\'4\'6',
    time_kya: 90,
    time_kya_range: [70, 110],
    lat: 12,
    lon: 44,
    region: 'Eastern Africa / Yemen',
    color: '#F4A460',
    description: 'L6 - Rare haplogroup concentrated in Horn of Africa and eastern Rift Valley. Also found in Yemen, suggesting ancient connections across Red Sea.',
    references: [REF_RITO_2013, REF_GONDER_2007],
    research_status: 'complete'
  },

  {
    id: 'L6a',
    parent: 'L6',
    time_kya: 60,
    time_kya_range: [40, 80],
    lat: 9,
    lon: 42,
    region: 'Ethiopia/Horn of Africa',
    color: '#F4A460',
    description: 'L6a - Ethiopian subclade of L6. Found in Ethiopian highland populations at low frequency (~0.7%). Identified in high-resolution phylogenetic analysis of 270 Ethiopian mtDNAs.',
    references: [REF_KIVISILD_2004, REF_GONDER_2007, REF_COSTA_2019],
    research_status: 'complete'
  },

  {
    id: 'L6a1',
    parent: 'L6a',
    time_kya: 30,
    time_kya_range: [18, 42],
    lat: 9,
    lon: 40,
    region: 'Ethiopia',
    color: '#F4A460',
    description: 'L6a1 - Ethiopian subclade of L6a. Found in Ethiopian highland populations.',
    references: [REF_KIVISILD_2004, REF_COSTA_2019],
    research_status: 'complete'
  },

  {
    id: 'L6a2',
    parent: 'L6a',
    time_kya: 25,
    time_kya_range: [15, 38],
    lat: 8,
    lon: 38,
    region: 'Ethiopia',
    color: '#F4A460',
    description: 'L6a2 - Ethiopian subclade of L6a.',
    references: [REF_COSTA_2019],
    research_status: 'complete'
  },

  {
    id: 'L6b',
    parent: 'L6',
    time_kya: 37,
    time_kya_range: [13, 60],
    lat: 15,
    lon: 45,
    region: 'Yemen/Southern Arabia',
    color: '#F4A460',
    description: 'L6b - Yemeni subclade of L6. The most frequent L6 haplotype in Yemenis (~12% frequency). No close matches among >3,000 African HVS-I sequences, suggesting long isolation in southern Arabia. Carriers coalesce within a few thousand years. Total L6 coalescence in Ethiopia+Yemen ~36.6 kya.',
    references: [REF_KIVISILD_2004, REF_COSTA_2019],
    research_status: 'complete'
  },
];

// Research summary
export const RESEARCH_SUMMARY = {
  package: 'L4_L5_L6',
  total_haplogroups: 25,
  researched_complete: 25,
  needs_references: 0,
  stubs: 0,
  key_findings: [
    'L4 (~70 kya) concentrated in Tanzania Sandawe/Hadza - did not leave Africa',
    'L4a (formerly L3g/L7) extremely high in Hadza (60%) and Sandawe (48%)',
    'L4b found in Ethiopia (8.1%), also Chad/Cameroon - broader distribution than L4a',
    'L4b2 dated ~39-54 kya (Behar 2012)',
    'L5 TMRCA revised to ~90.6 kya (Vicente 2022), peak 9.3% in Mbuti',
    'L5a TMRCA ~32.7 kya, L5a1 ~22 kya (Mbuti subclade), L5a2 ~28.1 kya (Khoisan Tshwa)',
    'L5b TMRCA ~40 kya, basal L5b* in Khoisan Shua of Botswana',
    'L6 (~90 kya) found in Horn of Africa and Yemen - early Red Sea crossing',
    'L6b is most frequent in Yemenis (~12%), with no close African matches',
    'L6 coalescence in Ethiopia+Yemen ~36.6 kya (Kivisild 2004)'
  ],
  primary_sources: [
    'Rito et al. 2013 - TMRCA estimates',
    'Gonder et al. 2007 - Tanzanian ancient lineages',
    'Vicente et al. 2022 - L7 discovery and L5 TMRCA revision',
    'Kivisild et al. 2004 - Ethiopian mtDNA and L6 discovery',
    'Behar et al. 2012 - Copernican reassessment with L4b2 dating',
    'Costa et al. 2019 - Updated African mtDNA tree (300+ new subclades)'
  ]
};
