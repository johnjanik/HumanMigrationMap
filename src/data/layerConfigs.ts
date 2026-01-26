import type { LayerConfig } from '../types';

const NATURAL_EARTH_BASE = './data/geojson';

export const defaultLayers: LayerConfig[] = [
  {
    id: 'ocean',
    name: 'Ocean',
    type: 'polygon',
    url: `${NATURAL_EARTH_BASE}/ne_110m_ocean.geojson`,
    visible: true,
    style: {
      fill: '#1a3a5c',
      fillOpacity: 1,
      stroke: 'none',
    },
  },
  {
    id: 'paleo-land',
    name: 'Ice Age Coastline (-200m)',
    type: 'polygon',
    url: './bathymetry/ne_10m_bathymetry_200.geojson',
    visible: false,
    style: {
      fill: '#3d5a4e',
      fillOpacity: 0.85,
      stroke: '#2a4a3e',
      strokeWidth: 0.3,
    },
  },
  {
    id: 'land',
    name: 'Land',
    type: 'polygon',
    url: `${NATURAL_EARTH_BASE}/ne_110m_land.geojson`,
    visible: true,
    style: {
      fill: '#2d4a3e',
      fillOpacity: 1,
      stroke: '#1a3a2e',
      strokeWidth: 0.5,
    },
  },
  {
    id: 'lakes',
    name: 'Lakes',
    type: 'polygon',
    url: `${NATURAL_EARTH_BASE}/ne_110m_lakes.geojson`,
    visible: true,
    style: {
      fill: '#1a3a5c',
      fillOpacity: 0.8,
      stroke: '#0d2840',
      strokeWidth: 0.5,
    },
  },
  {
    id: 'countries',
    name: 'Countries',
    type: 'polygon',
    url: `${NATURAL_EARTH_BASE}/ne_110m_admin_0_countries.geojson`,
    visible: true,
    style: {
      fill: 'transparent',
      stroke: '#4a6a5a',
      strokeWidth: 0.5,
      strokeOpacity: 0.7,
    },
    hoverStyle: {
      fill: 'rgba(100, 200, 150, 0.3)',
      stroke: '#8fbc8f',
      strokeWidth: 1.5,
    },
    selectedStyle: {
      fill: 'rgba(255, 180, 100, 0.4)',
      stroke: '#ffa500',
      strokeWidth: 2,
    },
    labelField: 'NAME',
  },
  {
    id: 'glaciated',
    name: 'Glaciated Areas',
    type: 'polygon',
    url: `${NATURAL_EARTH_BASE}/ne_110m_glaciated_areas.geojson`,
    visible: true,
    style: {
      fill: '#e8f4f8',
      fillOpacity: 0.8,
      stroke: '#b0d4e8',
      strokeWidth: 0.5,
    },
  },
];

export const graticuleStyle = {
  stroke: '#3a5a7a',
  strokeWidth: 0.3,
  strokeOpacity: 0.4,
  strokeDasharray: '2,2',
};
