import { For } from 'solid-js';
import { articles, episodes } from '../../data/content';
import DevcastCover from '../DevcastCover';
import styles from './HomeEditorial.module.css';

export default function HomeEditorial() {
  return (
    <section class={`container ${styles.editorial}`}>
      <div class={styles.podcastColumn}>
        <header class={styles.sectionHeader}>
          <div>
            <span>◉ &nbsp; Podcast</span>
            <h2>South Mountain Devcast</h2>
          </div>
        </header>
        <article class={styles.podcastFeature}>
          <a
            class={styles.podcastCover}
            href={`/podcast/${episodes[0].slug}`}
            aria-label="Open South Mountain Devcast"
          >
            <DevcastCover />
          </a>
          <div class={styles.podcastDetails}>
            <span class={styles.comingSoon}>Coming soon</span>
            <h3>Conversations with the people building nearby.</h3>
            <p>
              Local developers talking through software, open source, new tools, community projects,
              and the decisions behind their work.
            </p>
            <ul>
              <li>Practical conversations without the press-release voice</li>
              <li>Projects being built across the region</li>
              <li>Maintainers, educators, and local builders</li>
            </ul>
            <a class="button" href="/podcast">
              Explore the podcast
            </a>
          </div>
        </article>
      </div>

      <div class={styles.articlesColumn}>
        <header class={styles.sectionHeader}>
          <div>
            <span>&lt;/&gt; &nbsp; Articles</span>
            <h2>Notes From the Workbench</h2>
          </div>
          <a href="/articles">View all articles →</a>
        </header>
        <div class={styles.articleGrid}>
          <For each={articles.slice(0, 4)}>
            {(item) => (
              <article class={styles.articleCard}>
                <span>{item.eyebrow}</span>
                <h3>
                  <a href={`/articles/${item.slug}`}>{item.title}</a>
                </h3>
                <p>{item.summary}</p>
                <footer>
                  <small>{item.meta ?? 'Read'}</small>
                  <a href={`/articles/${item.slug}`} aria-label={`Read ${item.title}`}>
                    ▱
                  </a>
                </footer>
              </article>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
