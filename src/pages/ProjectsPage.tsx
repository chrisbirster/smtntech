import { For } from 'solid-js';
import ContentCard from '../components/ContentCard';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/content';
import styles from './Pages.module.css';

export default function ProjectsPage() {
  document.title = 'Projects — South Mountain Technologies';
  return (
    <>
      <PageHero
        eyebrow="Community projects"
        title="Build useful things with local developers."
        copy="Join an open project, learn how it works, and contribute through code, documentation, design, testing, or research. Production-ready is optional. Curiosity is required."
      />
      <section class={`container ${styles.section}`}>
        <SectionHeading
          eyebrow="Open projects"
          title="Find a Project"
          copy="Start with code, docs, design, testing, research, or simply a good question."
        />
        <div class={styles.grid}>
          <For each={projects}>{(item) => <ContentCard item={item} />}</For>
        </div>
      </section>
    </>
  );
}
