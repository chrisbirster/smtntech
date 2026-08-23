import { For } from 'solid-js';
import { communityActivity } from '../../data/homepage';
import styles from './CommunityActivity.module.css';

export default function CommunityActivity() {
  return (
    <section class={`container ${styles.activity}`} aria-label="Community activity">
      <div class={styles.activityHeading}>
        <span>△ Across the Region</span>
        <a href="/community">View all activity →</a>
      </div>
      <div class={styles.activityGrid}>
        <For each={communityActivity}>
          {(item) => (
            <a class={styles.activityItem} href={item.href}>
              <span class={styles.avatar} data-tone={item.tone}>
                {item.avatar}
              </span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
                <small>{item.meta}</small>
              </div>
            </a>
          )}
        </For>
      </div>
    </section>
  );
}
