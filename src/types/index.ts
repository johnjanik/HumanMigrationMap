import type { Feature, FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';

// Geographic types
export interface GeoFeature<P = GeoJsonProperties> extends Feature<Geometry, P> {
  id?: string | number;
}

export interface GeoCollection<P = GeoJsonProperties> extends FeatureCollection<Geometry, P> {}

export interface MapBounds {
  minLng: number;
  maxLng: number;
  minLat: number;
  maxLat: number;
}

export interface MapViewport {
  width: number;
  height: number;
  scale: number;
  center: [number, number];
  rotation: [number, number, number];
  panX: number;
  panY: number;
}

// Layer types
export type LayerType = 'polygon' | 'line' | 'point' | 'label';

export interface LayerStyle {
  fill?: string;
  fillOpacity?: number;
  stroke?: string;
  strokeWidth?: number;
  strokeOpacity?: number;
  strokeDasharray?: string;
}

export interface LayerConfig {
  id: string;
  name: string;
  type: LayerType;
  url: string;
  visible: boolean;
  minZoom?: number;
  maxZoom?: number;
  style: LayerStyle;
  hoverStyle?: LayerStyle;
  selectedStyle?: LayerStyle;
  labelField?: string;
}

export interface LayerDataState {
  data: GeoCollection | null;
  loading: boolean;
  error: Error | null;
}

// Overlay types
export interface PointMarker {
  id: string;
  coordinates: [number, number];
  label?: string;
  icon?: string;
  color?: string;
  size?: number;
  data?: Record<string, unknown>;
}

export interface PathOverlayData {
  id: string;
  coordinates: [number, number][];
  label?: string;
  color?: string;
  width?: number;
  dashed?: boolean;
  animated?: boolean;
  data?: Record<string, unknown>;
}

export interface AreaOverlay {
  id: string;
  coordinates: [number, number][][];
  label?: string;
  fillColor?: string;
  fillOpacity?: number;
  strokeColor?: string;
  strokeWidth?: number;
  data?: Record<string, unknown>;
}

// App state
export interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  content: string;
}

export interface AppState {
  viewport: MapViewport;
  layers: LayerConfig[];
  selectedFeature: GeoFeature | null;
  hoveredFeature: GeoFeature | null;
  tooltip: TooltipState;
}

// Natural Earth country properties
export interface NaturalEarthCountryProps {
  NAME: string;
  NAME_LONG: string;
  ABBREV: string;
  ISO_A2: string;
  ISO_A3: string;
  ISO_N3: string;
  CONTINENT: string;
  REGION_UN: string;
  SUBREGION: string;
  POP_EST: number;
  POP_YEAR: number;
  GDP_MD: number;
  GDP_YEAR: number;
  ECONOMY: string;
  INCOME_GRP: string;
  MAPCOLOR7: number;
  MAPCOLOR9: number;
  MAPCOLOR13: number;
}
