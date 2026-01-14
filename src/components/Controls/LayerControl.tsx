import type { LayerConfig } from '../../types';
import styles from './Controls.module.css';

interface LayerControlProps {
  layers: LayerConfig[];
  onToggle: (layerId: string) => void;
}

export function LayerControl({ layers, onToggle }: LayerControlProps) {
  return (
    <div className={styles.layerControl}>
      <h3 className={styles.sectionTitle}>Layers</h3>
      <div className={styles.layerList}>
        {layers.map(layer => (
          <label key={layer.id} className={styles.layerItem}>
            <input
              type="checkbox"
              checked={layer.visible}
              onChange={() => onToggle(layer.id)}
              className={styles.checkbox}
            />
            <span className={styles.layerName}>{layer.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
