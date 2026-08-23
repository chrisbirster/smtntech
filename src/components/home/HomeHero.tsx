import { For } from 'solid-js';
import { heroCopy, heroStatus } from '../../data/homepage';
import HeroMountainArt from '../HeroMountainArt';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  return (
    <section class={`container ${styles.hero}`}>
      <div class={styles.heroArt}>
        <HeroMountainArt />
        <aside class={styles.statusPanel} aria-label="Community status and upcoming events">
          <For each={heroStatus}>
            {(item) => (
              <a class={styles.statusItem} href={item.href} data-tone={item.tone}>
                <span class={styles.statusIcon}>{item.icon}</span>
                <span class={styles.statusLabel}>{item.label}</span>
                <strong>{item.value}</strong>
                <small>{item.detail}</small>
                <i aria-hidden="true" />
              </a>
            )}
          </For>
        </aside>
      </div>

      <div class={styles.heroCopy}>
        <h1>
          <For each={heroCopy.title}>
            {(line) => (
              <span>
                {line.slice(0, -1)}
                <span>.</span>
              </span>
            )}
          </For>
        </h1>
        <p>{heroCopy.body}</p>
        <div class={styles.heroActions}>
          <a class="button" data-variant="primary" href={heroCopy.primaryCta.href}>
            <span aria-hidden="true">◎</span>
            {heroCopy.primaryCta.label}
          </a>
          <a class="button" href={heroCopy.secondaryCta.href}>
            <span aria-hidden="true">▣</span>
            {heroCopy.secondaryCta.label}
          </a>
        </div>
        <a class={styles.workLink} href={heroCopy.workCta.href}>
          {heroCopy.workCta.label} →
        </a>
      </div>
    </section>
  );
}
