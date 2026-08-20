export type ContentKind = "podcast" | "article" | "project" | "event" | "client";

export type ContentItem = {
  kind: ContentKind;
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  body: string[];
  tags: string[];
  meta?: string;
  status?: string;
};

export const navItems = [
  ["Podcast", "/podcast"], ["Articles", "/articles"], ["Projects", "/projects"], ["Showcase", "/showcase"], ["Events", "/events"], ["Community", "/community"], ["Client Work", "/client-work"], ["About", "/about"],
] as const;

export const episodes: ContentItem[] = [
  { kind: "podcast", slug: "why-south-mountain-needs-a-developer-community", title: "Why South Mountain Needs a Developer Community", eyebrow: "Episode 001 · Coming soon", summary: "An introduction to the people, projects, and ideas behind South Mountain Technologies.", body: ["South Mountain Technologies started with a simple idea: developers around South Mountain should have a place to find each other, share unfinished work, and talk about the technology they are excited about.", "This first episode will cover the community vision, the projects already taking shape, and how local developers can help decide what comes next."], tags: ["Community", "Open Source", "Meetups"], status: "Coming soon" },
  { kind: "podcast", slug: "latest-ai-model-that-dropped", title: "The Latest AI Model That Dropped", eyebrow: "Episode 002 · Planned", summary: "A practical look at what changed, what is hype, and what developers can actually use.", body: ["AI model releases move quickly. The goal of this recurring conversation is not to repeat launch notes, but to test the developer-facing claims and talk through where the model is genuinely useful.", "Expect benchmarks, coding experiments, workflow comparisons, and a healthy amount of skepticism."], tags: ["AI", "Developer Tools"], status: "Planned" },
  { kind: "podcast", slug: "zig-codeberg-open-source", title: "Zig, Codeberg, and the State of Open Source", eyebrow: "Episode 003 · Planned", summary: "Tools, platforms, and the choices maintainers make when communities move.", body: ["Open source infrastructure is part technology and part community governance. This episode uses Zig's ecosystem conversations as a jumping-off point for discussing hosting, ownership, discoverability, and contributor experience."], tags: ["Zig", "Open Source"], status: "Planned" },
  { kind: "podcast", slug: "css-tricks-were-actually-using", title: "CSS Tricks We’re Actually Using", eyebrow: "Episode 004 · Planned", summary: "Modern CSS features that are useful in real projects instead of demo-only curiosities.", body: ["Container queries, OKLCH, color-mix, nesting, modern selectors, and new layout primitives have changed how much design work can live directly in CSS.", "We will bring examples from actual projects and talk about browser support, fallbacks, and where the newer features meaningfully simplify code."], tags: ["CSS", "Frontend"], status: "Planned" },
];

export const articles: ContentItem[] = [
  { kind: "article", slug: "local-first-by-default", title: "Local-First by Default", eyebrow: "Developer Experience", summary: "Why building for your own community is a useful constraint for software projects.", body: ["A local-first mindset starts with a real person and a real problem instead of a hypothetical market segment. That makes product decisions easier to test and harder to hide behind abstractions.", "For community projects, local-first also creates a useful feedback loop: contributors can meet users, explain decisions, and see whether the thing they built actually helps."], tags: ["Local First", "Community"], meta: "6 min read" },
  { kind: "article", slug: "shipping-small-serving-big", title: "Shipping Small, Serving Big", eyebrow: "Open Source", summary: "Lessons from small tools that solve one problem exceptionally well.", body: ["Small projects are easier to understand, easier to contribute to, and easier to maintain. That does not mean they need to be unambitious.", "A narrowly scoped tool can become infrastructure when it is predictable, documented, and respectful of the people who depend on it."], tags: ["Open Source", "Maintenance"], meta: "7 min read" },
  { kind: "article", slug: "terminal-tricks-you-probably-arent-using", title: "5 Terminal Tricks You Probably Aren’t Using", eyebrow: "Tools & Tips", summary: "Tiny command-line habits that remove friction from everyday development.", body: ["The best terminal trick is the one you remember. This guide focuses on a short list of habits that are portable, easy to explain, and useful across projects."], tags: ["CLI", "Productivity"], meta: "5 min read" },
  { kind: "article", slug: "why-were-learning-zig", title: "Why We’re Learning Zig", eyebrow: "Systems", summary: "Learning systems programming by building tools together instead of reading in isolation.", body: ["Zig is interesting because it makes many systems-level tradeoffs explicit. That gives a community project plenty of opportunities to learn about memory, interfaces, operating systems, and tooling."], tags: ["Zig", "Learning"], meta: "8 min read" },
];

export const projects: ContentItem[] = [
  { kind: "project", slug: "coolshell", title: "CoolShell", eyebrow: "Built on the Mountain", summary: "An experimental community-built command shell inspired by zsh and fish.", body: ["CoolShell is intentionally a learning project first. The goal is to understand how shells parse input, launch processes, manage environments, and create a pleasant interactive experience.", "There is room for systems developers, CLI enthusiasts, testers, documentation writers, designers, and people who simply want a good first issue."], tags: ["Open Source", "CLI", "Beginner Friendly"], status: "Early experiment" },
  { kind: "project", slug: "local-dev-directory", title: "Local Dev Directory", eyebrow: "Community Infrastructure", summary: "A public directory for developers, makers, and technology groups around South Mountain.", body: ["The directory is meant to make a geographically scattered developer community feel discoverable without turning people into a marketing database."], tags: ["Web", "Community", "Privacy"], status: "Planning" },
  { kind: "project", slug: "meeting-notes", title: "Meeting Notes", eyebrow: "Open Documentation", summary: "A GitHub-backed archive of meetup notes, talks, links, and community decisions.", body: ["Meetings become more useful when people who could not attend can still follow the conversation. Notes will live in public, be easy to correct, and link directly to projects and follow-up work."], tags: ["GitHub", "Docs"], status: "Planning" },
  { kind: "project", slug: "trailhead", title: "Trailhead", eyebrow: "Learning", summary: "Beginner-friendly learning paths, workshops, and starter issues curated by the community.", body: ["Trailhead connects learning material to things the community is actually building. Instead of another giant bookmark list, each path should end with a practical contribution or small project."], tags: ["Education", "Good First Issue"], status: "Idea" },
];

export const events: ContentItem[] = [
  { kind: "event", slug: "south-mountain-developer-meetup", title: "South Mountain Developer Meetup", eyebrow: "Meet at the Trailhead", summary: "A monthly developer meetup is being shaped now. The first date and venue are intentionally not announced yet.", body: ["The working format is simple: community introductions, two short technical talks, project show-and-tell, open discussion, and enough unstructured time to actually meet people.", "The first meetup needs input on venue, format, accessibility, topics, food, and what would make the event worth attending regularly."], tags: ["Meetup", "Planning"], status: "Planning phase" },
];

export const clients: ContentItem[] = [
  { kind: "client", slug: "blue-stone-facility-services", title: "Blue Stone Facility Services", eyebrow: "Selected Work", summary: "A business website project focused on a clear, professional web presence.", body: ["South Mountain Technologies is working with Blue Stone Facility Services on its web presence. The project emphasizes clear service information, straightforward contact paths, and maintainable implementation."], tags: ["Website", "Local Business"] },
  { kind: "client", slug: "lagana-solutions-llc", title: "Lagana Solutions LLC", eyebrow: "Selected Work", summary: "A custom storefront for uniforms, hoodies, jerseys, and personalized orders.", body: ["The storefront supports product ordering details such as custom names and numbers, size selection, customer contact information, and an order workflow designed around the way the business actually fulfills purchases."], tags: ["Storefront", "E-commerce"] },
];

export const showcase = [
  { title: "Focus Timer", maker: "Community sample", summary: "A tiny menu-bar Pomodoro timer.", tags: ["Swift", "Productivity"], state: "Looking for feedback" },
  { title: "GlowLog", maker: "Community sample", summary: "Readable structured logs directly in the terminal.", tags: ["Go", "CLI"], state: "Looking for contributors" },
  { title: "Habit Tracker", maker: "Community sample", summary: "A privacy-first local habit tracker.", tags: ["Solid", "SQLite"], state: "Looking for feedback" },
  { title: "Cabin Quest", maker: "Community sample", summary: "A cozy weekend game experiment.", tags: ["Godot", "Game Dev"], state: "Looking for contributors" },
];

export const activities = ["A new community project was proposed", "Podcast topic suggestions are open", "Meeting notes will live on GitHub", "Local meetup planning is underway"];
export const allContent = [...episodes, ...articles, ...projects, ...events, ...clients];
export function findContent(kind: ContentKind, slug: string) { return allContent.find(item => item.kind === kind && item.slug === slug); }
