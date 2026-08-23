import styles from './DetailPage.module.css';
export default function NotFoundPage() {
  document.title = 'Not Found — South Mountain Technologies';
  return (
    <section class={`container ${styles.missing}`}>
      <span class="eyebrow">404 // lost on the trail</span>
      <h1>That page wandered off the mountain.</h1>
      <p>Head back home or find something being built nearby.</p>
      <a class="button" data-variant="primary" href="/">
        Return home
      </a>
    </section>
  );
}
