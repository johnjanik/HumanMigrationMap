import { memo } from 'react';
import type { GeoProjection } from 'd3-geo';

// Fuller icosahedron face centers (approximate geographic coordinates)
// Based on Gray's vertex coordinates, these are the centroids of each triangular face
const FACE_CENTERS: { id: number; coords: [number, number] }[] = [
  // Northern hemisphere faces
  { id: 1, coords: [10, 55] },      // North Atlantic / Iceland area
  { id: 2, coords: [60, 45] },      // Russia / Central Asia
  { id: 3, coords: [130, 50] },     // Siberia / Japan
  { id: 4, coords: [-140, 55] },    // Alaska / Bering
  { id: 5, coords: [-60, 55] },     // Canada / Greenland

  // Mid-latitude faces
  { id: 6, coords: [-20, 15] },     // West Africa / Atlantic
  { id: 7, coords: [35, 20] },      // Middle East / Africa
  { id: 8, coords: [90, 15] },      // India / Bay of Bengal
  { id: 9, coords: [150, 10] },     // Philippines / Pacific
  { id: 10, coords: [-160, 10] },   // Central Pacific
  { id: 11, coords: [-100, 20] },   // Mexico / Central America
  { id: 12, coords: [-40, 0] },     // South America / Atlantic

  // Southern hemisphere faces
  { id: 13, coords: [20, -30] },    // South Africa
  { id: 14, coords: [80, -25] },    // Indian Ocean
  { id: 15, coords: [140, -25] },   // Australia
  { id: 16, coords: [-170, -30] },  // South Pacific
  { id: 17, coords: [-110, -30] },  // Southeast Pacific
  { id: 18, coords: [-60, -35] },   // South America

  // Antarctic faces
  { id: 19, coords: [0, -70] },     // Antarctica (Atlantic side)
  { id: 20, coords: [180, -70] },   // Antarctica (Pacific side)
];

interface FaceLabelsProps {
  projection: GeoProjection;
  visible?: boolean;
}

export const FaceLabels = memo(function FaceLabels({
  projection,
  visible = true
}: FaceLabelsProps) {
  if (!visible) return null;

  return (
    <g className="face-labels">
      {FACE_CENTERS.map(({ id, coords }) => {
        const projected = projection(coords);
        if (!projected) return null;

        const [x, y] = projected;

        return (
          <g key={id} transform={`translate(${x}, ${y})`}>
            {/* Background circle */}
            <circle
              r={18}
              fill="rgba(255, 0, 0, 0.8)"
              stroke="#fff"
              strokeWidth={2}
            />
            {/* Number label */}
            <text
              textAnchor="middle"
              dominantBaseline="central"
              fill="#fff"
              fontSize={14}
              fontWeight="bold"
              fontFamily="Arial, sans-serif"
            >
              {id}
            </text>
          </g>
        );
      })}
    </g>
  );
});
