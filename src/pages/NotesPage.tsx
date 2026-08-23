import PageHero from '../components/PageHero';
import styles from './Pages.module.css';

export default function NotesPage() {
  document.title = 'Meeting Notes — South Mountain Technologies';
  return (
    <>
      <PageHero
        eyebrow="Open documentation"
        title="If it happened, write it down."
        copy="Meeting notes, project decisions, useful links, and follow-up work live in public so people can stay involved even when they cannot attend."
      />
      <section class={`container ${styles.section}`}>
        <div class={styles.notes}>
          <a class={styles.note} href="/community">
            <time>Community planning</time>
            <strong>Goals, participation, and next steps</strong>
            <span>Read notes →</span>
          </a>
          <a class={styles.note} href="/projects/coolshell">
            <time>Project notes</time>
            <strong>CoolShell direction and contribution areas</strong>
            <span>View project →</span>
          </a>
          <a class={styles.note} href="/events/south-mountain-developer-meetup">
            <time>Meetup planning</time>
            <strong>Working format and venue needs</strong>
            <span>Meetup details →</span>
          </a>
        </div>
        <p class={styles.notice}>
          Planning notes are available now. Dated meetup notes will be added as recurring events
          begin.
        </p>
      </section>
    </>
  );
}
