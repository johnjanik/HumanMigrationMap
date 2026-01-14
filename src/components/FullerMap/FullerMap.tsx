import { useState, useCallback, useRef, useEffect } from 'react';
import { useProjection } from '../../hooks/useProjection';
import { useGeoData } from '../../hooks/useGeoData';
import { useMapInteraction } from '../../hooks/useMapInteraction';
import { MapLayer } from './MapLayer';
import { Graticule } from './Graticule';
import { Tooltip } from './Tooltip';
import type { LayerConfig, GeoFeature, MapViewport, TooltipState, PointMarker, PathOverlayData } from '../../types';
import { PointOverlay } from '../Overlays/PointOverlay';
import { PathOverlay } from '../Overlays/PathOverlay';
import { FaceLabels } from './FaceLabels';
import styles from './FullerMap.module.css';

interface FullerMapProps {
  viewport: MapViewport;
  layers: LayerConfig[];
  selectedFeature: GeoFeature | null;
  onFeatureSelect: (feature: GeoFeature | null) => void;
  onViewportChange: (viewport: Partial<MapViewport>) => void;
  markers?: PointMarker[];
  paths?: PathOverlayData[];
  onMarkerClick?: (marker: PointMarker) => void;
  onPathClick?: (path: PathOverlayData) => void;
}

export function FullerMap({
  viewport,
  layers,
  selectedFeature,
  onFeatureSelect,
  onViewportChange,
  markers = [],
  paths = [],
  onMarkerClick,
  onPathClick,
}: FullerMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    content: '',
  });

  // Set up projection
  const { projection, pathGenerator, graticuleGenerator } = useProjection(viewport);

  // Load all layer data
  const layerDataMap = useGeoData(layers);

  // Set up map interaction (pan/zoom)
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleWheel,
  } = useMapInteraction(viewport, onViewportChange);

  // Attach wheel listener with passive: false to allow preventDefault
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      handleWheel(e as unknown as React.WheelEvent);
    };

    svg.addEventListener('wheel', wheelHandler, { passive: false });
    return () => svg.removeEventListener('wheel', wheelHandler);
  }, [handleWheel]);

  // Handle feature hover
  const handleFeatureHover = useCallback(
    (feature: GeoFeature | null, event?: React.MouseEvent) => {
      if (feature && event) {
        const name = feature.properties?.NAME ||
                     feature.properties?.name ||
                     feature.properties?.NAME_LONG ||
                     'Unknown';
        setTooltip({
          visible: true,
          x: event.clientX + 15,
          y: event.clientY + 15,
          content: name as string,
        });
      } else {
        setTooltip(prev => ({ ...prev, visible: false }));
      }
    },
    []
  );

  // Handle feature click
  const handleFeatureClick = useCallback(
    (feature: GeoFeature) => {
      onFeatureSelect(selectedFeature?.id === feature.id ? null : feature);
    },
    [selectedFeature, onFeatureSelect]
  );

  // Handle background click (deselect)
  const handleBackgroundClick = useCallback(() => {
    onFeatureSelect(null);
  }, [onFeatureSelect]);

  // Handle marker hover
  const handleMarkerHover = useCallback((marker: PointMarker | null, event?: React.MouseEvent) => {
    if (marker && event) {
      setTooltip({
        visible: true,
        x: event.clientX + 15,
        y: event.clientY + 15,
        content: marker.label || marker.id,
      });
    } else {
      setTooltip(prev => ({ ...prev, visible: false }));
    }
  }, []);

  return (
    <div className={styles.mapWrapper}>
      <svg
        ref={svgRef}
        width={viewport.width}
        height={viewport.height}
        className={styles.mapSvg}
        onClick={handleBackgroundClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          {/* Background gradient */}
          <linearGradient id="ocean-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a1628" />
            <stop offset="100%" stopColor="#162d50" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect
          x={0}
          y={0}
          width={viewport.width}
          height={viewport.height}
          fill="url(#ocean-gradient)"
        />

        <g className="map-content">
          {/* Graticule (behind everything) */}
          <Graticule
            graticuleGenerator={graticuleGenerator}
            pathGenerator={pathGenerator}
          />

          {/* Render layers in order */}
          {layers
            .filter(layer => layer.visible)
            .map(layer => {
              const layerData = layerDataMap.get(layer.id);

              if (!layerData?.data) {
                // Show loading state for this layer
                if (layerData?.loading) {
                  return null; // Could show a loading indicator
                }
                return null;
              }

              return (
                <MapLayer
                  key={layer.id}
                  config={layer}
                  data={layerData.data}
                  pathGenerator={pathGenerator}
                  selectedFeature={selectedFeature}
                  onFeatureHover={handleFeatureHover}
                  onFeatureClick={handleFeatureClick}
                />
              );
            })}

          {/* Path overlays */}
          {paths.length > 0 && (
            <PathOverlay
              paths={paths}
              pathGenerator={pathGenerator}
              onPathClick={onPathClick}
            />
          )}

          {/* Point markers */}
          {markers.length > 0 && (
            <PointOverlay
              markers={markers}
              pathGenerator={pathGenerator}
              onMarkerClick={onMarkerClick}
              onMarkerHover={handleMarkerHover}
            />
          )}

          {/* Face labels for debugging - set visible={true} to show */}
          <FaceLabels projection={projection} visible={false} />
        </g>
      </svg>

      <Tooltip
        visible={tooltip.visible}
        x={tooltip.x}
        y={tooltip.y}
        content={tooltip.content}
      />
    </div>
  );
}
