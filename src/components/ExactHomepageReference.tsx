import reference from "../assets/homepage-reference.avif";
import styles from "./ExactHomepageReference.module.css";

const routes = [
  "M505 680 L570 680 L570 645 L630 645 L630 610 L690 610 L690 575 L742 575 L742 530 L790 530 L790 485 L830 485 L830 430 L856 430 L856 374 L882 374 L882 315 L900 315 L900 257 L884 257 L884 197",
  "M745 720 L745 675 L780 675 L780 630 L815 630 L815 585 L846 585 L846 535 L870 535 L870 485 L892 485 L892 430 L910 430 L910 375 L925 375 L925 320 L915 320 L915 266 L900 266 L900 214",
  "M1082 686 L1030 686 L1030 650 L990 650 L990 610 L956 610 L956 565 L930 565 L930 520 L910 520 L910 474 L895 474 L895 425 L884 425 L884 375 L875 375 L875 325 L872 325 L872 275 L878 275 L878 228 L884 228 L884 197"
];

const hotspots = [
  ["Home", "/", 21.7, 6.1, 4.3, 2.9],
  ["Podcast", "/podcast", 26.0, 6.1, 5.2, 2.9],
  ["Articles", "/articles", 31.4, 6.1, 4.8, 2.9],
  ["Projects", "/projects", 36.4, 6.1, 5.1, 2.9],
  ["Showcase", "/showcase", 41.7, 6.1, 5.5, 2.9],
  ["Events", "/events", 47.4, 6.1, 4.7, 2.9],
  ["Community", "/community", 52.4, 6.1, 6.3, 2.9],
  ["Client Work", "/client-work", 58.9, 6.1, 6.1, 2.9],
  ["About", "/about", 65.1, 6.1, 4.5, 2.9],
  ["Join the Community", "/join", 84.8, 5.4, 12.8, 3.6],
  ["Join the Community", "/join", 2.1, 35.7, 16.1, 3.5],
  ["See Upcoming Events", "/events", 19.0, 35.7, 16.6, 3.5],
  ["View all activity", "/community", 86.0, 43.4, 11.5, 2.4],
  ["South Mountain Devcast", "/podcast", 2.2, 59.0, 41.2, 32.4],
  ["View all articles", "/articles", 85.4, 57.1, 12.0, 2.4],
  ["Local-First by Default", "/articles/local-first-by-default", 47.3, 61.1, 23.8, 12.2],
  ["Shipping Small, Serving Big", "/articles/shipping-small-serving-big", 72.3, 61.1, 24.0, 12.2]
] as const;

export default function ExactHomepageReference() {
  return (
    <section class={styles.reference} aria-label="South Mountain Technologies homepage">
      <div class={styles.canvas}>
        <img class={styles.image} src={reference} alt="" aria-hidden="true" />
        <svg class={styles.current} viewBox="0 0 1418 1724" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="exact-current" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stop-color="#9db94a" />
              <stop offset=".55" stop-color="#dd8a34" />
              <stop offset="1" stop-color="#ffe0a3" />
            </linearGradient>
            <filter id="exact-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {routes.map((route, index) => (
            <path
              d={route}
              pathLength="1"
              class={`${styles.pulse} ${styles[`route${index + 1}` as keyof typeof styles]}`}
              filter="url(#exact-glow)"
            />
          ))}
          <circle class={styles.summit} cx="884" cy="197" r="5" filter="url(#exact-glow)" />
        </svg>
        <nav class={styles.hotspots} aria-label="Homepage links">
          {hotspots.map(([label, href, left, top, width, height]) => (
            <a
              href={href}
              aria-label={label}
              style={{ left: `${left}%`, top: `${top}%`, width: `${width}%`, height: `${height}%` }}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}
