import { useMemo } from 'react';
import { getMajorHaplogroups } from '../../data/migrationData';
import { getMajorMtDNAHaplogroups } from '../../mtDNA_migrationData';
import styles from './HaplogroupSelector.module.css';

type DataSource = 'Y-haplogroup' | 'mtDNA' | 'both';

interface HaplogroupItem {
  id: string;
  label: string;
  color: string;
  category?: 'Y-haplogroup' | 'mtDNA';
}

interface HaplogroupSelectorProps {
  selectedHaplogroups: string[];
  onSelectionChange: (haplogroups: string[]) => void;
  dataSource?: DataSource;
}

export function HaplogroupSelector({
  selectedHaplogroups,
  onSelectionChange,
  dataSource = 'Y-haplogroup',
}: HaplogroupSelectorProps) {
  const haplogroups = useMemo((): HaplogroupItem[] => {
    if (dataSource === 'Y-haplogroup') {
      return getMajorHaplogroups().map(h => ({ ...h, category: 'Y-haplogroup' as const }));
    } else if (dataSource === 'mtDNA') {
      return getMajorMtDNAHaplogroups().map(h => ({ ...h, category: 'mtDNA' as const }));
    } else {
      // 'both' - combine with prefixed IDs to avoid conflicts
      const yHaps = getMajorHaplogroups().map(h => ({
        id: `Y:${h.id}`,
        label: `Y-${h.label}`,
        color: h.color,
        category: 'Y-haplogroup' as const,
      }));
      const mtHaps = getMajorMtDNAHaplogroups().map(h => ({
        id: `mt:${h.id}`,
        label: `mt-${h.label}`,
        color: h.color,
        category: 'mtDNA' as const,
      }));
      return [...yHaps, ...mtHaps];
    }
  }, [dataSource]);

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
