import SectionHeading from '../SectionHeading';
import sectionStyles from './HomeSection.module.css';
import styles from './CommunityHighlights.module.css';

export default function CommunityHighlights() {
  return (
    <section class={`container ${sectionStyles.section}`}>
      <SectionHeading
        eyebrow="From the community"
        title="Questions, Useful Links, and Small Discoveries"
        copy="The practical, surprising, and occasionally strange things developers share when they compare notes."
      />
      <div class={styles.breakGrid}>
        <article class={styles.meme}>
          <small>Weekly check-in</small>
          <div>
            <strong>What did you ship, fix, or finally understand?</strong>
          </div>
          <p>Small wins and unfinished work are welcome.</p>
          <a href="/community">Share an update →</a>
        </article>
        <article class={styles.weird}>
          <small>Repository exchange</small>
          <h3>Found a repo worth sharing?</h3>
          <p>
            Bring the useful tool, strange experiment, or exceptionally good documentation you found
            this week.
          </p>
          <a href="/community">Send the link →</a>
        </article>
        <article class={styles.poll}>
          <small>Community question</small>
          <h3>What tool has improved your workflow lately?</h3>
          <p>Tell us what changed, where it helps, and what tradeoffs came with it.</p>
          <a href="/community">Join the discussion →</a>
        </article>
        <article class={styles.til}>
          <small>Today I learned</small>
          <h3>Share the detail that finally clicked.</h3>
          <p>
            A command, CSS property, API behavior, debugging lesson, or anything else another
            developer could use.
          </p>
          <a href="/community">Share your TIL →</a>
        </article>
      </div>
    </section>
  );
}
