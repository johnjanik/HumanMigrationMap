import { useMemo } from 'react';
import { geoPath, geoGraticule } from 'd3-geo';
import { geoAirocean } from 'd3-geo-polygon';
import type { MapViewport } from '../types';
import { GRATICULE_STEP } from '../lib/constants';

export function useProjection(viewport: MapViewport) {
  const projection = useMemo(() => {
    // geoAirocean has built-in rotation [-83.65929, 25.44458, -87.45184] and angle -60
    // Adding .angle(90) rotates to vertical Fuller arrangement (like Observable example)
    return geoAirocean()
      .scale(viewport.scale)
      .translate([viewport.width / 2 + viewport.panX, viewport.height / 2 + viewport.panY])
      .angle(30)  // Adjust from built-in -60 to get vertical layout: -60 + 90 = 30
      .precision(0.5);
  }, [viewport.width, viewport.height, viewport.scale, viewport.panX, viewport.panY]);

  const pathGenerator = useMemo(() => {
    return geoPath().projection(projection);
  }, [projection]);

  const graticuleGenerator = useMemo(() => {
    return geoGraticule().step([GRATICULE_STEP, GRATICULE_STEP]);
  }, []);

  // Utility function to project a point
  const projectPoint = useMemo(() => {
    return (lng: number, lat: number): [number, number] | null => {
      return projection([lng, lat]);
    };
  }, [projection]);

  // Utility function to unproject a point (screen coords to lat/lon)
  const unprojectPoint = useMemo(() => {
    return (x: number, y: number): [number, number] | null => {
      return projection.invert?.([x, y]) || null;
    };
  }, [projection]);

  return {
    projection,
    pathGenerator,
    graticuleGenerator,
    projectPoint,
    unprojectPoint,
  };
}
