import { For } from 'solid-js';
import ContentCard from '../components/ContentCard';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { clients } from '../data/content';
import styles from './Pages.module.css';

export default function ClientWorkPage() {
  document.title = 'Client Work — South Mountain Technologies';
  return (
    <>
      <PageHero
        eyebrow="Practical software, clearly scoped"
        title="Software that fits the way your organization works."
        copy="We build websites, storefronts, internal tools, integrations, and prototypes for organizations that need maintainable software without unnecessary complexity."
        actions={[
          {
            label: 'Start a conversation',
            href: 'mailto:chris@southmountaintech.com?subject=Project%20inquiry',
            primary: true,
          },
          { label: 'About South Mountain Technologies', href: '/about' },
        ]}
      />
      <section class={`container ${styles.section}`}>
        <SectionHeading eyebrow="Selected work" title="Projects Shaped Around Real Operations" />
        <div class={styles.grid} data-two="true">
          <For each={clients}>{(item) => <ContentCard item={item} featured />}</For>
        </div>
      </section>
      <section class={`container ${styles.section}`}>
        <SectionHeading
          eyebrow="How we help"
          title="Useful Software, Thoughtfully Delivered"
          copy="Start with the problem, understand the workflow, and build only what the organization can use and maintain."
        />
        <div class={styles.values}>
          {[
            'Business websites',
            'Custom storefronts',
            'Internal tools',
            'Technical prototypes',
            'Automation & integrations',
            'Maintenance & modernization',
          ].map((item, index) => (
            <div class={styles.value}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
