import { useState, useCallback, useEffect, useMemo } from 'react';
import { FullerMap } from './FullerMap';
import { Sidebar, HaplogroupSelector } from './Sidebar';
import { LayerControl, ZoomControl } from './Controls';
import { useMapInteraction } from '../hooks';
import { defaultLayers } from '../data/layerConfigs';
import { DEFAULT_VIEWPORT } from '../lib/constants';
import { buildParentMap, filterEventsForHaplogroups } from '../data/migrationData';
import type { LayerConfig, GeoFeature, MapViewport, PointMarker, PathOverlayData } from '../types';
import styles from './App.module.css';

// Build parent map once at module level
const parentMap = buildParentMap();

export function App() {
  const [viewport, setViewport] = useState<MapViewport>({
    ...DEFAULT_VIEWPORT,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [layers, setLayers] = useState<LayerConfig[]>(defaultLayers);
  const [selectedFeature, setSelectedFeature] = useState<GeoFeature | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showOverlays, setShowOverlays] = useState(true);
  const [timeRange, setTimeRange] = useState<[number, number]>([275, 0]); // kya range
  const [selectedHaplogroups, setSelectedHaplogroups] = useState<string[]>([]); // empty = show all

  // Convert migration data to overlay formats, filtered by haplogroup and time
  const { paths, markers } = useMemo(() => {
    // First filter by haplogroup lineage (includes ancestors)
    const haplogroupFiltered = filterEventsForHaplogroups(selectedHaplogroups, parentMap);

    // Then filter by time range
    const filteredEvents = haplogroupFiltered.filter(
      e => e.time_kya <= timeRange[0] && e.time_kya >= timeRange[1]
    );

    const allPaths = filteredEvents.map(event => ({
      id: `${event.parent}-${event.child}-${event.time_kya}`,
      coordinates: [
        [event.parent_lon, event.parent_lat] as [number, number],
        [event.child_lon, event.child_lat] as [number, number],
      ],
      label: event.child,
      color: event.color,
      width: event.event_type === 'critical' || event.event_type === 'coastal' ? 3 : 1.5,
      animated: false,
    }));

    // Get unique endpoint markers
    const uniqueLocations = new Map<string, typeof filteredEvents[0]>();
    filteredEvents.forEach(event => {
      const key = `${event.child}`;
      if (!uniqueLocations.has(key)) {
        uniqueLocations.set(key, event);
      }
    });

    const allMarkers = Array.from(uniqueLocations.values()).map(event => ({
      id: event.child,
      coordinates: [event.child_lon, event.child_lat] as [number, number],
      label: event.child.length <= 4 ? event.child : '', // Only show short labels
      color: event.color,
      size: event.event_type === 'critical' || event.event_type === 'origin' ? 8 : 5,
    }));

    return { paths: allPaths, markers: allMarkers };
  }, [timeRange, selectedHaplogroups]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setViewport(prev => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLayerToggle = useCallback((layerId: string) => {
    setLayers(prev =>
      prev.map(layer =>
        layer.id === layerId ? { ...layer, visible: !layer.visible } : layer
      )
    );
  }, []);

  const handleFeatureSelect = useCallback((feature: GeoFeature | null) => {
    setSelectedFeature(feature);
  }, []);

  const handleViewportChange = useCallback((newViewport: Partial<MapViewport>) => {
    setViewport(prev => ({ ...prev, ...newViewport }));
  }, []);

  const { zoomIn, zoomOut, resetView } = useMapInteraction(viewport, handleViewportChange);

  const handleMarkerClick = useCallback((marker: PointMarker) => {
    console.log('Marker clicked:', marker);
  }, []);

  const handlePathClick = useCallback((path: PathOverlayData) => {
    console.log('Path clicked:', path);
  }, []);

  return (
    <div className={styles.app}>
      <Sidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        selectedFeature={selectedFeature}
      >
        <LayerControl
          layers={layers}
          onToggle={handleLayerToggle}
        />

        <div className={styles.overlayToggle}>
          <label className={styles.toggleLabel}>
            <input
              type="checkbox"
              checked={showOverlays}
              onChange={() => setShowOverlays(!showOverlays)}
            />
            <span>Show Migration Paths</span>
          </label>
        </div>

        <div className={styles.timeControl}>
          <h3 className={styles.sectionTitle}>Time Range</h3>
          <div className={styles.timeSlider}>
            <label>
              From: {timeRange[0]} kya
              <input
                type="range"
                min="0"
                max="275"
                value={timeRange[0]}
                onChange={(e) => setTimeRange([parseInt(e.target.value), timeRange[1]])}
              />
            </label>
            <label>
              To: {timeRange[1]} kya
              <input
                type="range"
                min="0"
                max="275"
                value={timeRange[1]}
                onChange={(e) => setTimeRange([timeRange[0], parseInt(e.target.value)])}
              />
            </label>
          </div>
          <div className={styles.eventCount}>
            Showing {paths.length} migration events
          </div>
        </div>

        <HaplogroupSelector
          selectedHaplogroups={selectedHaplogroups}
          onSelectionChange={setSelectedHaplogroups}
        />
      </Sidebar>

      <main
        className={styles.mapContainer}
        style={{ marginLeft: sidebarOpen ? 'var(--sidebar-width)' : 0 }}
      >
        <FullerMap
          viewport={{
            ...viewport,
            width: sidebarOpen ? viewport.width - 280 : viewport.width,
          }}
          layers={layers}
          selectedFeature={selectedFeature}
          onFeatureSelect={handleFeatureSelect}
          onViewportChange={handleViewportChange}
          markers={showOverlays ? markers : []}
          paths={showOverlays ? paths : []}
          onMarkerClick={handleMarkerClick}
          onPathClick={handlePathClick}
        />

        <ZoomControl
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
          onReset={resetView}
          scale={viewport.scale}
        />
      </main>
    </div>
  );
}
