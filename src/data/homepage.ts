import { events } from "./content";

const nextEvent = events[0];

export const heroCopy = {
  title: ["Build locally.", "Share openly.", "Geek out together."],
  body: "South Mountain Technologies is a developer community around South Mountain, PA. Share what you're building, contribute to open-source projects, talk about the tools you're excited about, and meet other developers in the area.",
  primaryCta: { label: "Join the Community", href: "/join" },
  secondaryCta: { label: "See Upcoming Events", href: "/events" },
  workCta: { label: "Have something to build? Work with us", href: "/client-work" },
} as const;

export const heroStatus = [
  {
    id: "community",
    icon: "◎",
    label: "Community",
    value: "Open to builders",
    detail: "Join the conversation",
    href: "/community",
    tone: "cool",
  },
  {
    id: "podcast",
    icon: "◉",
    label: "Monthly podcast",
    value: "Coming soon",
    detail: "Topic suggestions open",
    href: "/podcast",
    tone: "warm",
  },
  {
    id: "event",
    icon: "□",
    label: "Next meetup",
    value: nextEvent?.title ?? "South Mountain Developer Meetup",
    detail: nextEvent?.status ?? "Planning phase",
    href: nextEvent ? `/events/${nextEvent.slug}` : "/events",
    tone: "cool",
  },
  {
    id: "github",
    icon: "</>",
    label: "GitHub projects",
    value: "Open for contributors",
    detail: "Browse community projects",
    href: "/projects",
    tone: "cool",
  },
] as const;

export const communityActivity = [
  { avatar: "CB", title: "CoolShell", detail: "New community project", meta: "Looking for contributors", href: "/projects/coolshell", tone: "person" },
  { avatar: "JS", title: "Podcast topics", detail: "What should we talk about this month?", meta: "Suggest a topic", href: "/podcast", tone: "person" },
  { avatar: "↗", title: "Meeting notes", detail: "Open notes, decisions, and links", meta: "Browse on GitHub", href: "/notes", tone: "repo" },
  { avatar: "PA", title: "Meetup planning", detail: "Help choose the first meetup format", meta: "See events", href: "/events", tone: "person" },
  { avatar: "+", title: "What are you building?", detail: "Share a project with the community", meta: "Submit a project", href: "/showcase", tone: "repo" },
] as const;
