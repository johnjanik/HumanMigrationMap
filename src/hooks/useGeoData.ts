import { useState, useEffect, useRef } from 'react';
import { json } from 'd3-fetch';
import { feature } from 'topojson-client';
import type { LayerConfig, GeoCollection, LayerDataState } from '../types';
import type { Topology } from 'topojson-specification';

export function useGeoData(
  layers: LayerConfig[]
): Map<string, LayerDataState> {
  const [dataMap, setDataMap] = useState<Map<string, LayerDataState>>(new Map());
  const loadedUrls = useRef<Set<string>>(new Set());

  useEffect(() => {
    const visibleLayers = layers.filter(l => l.visible);

    visibleLayers.forEach(async (layer) => {
      // Skip if already loaded or loading
      if (loadedUrls.current.has(layer.url)) return;

      loadedUrls.current.add(layer.url);

      // Set loading state
      setDataMap(prev => new Map(prev).set(layer.id, {
        data: null,
        loading: true,
        error: null,
      }));

      try {
        const rawData = await json(layer.url);

        // Handle TopoJSON if needed
        let geoData: GeoCollection;
        if (rawData && typeof rawData === 'object' && 'type' in rawData && rawData.type === 'Topology') {
          // TopoJSON - extract first object
          const topology = rawData as Topology;
          const objectKeys = Object.keys(topology.objects);
          geoData = feature(topology, topology.objects[objectKeys[0]]) as unknown as GeoCollection;
        } else {
          // Already GeoJSON
          geoData = rawData as GeoCollection;
        }

        setDataMap(prev => new Map(prev).set(layer.id, {
          data: geoData,
          loading: false,
          error: null,
        }));
      } catch (error) {
        console.error(`Failed to load layer ${layer.id}:`, error);
        setDataMap(prev => new Map(prev).set(layer.id, {
          data: null,
          loading: false,
          error: error as Error,
        }));
      }
    });
  }, [layers]);

  return dataMap;
}

// Hook for loading a single GeoJSON file
export function useSingleGeoData(url: string | null) {
  const [data, setData] = useState<GeoCollection | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    json(url)
      .then((rawData) => {
        if (rawData && typeof rawData === 'object' && 'type' in rawData && rawData.type === 'Topology') {
          const topology = rawData as Topology;
          const objectKeys = Object.keys(topology.objects);
          setData(feature(topology, topology.objects[objectKeys[0]]) as unknown as GeoCollection);
        } else {
          setData(rawData as GeoCollection);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
