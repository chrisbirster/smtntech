import { useLocation, useParams } from "@solidjs/router";
import { For, Show, createEffect, createMemo } from "solid-js";
import { findContent, type ContentKind } from "../data/content";
import styles from "./DetailPage.module.css";

function kindFromPath(pathname: string): ContentKind | undefined {
  if (pathname.startsWith("/podcast/")) return "podcast";
  if (pathname.startsWith("/articles/")) return "article";
  if (pathname.startsWith("/projects/")) return "project";
  if (pathname.startsWith("/events/")) return "event";
  if (pathname.startsWith("/client-work/")) return "client";
  return undefined;
}

const backHref = (kind?: ContentKind) =>
  kind === "article"
    ? "/articles"
    : kind === "client"
      ? "/client-work"
      : kind
        ? `/${kind}`
        : "/";

export default function DetailPage() {
  const params = useParams();
  const location = useLocation();
  const kind = createMemo(() => kindFromPath(location.pathname));
  const item = createMemo(() =>
    kind() ? findContent(kind()!, params.slug ?? "") : undefined,
  );

  // Solid 2 effects have a tracked compute phase and an untracked apply phase.
  createEffect(
    () => item()?.title,
    (title) => {
      document.title = title
        ? `${title} — South Mountain Technologies`
        : "South Mountain Technologies";
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
              <For each={entry.tags}>
                {(tag) => <span class="tag">{tag}</span>}
              </For>
            </div>
          </header>
          <div class={styles.body}>
            <div>
              <For each={entry.body}>{(paragraph) => <p>{paragraph}</p>}</For>
              <h2>What happens next?</h2>
              <p>
                This page is wired as a real route in the SPA and is ready to
                grow into richer Markdown-backed content, GitHub issue data,
                show notes, contributor information, or client case-study
                material.
              </p>
            </div>
            <aside>
              <strong>
                {entry.status ?? entry.meta ?? "South Mountain Technologies"}
              </strong>
              <p>Want to contribute context, corrections, or ideas?</p>
              <a class="button" href="/join">
                Join the Community
              </a>
            </aside>
          </div>
        </article>
      )}
    </Show>
  );
}
