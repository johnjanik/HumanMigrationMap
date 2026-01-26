// mtDNA Haplogroup Migration Data
// Combines all researched mtDNA haplogroups and converts to map-compatible format
// Sources: See individual _researched.ts files for peer-reviewed references

import type { MigrationEvent } from './data/migrationData';

// ============================================================================
// INTERFACES
// ============================================================================

export interface Reference {
  authors: string;
  year: number;
  title: string;
  journal: string;
  doi?: string;
  pmid?: string;
}

export type ResearchStatus = 'complete' | 'needs_references' | 'stub';

export interface MtDNAHaplogroup {
  id: string;
  parent: string;
  time_kya: number | null;
  time_kya_range?: [number, number];
  lat: number | null;
  lon: number | null;
  region: string;
  color: string;
  description: string;
  defining_mutations?: string[];
  references: Reference[];
  research_status: ResearchStatus;
}

// ============================================================================
// IMPORT ALL RESEARCHED HAPLOGROUP DATA
// ============================================================================

import { ROOT_AND_L0_HAPLOGROUPS } from './data/ROOT_AND_L0_researched';
import { L1_L2_HAPLOGROUPS } from './data/L1_L2_researched';
import { L3_HAPLOGROUPS } from './data/L3_researched';
import { L4_L5_L6_HAPLOGROUPS } from './data/L4_L5_L6_researched';
import { M_ROOT_HAPLOGROUPS } from './data/M_ROOT_researched';
import { N_ROOT_HAPLOGROUPS } from './data/N_ROOT_researched';
import { R_ROOT_HAPLOGROUPS } from './data/R_ROOT_researched';
import { HV_H_HAPLOGROUPS } from './data/HV_H_researched';
import { U_K_HAPLOGROUPS } from './data/U_K_researched';
import { JT_HAPLOGROUPS } from './data/JT_researched';
import { M_ASIA_HAPLOGROUPS } from './data/M_ASIA_researched';
import { B_F_HAPLOGROUPS } from './data/B_F_researched';

// ============================================================================
// COMBINED HAPLOGROUP DATA
// ============================================================================

export const allMtDNAHaplogroups: MtDNAHaplogroup[] = [
  ...ROOT_AND_L0_HAPLOGROUPS,
  ...L1_L2_HAPLOGROUPS,
  ...L3_HAPLOGROUPS,
  ...L4_L5_L6_HAPLOGROUPS,
  ...M_ROOT_HAPLOGROUPS,
  ...N_ROOT_HAPLOGROUPS,
  ...R_ROOT_HAPLOGROUPS,
  ...HV_H_HAPLOGROUPS,
  ...U_K_HAPLOGROUPS,
  ...JT_HAPLOGROUPS,
  ...M_ASIA_HAPLOGROUPS,
  ...B_F_HAPLOGROUPS,
];

// ============================================================================
// BUILD LOOKUP MAPS
// ============================================================================

// Map from haplogroup ID to haplogroup data
const haplogroupMap = new Map<string, MtDNAHaplogroup>();
allMtDNAHaplogroups.forEach(h => haplogroupMap.set(h.id, h));

// Build parent map for lineage traversal (same structure as Y-haplogroup)
export function buildMtDNAParentMap(): Map<string, string> {
  const parentMap = new Map<string, string>();
  allMtDNAHaplogroups.forEach(h => {
    if (h.parent && h.parent !== 'ROOT') {
      parentMap.set(h.id, h.parent);
    }
  });
  return parentMap;
}

// ============================================================================
// CONVERT MTDNA TO MIGRATION EVENTS
// ============================================================================

// Color palette for mtDNA lineages (different from Y-haplogroup colors)
const mtDNAColors: Record<string, string> = {
  'L0': '#8B4513',      // Saddle Brown - oldest African
  'L1': '#A0522D',      // Sienna - African
  'L2': '#CD853F',      // Peru - African
  'L3': '#D2691E',      // Chocolate - Out of Africa
  'L4': '#B8860B',      // Dark Goldenrod - African
  'L5': '#DAA520',      // Goldenrod - African
  'L6': '#BDB76B',      // Dark Khaki - African
  'M': '#FF4500',       // Orange Red - Asian/Oceanian
  'N': '#4169E1',       // Royal Blue - Eurasian
  'R': '#9400D3',       // Dark Violet - Eurasian
  'HV': '#FF1493',      // Deep Pink - European
  'H': '#FF69B4',       // Hot Pink - Most common European
  'V': '#DB7093',       // Pale Violet Red - European
  'U': '#00CED1',       // Dark Turquoise - European/Near Eastern
  'K': '#20B2AA',       // Light Sea Green - European (Ashkenazi)
  'JT': '#32CD32',      // Lime Green - Neolithic farmers
  'J': '#228B22',       // Forest Green - Neolithic
  'T': '#006400',       // Dark Green - Neolithic
  'C': '#FFD700',       // Gold - Asian/Native American
  'D': '#FFA500',       // Orange - Asian/Native American
  'G': '#FF8C00',       // Dark Orange - East Asian
  'Z': '#FFDAB9',       // Peach Puff - Central Asian
  'B': '#00BFFF',       // Deep Sky Blue - Polynesian/Native American
  'F': '#1E90FF',       // Dodger Blue - Southeast Asian
  'A': '#87CEEB',       // Sky Blue - Native American
  'X': '#ADD8E6',       // Light Blue - Rare Native American
};

function getColorForHaplogroup(id: string): string {
  // Check for exact match first
  if (mtDNAColors[id]) return mtDNAColors[id];

  // Check for prefix matches (e.g., "H1a" matches "H")
  for (const [prefix, color] of Object.entries(mtDNAColors)) {
    if (id.startsWith(prefix)) return color;
  }

  // Default color
  return '#808080';
}

/**
 * Convert mtDNA haplogroups to MigrationEvent format compatible with the map
 * Only includes haplogroups with complete location data
 */
export function convertToMigrationEvents(): MigrationEvent[] {
  const events: MigrationEvent[] = [];

  for (const haplogroup of allMtDNAHaplogroups) {
    // Skip if missing essential data
    if (haplogroup.lat === null || haplogroup.lon === null || haplogroup.time_kya === null) {
      continue;
    }

    // Get parent haplogroup for coordinates
    const parent = haplogroupMap.get(haplogroup.parent);

    // Default parent coordinates (for root level)
    let parentLat = haplogroup.lat;
    let parentLon = haplogroup.lon;

    if (parent && parent.lat !== null && parent.lon !== null) {
      parentLat = parent.lat;
      parentLon = parent.lon;
    }

    // Determine event type based on haplogroup characteristics
    let eventType = 'branch';
    if (haplogroup.id === 'mt-Eve') {
      eventType = 'origin';
    } else if (haplogroup.id === 'L3' || haplogroup.id === 'M' || haplogroup.id === 'N') {
      eventType = 'critical';  // Out of Africa
    } else if (haplogroup.region.toLowerCase().includes('out of africa')) {
      eventType = 'migration';
    } else if (haplogroup.region.toLowerCase().includes('neolithic')) {
      eventType = 'neolithic';
    }

    events.push({
      time_kya: haplogroup.time_kya,
      parent: haplogroup.parent || 'ROOT',
      child: haplogroup.id,
      event_type: eventType,
      parent_lat: parentLat,
      parent_lon: parentLon,
      child_lat: haplogroup.lat,
      child_lon: haplogroup.lon,
      color: haplogroup.color || getColorForHaplogroup(haplogroup.id),
      description: haplogroup.description,
    });
  }

  // Sort by time (oldest first)
  events.sort((a, b) => b.time_kya - a.time_kya);

  return events;
}

// Pre-computed migration events
export const mtDNAMigrationEvents: MigrationEvent[] = convertToMigrationEvents();

/**
 * Filter mtDNA events by selected haplogroups (including ancestors)
 */
export function filterMtDNAEventsForHaplogroups(
  selectedHaplogroups: string[],
  parentMap: Map<string, string>
): MigrationEvent[] {
  if (selectedHaplogroups.length === 0) {
    return mtDNAMigrationEvents;
  }

  // Build set of all haplogroups to include (selected + all ancestors)
  const includeSet = new Set<string>();

  for (const haplogroup of selectedHaplogroups) {
    includeSet.add(haplogroup);
    // Walk up the tree to include all ancestors
    let current = haplogroup;
    while (parentMap.has(current)) {
      current = parentMap.get(current)!;
      includeSet.add(current);
    }
  }

  return mtDNAMigrationEvents.filter(event => includeSet.has(event.child));
}

// ============================================================================
// STATISTICS
// ============================================================================

export function getMtDNAStats() {
  const total = allMtDNAHaplogroups.length;
  const complete = allMtDNAHaplogroups.filter(h => h.research_status === 'complete').length;
  const needsRefs = allMtDNAHaplogroups.filter(h => h.research_status === 'needs_references').length;
  const stubs = allMtDNAHaplogroups.filter(h => h.research_status === 'stub').length;
  const withCoordinates = allMtDNAHaplogroups.filter(h => h.lat !== null && h.lon !== null).length;
  const migrationEvents = mtDNAMigrationEvents.length;

  return {
    total,
    complete,
    needsRefs,
    stubs,
    withCoordinates,
    migrationEvents,
    completionRate: ((complete / total) * 100).toFixed(1) + '%',
  };
}

// Get major haplogroups for selector (format matching Y-haplogroup selector)
export function getMajorMtDNAHaplogroups(): { id: string; label: string; color: string }[] {
  const majorBranches = [
    { id: 'L0', label: 'L0 (Khoisan)', color: '#8B4513' },
    { id: 'L1', label: 'L1 (African)', color: '#A0522D' },
    { id: 'L2', label: 'L2 (African)', color: '#CD853F' },
    { id: 'L3', label: 'L3 (Out of Africa)', color: '#D2691E' },
    { id: 'L4', label: 'L4 (African)', color: '#B8860B' },
    { id: 'L5', label: 'L5 (African)', color: '#DAA520' },
    { id: 'L6', label: 'L6 (African)', color: '#BDB76B' },
    { id: 'M', label: 'M (Asian/Oceanian)', color: '#FF4500' },
    { id: 'N', label: 'N (Eurasian)', color: '#4169E1' },
    { id: 'R', label: 'R (Eurasian)', color: '#9400D3' },
    { id: 'C', label: 'C (Asian/American)', color: '#FFD700' },
    { id: 'D', label: 'D (E. Asian/American)', color: '#FFA500' },
    { id: 'G', label: 'G (E. Asian)', color: '#FF8C00' },
    { id: 'Z', label: 'Z (Central Asian)', color: '#FFDAB9' },
    { id: 'B', label: 'B (Polynesian/American)', color: '#00BFFF' },
    { id: 'F', label: 'F (SE Asian)', color: '#1E90FF' },
    { id: 'HV', label: 'HV (European)', color: '#FF1493' },
    { id: 'H', label: 'H (Most common Euro)', color: '#FF69B4' },
    { id: 'V', label: 'V (European)', color: '#DB7093' },
    { id: 'U', label: 'U (European/Near East)', color: '#00CED1' },
    { id: 'K', label: 'K (Ashkenazi/Euro)', color: '#20B2AA' },
    { id: 'J', label: 'J (Neolithic)', color: '#228B22' },
    { id: 'T', label: 'T (Neolithic)', color: '#006400' },
    { id: 'A', label: 'A (Native American)', color: '#87CEEB' },
    { id: 'X', label: 'X (Rare American)', color: '#ADD8E6' },
  ];

  // Only return haplogroups that actually exist in the data
  return majorBranches.filter(branch =>
    allMtDNAHaplogroups.some(h => h.id === branch.id || h.id.startsWith(branch.id))
  );
}
