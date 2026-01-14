import styles from './Tooltip.module.css';

interface TooltipProps {
  visible: boolean;
  x: number;
  y: number;
  content: string;
}

export function Tooltip({ visible, x, y, content }: TooltipProps) {
  if (!visible || !content) return null;

  return (
    <div
      className={styles.tooltip}
      style={{
        left: x,
        top: y,
      }}
    >
      {content}
    </div>
  );
}
