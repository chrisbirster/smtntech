import PageHero from '../components/PageHero';
import styles from './Pages.module.css';

export default function ShowcasePage() {
  document.title = 'Showcase — South Mountain Technologies';
  return (
    <>
      <PageHero
        eyebrow="What are you building?"
        title="Your side project deserves daylight."
        copy="Share the library, app, game, hardware project, production tool, or weekend experiment you’ve been building. Finished is optional."
        actions={[
          {
            label: 'Submit a project',
            href: 'mailto:chris@southmountaintech.com?subject=Project%20showcase%20submission&body=Project%20name%3A%0AProject%20link%3A%0AWhat%20it%20does%3A%0AWhat%20feedback%20or%20help%20you%20want%3A',
            primary: true,
          },
          { label: 'Meet the community', href: '/community' },
        ]}
      />
      <section class={`container ${styles.section}`}>
        <div class={styles.feature}>
          <div>
            <span class="eyebrow">Community showcase</span>
            <h2>Show the work. Share the story behind it.</h2>
            <p>
              Send a project link, a short description, the tools you used, and the kind of feedback
              or help you want. Real submissions will be added here as the showcase grows.
            </p>
          </div>
          <aside class={styles.sidebar}>
            <h3>Good submissions include</h3>
            <ul>
              <li>A project, demo, or repository link</li>
              <li>A short explanation of what it does</li>
              <li>The stack or tools involved</li>
              <li>What you learned while building it</li>
              <li>The feedback or contributions you want</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
