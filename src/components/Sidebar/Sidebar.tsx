import React from 'react';
import type { GeoFeature } from '../../types';
import styles from './Sidebar.module.css';

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  selectedFeature: GeoFeature | null;
  children?: React.ReactNode;
}

export function Sidebar({ open, onToggle, selectedFeature, children }: SidebarProps) {
  return (
    <>
      <button
        className={styles.toggleButton}
        onClick={onToggle}
        style={{ left: open ? '280px' : '0' }}
      >
        {open ? '<' : '>'}
      </button>

      <aside className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Fuller Map</h2>
          <p className={styles.subtitle}>Dymaxion Projection</p>
        </div>

        <div className={styles.content}>
          {children}

          {selectedFeature && (
            <div className={styles.featureInfo}>
              <h3 className={styles.sectionTitle}>Selected Feature</h3>
              <div className={styles.featureDetails}>
                <div className={styles.featureName}>
                  {selectedFeature.properties?.NAME ||
                   selectedFeature.properties?.name ||
                   'Unknown'}
                </div>
                {selectedFeature.properties?.CONTINENT && (
                  <div className={styles.featureProperty}>
                    <span className={styles.propertyLabel}>Continent:</span>
                    <span>{selectedFeature.properties.CONTINENT}</span>
                  </div>
                )}
                {selectedFeature.properties?.SUBREGION && (
                  <div className={styles.featureProperty}>
                    <span className={styles.propertyLabel}>Region:</span>
                    <span>{selectedFeature.properties.SUBREGION}</span>
                  </div>
                )}
                {selectedFeature.properties?.POP_EST && (
                  <div className={styles.featureProperty}>
                    <span className={styles.propertyLabel}>Population:</span>
                    <span>{Number(selectedFeature.properties.POP_EST).toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <a
            href="https://www.naturalearthdata.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.naturalEarthLink}
          >
            <img
              src="/natural-earth-logo.png"
              alt="Made with Natural Earth"
              className={styles.naturalEarthLogo}
            />
          </a>
        </div>
      </aside>
    </>
  );
}
