import styles from './Controls.module.css';

interface ZoomControlProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  scale: number;
}

export function ZoomControl({ onZoomIn, onZoomOut, onReset, scale }: ZoomControlProps) {
  return (
    <div className={styles.zoomControl}>
      <button
        className={styles.zoomButton}
        onClick={onZoomIn}
        title="Zoom In"
      >
        +
      </button>
      <button
        className={styles.zoomButton}
        onClick={onZoomOut}
        title="Zoom Out"
      >
        -
      </button>
      <button
        className={styles.zoomButton}
        onClick={onReset}
        title="Reset View"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
        </svg>
      </button>
      <div className={styles.scaleIndicator}>
        {Math.round(scale)}x
      </div>
    </div>
  );
}
