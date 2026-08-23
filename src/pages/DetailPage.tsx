import { useLocation, useParams } from '@solidjs/router';
import { For, Show, createEffect, createMemo } from 'solid-js';
import { findContent, type ContentKind } from '../data/content';
import styles from './DetailPage.module.css';

function kindFromPath(pathname: string): ContentKind | undefined {
  if (pathname.startsWith('/podcast/')) return 'podcast';
  if (pathname.startsWith('/articles/')) return 'article';
  if (pathname.startsWith('/projects/')) return 'project';
  if (pathname.startsWith('/events/')) return 'event';
  if (pathname.startsWith('/client-work/')) return 'client';
  return undefined;
}

const backHref = (kind?: ContentKind) =>
  kind === 'article'
    ? '/articles'
    : kind === 'project'
      ? '/projects'
      : kind === 'event'
        ? '/events'
        : kind === 'client'
          ? '/client-work'
          : kind
            ? `/${kind}`
            : '/';

const nextStepFor = (kind?: ContentKind) =>
  kind === 'article'
    ? {
        title: 'Keep the conversation going',
        copy: 'Have a correction, a useful example, or a different approach? Share it with the community.',
        label: 'Join the discussion',
        href: '/community',
      }
    : kind === 'project'
      ? {
          title: 'Find a way to contribute',
          copy: 'Projects move forward through code, documentation, testing, design, research, and well-framed questions.',
          label: 'Join the community',
          href: '/join',
        }
      : kind === 'podcast'
        ? {
            title: 'Help shape the conversation',
            copy: 'Suggest a question, topic, guest, or practical example worth unpacking in a future episode.',
            label: 'Suggest a topic',
            href: '/join',
          }
        : kind === 'event'
          ? {
              title: 'Help shape the meetup',
              copy: 'Share the topics, accessibility needs, venue ideas, and event format that would make the meetup worth attending.',
              label: 'Get involved',
              href: '/join',
            }
          : {
              title: 'Have a project in mind?',
              copy: 'Tell us what your organization needs, how the work happens today, and what a useful outcome would look like.',
              label: 'Start a conversation',
              href: 'mailto:chris@southmountaintech.com?subject=Project%20inquiry',
            };

export default function DetailPage() {
  const params = useParams();
  const location = useLocation();
  const kind = createMemo(() => kindFromPath(location.pathname));
  const item = createMemo(() => (kind() ? findContent(kind()!, params.slug ?? '') : undefined));

  // Solid 2 effects have a tracked compute phase and an untracked apply phase.
  createEffect(
    () => item()?.title,
    (title) => {
      document.title = title
        ? `${title} — South Mountain Technologies`
        : 'South Mountain Technologies';
    },
  );

  return (
    <Show
      when={item()}
      fallback={
        <section class={`container ${styles.missing}`}>
          <span class="eyebrow">404</span>
          <h1>That trail is not marked yet.</h1>
          <a class="button" href="/">
            Back home
          </a>
        </section>
      }
      keyed
    >
      {(entry) => (
        <article class={`container ${styles.article}`}>
          <a class={styles.back} href={backHref(kind())}>
            ← Back
          </a>
          <header>
            <span class="eyebrow">{entry.eyebrow}</span>
            <h1>{entry.title}</h1>
            <p class="lede">{entry.summary}</p>
            <div class={styles.tags}>
              <For each={entry.tags}>{(tag) => <span class="tag">{tag}</span>}</For>
            </div>
          </header>
          <div class={styles.body}>
            <div>
              <For each={entry.body}>{(paragraph) => <p>{paragraph}</p>}</For>
              <h2>{nextStepFor(kind()).title}</h2>
              <p>{nextStepFor(kind()).copy}</p>
            </div>
            <aside>
              <strong>{entry.status ?? entry.meta ?? 'South Mountain Technologies'}</strong>
              <p>
                {kind() === 'client'
                  ? 'Practical scope. Clear communication. Maintainable delivery.'
                  : 'Bring a question, share what you know, and help make the work more useful.'}
              </p>
              <a class="button" href={nextStepFor(kind()).href}>
                {nextStepFor(kind()).label}
              </a>
            </aside>
          </div>
        </article>
      )}
    </Show>
  );
}
