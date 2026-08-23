import styles from './HomeCta.module.css';

export default function HomeCta() {
  return (
    <section class={`container ${styles.cta}`}>
      <div>
        <span class="eyebrow">Stay connected</span>
        <h2>Keep up with what local developers are building.</h2>
        <p>
          Get meetup plans, project updates, technical notes, and opportunities to contribute across
          the region.
        </p>
      </div>
      <div class={styles.ctaActions}>
        <a class="button" data-variant="primary" href="/join">
          Join the Community
        </a>
        <a class="button" href="mailto:chris@southmountaintech.com">
          Email Chris
        </a>
      </div>
    </section>
  );
}
