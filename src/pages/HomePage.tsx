import { For } from "solid-js";
import HeroMountainArt from "../components/HeroMountainArt";
import DevcastCover from "../components/DevcastCover";
import SectionHeading from "../components/SectionHeading";
import ContentCard from "../components/ContentCard";
import { articles, clients, episodes, projects, showcase } from "../data/content";
import { communityActivity, heroCopy, heroStatus } from "../data/homepage";
import styles from "./HomePage.module.css";

export default function HomePage() {
  document.title = "South Mountain Technologies — Build locally. Share openly.";

  return <div class={styles.home}>
    <section class={`container ${styles.hero}`}>
      <div class={styles.heroArt}>
        <HeroMountainArt />
        <aside class={styles.statusPanel} aria-label="Community status and upcoming events">
          <For each={heroStatus}>{item =>
            <a class={styles.statusItem} href={item.href} data-tone={item.tone}>
              <span class={styles.statusIcon}>{item.icon}</span>
              <span class={styles.statusLabel}>{item.label}</span>
              <strong>{item.value}</strong>
              <small>{item.detail}</small>
              <i aria-hidden="true" />
            </a>
          }</For>
        </aside>
      </div>

      <div class={styles.heroCopy}>
        <h1>
          <For each={heroCopy.title}>{line => <span>{line.slice(0, -1)}<span>.</span></span>}</For>
        </h1>
        <p>{heroCopy.body}</p>
        <div class={styles.heroActions}>
          <a class="button" data-variant="primary" href={heroCopy.primaryCta.href}><span aria-hidden="true">◎</span> {heroCopy.primaryCta.label}</a>
          <a class="button" href={heroCopy.secondaryCta.href}><span aria-hidden="true">▣</span> {heroCopy.secondaryCta.label}</a>
        </div>
        <a class={styles.workLink} href={heroCopy.workCta.href}>{heroCopy.workCta.label} →</a>
      </div>
    </section>

    <section class={`container ${styles.activity}`} aria-label="Community activity">
      <div class={styles.activityHeading}>
        <span>△ Around the Mountain</span>
        <a href="/community">View all activity →</a>
      </div>
      <div class={styles.activityGrid}>
        <For each={communityActivity}>{item => <a class={styles.activityItem} href={item.href}>
          <span class={styles.avatar} data-tone={item.tone}>{item.avatar}</span>
          <div><strong>{item.title}</strong><p>{item.detail}</p><small>{item.meta}</small></div>
        </a>}</For>
      </div>
    </section>

    <section class={`container ${styles.editorial}`}>
      <div class={styles.podcastColumn}>
        <header class={styles.sectionHeader}>
          <div><span>◉ &nbsp; Podcast</span><h2>South Mountain Devcast</h2></div>
        </header>
        <article class={styles.podcastFeature}>
          <a class={styles.podcastCover} href={`/podcast/${episodes[0].slug}`} aria-label="Open South Mountain Devcast">
            <DevcastCover />
          </a>
          <div class={styles.podcastDetails}>
            <span class={styles.comingSoon}>Coming soon</span>
            <h3>Conversations about the software we actually use.</h3>
            <p>Monthly conversations about developer tools, open source, new releases, local projects, and whatever has the community talking.</p>
            <ul>
              <li>Developer news without the press-release voice</li>
              <li>Local projects and builders</li>
              <li>Guests, maintainers, and community conversations</li>
            </ul>
            <a class="button" href="/podcast">Explore the podcast</a>
          </div>
        </article>
      </div>

      <div class={styles.articlesColumn}>
        <header class={styles.sectionHeader}>
          <div><span>&lt;/&gt; &nbsp; Articles</span><h2>Worth Talking About</h2></div>
          <a href="/articles">View all articles →</a>
        </header>
        <div class={styles.articleGrid}>
          <For each={articles.slice(0,4)}>{item => <article class={styles.articleCard}>
            <span>{item.eyebrow}</span>
            <h3><a href={`/articles/${item.slug}`}>{item.title}</a></h3>
            <p>{item.summary}</p>
            <footer><small>Draft &nbsp; • &nbsp; {item.meta ?? "Read"}</small><a href={`/articles/${item.slug}`} aria-label={`Read ${item.title}`}>▱</a></footer>
          </article>}</For>
        </div>
      </div>
    </section>

    <div class={styles.topoDivider} aria-hidden="true" />

    <section class={`container ${styles.section}`}>
      <SectionHeading eyebrow="Built on the Mountain" title="What We're Building" copy="Open-source experiments, useful tools, learning projects, and ideas that are more fun to build together." action={{label:"All projects",href:"/projects"}} />
      <div class={styles.projectsGrid}><ContentCard item={projects[0]} featured /><div class={styles.stack}><For each={projects.slice(1)}>{item => <ContentCard item={item} />}</For></div></div>
    </section>

    <section class={`container ${styles.section}`}>
      <SectionHeading eyebrow="What are you building?" title="What You're Building" copy="Side projects, production apps, experiments, hardware, games, libraries — finished is optional." action={{label:"Submit yours",href:"/showcase"}} />
      <div class={styles.showcaseGrid}><For each={showcase}>{item => <article class={styles.showcaseCard}><div class={styles.preview}><span>&gt;_</span><strong>{item.title}</strong></div><div class={styles.showcaseMeta}><span>{item.maker}</span><em>{item.state}</em></div><h3>{item.title}</h3><p>{item.summary}</p><div><For each={item.tags}>{tag => <span class="tag">{tag}</span>}</For></div></article>}</For></div>
    </section>

    <section class={`container ${styles.section}`}>
      <SectionHeading eyebrow="The Break Room" title="Memes, weird repos, polls, and things we learned" copy="The useful, strange, and occasionally ridiculous stuff that ends up in developer group chats." />
      <div class={styles.breakGrid}><article class={styles.meme}><small>Meme of the day</small><div><strong>I don’t always<br />write tests</strong><span>but when I do,<br />it’s right before I ship.</span></div><p>— every developer, eventually</p></article><article class={styles.weird}><small>Strange but true repos</small><h3>Repos we would absolutely click</h3><ul><li>is-it-a-bug-or-a-feature</li><li>never-gonna-give-you-up</li><li>cats-on-a-keyboard</li></ul><a href="/community">Explore more weird repos →</a></article><article class={styles.poll}><small>Developer poll</small><h3>What’s your go-to coding soundtrack?</h3><div><span>Lo-fi beats · 42%</span><i style={{width:"72%"}} /></div><div><span>Synthwave · 28%</span><i style={{width:"54%"}} /></div><div><span>Movie scores · 16%</span><i style={{width:"41%"}} /></div><div><span>Silence · 14%</span><i style={{width:"34%"}} /></div><a href="/community">Vote when community voting opens →</a></article><article class={styles.til}><small>Today I learned</small><p>⌾ TIL you can search your command history without leaving the shell.</p><p>⌘ TIL Git has configuration most people never discover.</p><p>△ TIL modern CSS can center things without a ritual sacrifice.</p><a href="/community">Share your TIL →</a></article></div>
    </section>

    <section class={styles.eventsBand}><div class={`container ${styles.eventsGrid}`}><div><span class="eyebrow">Meet at the Trailhead</span><h2>Events, meetups, and chances to connect.</h2><p>We’re working toward a monthly South Mountain developer meetup. Help choose the venue, format, topics, and first date.</p><a class="button" href="/events">See all Events →</a></div><a class={styles.eventCard} href="/events/south-mountain-developer-meetup"><small>In planning</small><h3>South Mountain Developer Meetup</h3><p>Two short talks. Project show-and-tell. Open discussion. Food. Actual conversations.</p><span>Get notified when it’s live →</span></a><div class={styles.futureEvent}><span aria-hidden="true">▣</span><h3>A new trailhead is coming.</h3><p>We’re always planning the next opportunity to learn and connect.</p><a href="/join">Suggest a topic or format</a></div></div></section>

    <section class={`container ${styles.section}`}><SectionHeading eyebrow="Everyone starts somewhere" title="Our Community Values" /><div class={styles.values}><div><b>◎</b><h3>Open & welcoming</h3><p>Everyone belongs here. No gatekeeping. No prerequisites.</p></div><div><b>&lt;/&gt;</b><h3>Build in public</h3><p>We learn out loud, ship small, and share the journey.</p></div><div><b>△</b><h3>Local first</h3><p>Rooted in South Mountain, PA. We show up for our neighbors.</p></div><div><b>♡</b><h3>Give first</h3><p>Share knowledge. Lend a hand. Make space for others to grow.</p></div></div></section>

    <section class={`container ${styles.clientSection}`}><div><span class="eyebrow">Community first. Client work too.</span><h2>We build useful things.</h2><p>South Mountain Technologies helps local organizations solve real problems with clean, maintainable software and thoughtful design.</p><a class="button" href="/client-work">Start a Conversation →</a></div><div class={styles.clientCards}><For each={clients}>{item => <ContentCard item={item} />}</For></div></section>

    <section class={`container ${styles.cta}`}><div><span class="eyebrow">Join us at the trailhead</span><h2>Get updates. Stay connected.</h2><p>Get meetup news, local tech events, articles, and the occasional trailhead update.</p></div><div class={styles.ctaActions}><a class="button" data-variant="primary" href="/join">Join the Community</a><a class="button" href="mailto:chris@southmountaintech.com">Email Chris</a></div></section>
  </div>;
}
