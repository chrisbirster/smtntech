import { events } from './content';

const nextEvent = events[0];

export const heroCopy = {
  title: ['Build locally.', 'Share knowledge.', 'Grow together.'],
  body: 'South Mountain Technologies is a developer community for Pennsylvania’s South Mountain region. Meet local builders, share what you’re working on, contribute to open source, and learn from people building nearby.',
  primaryCta: { label: 'Join the Community', href: '/join' },
  secondaryCta: { label: 'See Upcoming Events', href: '/events' },
  workCta: { label: 'Need practical software? Work with us', href: '/client-work' },
} as const;

export const heroStatus = [
  {
    id: 'community',
    icon: '◎',
    label: 'Community',
    value: 'Welcoming new members',
    detail: 'Meet developers nearby',
    href: '/community',
    tone: 'cool',
  },
  {
    id: 'podcast',
    icon: '◉',
    label: 'Monthly podcast',
    value: 'Coming soon',
    detail: 'Help shape the first episodes',
    href: '/podcast',
    tone: 'warm',
  },
  {
    id: 'event',
    icon: '□',
    label: 'Next meetup',
    value: nextEvent?.title ?? 'South Mountain Developer Meetup',
    detail: nextEvent?.status ?? 'Planning phase',
    href: nextEvent ? `/events/${nextEvent.slug}` : '/events',
    tone: 'cool',
  },
  {
    id: 'github',
    icon: '</>',
    label: 'GitHub projects',
    value: 'Open for contributors',
    detail: 'Find a way to contribute',
    href: '/projects',
    tone: 'cool',
  },
] as const;

export const communityActivity = [
  {
    avatar: 'CB',
    title: 'CoolShell',
    detail: 'Community systems project',
    meta: 'Contributors welcome',
    href: '/projects/coolshell',
    tone: 'person',
  },
  {
    avatar: 'JS',
    title: 'Podcast topics',
    detail: 'What should we unpack together?',
    meta: 'Suggest a topic',
    href: '/podcast',
    tone: 'person',
  },
  {
    avatar: '↗',
    title: 'Open notes',
    detail: 'Planning, decisions, and useful links',
    meta: 'Read the notes',
    href: '/notes',
    tone: 'repo',
  },
  {
    avatar: 'PA',
    title: 'Meetup planning',
    detail: 'Help shape the first local meetup',
    meta: 'Get involved',
    href: '/events',
    tone: 'person',
  },
  {
    avatar: '+',
    title: 'Share your work',
    detail: 'Show the community what you’re building',
    meta: 'Submit a project',
    href: '/showcase',
    tone: 'repo',
  },
] as const;
