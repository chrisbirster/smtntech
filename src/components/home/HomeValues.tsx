import SectionHeading from '../SectionHeading';
import sectionStyles from './HomeSection.module.css';
import styles from './HomeValues.module.css';

const values = [
  {
    icon: '◎',
    title: 'Open & welcoming',
    copy: 'Every experience level belongs here. No gatekeeping. No prerequisites.',
  },
  {
    icon: '</>',
    title: 'Build in public',
    copy: 'We learn out loud, ship small, and explain the decisions behind the work.',
  },
  {
    icon: '△',
    title: 'Local first',
    copy: 'Rooted in Pennsylvania’s South Mountain region and invested in the people building nearby.',
  },
  {
    icon: '♡',
    title: 'Give first',
    copy: 'Share knowledge. Lend a hand. Make space for others to grow.',
  },
];

export default function HomeValues() {
  return (
    <section class={`container ${sectionStyles.section}`}>
      <SectionHeading eyebrow="Everyone starts somewhere" title="Our Community Values" />
      <div class={styles.values}>
        {values.map((value) => (
          <div>
            <b>{value.icon}</b>
            <h3>{value.title}</h3>
            <p>{value.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
