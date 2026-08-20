import { For } from "solid-js";
import ContentCard from "../components/ContentCard";
import SectionHeading from "../components/SectionHeading";
import { articles } from "../data/content";
import styles from "./Pages.module.css";
export default function ArticlesPage() { document.title = "Articles — South Mountain Technologies"; return <><header class={`container ${styles.hero}`}><span class="eyebrow">Field notes</span><h1>Developer news without the content mill.</h1><p>Technical notes, opinions, tutorials, experiments, and explainers written for people who actually build things.</p><div class={styles.chips}>{["AI","JavaScript","CSS","Systems","Zig","Go","Open Source","Self-Hosting"].map(t => <span class="tag">{t}</span>)}</div></header><section class={`container ${styles.section}`}><SectionHeading eyebrow="Latest" title="What we’re talking about" /><div class={styles.grid}><For each={articles}>{item => <ContentCard item={item} />}</For></div></section></>; }
