import { For, Show } from 'solid-js';
import type { ContentItem } from '../data/content';
import styles from './ContentCard.module.css';

const hrefFor = (item: ContentItem) =>
  item.kind === 'client'
    ? `/client-work/${item.slug}`
    : `/${item.kind === 'article' ? 'articles' : item.kind}/${item.slug}`;

const ctaFor = (item: ContentItem) =>
  item.kind === 'article'
    ? 'Read article'
    : item.kind === 'project'
      ? 'View project'
      : item.kind === 'podcast'
        ? 'Episode details'
        : item.kind === 'event'
          ? 'Meetup details'
          : 'View case study';

export default function ContentCard(props: {
  item: ContentItem;
  featured?: boolean;
  headingLevel?: 2 | 3;
}) {
  return (
    <article class={styles.card} data-featured={props.featured ? 'true' : undefined}>
      <div class={styles.topline}>
        <span>{props.item.eyebrow}</span>
        <span>{props.item.status ?? props.item.meta ?? 'Details'}</span>
      </div>
      <Show
        when={props.headingLevel === 3}
        fallback={
          <h2>
            <a href={hrefFor(props.item)}>{props.item.title}</a>
          </h2>
        }
      >
        <h3>
          <a href={hrefFor(props.item)}>{props.item.title}</a>
        </h3>
      </Show>
      <p>{props.item.summary}</p>
      <div class={styles.tags}>
        <For each={props.item.tags}>{(tag) => <span class="tag">{tag}</span>}</For>
      </div>
      <a
        class={styles.arrow}
        href={hrefFor(props.item)}
        aria-label={`${ctaFor(props.item)}: ${props.item.title}`}
      >
        {ctaFor(props.item)} →
      </a>
    </article>
  );
}
