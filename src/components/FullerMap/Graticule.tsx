import { memo } from 'react';
import type { GeoPath, GeoGraticuleGenerator, GeoPermissibleObjects } from 'd3-geo';
import { graticuleStyle } from '../../data/layerConfigs';

interface GraticuleProps {
  graticuleGenerator: GeoGraticuleGenerator;
  pathGenerator: GeoPath<unknown, GeoPermissibleObjects>;
  style?: {
    stroke?: string;
    strokeWidth?: number;
    strokeOpacity?: number;
    strokeDasharray?: string;
  };
}

export const Graticule = memo(function Graticule({
  graticuleGenerator,
  pathGenerator,
  style = graticuleStyle,
}: GraticuleProps) {
  const graticule = graticuleGenerator();
  const path = pathGenerator(graticule);

  if (!path) return null;

  return (
    <path
      className="graticule"
      d={path}
      fill="none"
      stroke={style.stroke || '#ccc'}
      strokeWidth={style.strokeWidth || 0.5}
      strokeOpacity={style.strokeOpacity || 0.5}
      strokeDasharray={style.strokeDasharray || '2,2'}
      pointerEvents="none"
    />
  );
});
