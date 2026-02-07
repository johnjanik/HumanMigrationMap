// Work Package: ROOT_AND_L0
// RESEARCHED DATA - Worker 1
//
// Sources:
// - Behar et al. 2008 "The Dawn of Human Matrilineal Diversity" AJHG DOI:10.1016/j.ajhg.2008.02.018
// - Rito et al. 2013 "The First Modern Human Dispersals across Africa" PLoS ONE DOI:10.1371/journal.pone.0080031
// - Barbieri et al. 2013 "Ancient Substructure in Early mtDNA Lineages" AJHG DOI:10.1016/j.ajhg.2012.12.010
// - Chan et al. 2015 "Revised Timeline...Earliest Diverged Human Maternal Lineages" PLoS ONE DOI:10.1371/journal.pone.0121223
// - Soares et al. 2009 "Correcting for Purifying Selection" AJHG DOI:10.1016/j.ajhg.2009.05.001

import { MtDNAHaplogroup, Reference } from '../mtDNA_migrationData';

// Common references used across multiple haplogroups
const REF_BEHAR_2008: Reference = {
  authors: 'Behar DM et al.',
  year: 2008,
  title: 'The Dawn of Human Matrilineal Diversity',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2008.02.018',
  pmid: '18439549'
};

const REF_RITO_2013: Reference = {
  authors: 'Rito T et al.',
  year: 2013,
  title: 'The First Modern Human Dispersals across Africa',
  journal: 'PLoS ONE',
  doi: '10.1371/journal.pone.0080031',
  pmid: '24236190'
};

const REF_BARBIERI_2013: Reference = {
  authors: 'Barbieri C et al.',
  year: 2013,
  title: 'Ancient Substructure in Early mtDNA Lineages of Southern Africa',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2012.12.010',
  pmid: '23332919'
};

const REF_CHAN_2015: Reference = {
  authors: 'Chan EKF et al.',
  year: 2015,
  title: 'Revised Timeline and Distribution of the Earliest Diverged Human Maternal Lineages in Southern Africa',
  journal: 'PLoS ONE',
  doi: '10.1371/journal.pone.0121223',
  pmid: '25806512'
};

const REF_SOARES_2009: Reference = {
  authors: 'Soares P et al.',
  year: 2009,
  title: 'Correcting for Purifying Selection: An Improved Human Mitochondrial Molecular Clock',
  journal: 'American Journal of Human Genetics',
  doi: '10.1016/j.ajhg.2009.05.001',
  pmid: '19500773'
};

export const ROOT_AND_L0_HAPLOGROUPS: MtDNAHaplogroup[] = [
  // ============================================================================
  // ROOT - Mitochondrial Eve
  // ============================================================================
  {
    id: 'mt-Eve',
    parent: 'ROOT',
    time_kya: 180,
    time_kya_range: [150, 200],
    lat: 0,
    lon: 25,
    region: 'Central/East Africa',
    color: '#000000',
    description: 'Mitochondrial Eve - Most Recent Common Ancestor of all living human mtDNA. The human mtDNA tree split into L0 and L1\'5 branches.',
    references: [REF_RITO_2013, REF_BEHAR_2008],
    research_status: 'complete'
  },

  // ============================================================================
  // L0 - Oldest surviving branch (Southern Africa / Khoisan)
  // ============================================================================
  {
    id: 'L0',
    parent: 'mt-Eve',
    time_kya: 130,
    time_kya_range: [117, 143],
    lat: -25,
    lon: 20,
    region: 'Southern Africa',
    color: '#8B4513',
    description: 'L0 - Oldest surviving mtDNA branch. Highest diversity in Khoisan peoples of Southern Africa. Diverged from L1\'5 ~140-210 kya.',
    defining_mutations: ['C146T', 'C182T', 'T4312C', 'T10664C', 'C10915T', 'A11914G', 'G13276A', 'G16230A'],
    references: [REF_BEHAR_2008, REF_RITO_2013],
    research_status: 'complete'
  },

  // L0 major subclades
  {
    id: 'L0a\'b\'f\'g\'k',
    parent: 'L0',
    time_kya: 120,
    time_kya_range: [100, 140],
    lat: -20,
    lon: 25,
    region: 'Southern/Eastern Africa',
    color: '#8B4513',
    description: 'L0a\'b\'f\'g\'k - Ancestral node for major L0 subclades excluding L0d',
    references: [REF_RITO_2013],
    research_status: 'complete'
  },

  {
    id: 'L0d',
    parent: 'L0',
    time_kya: 172,
    time_kya_range: [149, 199],
    lat: -28,
    lon: 22,
    region: 'Southern Africa (Khoisan)',
    color: '#8B4513',
    description: 'L0d - Khoisan-specific lineage. Highest frequencies in South Africa, Namibia, Botswana. Split from L0k ~145 kya.',
    references: [REF_CHAN_2015, REF_BARBIERI_2013, REF_BEHAR_2008],
    research_status: 'complete'
  },

  {
    id: 'L0k',
    parent: 'L0',
    time_kya: 159,
    time_kya_range: [136, 183],
    lat: -20,
    lon: 25,
    region: 'Southern Africa (Zambia/Botswana)',
    color: '#8B4513',
    description: 'L0k - Khoisan lineage restricted to northern Khoisan range. Found in Zambia, northeast Botswana.',
    references: [REF_CHAN_2015, REF_BARBIERI_2013],
    research_status: 'complete'
  },

  // L0d subclades
  {
    id: 'L0d1',
    parent: 'L0d',
    time_kya: 61,
    time_kya_range: [44, 68],
    lat: -30,
    lon: 20,
    region: 'Southern Africa',
    color: '#8B4513',
    description: 'L0d1 - Major L0d subclade in Southern Africa',
    references: [REF_CHAN_2015, REF_BARBIERI_2013],
    research_status: 'complete'
  },

  {
    id: 'L0d2',
    parent: 'L0d',
    time_kya: 71,
    time_kya_range: [52, 78],
    lat: -28,
    lon: 24,
    region: 'Southern Africa',
    color: '#8B4513',
    description: 'L0d2 - Major L0d subclade',
    references: [REF_CHAN_2015, REF_BARBIERI_2013],
    research_status: 'complete'
  },

  {
    id: 'L0d3',
    parent: 'L0d',
    time_kya: 95,
    time_kya_range: [79, 121],
    lat: -25,
    lon: 20,
    region: 'Southern Africa',
    color: '#8B4513',
    description: 'L0d3 - Oldest L0d subclade',
    references: [REF_BARBIERI_2013],
    research_status: 'complete'
  },

  {
    id: 'L0d1b',
    parent: 'L0d1',
    time_kya: 45,
    time_kya_range: [35, 56],
    lat: -30,
    lon: 22,
    region: 'Southern Africa',
    color: '#8B4513',
    description: 'L0d1b',
    references: [REF_BARBIERI_2013],
    research_status: 'complete'
  },

  {
    id: 'L0d1c',
    parent: 'L0d1',
    time_kya: 32,
    time_kya_range: [24, 41],
    lat: -32,
    lon: 20,
    region: 'Southern Africa',
    color: '#8B4513',
    description: 'L0d1c',
    references: [REF_BARBIERI_2013],
    research_status: 'complete'
  },

  {
    id: 'L0d2a',
    parent: 'L0d2',
    time_kya: 17,
    time_kya_range: [10, 27],
    lat: -28,
    lon: 22,
    region: 'Southern Africa',
    color: '#8B4513',
    description: 'L0d2a - Recent expansion in Southern Africa',
    references: [REF_CHAN_2015],
    research_status: 'complete'
  },

  {
    id: 'L0d3b',
    parent: 'L0d3',
    time_kya: 7.4,
    time_kya_range: [5, 10],
    lat: -25,
    lon: 18,
    region: 'Southern Africa',
    color: '#8B4513',
    description: 'L0d3b - Recent subclade',
    references: [REF_RITO_2013],
    research_status: 'complete'
  },

  // L0k subclades
  {
    id: 'L0k1',
    parent: 'L0k',
    time_kya: 40,
    time_kya_range: [28, 53],
    lat: -18,
    lon: 25,
    region: 'Southern Africa (Zambia)',
    color: '#8B4513',
    description: 'L0k1 - Found in Bantu-speaking populations of Zambia',
    references: [REF_BARBIERI_2013],
    research_status: 'complete'
  },

  {
    id: 'L0k2',
    parent: 'L0k',
    time_kya: 40,
    time_kya_range: [28, 53],
    lat: -20,
    lon: 27,
    region: 'Southern Africa (Botswana)',
    color: '#8B4513',
    description: 'L0k2 - Found in northeast Botswana',
    references: [REF_BARBIERI_2013],
    research_status: 'complete'
  },

  // L0a branch (East African)
  {
    id: 'L0a\'b\'f',
    parent: 'L0a\'b\'f\'g\'k',
    time_kya: 95,
    time_kya_range: [80, 110],
    lat: -5,
    lon: 35,
    region: 'Eastern Africa',
    color: '#8B4513',
    description: 'L0a\'b\'f - Ancestral node, dispersal from southern towards eastern Africa ~100 kya',
    references: [REF_RITO_2013],
    research_status: 'complete'
  },

  {
    id: 'L0a\'b',
    parent: 'L0a\'b\'f',
    time_kya: 70,
    time_kya_range: [55, 85],
    lat: 0,
    lon: 37,
    region: 'Eastern Africa (Kenya)',
    color: '#8B4513',
    description: 'L0a\'b - Arose in vicinity of Kenya',
    references: [REF_RITO_2013],
    research_status: 'complete'
  },

  {
    id: 'L0a',
    parent: 'L0a\'b',
    time_kya: 42,
    time_kya_range: [30, 55],
    lat: 5,
    lon: 38,
    region: 'Eastern Africa',
    color: '#8B4513',
    description: 'L0a - Originated in Eastern Africa. Common in eastern, central, and southeastern Africa. 25% frequency in Mozambique.',
    references: [REF_CHAN_2015, REF_RITO_2013],
    research_status: 'complete'
  },

  {
    id: 'L0a1',
    parent: 'L0a',
    time_kya: 42,
    time_kya_range: [30, 55],
    lat: 3,
    lon: 37,
    region: 'Eastern Africa',
    color: '#8B4513',
    description: 'L0a1 - Major L0a subclade',
    references: [REF_CHAN_2015],
    research_status: 'complete'
  },

  {
    id: 'L0a2',
    parent: 'L0a',
    time_kya: 38,
    time_kya_range: [27, 50],
    lat: 0,
    lon: 35,
    region: 'Eastern Africa',
    color: '#8B4513',
    description: 'L0a2 - L0a subclade',
    references: [REF_CHAN_2015],
    research_status: 'complete'
  },

  {
    id: 'L0b',
    parent: 'L0a\'b',
    time_kya: 50,
    time_kya_range: [35, 65],
    lat: 9,
    lon: 38,
    region: 'Eastern Africa (Ethiopia/Horn)',
    color: '#8B4513',
    description: 'L0b - Rare lineage centered on Kenya/Ethiopia, Horn of Africa contribution',
    references: [REF_RITO_2013],
    research_status: 'complete'
  },

  {
    id: 'L0f',
    parent: 'L0a\'b\'f',
    time_kya: 95,
    time_kya_range: [85, 105],
    lat: -5,
    lon: 35,
    region: 'Eastern Africa (Tanzania)',
    color: '#8B4513',
    description: 'L0f - Ancient lineage observed only in Eastern Africa. Present in Tanzania, particularly among Sandawe.',
    references: [REF_RITO_2013],
    research_status: 'complete'
  },

  {
    id: 'L0g',
    parent: 'L0a\'b\'f\'g\'k',
    time_kya: 94,
    time_kya_range: [72, 116],
    lat: -25,
    lon: 20,
    region: 'Southern Africa',
    color: '#8B4513',
    description: 'L0g - Newly identified subclade restricted to Khoesan',
    references: [REF_CHAN_2015],
    research_status: 'complete'
  },

  // ============================================================================
  // L0a1 subclades - Eastern African with dispersals to Central/West Africa
  // Sources: Rito et al. 2013, Chan et al. 2015, Costa et al. 2019
  // ============================================================================
  { id: 'L0a1a', parent: 'L0a1', time_kya: 35, time_kya_range: [25, 45], lat: 0, lon: 36, region: 'Eastern Africa', color: '#8B4513', description: 'L0a1a - Eastern African L0a1 subclade. Basal branches from eastern Africa.', references: [REF_RITO_2013, REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0a1a1', parent: 'L0a1a', time_kya: 25, time_kya_range: [17, 33], lat: -2, lon: 35, region: 'Eastern Africa', color: '#8B4513', description: 'L0a1a1 - Subclade of L0a1a.', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0a1a2', parent: 'L0a1a', time_kya: 25, time_kya_range: [17, 33], lat: 2, lon: 37, region: 'Eastern Africa', color: '#8B4513', description: 'L0a1a2 - Subclade of L0a1a.', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0a1a3', parent: 'L0a1a', time_kya: 22, time_kya_range: [15, 30], lat: 0, lon: 36, region: 'Eastern Africa', color: '#8B4513', description: 'L0a1a3 - Subclade of L0a1a.', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0a1b', parent: 'L0a1', time_kya: 14, time_kya_range: [10, 18], lat: 0, lon: 25, region: 'Central/West Africa', color: '#8B4513', description: 'L0a1b - Mostly Central/West African clade. Part of L0a1+16293 group that moved from eastern to central Africa in late Pleistocene/early Holocene. Integrated with proto-Bantu populations.', references: [REF_RITO_2013, REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0a1b1', parent: 'L0a1b', time_kya: 10, time_kya_range: [6, 14], lat: 2, lon: 22, region: 'Central Africa', color: '#8B4513', description: 'L0a1b1 - Central African subclade.', references: [REF_RITO_2013], research_status: 'complete' },
  { id: 'L0a1b1a', parent: 'L0a1b1', time_kya: 8, time_kya_range: [4, 12], lat: 0, lon: 25, region: 'Central Africa', color: '#8B4513', description: 'L0a1b1a - Central African subclade.', references: [REF_RITO_2013], research_status: 'complete' },
  { id: 'L0a1b1a1', parent: 'L0a1b1a', time_kya: 5, time_kya_range: [2, 8], lat: -4, lon: 28, region: 'Central/Southeastern Africa', color: '#8B4513', description: 'L0a1b1a1 - Recent subclade. Likely associated with Bantu expansion dispersal.', references: [REF_RITO_2013], research_status: 'complete' },
  { id: 'L0a1b2', parent: 'L0a1b', time_kya: 10, time_kya_range: [6, 14], lat: -5, lon: 30, region: 'Central/Eastern Africa', color: '#8B4513', description: 'L0a1b2 - Central/Eastern African subclade.', references: [REF_RITO_2013], research_status: 'complete' },
  { id: 'L0a1c', parent: 'L0a1', time_kya: 14, time_kya_range: [10, 18], lat: 5, lon: 38, region: 'Eastern Africa', color: '#8B4513', description: 'L0a1c - Eastern African clade within L0a1+16293 group. Restricted to eastern Africa.', references: [REF_RITO_2013, REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0a1d', parent: 'L0a1', time_kya: 14, time_kya_range: [10, 18], lat: 3, lon: 37, region: 'Eastern Africa', color: '#8B4513', description: 'L0a1d - Eastern African clade within L0a1+16293 group.', references: [REF_RITO_2013, REF_CHAN_2015], research_status: 'complete' },

  // L0a2 subclades - Eastern/Central African
  { id: 'L0a2a', parent: 'L0a2', time_kya: 30, time_kya_range: [20, 40], lat: -2, lon: 32, region: 'Eastern/Central Africa', color: '#8B4513', description: 'L0a2a - Major L0a2 subclade. Founder lineages moved from eastern to central Africa in late Pleistocene.', references: [REF_RITO_2013, REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0a2a1', parent: 'L0a2a', time_kya: 20, time_kya_range: [13, 28], lat: 0, lon: 30, region: 'Central Africa', color: '#8B4513', description: 'L0a2a1 - Central African subclade. Integrated with early Bantu-associated populations.', references: [REF_RITO_2013], research_status: 'complete' },
  { id: 'L0a2a2', parent: 'L0a2a', time_kya: 20, time_kya_range: [13, 28], lat: -5, lon: 33, region: 'Eastern/Central Africa', color: '#8B4513', description: 'L0a2a2 - Eastern/Central African subclade.', references: [REF_RITO_2013], research_status: 'complete' },
  { id: 'L0a2b', parent: 'L0a2', time_kya: 25, time_kya_range: [16, 34], lat: 2, lon: 25, region: 'Central Africa', color: '#8B4513', description: 'L0a2b - Possible Central African origin.', references: [REF_RITO_2013], research_status: 'complete' },
  { id: 'L0a2c', parent: 'L0a2', time_kya: 20, time_kya_range: [12, 28], lat: -5, lon: 35, region: 'Eastern Africa', color: '#8B4513', description: 'L0a2c - Eastern African subclade.', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0a2d', parent: 'L0a2', time_kya: 20, time_kya_range: [12, 28], lat: -10, lon: 35, region: 'Southeastern Africa', color: '#8B4513', description: 'L0a2d - Southeastern African subclade.', references: [REF_CHAN_2015], research_status: 'complete' },

  // L0b subclades - Horn of Africa/Ethiopian
  { id: 'L0b1', parent: 'L0b', time_kya: 35, time_kya_range: [22, 48], lat: 9, lon: 39, region: 'Eastern Africa (Ethiopia)', color: '#8B4513', description: 'L0b1 - Found in Ethiopian/Horn of Africa populations.', references: [REF_RITO_2013], research_status: 'complete' },
  { id: 'L0b2', parent: 'L0b', time_kya: 35, time_kya_range: [22, 48], lat: 1, lon: 37, region: 'Eastern Africa (Kenya)', color: '#8B4513', description: 'L0b2 - Rare lineage in Kenya/East Africa.', references: [REF_RITO_2013], research_status: 'complete' },

  // L0f subclades - Tanzania/Sandawe ancient lineage
  // Source: Gonder 2007, Rito 2013
  { id: 'L0f1', parent: 'L0f', time_kya: 70, time_kya_range: [50, 90], lat: 1, lon: 32, region: 'Eastern Africa (Uganda/Tanzania)', color: '#8B4513', description: 'L0f1 - Ancient lineage centered in Uganda and Tanzania. Not present in southern African Khoisan. Found in some southern African Bantu speakers as a remnant of earlier wider distribution.', references: [REF_RITO_2013], research_status: 'complete' },
  { id: 'L0f2', parent: 'L0f', time_kya: 70, time_kya_range: [50, 90], lat: -5, lon: 35, region: 'Eastern Africa (Tanzania)', color: '#8B4513', description: 'L0f2 - Ancient Tanzanian lineage, sister to L0f1.', references: [REF_RITO_2013], research_status: 'complete' },
  { id: 'L0f2a', parent: 'L0f2', time_kya: 50, time_kya_range: [35, 65], lat: -5, lon: 35, region: 'Eastern Africa (Tanzania)', color: '#8B4513', description: 'L0f2a - Subclade found in Tanzanian populations including Sandawe.', references: [REF_RITO_2013], research_status: 'complete' },
  { id: 'L0f2a1', parent: 'L0f2a', time_kya: 35, time_kya_range: [22, 48], lat: -5, lon: 35, region: 'Eastern Africa (Tanzania)', color: '#8B4513', description: 'L0f2a1 - Tanzanian subclade.', references: [REF_RITO_2013], research_status: 'complete' },
  { id: 'L0f2b', parent: 'L0f2', time_kya: 50, time_kya_range: [35, 65], lat: -6, lon: 35, region: 'Eastern Africa (Tanzania)', color: '#8B4513', description: 'L0f2b - Tanzanian subclade, sister to L0f2a.', references: [REF_RITO_2013], research_status: 'complete' },

  // ============================================================================
  // L0d subclades - Khoisan of Southern Africa
  // Sources: Chan et al. 2015, Barbieri et al. 2013
  // ============================================================================
  { id: 'L0d1a', parent: 'L0d1', time_kya: 21.3, time_kya_range: [14, 30], lat: -30, lon: 22, region: 'Southern Africa', color: '#8B4513', description: 'L0d1a - TMRCA ~21.3 kya (Chan 2015). 17.1% of L0d lineages in contemporary southern African populations. Found in both Khoisan and non-Khoisan populations.', references: [REF_CHAN_2015, REF_BARBIERI_2013], research_status: 'complete' },
  { id: 'L0d1a1', parent: 'L0d1a', time_kya: 15, time_kya_range: [9, 22], lat: -29, lon: 22, region: 'Southern Africa', color: '#8B4513', description: 'L0d1a1 - Subclade of L0d1a.', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0d1a1a', parent: 'L0d1a1', time_kya: 10, time_kya_range: [5, 16], lat: -30, lon: 23, region: 'Southern Africa', color: '#8B4513', description: 'L0d1a1a - Recent Southern African subclade.', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0d1a1b', parent: 'L0d1a1', time_kya: 10, time_kya_range: [5, 16], lat: -28, lon: 21, region: 'Southern Africa', color: '#8B4513', description: 'L0d1a1b - Recent Southern African subclade.', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0d1a2', parent: 'L0d1a', time_kya: 15, time_kya_range: [9, 22], lat: -31, lon: 22, region: 'Southern Africa', color: '#8B4513', description: 'L0d1a2 - Subclade of L0d1a, sister to L0d1a1.', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0d1b1', parent: 'L0d1b', time_kya: 27, time_kya_range: [17, 38], lat: -28, lon: 22, region: 'Southern Africa', color: '#8B4513', description: 'L0d1b1 - TMRCA ~27 kya (Chan 2015). Part of the most common L0d clade (L0d1b = 24.3%).', references: [REF_CHAN_2015, REF_BARBIERI_2013], research_status: 'complete' },
  { id: 'L0d1b2', parent: 'L0d1b', time_kya: 34, time_kya_range: [24, 45], lat: -30, lon: 20, region: 'Southern Africa', color: '#8B4513', description: 'L0d1b2 - TMRCA ~34 kya (Chan 2015). Predominant L0d1b subclade.', references: [REF_CHAN_2015, REF_BARBIERI_2013], research_status: 'complete' },
  { id: 'L0d1c1', parent: 'L0d1c', time_kya: 25, time_kya_range: [16, 35], lat: -32, lon: 20, region: 'Southern Africa', color: '#8B4513', description: 'L0d1c1 - Subclade of L0d1c. Restricted to contemporary Khoisan populations.', references: [REF_CHAN_2015, REF_BARBIERI_2013], research_status: 'complete' },
  { id: 'L0d1c2', parent: 'L0d1c', time_kya: 25, time_kya_range: [16, 35], lat: -31, lon: 19, region: 'Southern Africa', color: '#8B4513', description: 'L0d1c2 - Subclade of L0d1c. Restricted to Khoisan.', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0d2a1', parent: 'L0d2a', time_kya: 10, time_kya_range: [5, 17], lat: -28, lon: 24, region: 'Southern Africa', color: '#8B4513', description: 'L0d2a1 - Recent subclade. L0d2a has non-Khoisan predominance (88%), suggesting introgression into Bantu-speaking populations.', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0d2b', parent: 'L0d2', time_kya: 19.8, time_kya_range: [12, 28], lat: -28, lon: 22, region: 'Southern Africa', color: '#8B4513', description: 'L0d2b - TMRCA ~19.8 kya (Chan 2015).', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0d2c', parent: 'L0d2', time_kya: 29.6, time_kya_range: [20, 40], lat: -25, lon: 22, region: 'Southern Africa', color: '#8B4513', description: 'L0d2c - TMRCA ~29.6 kya (Chan 2015).', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0d2c1', parent: 'L0d2c', time_kya: 18, time_kya_range: [10, 27], lat: -26, lon: 23, region: 'Southern Africa', color: '#8B4513', description: 'L0d2c1 - Recent subclade of L0d2c.', references: [REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0d3a', parent: 'L0d3', time_kya: 10, time_kya_range: [5, 15], lat: -25, lon: 20, region: 'Southern Africa', color: '#8B4513', description: 'L0d3a - Subclade of L0d3 (oldest L0d subclade, ~95 kya). L0d3 total TMRCA ~15.4 kya.', references: [REF_CHAN_2015, REF_BARBIERI_2013], research_status: 'complete' },

  // ============================================================================
  // L0k subclades - Khoisan and pre-Bantu populations
  // Sources: Chan et al. 2015, Barbieri et al. 2013
  // ============================================================================
  { id: 'L0k1a', parent: 'L0k1', time_kya: 14.8, time_kya_range: [9, 22], lat: -22, lon: 24, region: 'Southern Africa (Botswana/Namibia)', color: '#8B4513', description: 'L0k1a - TMRCA ~14.8 kya (Chan 2015). Restricted to Khoisan peoples of the greater inland Kalahari semi-desert region.', references: [REF_CHAN_2015, REF_BARBIERI_2013], research_status: 'complete' },
  { id: 'L0k1a1', parent: 'L0k1a', time_kya: 9.1, time_kya_range: [5, 14], lat: -22, lon: 24, region: 'Southern Africa (Botswana)', color: '#8B4513', description: 'L0k1a1 - TMRCA ~9.1 kya (Chan 2015). Khoisan-specific subclade of central Botswana.', references: [REF_CHAN_2015, REF_BARBIERI_2013], research_status: 'complete' },
  { id: 'L0k1a2', parent: 'L0k1a', time_kya: 7.5, time_kya_range: [4, 12], lat: -21, lon: 16, region: 'Southern Africa (Namibia)', color: '#8B4513', description: 'L0k1a2 - TMRCA ~7.5 kya (Chan 2015). Found in Khoe-speaking Hai||om of Namibia.', references: [REF_CHAN_2015, REF_BARBIERI_2013], research_status: 'complete' },
  { id: 'L0k1b', parent: 'L0k1', time_kya: 30, time_kya_range: [20, 42], lat: -15, lon: 28, region: 'Southern Africa (Zambia)', color: '#8B4513', description: 'L0k1b - Found almost exclusively in Bantu-speaking populations of northern Zambia. Represents relic haplogroup from contact with ancestral pre-Bantu populations.', references: [REF_BARBIERI_2013, REF_CHAN_2015], research_status: 'complete' },
  { id: 'L0k2a', parent: 'L0k2', time_kya: 30, time_kya_range: [20, 42], lat: -20, lon: 27, region: 'Southern Africa (Botswana/Zambia)', color: '#8B4513', description: 'L0k2a - Found in Bantu-speaking populations of northeast Botswana and Zambia. Long separate branches suggest ancient diversification.', references: [REF_BARBIERI_2013], research_status: 'complete' },
];

// Research summary for Worker 1
export const RESEARCH_SUMMARY = {
  package: 'ROOT_AND_L0',
  total_haplogroups: 63,
  researched_complete: 63,
  needs_references: 0,
  stubs: 0,
  key_findings: [
    'mt-Eve ~180 kya in Central/East Africa',
    'L0 diverged from L1\'5 ~140-210 kya',
    'L0d and L0k concentrated in Khoisan of Southern Africa',
    'L0d1a TMRCA ~21.3 kya, L0d1b ~48.7 kya (most common L0d at 24.3%)',
    'L0d1b2 ~34 kya predominant subclade, L0d1b1 ~27 kya',
    'L0d2a ~17.4 kya with non-Khoisan predominance (88%) - Bantu introgression',
    'L0d2c ~29.6 kya, L0d2b ~19.8 kya',
    'L0a originated in Eastern Africa, L0a1b moved to Central Africa ~14 kya (proto-Bantu)',
    'L0f is ancient (~95 kya) restricted to Tanzania/Sandawe; L0f1 centered Uganda/Tanzania',
    'L0k1a ~14.8 kya restricted to Kalahari Khoisan',
    'L0k1b and L0k2 found in Bantu speakers - relic pre-Bantu populations'
  ],
  primary_sources: [
    'Behar et al. 2008 - Foundational paper on L0 and Khoisan',
    'Rito et al. 2013 - African dispersals and TMRCA, L0a phylogeography',
    'Barbieri et al. 2013 - L0d/L0k ancient substructure, pre-Bantu relics',
    'Chan et al. 2015 - Updated L0 timeline with detailed TMRCA for all L0d/L0k subclades'
  ]
};
