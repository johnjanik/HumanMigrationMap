# Human Migration Map

An interactive visualization of ancient human Y-haplogroup migration patterns using the Fuller/Dymaxion map projection.

**Live Demo:** https://johnjanik.github.io/HumanMigrationMap/ 

## Features

- **Fuller/Dymaxion Projection** - Uses the Airocean arrangement to display Earth's landmasses with minimal distortion, making it ideal for visualizing human migration routes
- **Y-Haplogroup Migration Data** - 200+ migration events spanning 275,000 years of human history
- **Ancestry Tracing** - Select haplogroups in the sidebar to trace lineages back to their origins
- **Time Filtering** - Adjust the time range to see migrations at different periods
- **Ice Age Coastlines** - Toggle paleoshoreline layer showing land bridges at -200m sea level (Doggerland, Sundaland, Beringia)
- **Interactive Map** - Pan, zoom, and hover over countries for details

## Technology

- React 18 + TypeScript
- Vite build system
- D3.js with d3-geo-polygon for the geoAirocean projection
- CSS Modules for styling

## Data Sources

- **Geographic Data:** [Natural Earth](https://www.naturalearthdata.com/) - Free vector map data at 1:110m scale
- **Bathymetry:** Natural Earth 10m bathymetry contours for paleoshoreline visualization
- **Migration Data:** Y-haplogroup phylogenetic data compiled from genetic research

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/johnjanik/HumanMigrationMap.git
cd HumanMigrationMap

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── components/
│   ├── App.tsx              # Main application component
│   ├── FullerMap/           # Map rendering components
│   ├── Controls/            # Zoom and layer controls
│   ├── Overlays/            # Migration path and point overlays
│   └── Sidebar/             # Sidebar with haplogroup selector
├── data/
│   ├── layerConfigs.ts      # Map layer configuration
│   └── migrationData.ts     # Y-haplogroup migration events
├── hooks/                   # Custom React hooks
└── types/                   # TypeScript type definitions

public/
├── data/geojson/            # Natural Earth GeoJSON files
└── bathymetry/              # Paleoshoreline data
```

## About the Fuller Projection

The Dymaxion map, invented by Buckminster Fuller in 1943, projects Earth onto an icosahedron which is then unfolded. This projection:

- Preserves relative size of landmasses better than Mercator
- Shows all continents without splitting any of them
- Reveals migration routes across now-submerged land bridges
- Presents a more interconnected view of human geography

## License

MIT License - See [license](Ancient%20Human%20Migration/fuller-map-app/node_modules/ms/license.md) for details.

## Acknowledgments

- [Natural Earth](https://www.naturalearthdata.com/) for open geographic data
- [D3.js](https://d3js.org/) and [d3-geo-polygon](https://github.com/d3/d3-geo-polygon) for projection support
- Buckminster Fuller for the Dymaxion map concept
