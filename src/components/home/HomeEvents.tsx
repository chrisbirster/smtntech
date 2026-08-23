import styles from './HomeEvents.module.css';

export default function HomeEvents() {
  return (
    <section class={styles.eventsBand}>
      <div class={`container ${styles.eventsGrid}`}>
        <div>
          <span class="eyebrow">Meet locally</span>
          <h2>Meet the developers behind the usernames.</h2>
          <p>
            We’re planning a recurring meetup for developers across Pennsylvania’s South Mountain
            region. Help shape the venue, format, topics, and first date.
          </p>
          <a class="button" href="/events">
            Meetup details →
          </a>
        </div>
        <a class={styles.eventCard} href="/events/south-mountain-developer-meetup">
          <small>In planning</small>
          <h3>South Mountain Developer Meetup</h3>
          <p>
            Focused technical talks, project demos, open discussion, and time to meet people nearby.
          </p>
          <span>Help shape the first meetup →</span>
        </a>
        <div class={styles.futureEvent}>
          <span aria-hidden="true">▣</span>
          <h3>Have a topic or venue in mind?</h3>
          <p>Good local events start with practical input from the people who plan to attend.</p>
          <a href="/join">Share an idea</a>
        </div>
      </div>
    </section>
  );
}
