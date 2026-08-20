import { For } from "solid-js";
import type { ContentItem } from "../data/content";
import styles from "./ContentCard.module.css";

const hrefFor = (item: ContentItem) => item.kind === "client" ? `/client-work/${item.slug}` : `/${item.kind === "article" ? "articles" : item.kind}/${item.slug}`;

export default function ContentCard(props: { item: ContentItem; featured?: boolean }) {
  return <article class={styles.card} data-featured={props.featured ? "true" : undefined}><div class={styles.topline}><span>{props.item.eyebrow}</span><span>{props.item.status ?? props.item.meta ?? "Read more"}</span></div><h3><a href={hrefFor(props.item)}>{props.item.title}</a></h3><p>{props.item.summary}</p><div class={styles.tags}><For each={props.item.tags}>{tag => <span class="tag">{tag}</span>}</For></div><a class={styles.arrow} href={hrefFor(props.item)} aria-label={`Open ${props.item.title}`}>Open trail →</a></article>;
}
