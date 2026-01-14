// Application constants

export const DEFAULT_VIEWPORT = {
  width: 1200,
  height: 800,
  scale: 100,
  center: [0, 0] as [number, number],
  // Fuller's Dymaxion arrangement - using geoAirocean's built-in rotation
  // The projection has angle: -60 built-in, we add 90 degrees canvas rotation
  rotation: [0, 0, 0] as [number, number, number],
  panX: 0,
  panY: 0,
};

export const ZOOM_LIMITS = {
  min: 50,
  max: 800,
};

export const GRATICULE_STEP = 30;

// Natural Earth data URLs
export const NATURAL_EARTH_BASE = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson';

// TopoJSON CDN (smaller files)
export const TOPOJSON_URLS = {
  world_110m: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json',
  world_50m: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
  land_110m: 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json',
  land_50m: 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json',
};
