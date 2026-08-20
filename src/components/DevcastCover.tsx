import styles from "./DevcastCover.module.css";

export default function DevcastCover() {
  return (
    <svg class={styles.cover} viewBox="0 0 300 430" role="img" aria-label="South Mountain Devcast cover art">
      <defs>
        <linearGradient id="devcast-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#c8aa72" />
          <stop offset="1" stop-color="#9d865a" />
        </linearGradient>
        <linearGradient id="devcast-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#5f6841" />
          <stop offset="1" stop-color="#36422c" />
        </linearGradient>
        <linearGradient id="devcast-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#243625" />
          <stop offset="1" stop-color="#101f18" />
        </linearGradient>
        <pattern id="devcast-grain" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="2" r=".45" fill="#efe0b9" opacity=".18" />
          <circle cx="7" cy="5" r=".35" fill="#1c291f" opacity=".12" />
        </pattern>
      </defs>

      <rect width="300" height="430" rx="6" fill="url(#devcast-sky)" />
      <rect width="300" height="430" rx="6" fill="url(#devcast-grain)" />

      <path d="M-20 188 45 139l28 18 38-42 31 24 45-70 49 54 35-34 49 69 22-18 48 48v83H-20Z" fill="url(#devcast-back)" opacity=".9" />
      <path d="M-12 224 37 184l34 22 46-66 33 38 42-77 41 58 28-32 51 65 34-27 45 48v98H-12Z" fill="#33462f" opacity=".92" />
      <path d="M-18 258 28 232l38 20 51-78 37 42 43-92 42 65 33-39 45 66 33-28 51 53v189H-18Z" fill="url(#devcast-front)" />

      <g fill="none" stroke="#a98b4f" stroke-width="1" opacity=".28">
        <path d="M-10 279 29 251l37 18 50-72 38 39 42-86 43 61 34-36 45 61 35-25 50 48" />
        <path d="M-8 295 32 269l36 16 48-66 39 37 42-80 43 56 34-33 45 56 35-23 49 44" />
        <path d="M-6 312 35 288l36 14 46-61 39 34 42-73 43 51 35-30 45 51 36-21 47 41" />
        <path d="M-5 329 39 307l35 13 44-56 40 32 40-67 44 47 35-28 46 48 36-19 46 37" />
        <path d="M-3 346 42 326l35 11 42-51 40 29 40-61 44 43 36-25 45 43 37-17 44 34" />
        <path d="M0 363 46 345l35 10 40-46 40 26 39-55 45 39 36-23 46 39 37-15 42 31" />
        <path d="M5 381 50 365l35 8 38-41 40 23 38-49 45 35 37-20 46 35 38-14 40 28" />
      </g>

      <g class={styles.title}>
        <text x="27" y="292">SOUTH</text>
        <text x="27" y="330">MOUNTAIN</text>
        <text x="27" y="368">DEVCAST</text>
      </g>

      <g class={styles.mic} transform="translate(210 319)">
        <rect x="18" y="0" width="28" height="52" rx="14" />
        <path d="M9 30c0 17 10 29 23 29s23-12 23-29M32 59v24M20 83h24" />
        <path d="M25 12h14M25 21h14M25 30h14" />
      </g>
    </svg>
  );
}
