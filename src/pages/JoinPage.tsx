import PageHero from '../components/PageHero';
import styles from './Pages.module.css';

export default function JoinPage() {
  document.title = 'Join — South Mountain Technologies';

  const openEmailDraft = (event: SubmitEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const body = [
      `Name: ${data.get('name') ?? ''}`,
      `Email: ${data.get('email') ?? ''}`,
      `General location: ${data.get('location') ?? ''}`,
      `Experience level: ${data.get('level') ?? ''}`,
      '',
      'What I’m building:',
      String(data.get('building') ?? ''),
      '',
      'How I’d like to participate:',
      String(data.get('participation') ?? ''),
    ].join('\n');
    window.location.href = `mailto:chris@southmountaintech.com?subject=${encodeURIComponent('Join South Mountain Technologies')}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Join the community"
        title="Find your people. Bring what you’re building."
        copy="Tell us what you work on, what you want to learn, and how you would like to participate. You do not need a polished project or a senior title to join."
      />
      <section class={`container ${styles.section}`}>
        <form class={styles.form} onSubmit={openEmailDraft}>
          <div class={styles.formRow}>
            <label class={styles.field}>
              <span>Name</span>
              <input name="name" required autocomplete="name" />
            </label>
            <label class={styles.field}>
              <span>Email</span>
              <input name="email" type="email" required autocomplete="email" />
            </label>
          </div>
          <div class={styles.formRow}>
            <label class={styles.field}>
              <span>General location</span>
              <input name="location" placeholder="e.g. Chambersburg, Waynesboro, Gettysburg" />
            </label>
            <label class={styles.field}>
              <span>Experience level</span>
              <span class={styles.selectWrap}>
                <select name="level">
                  <option>Just getting started</option>
                  <option>Learning / student</option>
                  <option>Working developer</option>
                  <option>Experienced developer</option>
                  <option>Other technical / creative role</option>
                </select>
              </span>
            </label>
          </div>
          <label class={styles.field}>
            <span>What are you currently building?</span>
            <textarea name="building" />
          </label>
          <label class={styles.field}>
            <span>How would you like to participate?</span>
            <textarea
              name="participation"
              placeholder="Meetups, projects, talks, podcast topics, articles, venue support, or simply following along…"
            />
          </label>
          <p class={styles.notice}>
            Submitting opens an email draft with your answers so you can review everything before
            sending.
          </p>
          <button class="button" data-variant="primary" type="submit">
            Open email draft
          </button>
        </form>
      </section>
    </>
  );
}
