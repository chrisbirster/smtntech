import styles from "./BrandMark.module.css";

export default function BrandMark() {
  return (
    <a href="/" class={styles.brand} aria-label="South Mountain Technologies home">
      <svg class={styles.mark} viewBox="0 0 64 54" aria-hidden="true">
        <path d="M4 47 24 16l9 14 7-10 20 27" />
        <path d="m10 47 14-22 8 13 8-12 14 21" />
        <path d="M25 16 32 6l8 14" />
        <circle cx="32" cy="6" r="2" />
      </svg>
      <span><strong>South Mountain</strong><small>Technologies</small></span>
    </a>
  );
}
