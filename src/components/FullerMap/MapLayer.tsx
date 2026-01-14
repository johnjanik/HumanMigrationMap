import { memo, useState } from 'react';
import type { GeoPath, GeoPermissibleObjects, GeoProjection } from 'd3-geo';
import type { LayerConfig, GeoFeature, GeoCollection, LayerStyle } from '../../types';

interface MapLayerProps {
  config: LayerConfig;
  data: GeoCollection;
  pathGenerator: GeoPath<unknown, GeoPermissibleObjects>;
  selectedFeature: GeoFeature | null;
  onFeatureHover: (feature: GeoFeature | null, event?: React.MouseEvent) => void;
  onFeatureClick: (feature: GeoFeature) => void;
}

export const MapLayer = memo(function MapLayer({
  config,
  data,
  pathGenerator,
  selectedFeature,
  onFeatureHover,
  onFeatureClick,
}: MapLayerProps) {
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);
  const { id, type, style, hoverStyle, selectedStyle } = config;

  // Get style for a feature based on its state
  const getFeatureStyle = (_feature: GeoFeature, featureId: string | number): LayerStyle => {
    const isSelected = selectedFeature?.id === featureId;
    const isHovered = hoveredId === featureId;

    if (isSelected && selectedStyle) {
      return { ...style, ...selectedStyle };
    }
    if (isHovered && hoverStyle) {
      return { ...style, ...hoverStyle };
    }
    return style;
  };

  const handleMouseEnter = (feature: GeoFeature, featureId: string | number, e: React.MouseEvent) => {
    setHoveredId(featureId);
    onFeatureHover({ ...feature, id: featureId }, e);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    onFeatureHover(null);
  };

  // Render polygons and lines
  if (type === 'polygon' || type === 'line') {
    return (
      <g className="map-layer" data-layer={id}>
        {data.features.map((feature, index) => {
          const path = pathGenerator(feature as GeoPermissibleObjects);
          if (!path) return null;

          const featureId = feature.id ?? `${id}-${index}`;
          const featureStyle = getFeatureStyle(feature as GeoFeature, featureId);

          return (
            <path
              key={featureId}
              d={path}
              style={{
                fill: type === 'polygon' ? featureStyle.fill : 'none',
                fillOpacity: featureStyle.fillOpacity,
                stroke: featureStyle.stroke,
                strokeWidth: featureStyle.strokeWidth,
                strokeOpacity: featureStyle.strokeOpacity,
                strokeDasharray: featureStyle.strokeDasharray,
                cursor: hoverStyle ? 'pointer' : 'default',
                transition: 'fill 0.15s ease, stroke 0.15s ease, stroke-width 0.15s ease',
              }}
              onMouseEnter={(e) => handleMouseEnter(feature as GeoFeature, featureId, e)}
              onMouseMove={(e) => onFeatureHover({ ...feature, id: featureId } as GeoFeature, e)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => {
                e.stopPropagation();
                onFeatureClick({ ...feature, id: featureId } as GeoFeature);
              }}
            />
          );
        })}
      </g>
    );
  }

  // Render points
  if (type === 'point') {
    const projection = pathGenerator.projection() as GeoProjection | null;
    if (!projection) return null;

    return (
      <g className="map-layer" data-layer={id}>
        {data.features.map((feature, index) => {
          if (feature.geometry.type !== 'Point') return null;

          const coords = feature.geometry.coordinates as [number, number];
          const projected = projection(coords);
          if (!projected) return null;

          const [x, y] = projected;
          const featureId = feature.id ?? `${id}-${index}`;
          const featureStyle = getFeatureStyle(feature as GeoFeature, featureId);

          return (
            <circle
              key={featureId}
              cx={x}
              cy={y}
              r={4}
              style={{
                fill: featureStyle.fill,
                stroke: featureStyle.stroke,
                strokeWidth: featureStyle.strokeWidth,
                cursor: 'pointer',
                transition: 'r 0.15s ease',
              }}
              onMouseEnter={(e) => handleMouseEnter(feature as GeoFeature, featureId, e)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => {
                e.stopPropagation();
                onFeatureClick({ ...feature, id: featureId } as GeoFeature);
              }}
            />
          );
        })}
      </g>
    );
  }

  return null;
});
