export type ContentKind = 'podcast' | 'article' | 'project' | 'event' | 'client';

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
  ['Podcast', '/podcast'],
  ['Articles', '/articles'],
  ['Projects', '/projects'],
  ['Showcase', '/showcase'],
  ['Events', '/events'],
  ['Community', '/community'],
  ['Client Work', '/client-work'],
  ['About', '/about'],
] as const;

export const episodes: ContentItem[] = [
  {
    kind: 'podcast',
    slug: 'why-south-mountain-needs-a-developer-community',
    title: 'Why the South Mountain Region Needs a Developer Community',
    eyebrow: 'Episode 001 · Coming soon',
    summary: 'The people, projects, and practical goals behind South Mountain Technologies.',
    body: [
      'South Mountain Technologies started with a simple idea: developers across Pennsylvania’s South Mountain region should have an easier way to find one another, share unfinished work, and learn together.',
      'The first episode will introduce the community, the projects taking shape, and the ways local developers can help decide what comes next.',
    ],
    tags: ['Community', 'Open Source', 'Meetups'],
    status: 'Coming soon',
  },
  {
    kind: 'podcast',
    slug: 'latest-ai-model-that-dropped',
    title: 'A Practical Look at the Latest AI Models',
    eyebrow: 'Episode 002 · Planned',
    summary: 'What changed, what is useful, and what developers can safely ignore.',
    body: [
      'AI model releases move quickly. This recurring conversation will test developer-facing claims and focus on where new models are genuinely useful.',
      'Expect coding experiments, workflow comparisons, tradeoffs, and a healthy amount of skepticism.',
    ],
    tags: ['AI', 'Developer Tools'],
    status: 'Planned',
  },
  {
    kind: 'podcast',
    slug: 'zig-codeberg-open-source',
    title: 'Zig, Codeberg, and the State of Open Source',
    eyebrow: 'Episode 003 · Planned',
    summary: 'Tools, platforms, and the choices maintainers face when communities move.',
    body: [
      'Open source infrastructure is part technology and part community governance. This conversation uses the Zig ecosystem as a starting point for discussing hosting, ownership, discoverability, and contributor experience.',
    ],
    tags: ['Zig', 'Open Source'],
    status: 'Planned',
  },
  {
    kind: 'podcast',
    slug: 'css-tricks-were-actually-using',
    title: 'CSS Tricks We’re Actually Using',
    eyebrow: 'Episode 004 · Planned',
    summary:
      'Modern CSS features that are useful in real projects instead of demo-only curiosities.',
    body: [
      'Container queries, OKLCH, color-mix, nesting, modern selectors, and new layout primitives have changed how much design work can live directly in CSS.',
      'We will bring examples from actual projects and talk about browser support, fallbacks, and where the newer features meaningfully simplify code.',
    ],
    tags: ['CSS', 'Frontend'],
    status: 'Planned',
  },
];

export const articles: ContentItem[] = [
  {
    kind: 'article',
    slug: 'local-first-by-default',
    title: 'Local-First by Default',
    eyebrow: 'Developer Experience',
    summary: 'Why building for people nearby is a useful constraint for software projects.',
    body: [
      'A local-first mindset starts with a real person and a real problem instead of a hypothetical market segment. That makes product decisions easier to test and harder to hide behind abstractions.',
      'For community projects, local-first creates a useful feedback loop: contributors can meet users, explain decisions, and see whether the software actually helps.',
    ],
    tags: ['Local First', 'Community'],
    meta: '6 min read',
  },
  {
    kind: 'article',
    slug: 'shipping-small-serving-big',
    title: 'Shipping Small, Serving Big',
    eyebrow: 'Open Source',
    summary: 'Lessons from small tools that solve one problem exceptionally well.',
    body: [
      'Small projects are easier to understand, easier to contribute to, and easier to maintain. That does not mean they need to be unambitious.',
      'A narrowly scoped tool can become infrastructure when it is predictable, documented, and respectful of the people who depend on it.',
    ],
    tags: ['Open Source', 'Maintenance'],
    meta: '7 min read',
  },
  {
    kind: 'article',
    slug: 'terminal-tricks-you-probably-arent-using',
    title: '5 Terminal Tricks You Probably Aren’t Using',
    eyebrow: 'Tools & Tips',
    summary: 'Tiny command-line habits that remove friction from everyday development.',
    body: [
      'The best terminal trick is the one you remember. This guide focuses on a short list of habits that are portable, easy to explain, and useful across projects.',
    ],
    tags: ['CLI', 'Productivity'],
    meta: '5 min read',
  },
  {
    kind: 'article',
    slug: 'why-were-learning-zig',
    title: 'Why We’re Learning Zig',
    eyebrow: 'Systems',
    summary:
      'Learning systems programming by building tools together instead of reading in isolation.',
    body: [
      'Zig is interesting because it makes many systems-level tradeoffs explicit. That gives a community project plenty of opportunities to learn about memory, interfaces, operating systems, and tooling.',
    ],
    tags: ['Zig', 'Learning'],
    meta: '8 min read',
  },
];

export const projects: ContentItem[] = [
  {
    kind: 'project',
    slug: 'coolshell',
    title: 'CoolShell',
    eyebrow: 'Community Project',
    summary:
      'An experimental command shell built to learn how modern CLI tools work from the inside out.',
    body: [
      'CoolShell is a learning project first. The goal is to understand how shells parse input, launch processes, manage environments, and create a useful interactive experience.',
      'Contributions can include systems code, testing, documentation, interface design, research, and beginner-friendly issue writing.',
    ],
    tags: ['Open Source', 'CLI', 'Beginner Friendly'],
    status: 'Early experiment',
  },
  {
    kind: 'project',
    slug: 'local-dev-directory',
    title: 'Local Dev Directory',
    eyebrow: 'Community Infrastructure',
    summary:
      'A public directory for developers, makers, and technology groups across the South Mountain region.',
    body: [
      'The directory is intended to make a geographically distributed developer community easier to discover without turning its members into a marketing database.',
    ],
    tags: ['Web', 'Community', 'Privacy'],
    status: 'Planning',
  },
  {
    kind: 'project',
    slug: 'meeting-notes',
    title: 'Meeting Notes',
    eyebrow: 'Open Documentation',
    summary: 'A GitHub-backed archive of meetup notes, talks, links, and community decisions.',
    body: [
      'Meetings become more useful when people who could not attend can still follow the conversation. Notes will live in public, be easy to correct, and link directly to projects and follow-up work.',
    ],
    tags: ['GitHub', 'Docs'],
    status: 'Planning',
  },
  {
    kind: 'project',
    slug: 'trailhead',
    title: 'Trailhead',
    eyebrow: 'Learning',
    summary:
      'Beginner-friendly learning paths, workshops, and starter issues curated by the community.',
    body: [
      'Trailhead connects learning material to things the community is actually building. Instead of another giant bookmark list, each path should end with a practical contribution or small project.',
    ],
    tags: ['Education', 'Good First Issue'],
    status: 'Idea',
  },
];

export const events: ContentItem[] = [
  {
    kind: 'event',
    slug: 'south-mountain-developer-meetup',
    title: 'South Mountain Developer Meetup',
    eyebrow: 'Local Meetup',
    summary:
      'A recurring meetup for developers across Pennsylvania’s South Mountain region, currently being planned.',
    body: [
      'The working format is straightforward: brief introductions, two focused technical talks, project demos, open discussion, and enough unstructured time to meet the people behind the usernames.',
      'Planning is open for input on the venue, accessibility, topics, food, schedule, and what would make the meetup worth attending regularly.',
    ],
    tags: ['Meetup', 'Planning'],
    status: 'Planning phase',
  },
];

export const clients: ContentItem[] = [
  {
    kind: 'client',
    slug: 'blue-stone-facility-services',
    title: 'Blue Stone Facility Services',
    eyebrow: 'Selected Work',
    summary:
      'A maintainable business website with clear service information and straightforward customer contact paths.',
    body: [
      'South Mountain Technologies is helping Blue Stone Facility Services establish a focused, professional web presence. The work centers on clear service information, direct customer contact paths, and an implementation the business can maintain.',
    ],
    tags: ['Website', 'Local Business'],
  },
  {
    kind: 'client',
    slug: 'lagana-solutions-llc',
    title: 'Lagana Solutions LLC',
    eyebrow: 'Selected Work',
    summary:
      'A custom storefront designed around personalized apparel orders and the business’s fulfillment workflow.',
    body: [
      'The storefront supports custom names and numbers, size selection, customer contact details, and an ordering flow designed around how Lagana Solutions actually prepares and fulfills purchases.',
    ],
    tags: ['Storefront', 'E-commerce'],
  },
];

export const activities = [
  'A new community project was proposed',
  'Podcast topic suggestions are open',
  'Meeting notes will live on GitHub',
  'Local meetup planning is underway',
];
export const allContent = [...episodes, ...articles, ...projects, ...events, ...clients];
export function findContent(kind: ContentKind, slug: string) {
  return allContent.find((item) => item.kind === kind && item.slug === slug);
}
