import styles from "./Ticker.module.css";

const items = [
  "Arquitectura",
  "Interiores",
  "Oficinas",
  "Estands",
  "Diseño sustentable",
  "Dirección de obra",
];

export default function Ticker() {
  const track = [...items, ...items];

  return (
    <div className={styles.ticker} aria-label="Áreas de trabajo">
      <div className={styles.track} aria-hidden="true">
        {track.map((item, index) => (
          <span key={`${item}-${index}`} className={styles.item}>
            {item}
            <span className={styles.separator} />
          </span>
        ))}
      </div>
    </div>
  );
}
