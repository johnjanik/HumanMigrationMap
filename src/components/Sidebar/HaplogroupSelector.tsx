import { useMemo } from 'react';
import { getMajorHaplogroups } from '../../data/migrationData';
import styles from './HaplogroupSelector.module.css';

interface HaplogroupSelectorProps {
  selectedHaplogroups: string[];
  onSelectionChange: (haplogroups: string[]) => void;
}

export function HaplogroupSelector({
  selectedHaplogroups,
  onSelectionChange,
}: HaplogroupSelectorProps) {
  const haplogroups = useMemo(() => getMajorHaplogroups(), []);

  const handleToggle = (id: string) => {
    if (selectedHaplogroups.includes(id)) {
      onSelectionChange(selectedHaplogroups.filter(h => h !== id));
    } else {
      onSelectionChange([...selectedHaplogroups, id]);
    }
  };

  const handleSelectAll = () => {
    onSelectionChange(haplogroups.map(h => h.id));
  };

  const handleClearAll = () => {
    onSelectionChange([]);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Haplogroups</h3>

      <div className={styles.actions}>
        <button onClick={handleSelectAll} className={styles.actionBtn}>
          Select All
        </button>
        <button onClick={handleClearAll} className={styles.actionBtn}>
          Clear All
        </button>
      </div>

      <div className={styles.info}>
        {selectedHaplogroups.length === 0
          ? 'Showing all lineages'
          : `Showing ${selectedHaplogroups.length} lineage${selectedHaplogroups.length > 1 ? 's' : ''} + ancestors`
        }
      </div>

      <div className={styles.list}>
        {haplogroups.map(haplo => (
          <label key={haplo.id} className={styles.item}>
            <input
              type="checkbox"
              checked={selectedHaplogroups.includes(haplo.id)}
              onChange={() => handleToggle(haplo.id)}
            />
            <span
              className={styles.colorDot}
              style={{ backgroundColor: haplo.color }}
            />
            <span className={styles.label}>{haplo.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
