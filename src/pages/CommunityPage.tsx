import PageHero from '../components/PageHero';
import styles from './Pages.module.css';

const values = [
  [
    'Curiosity over credentials',
    'You do not need a computer science degree, a senior title, or a perfect GitHub graph. Show up ready to learn and contribute.',
  ],
  [
    'Build in public',
    'Share unfinished work and explain the decisions behind it so other people can learn alongside you.',
  ],
  [
    'Teach what you know',
    'The detail that feels obvious to you may be the explanation another developer has been looking for.',
  ],
  [
    'Leave the trail better',
    'Document what you learn, welcome new contributors, and improve the path for the person who arrives next.',
  ],
];

export default function CommunityPage() {
  document.title = 'Community — South Mountain Technologies';
  return (
    <>
      <PageHero
        eyebrow="Across the South Mountain region"
        title="A local developer community with room for every experience level."
        copy="Professional engineers, students, designers, makers, sysadmins, hobbyists, and curious beginners are welcome. Bring a project, a question, or an interest in meeting the people building technology nearby."
        actions={[
          { label: 'Join the community', href: '/join', primary: true },
          { label: 'Find a project', href: '/projects' },
          { label: 'Read meeting notes', href: '/notes' },
        ]}
      />
      <section class={`container ${styles.section}`}>
        <div class={styles.values}>
          {values.map(([title, copy], index) => (
            <article class={styles.value}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section class={`container ${styles.section}`}>
        <div class={styles.feature}>
          <div>
            <span class="eyebrow">How to participate</span>
            <h2>Start with what interests you.</h2>
            <p>
              Attend a meetup, propose a short talk, contribute to a project, write a technical
              note, suggest a podcast topic, share a useful repository, help with a venue, or follow
              along until something catches your attention.
            </p>
          </div>
          <aside class={styles.sidebar}>
            <h3>What to expect</h3>
            <ul>
              <li>Beginners and experienced developers participate together.</li>
              <li>Unfinished projects and practical questions are welcome.</li>
              <li>Companies may participate, but the community is not a sales floor.</li>
              <li>Community projects should be open and documented.</li>
              <li>Participation should remain accessible and respectful.</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
