import { For } from 'solid-js';
import ContentCard from '../components/ContentCard';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { articles } from '../data/content';
import styles from './Pages.module.css';

export default function ArticlesPage() {
  document.title = 'Articles — South Mountain Technologies';
  return (
    <>
      <PageHero
        eyebrow="Field notes from local builders"
        title="Practical notes from people who build software."
        copy="Technical guides, project write-ups, opinions, and experiments from developers across Pennsylvania’s South Mountain region."
      >
        <div class={styles.chips}>
          {['Developer Experience', 'Open Source', 'CLI', 'Systems', 'Zig', 'Community'].map(
            (tag) => (
              <span class="tag">{tag}</span>
            ),
          )}
        </div>
      </PageHero>
      <section class={`container ${styles.section}`}>
        <SectionHeading eyebrow="Latest" title="Notes From the Workbench" />
        <div class={styles.grid}>
          <For each={articles}>{(item) => <ContentCard item={item} />}</For>
        </div>
      </section>
    </>
  );
}
