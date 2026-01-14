import { memo } from 'react';
import type { GeoPath, GeoPermissibleObjects, GeoProjection } from 'd3-geo';
import type { PointMarker } from '../../types';
import styles from './Overlays.module.css';

interface PointOverlayProps {
  markers: PointMarker[];
  pathGenerator: GeoPath<unknown, GeoPermissibleObjects>;
  onMarkerClick?: (marker: PointMarker) => void;
  onMarkerHover?: (marker: PointMarker | null, event?: React.MouseEvent) => void;
}

export const PointOverlay = memo(function PointOverlay({
  markers,
  pathGenerator,
  onMarkerClick,
  onMarkerHover,
}: PointOverlayProps) {
  const projection = pathGenerator.projection() as GeoProjection | null;
  if (!projection) return null;

  return (
    <g className={styles.pointOverlay}>
      {markers.map((marker) => {
        const projected = projection(marker.coordinates);
        if (!projected) return null;

        const [x, y] = projected;
        const size = marker.size || 8;
        const color = marker.color || '#e74c3c';

        return (
          <g
            key={marker.id}
            transform={`translate(${x}, ${y})`}
            className={styles.marker}
            onClick={() => onMarkerClick?.(marker)}
            onMouseEnter={(e) => onMarkerHover?.(marker, e)}
            onMouseMove={(e) => onMarkerHover?.(marker, e)}
            onMouseLeave={() => onMarkerHover?.(null)}
          >
            {/* Pulse animation circle */}
            <circle
              r={size}
              fill="none"
              stroke={color}
              strokeWidth={2}
              className={styles.markerPulse}
            />

            {/* Main marker circle */}
            <circle
              r={size}
              fill={color}
              stroke="#fff"
              strokeWidth={2}
              className={styles.markerCircle}
            />

            {/* Label */}
            {marker.label && (
              <text
                y={-size - 8}
                textAnchor="middle"
                className={styles.markerLabel}
              >
                {marker.label}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
});
