import { useCallback, useRef } from 'react';
import type { MapViewport } from '../types';
import { ZOOM_LIMITS } from '../lib/constants';

interface DragState {
  isDragging: boolean;
  startX: number;
  startY: number;
  startPanX: number;
  startPanY: number;
}

export function useMapInteraction(
  viewport: MapViewport,
  onViewportChange: (viewport: Partial<MapViewport>) => void
) {
  const dragState = useRef<DragState>({
    isDragging: false,
    startX: 0,
    startY: 0,
    startPanX: 0,
    startPanY: 0,
  });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    dragState.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      startPanX: viewport.panX,
      startPanY: viewport.panY,
    };
  }, [viewport.panX, viewport.panY]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragState.current.isDragging) return;

    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;

    onViewportChange({
      panX: dragState.current.startPanX + dx,
      panY: dragState.current.startPanY + dy,
    });
  }, [onViewportChange]);

  const handleMouseUp = useCallback(() => {
    dragState.current.isDragging = false;
  }, []);

  const handleMouseLeave = useCallback(() => {
    dragState.current.isDragging = false;
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent | WheelEvent) => {
    // preventDefault is called in the component's useEffect with passive: false
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(
      ZOOM_LIMITS.min,
      Math.min(ZOOM_LIMITS.max, viewport.scale * zoomFactor)
    );

    onViewportChange({ scale: newScale });
  }, [viewport.scale, onViewportChange]);

  const resetView = useCallback(() => {
    onViewportChange({
      scale: 140,
      rotation: [0, 0, 0],
      panX: 0,
      panY: 0,
    });
  }, [onViewportChange]);

  const zoomIn = useCallback(() => {
    const newScale = Math.min(ZOOM_LIMITS.max, viewport.scale * 1.2);
    onViewportChange({ scale: newScale });
  }, [viewport.scale, onViewportChange]);

  const zoomOut = useCallback(() => {
    const newScale = Math.max(ZOOM_LIMITS.min, viewport.scale * 0.8);
    onViewportChange({ scale: newScale });
  }, [viewport.scale, onViewportChange]);

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleWheel,
    resetView,
    zoomIn,
    zoomOut,
  };
}
