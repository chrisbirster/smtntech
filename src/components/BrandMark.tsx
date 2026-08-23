import styles from './BrandMark.module.css';

export default function BrandMark() {
  return (
    <a href="/" class={styles.brand} aria-label="South Mountain Technologies home">
      <img class={styles.mark} src="/south-mountain-mark.svg" alt="" aria-hidden="true" />
      <span>
        <strong>South Mountain</strong>
        <small>Technologies</small>
      </span>
    </a>
  );
}
