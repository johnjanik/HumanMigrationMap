import { memo } from 'react';
import { line, curveNatural } from 'd3-shape';
import type { GeoPath, GeoPermissibleObjects, GeoProjection } from 'd3-geo';
import type { PathOverlayData } from '../../types';
import styles from './Overlays.module.css';

interface PathOverlayProps {
  paths: PathOverlayData[];
  pathGenerator: GeoPath<unknown, GeoPermissibleObjects>;
  onPathClick?: (path: PathOverlayData) => void;
  onPathHover?: (path: PathOverlayData | null, event?: React.MouseEvent) => void;
}

export const PathOverlay = memo(function PathOverlay({
  paths,
  pathGenerator,
  onPathClick,
  onPathHover,
}: PathOverlayProps) {
  const projection = pathGenerator.projection() as GeoProjection | null;
  if (!projection) return null;

  return (
    <g className={styles.pathOverlay}>
      {paths.map((pathData) => {
        // Project all coordinates
        const projectedPoints = pathData.coordinates
          .map(coord => projection(coord))
          .filter((p): p is [number, number] => p !== null);

        if (projectedPoints.length < 2) return null;

        // Create line generator
        const lineGenerator = line<[number, number]>()
          .x(d => d[0])
          .y(d => d[1])
          .curve(curveNatural);

        const d = lineGenerator(projectedPoints);
        if (!d) return null;

        const color = pathData.color || '#3498db';
        const width = pathData.width || 2;

        return (
          <g key={pathData.id} className={styles.path}>
            {/* Glow effect */}
            <path
              d={d}
              fill="none"
              stroke={color}
              strokeWidth={width + 6}
              strokeOpacity={0.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Shadow */}
            <path
              d={d}
              fill="none"
              stroke={color}
              strokeWidth={width + 3}
              strokeOpacity={0.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Main path */}
            <path
              d={d}
              fill="none"
              stroke={color}
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={pathData.dashed ? '8,4' : undefined}
              className={pathData.animated ? styles.animatedPath : undefined}
              onClick={() => onPathClick?.(pathData)}
              onMouseEnter={(e) => onPathHover?.(pathData, e)}
              onMouseLeave={() => onPathHover?.(null)}
              style={{ cursor: 'pointer' }}
            />

            {/* Arrow markers at intervals */}
            {!pathData.dashed && projectedPoints.length > 2 && (
              <ArrowMarkers
                points={projectedPoints}
                color={color}
                width={width}
              />
            )}
          </g>
        );
      })}
    </g>
  );
});

// Arrow markers component for showing direction
function ArrowMarkers({
  points,
  color,
  width,
}: {
  points: [number, number][];
  color: string;
  width: number;
}) {
  // Place arrows at regular intervals along the path
  const arrows: React.ReactNode[] = [];
  const step = Math.max(3, Math.floor(points.length / 5));

  for (let i = step; i < points.length - 1; i += step) {
    const p1 = points[i - 1];
    const p2 = points[i];
    const angle = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) * (180 / Math.PI);

    arrows.push(
      <g key={i} transform={`translate(${p2[0]}, ${p2[1]}) rotate(${angle})`}>
        <path
          d={`M ${-width * 2} ${-width * 1.5} L 0 0 L ${-width * 2} ${width * 1.5}`}
          fill="none"
          stroke={color}
          strokeWidth={width * 0.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    );
  }

  return <>{arrows}</>;
}
