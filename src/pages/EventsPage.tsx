import { For } from 'solid-js';
import ContentCard from '../components/ContentCard';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { events } from '../data/content';
import styles from './Pages.module.css';

export default function EventsPage() {
  document.title = 'Events — South Mountain Technologies';
  return (
    <>
      <PageHero
        eyebrow="Meet locally"
        title="Meet local developers in person."
        copy="We’re planning a recurring meetup across Pennsylvania’s South Mountain region with focused technical talks, project demos, open discussion, and time to meet the people behind the usernames."
        actions={[
          { label: 'Help shape the first meetup', href: '/join', primary: true },
          {
            label: 'Offer a venue',
            href: 'mailto:chris@southmountaintech.com?subject=South%20Mountain%20Meetup%20Venue',
          },
        ]}
      />
      <section class={`container ${styles.section}`}>
        <SectionHeading eyebrow="Upcoming" title="Currently in Planning" />
        <div class={styles.grid} data-two="true">
          <For each={events}>{(item) => <ContentCard item={item} featured />}</For>
          <aside class={styles.sidebar}>
            <span class="eyebrow">Working format</span>
            <h3>Focused, useful, and easy to join.</h3>
            <ul>
              <li>Brief community introductions</li>
              <li>Two focused technical talks</li>
              <li>Project demos and work-in-progress</li>
              <li>Open discussion</li>
              <li>Food and unstructured conversation</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
