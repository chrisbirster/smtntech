import { For, Show, createMemo, createSignal, onSettled } from 'solid-js';
import { allContent, navItems } from '../data/content';
import styles from './SearchDialog.module.css';

const routeFor = (kind: string, slug: string) =>
  kind === 'client' ? `/client-work/${slug}` : `/${kind === 'article' ? 'articles' : kind}/${slug}`;

export default function SearchDialog() {
  const [open, setOpen] = createSignal(false);
  const [query, setQuery] = createSignal('');
  let triggerButton: HTMLButtonElement | undefined;
  let dialogElement: HTMLElement | undefined;
  let searchInput: HTMLInputElement | undefined;

  const openSearch = () => {
    setOpen(true);
    requestAnimationFrame(() => searchInput?.focus());
  };

  const closeSearch = (restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => triggerButton?.focus());
  };

  const results = createMemo(() => {
    const q = query().trim().toLowerCase();
    if (!q) return allContent.slice(0, 6);

    return allContent
      .filter((item) =>
        `${item.title} ${item.summary} ${item.tags.join(' ')}`.toLowerCase().includes(q),
      )
      .slice(0, 8);
  });

  // Solid 2: one-time owned browser setup belongs in onSettled().
  // createEffect now requires separate compute/apply functions and is not
  // appropriate here because the keyboard listener has no reactive source.
  onSettled(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (open()) closeSearch();
        else openSearch();
      }

      if (event.key === 'Escape' && open()) {
        event.preventDefault();
        closeSearch();
      }

      if (event.key === 'Tab' && open() && dialogElement) {
        const focusable = Array.from(
          dialogElement.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  return (
    <>
      <button
        ref={triggerButton}
        class={styles.trigger}
        type="button"
        onClick={openSearch}
        aria-label="Search site"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
        <kbd>⌘K</kbd>
      </button>

      <Show when={open()}>
        <div
          class={styles.backdrop}
          role="presentation"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) closeSearch();
          }}
        >
          <section
            ref={dialogElement}
            class={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label="Search South Mountain Technologies"
          >
            <div class={styles.inputRow}>
              <span aria-hidden="true">⌕</span>
              <input
                ref={searchInput}
                autofocus
                aria-label="Search projects, podcast, and articles"
                value={query()}
                onInput={(event) => setQuery(event.currentTarget.value)}
                placeholder="Search projects, podcast, articles…"
              />
              <button type="button" onClick={() => closeSearch()}>
                Esc
              </button>
            </div>

            <div class={styles.results}>
              <Show
                when={results().length > 0}
                fallback={<p>No trail found. Try another search.</p>}
              >
                <For each={results()}>
                  {(item) => (
                    <a href={routeFor(item.kind, item.slug)} onClick={() => closeSearch(false)}>
                      <span>
                        <small>{item.kind}</small>
                        <strong>{item.title}</strong>
                      </span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </For>
              </Show>
            </div>

            <div class={styles.quick}>
              <For each={navItems.slice(0, 5)}>
                {([label, href]) => (
                  <a href={href} onClick={() => closeSearch(false)}>
                    {label}
                  </a>
                )}
              </For>
            </div>
          </section>
        </div>
      </Show>
    </>
  );
}
