import reference from "../assets/homepage-reference.avif";
import styles from "./ExactHomepageReference.module.css";

// These paths are traced over circuit lines that already exist in the mockup image.
// The raster artwork remains untouched; only the moving current is SVG.
const routes = [
  "M730 796 L780 766 L830 736 L900 706 L900 636 L870 596 L870 566 L920 566 L975 536 L1030 536 L1030 491 L990 456 L990 416 L945 396 L945 356 L920 331 L920 301 L950 281 L950 246 L920 226 L900 201",
  "M610 696 L650 670 L700 642 L750 610 L790 576 L820 540 L850 508 L875 478 L895 446 L895 410 L915 385 L915 350 L900 326 L900 286 L885 268 L885 229 L900 201",
  "M1130 726 L1090 696 L1050 661 L1050 616 L1010 586 L1010 546 L980 526 L980 486 L950 456 L950 416 L930 396 L930 356 L920 331 L900 316 L900 276 L885 261 L885 226 L900 201"
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
              <stop offset="0" stop-color="#93b94a" />
              <stop offset=".5" stop-color="#e58c38" />
              <stop offset="1" stop-color="#ffe4ae" />
            </linearGradient>
            <filter id="exact-glow" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="4.6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {routes.map((route, index) => {
            const routeClass = styles[`route${index + 1}` as keyof typeof styles];
            return (
              <g class={routeClass}>
                <path d={route} pathLength="1" class={`${styles.pulse} ${styles.halo}`} />
                <path d={route} pathLength="1" class={`${styles.pulse} ${styles.core}`} filter="url(#exact-glow)" />
              </g>
            );
          })}

          <circle class={styles.summit} cx="900" cy="201" r="5" filter="url(#exact-glow)" />
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
