import PageHero from '../components/PageHero';
import styles from './Pages.module.css';

export default function AboutPage() {
  document.title = 'About — South Mountain Technologies';
  return (
    <>
      <PageHero
        eyebrow="About South Mountain Technologies"
        title="Building a stronger technical community across the South Mountain region."
        copy="South Mountain Technologies brings local developers together to share knowledge, build open projects, and create more opportunities to learn and collaborate close to home."
        actions={[
          { label: 'Join the community', href: '/join', primary: true },
          { label: 'Explore client work', href: '/client-work' },
        ]}
      />
      <section class={`container ${styles.section}`}>
        <div class={styles.values}>
          <article class={styles.value}>
            <b>Mission</b>
            <h2>Create a practical home base for local developers.</h2>
            <p>
              A place to meet peers, share technical knowledge, contribute to open projects, and
              make useful work easier to discover.
            </p>
          </article>
          <article class={styles.value}>
            <b>Now</b>
            <h2>Connect the first contributors.</h2>
            <p>
              The community, podcast, and meetup are taking shape with input from the developers who
              want to participate.
            </p>
          </article>
          <article class={styles.value}>
            <b>Next</b>
            <h2>Establish a recurring meetup.</h2>
            <p>
              Create a dependable place for technical talks, project demos, shared learning, and
              conversations between local builders.
            </p>
          </article>
          <article class={styles.value}>
            <b>Long term</b>
            <h2>Become a trusted regional resource.</h2>
            <p>
              Support useful open source, welcome respected guests, and strengthen the connections
              between developers across the region.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
