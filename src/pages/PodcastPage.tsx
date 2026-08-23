import { For } from 'solid-js';
import ContentCard from '../components/ContentCard';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { episodes } from '../data/content';
import styles from './Pages.module.css';

export default function PodcastPage() {
  document.title = 'Podcast — South Mountain Technologies';
  return (
    <>
      <PageHero
        eyebrow="Coming soon"
        title="South Mountain Devcast"
        copy="Conversations with local developers about software, open source, and the tools shaping their work."
        actions={[
          { label: 'Suggest a topic', href: '/join', primary: true },
          { label: 'Meet the community', href: '/community' },
        ]}
      >
        <div class={styles.chips}>
          {['AI', 'Zig', 'CSS', 'Open Source', 'Developer Tools', 'Self-Hosting', 'Community'].map(
            (tag) => (
              <span class="tag">{tag}</span>
            ),
          )}
        </div>
      </PageHero>
      <section class={`container ${styles.section}`}>
        <div class={styles.feature}>
          <ContentCard item={episodes[0]} featured />
          <aside class={styles.sidebar}>
            <span class="eyebrow">People we want to hear from</span>
            <h3>Maintainers, educators, and builders with something useful to share.</h3>
            <p>
              We want conversations with people who can explain the decisions, tradeoffs, and
              lessons behind their work—from the South Mountain region and beyond.
            </p>
            <a class="button" href="/join">
              Suggest a future guest
            </a>
          </aside>
        </div>
      </section>
      <section class={`container ${styles.section}`}>
        <SectionHeading
          eyebrow="On the workbench"
          title="Planned Conversations"
          copy="Topics currently being shaped with input from the community."
        />
        <div class={styles.grid}>
          <For each={episodes}>{(item) => <ContentCard item={item} />}</For>
        </div>
      </section>
    </>
  );
}
