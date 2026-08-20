import { For } from "solid-js";
import HeroMountainArt from "../components/HeroMountainArt";
import DevcastCover from "../components/DevcastCover";
import SectionHeading from "../components/SectionHeading";
import ContentCard from "../components/ContentCard";
import { articles, clients, episodes, projects, showcase } from "../data/content";
import styles from "./HomePage.module.css";

const communityActivity = [
  { avatar: "CB", title: "Chris proposed CoolShell", detail: "Open community shell project", meta: "contributors wanted", tone: "person" },
  { avatar: "JS", title: "Topic ideas are open", detail: "What should the Devcast cover?", meta: "suggest a topic", tone: "person" },
  { avatar: "↗", title: "Meeting notes on GitHub", detail: "Open notes, decisions, and links", meta: "public by default", tone: "repo" },
  { avatar: "PA", title: "Meetup planning started", detail: "Help shape venue and format", meta: "planning phase", tone: "person" },
  { avatar: "＋", title: "Show us what you build", detail: "Projects do not need to be finished", meta: "submit a project", tone: "repo" },
] as const;

export default function HomePage() {
  document.title = "South Mountain Technologies — Build locally. Share openly.";

  return <div class={styles.home}>
    <section class={`container ${styles.hero}`}>
      <div class={styles.heroArt}>
        <HeroMountainArt />
        <aside class={styles.statusPanel} aria-label="Community status">
          <div><span class={styles.statusIcon}>◎</span><span>Community status</span><strong>Forming now</strong><i /></div>
          <div><span class={styles.statusIcon}>◉</span><span>Monthly podcast</span><strong>Coming soon</strong><i data-warm /></div>
          <div><span class={styles.statusIcon}>□</span><span>Local meetup</span><strong>Planning phase</strong><i /></div>
          <div><span class={styles.statusIcon}>&lt;/&gt;</span><span>GitHub projects</span><strong>Open to contributors</strong><i /></div>
        </aside>
      </div>

      <div class={styles.heroCopy}>
        <h1>
          <span>Build locally<span>.</span></span>
          <span>Share openly<span>.</span></span>
          <span>Geek out together<span>.</span></span>
        </h1>
        <p>South Mountain Technologies is a developer community for South Mountain, Pennsylvania. We build software, share knowledge, and lift each other up—online and in person. All experience levels, all kinds of projects, one mountain.</p>
        <div class={styles.heroActions}>
          <a class="button" data-variant="primary" href="/join"><span aria-hidden="true">◎</span> Join the Community</a>
          <a class="button" href="/events"><span aria-hidden="true">▣</span> See Upcoming Events</a>
        </div>
        <a class={styles.workLink} href="/client-work">Have something to build? Work with us →</a>
      </div>
    </section>

    <section class={`container ${styles.activity}`} aria-label="Community activity">
      <div class={styles.activityHeading}>
        <span>△ From the Community</span>
        <a href="/community">View all activity →</a>
      </div>
      <div class={styles.activityGrid}>
        <For each={communityActivity}>{item => <article class={styles.activityItem}>
          <span class={styles.avatar} data-tone={item.tone}>{item.avatar}</span>
          <div><strong>{item.title}</strong><p>{item.detail}</p><small>{item.meta}</small></div>
        </article>}</For>
      </div>
    </section>

    <section class={`container ${styles.editorial}`}>
      <div class={styles.podcastColumn}>
        <header class={styles.sectionHeader}>
          <div><span>◉ &nbsp; Featured podcast</span><h2>From the Mountain</h2></div>
        </header>
        <article class={styles.podcastFeature}>
          <a class={styles.podcastCover} href={`/podcast/${episodes[0].slug}`} aria-label="Open South Mountain Devcast">
            <DevcastCover />
          </a>
          <div class={styles.podcastDetails}>
            <span class={styles.comingSoon}>Coming soon</span>
            <h3>South Mountain Devcast</h3>
            <p>Conversations with local developers, makers, and technologists building on South Mountain and beyond.</p>
            <ul>
              <li>Monthly episodes</li>
              <li>Local guests & global perspectives</li>
              <li>Practical takes, not hot takes</li>
            </ul>
            <a class="button" href="/podcast">Subscribe for Updates</a>
          </div>
        </article>
      </div>

      <div class={styles.articlesColumn}>
        <header class={styles.sectionHeader}>
          <div><span>&lt;/&gt; &nbsp; Latest articles</span><h2>What We’re Talking About</h2></div>
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
      <SectionHeading eyebrow="Built on the Mountain" title="Community Projects" copy="Open experiments, useful tools, questionable ideas, and projects we build because they sound fun." action={{label:"All projects",href:"/projects"}} />
      <div class={styles.projectsGrid}><ContentCard item={projects[0]} featured /><div class={styles.stack}><For each={projects.slice(1)}>{item => <ContentCard item={item} />}</For></div></div>
    </section>

    <section class={`container ${styles.section}`}>
      <SectionHeading eyebrow="What are you building?" title="Developer Showcase" copy="Weekend experiments, production apps, learning projects, hardware, games, libraries — if you built it, bring it." action={{label:"Submit yours",href:"/showcase"}} />
      <div class={styles.showcaseGrid}><For each={showcase}>{item => <article class={styles.showcaseCard}><div class={styles.preview}><span>&gt;_</span><strong>{item.title}</strong></div><div class={styles.showcaseMeta}><span>{item.maker}</span><em>{item.state}</em></div><h3>{item.title}</h3><p>{item.summary}</p><div><For each={item.tags}>{tag => <span class="tag">{tag}</span>}</For></div></article>}</For></div>
    </section>

    <section class={`container ${styles.section}`}>
      <SectionHeading eyebrow="The Break Room" title="Meme Wall, Weird Links & Dev Polls" copy="Because building software is serious business. Mostly." />
      <div class={styles.breakGrid}><article class={styles.meme}><small>Meme of the day</small><div><strong>I don’t always<br />write tests</strong><span>but when I do,<br />it’s right before I ship.</span></div><p>— every developer, eventually</p></article><article class={styles.weird}><small>Strange but true repos</small><h3>Repos we would absolutely click</h3><ul><li>is-it-a-bug-or-a-feature</li><li>never-gonna-give-you-up</li><li>cats-on-a-keyboard</li></ul><a href="/community">Explore more weird repos →</a></article><article class={styles.poll}><small>Developer poll</small><h3>What’s your go-to coding soundtrack?</h3><div><span>Lo-fi beats · 42%</span><i style={{width:"72%"}} /></div><div><span>Synthwave · 28%</span><i style={{width:"54%"}} /></div><div><span>Movie scores · 16%</span><i style={{width:"41%"}} /></div><div><span>Silence · 14%</span><i style={{width:"34%"}} /></div><a href="/community">Vote when community voting opens →</a></article><article class={styles.til}><small>Today I learned</small><p>⌾ TIL you can search your command history without leaving the shell.</p><p>⌘ TIL Git has configuration most people never discover.</p><p>△ TIL modern CSS can center things without a ritual sacrifice.</p><a href="/community">Share your TIL →</a></article></div>
    </section>

    <section class={styles.eventsBand}><div class={`container ${styles.eventsGrid}`}><div><span class="eyebrow">Meet at the Trailhead</span><h2>Events, meetups, and chances to connect.</h2><p>We’re working toward a monthly South Mountain developer meetup. Help choose the venue, format, topics, and first date.</p><a class="button" href="/events">See all Events →</a></div><a class={styles.eventCard} href="/events/south-mountain-developer-meetup"><small>In planning</small><h3>South Mountain Developer Meetup</h3><p>Two short talks. Project show-and-tell. Open discussion. Food. Actual conversations.</p><span>Get notified when it’s live →</span></a><div class={styles.futureEvent}><span aria-hidden="true">▣</span><h3>A new trailhead is coming.</h3><p>We’re always planning the next opportunity to learn and connect.</p><a href="/join">Suggest a topic or format</a></div></div></section>

    <section class={`container ${styles.section}`}><SectionHeading eyebrow="Everyone starts somewhere" title="Our Community Values" /><div class={styles.values}><div><b>◎</b><h3>Open & welcoming</h3><p>Everyone belongs here. No gatekeeping. No prerequisites.</p></div><div><b>&lt;/&gt;</b><h3>Build in public</h3><p>We learn out loud, ship small, and share the journey.</p></div><div><b>△</b><h3>Local first</h3><p>Rooted in South Mountain, PA. We show up for our neighbors.</p></div><div><b>♡</b><h3>Give first</h3><p>Share knowledge. Lend a hand. Make space for others to grow.</p></div></div></section>

    <section class={`container ${styles.clientSection}`}><div><span class="eyebrow">Community first. Client work too.</span><h2>We build useful things.</h2><p>South Mountain Technologies helps local organizations solve real problems with clean, maintainable software and thoughtful design.</p><a class="button" href="/client-work">Start a Conversation →</a></div><div class={styles.clientCards}><For each={clients}>{item => <ContentCard item={item} />}</For></div></section>

    <section class={`container ${styles.cta}`}><div><span class="eyebrow">Join us at the trailhead</span><h2>Get updates. Stay connected.</h2><p>Get meetup news, local tech events, articles, and the occasional trailhead update.</p></div><div class={styles.ctaActions}><a class="button" data-variant="primary" href="/join">Join the Community</a><a class="button" href="mailto:chris@southmountaintech.com">Email Chris</a></div></section>
  </div>;
}
