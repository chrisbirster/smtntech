import { For, Show, createEffect, createMemo, createSignal, onCleanup } from "solid-js";
import { allContent, navItems } from "../data/content";
import styles from "./SearchDialog.module.css";

const routeFor = (kind: string, slug: string) => kind === "client" ? `/client-work/${slug}` : `/${kind === "article" ? "articles" : kind}/${slug}`;

export default function SearchDialog() {
  const [open, setOpen] = createSignal(false);
  const [query, setQuery] = createSignal("");
  const results = createMemo(() => { const q = query().trim().toLowerCase(); if (!q) return allContent.slice(0, 6); return allContent.filter(item => `${item.title} ${item.summary} ${item.tags.join(" ")}`.toLowerCase().includes(q)).slice(0, 8); });
  createEffect(() => { const handler = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen(value => !value); } if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", handler); onCleanup(() => window.removeEventListener("keydown", handler)); });
  return <><button class={styles.trigger} type="button" onClick={() => setOpen(true)} aria-label="Search site"><span aria-hidden="true">⌕</span><kbd>⌘K</kbd></button><Show when={open()}><div class={styles.backdrop} role="presentation" onClick={() => setOpen(false)}><section class={styles.dialog} role="dialog" aria-modal="true" aria-label="Search South Mountain Technologies" onClick={e => e.stopPropagation()}><div class={styles.inputRow}><span aria-hidden="true">⌕</span><input autofocus value={query()} onInput={e => setQuery(e.currentTarget.value)} placeholder="Search projects, podcast, articles…" /><button type="button" onClick={() => setOpen(false)}>Esc</button></div><div class={styles.results}><Show when={results().length > 0} fallback={<p>No trail found. Try another search.</p>}><For each={results()}>{item => <a href={routeFor(item.kind, item.slug)} onClick={() => setOpen(false)}><span><small>{item.kind}</small><strong>{item.title}</strong></span><span aria-hidden="true">↗</span></a>}</For></Show></div><div class={styles.quick}><For each={navItems.slice(0,5)}>{([label, href]) => <a href={href} onClick={() => setOpen(false)}>{label}</a>}</For></div></section></div></Show></>;
}
