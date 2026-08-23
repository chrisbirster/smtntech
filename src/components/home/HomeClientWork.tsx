import { For } from 'solid-js';
import { clients } from '../../data/content';
import ContentCard from '../ContentCard';
import styles from './HomeClientWork.module.css';

export default function HomeClientWork() {
  return (
    <section class={`container ${styles.clientSection}`}>
      <div>
        <span class="eyebrow">Client work</span>
        <h2>Software that fits the way your organization works.</h2>
        <p>
          Websites, storefronts, internal tools, and integrations built around real operations—not
          unnecessary complexity.
        </p>
        <a class="button" href="/client-work">
          Start a conversation →
        </a>
      </div>
      <div class={styles.clientCards}>
        <For each={clients}>{(item) => <ContentCard item={item} headingLevel={3} />}</For>
      </div>
    </section>
  );
}
