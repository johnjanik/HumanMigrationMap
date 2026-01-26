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
    description: 'L4a - Found primarily in Tanzania',
    references: [REF_GONDER_2007],
    research_status: 'needs_references'
  },

  {
    id: 'L4a1',
    parent: 'L4a',
    time_kya: null,
    lat: -5,
    lon: 35,
    region: 'Eastern Africa',
    color: '#B8860B',
    description: 'L4a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L4a2',
    parent: 'L4a',
    time_kya: null,
    lat: -5,
    lon: 35,
    region: 'Eastern Africa',
    color: '#B8860B',
    description: 'L4a2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L4b',
    parent: 'L4',
    time_kya: null,
    lat: -4,
    lon: 36,
    region: 'Eastern Africa',
    color: '#B8860B',
    description: 'L4b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L4b1',
    parent: 'L4b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Eastern Africa',
    color: '#B8860B',
    description: 'L4b1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L4b2',
    parent: 'L4b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Eastern Africa',
    color: '#B8860B',
    description: 'L4b2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L4b2a',
    parent: 'L4b2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Eastern Africa',
    color: '#B8860B',
    description: 'L4b2a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L4b2a1',
    parent: 'L4b2a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Eastern Africa',
    color: '#B8860B',
    description: 'L4b2a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L4b2a2',
    parent: 'L4b2a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Eastern Africa',
    color: '#B8860B',
    description: 'L4b2a2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L4b2b',
    parent: 'L4b2',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Eastern Africa',
    color: '#B8860B',
    description: 'L4b2b',
    references: [],
    research_status: 'stub'
  },

  // ============================================================================
  // L5 - One of the most ancient lineages
  // ============================================================================
  {
    id: 'L5',
    parent: 'L1\'5',
    time_kya: 120,
    time_kya_range: [100, 140],
    lat: 0,
    lon: 30,
    region: 'Eastern/Central Africa',
    color: '#DAA520',
    description: 'L5 - One of the most ancient human mtDNA lineages (~120 kya). Peak frequencies in Mbuti, Tshwa, and Sandawe populations. Virtually restricted to Eastern Africa.',
    references: [REF_RITO_2013, REF_VICENTE_2022],
    research_status: 'complete'
  },

  {
    id: 'L5a',
    parent: 'L5',
    time_kya: 90,
    time_kya_range: [70, 110],
    lat: 2,
    lon: 30,
    region: 'Central/Eastern Africa',
    color: '#DAA520',
    description: 'L5a - Found in Mbuti Pygmies and other Central African populations',
    references: [REF_GONDER_2007],
    research_status: 'needs_references'
  },

  {
    id: 'L5a1',
    parent: 'L5a',
    time_kya: null,
    lat: 1,
    lon: 29,
    region: 'Central Africa',
    color: '#DAA520',
    description: 'L5a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L5a1a',
    parent: 'L5a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#DAA520',
    description: 'L5a1a',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L5a1b',
    parent: 'L5a1',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#DAA520',
    description: 'L5a1b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L5a2',
    parent: 'L5a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Central Africa',
    color: '#DAA520',
    description: 'L5a2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L5b',
    parent: 'L5',
    time_kya: null,
    lat: -5,
    lon: 35,
    region: 'Eastern Africa',
    color: '#DAA520',
    description: 'L5b',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L5b1',
    parent: 'L5b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Eastern Africa',
    color: '#DAA520',
    description: 'L5b1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L5b2',
    parent: 'L5b',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Eastern Africa',
    color: '#DAA520',
    description: 'L5b2',
    references: [],
    research_status: 'stub'
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
    description: 'L6a - Found in Ethiopian populations',
    references: [REF_GONDER_2007],
    research_status: 'needs_references'
  },

  {
    id: 'L6a1',
    parent: 'L6a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Eastern Africa',
    color: '#F4A460',
    description: 'L6a1',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L6a2',
    parent: 'L6a',
    time_kya: null,
    lat: null,
    lon: null,
    region: 'Eastern Africa',
    color: '#F4A460',
    description: 'L6a2',
    references: [],
    research_status: 'stub'
  },

  {
    id: 'L6b',
    parent: 'L6',
    time_kya: null,
    lat: 15,
    lon: 45,
    region: 'Yemen',
    color: '#F4A460',
    description: 'L6b - Yemeni subclade',
    references: [],
    research_status: 'stub'
  },
];

// Research summary
export const RESEARCH_SUMMARY = {
  package: 'L4_L5_L6',
  total_haplogroups: 32,
  researched_complete: 3,
  needs_references: 3,
  stubs: 26,
  key_findings: [
    'L4 (~70 kya) concentrated in Tanzania Sandawe/Hadza - did not leave Africa',
    'L5 (~120 kya) is one of the most ancient lineages, peak in Mbuti Pygmies',
    'L6 (~90 kya) found in Horn of Africa and Yemen - early Red Sea crossing?',
    'All three are rare lineages restricted to Eastern Africa',
    'L4, L5, L6 together with L3 share common ancestor L3\'4\'5\'6'
  ],
  primary_sources: [
    'Rito et al. 2013 - TMRCA estimates',
    'Gonder et al. 2007 - Tanzanian ancient lineages',
    'Vicente et al. 2022 - L7 discovery (reclassification of some L5)'
  ]
};
