import reference from "../assets/homepageReference";
import styles from "./HeroMountainArt.module.css";

// Coordinates are traced against the 842x520 crop of the approved mockup.
// The raster supplies the exact mountain/topographic/circuit artwork; SVG only
// adds moving light over circuit traces that are already present in the art.
const routes = [
  "M345 466 L365 446 L397 420 L420 385 L420 347 L400 326 L400 296 L430 296 L455 278 L455 246 L485 225 L485 191 L460 170 L460 146 L436 146 L436 126 L455 109 L455 86 L471 75 L471 51 L451 45 L432 35 L432 26 L415 22",
  "M526 465 L526 422 L510 402 L510 352 L535 335 L535 291 L506 276 L506 236 L495 216 L495 181 L495 146 L495 106 L480 76 L462 59 L442 43 L425 35 L415 22",
  "M332 201 L371 201 L397 188 L421 175 L441 151 L456 137 L456 111 L471 99 L471 74 L455 62 L440 49 L425 41 L415 22"
] as const;

export default function HeroMountainArt() {
  return (
    <div class={styles.wrap} aria-hidden="true">
      <svg class={styles.art} viewBox="0 0 842 520" role="img" preserveAspectRatio="xMidYMid meet">
        <defs>
          <mask id="mountain-only-mask">
            <rect width="842" height="520" fill="white" />
            {/* Areas occupied by live DOM in the mockup are hidden from the raster. */}
            <rect x="0" y="0" width="255" height="218" fill="black" />
            <rect x="0" y="220" width="285" height="140" fill="black" />
            <rect x="0" y="360" width="320" height="86" fill="black" />
            <rect x="575" y="10" width="267" height="260" rx="12" fill="black" />
            <rect x="0" y="450" width="250" height="70" fill="black" />
            <rect x="675" y="455" width="167" height="65" fill="black" />
          </mask>
          <linearGradient id="mountain-current" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stop-color="#96b94c" />
            <stop offset=".52" stop-color="#e58b37" />
            <stop offset="1" stop-color="#ffe3a7" />
          </linearGradient>
          <filter id="mountain-current-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g mask="url(#mountain-only-mask)" class={styles.referenceLayer}>
          <image href={reference} x="-280" y="-180" width="1122" height="1402" preserveAspectRatio="none" />
        </g>

        <g class={styles.currentLayer}>
          {routes.map((route, index) => (
            <g class={styles[`route${index + 1}` as keyof typeof styles]}>
              <path d={route} pathLength="1" class={`${styles.pulse} ${styles.halo}`} />
              <path d={route} pathLength="1" class={`${styles.pulse} ${styles.core}`} filter="url(#mountain-current-glow)" />
            </g>
          ))}
          <circle class={styles.summit} cx="415" cy="22" r="4.4" filter="url(#mountain-current-glow)" />
        </g>
      </svg>
    </div>
  );
}
