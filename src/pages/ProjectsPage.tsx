import { For } from "solid-js";
import ContentCard from "../components/ContentCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/content";
import styles from "./Pages.module.css";
export default function ProjectsPage() { document.title = "Projects — South Mountain Technologies"; return <><header class={`container ${styles.hero}`}><span class="eyebrow">Built on the Mountain</span><h1>Build strange things with good people.</h1><p>Community projects are open places to learn, contribute, experiment, and ship. Production-ready is optional. Curiosity is required.</p></header><section class={`container ${styles.section}`}><SectionHeading eyebrow="Open projects" title="Pick a trail" copy="Start with code, docs, design, testing, research, or simply a question." /><div class={styles.grid}><For each={projects}>{item => <ContentCard item={item} />}</For></div></section></>; }
