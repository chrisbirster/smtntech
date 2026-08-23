import { For } from 'solid-js';
import { projects } from '../../data/content';
import ContentCard from '../ContentCard';
import SectionHeading from '../SectionHeading';
import sectionStyles from './HomeSection.module.css';
import styles from './HomeProjects.module.css';

export default function HomeProjects() {
  return (
    <>
      <section class={`container ${sectionStyles.section}`}>
        <SectionHeading
          eyebrow="Community projects"
          title="Build Useful Things Together"
          copy="Open projects where local developers can learn, contribute, document decisions, and ship something useful."
          action={{ label: 'Find a project', href: '/projects' }}
        />
        <div class={styles.projectsGrid}>
          <ContentCard item={projects[0]} featured headingLevel={3} />
          <div class={styles.stack}>
            <For each={projects.slice(1)}>
              {(item) => <ContentCard item={item} headingLevel={3} />}
            </For>
          </div>
        </div>
      </section>

      <section class={`container ${sectionStyles.section}`}>
        <SectionHeading
          eyebrow="What are you building?"
          title="Put Your Project in the Open"
          copy="Share a side project, production app, library, hardware build, game, or weekend experiment. Finished is optional."
          action={{ label: 'Submit a project', href: '/showcase' }}
        />
      </section>
    </>
  );
}
