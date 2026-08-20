import styles from "./MountainArt.module.css";

export default function MountainArt() {
  return (
    <div class={styles.wrap} aria-hidden="true">
      <svg viewBox="0 0 900 560" role="img">
        <defs>
          <linearGradient id="mountain-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="currentColor" stop-opacity=".18" />
            <stop offset=".65" stop-color="currentColor" stop-opacity=".06" />
            <stop offset="1" stop-color="currentColor" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="circuit-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="var(--accent)" />
            <stop offset="1" stop-color="var(--success)" />
          </linearGradient>
        </defs>

        <g class={styles.contours}>
          <path d="M38 492C134 447 178 432 244 399c72-36 108-86 157-135 42-42 85-78 130-84 58-8 92 33 129 76 54 63 95 108 202 154" />
          <path d="M24 510c106-52 156-66 231-106 75-40 107-91 153-136 46-45 89-76 128-78 49-3 78 28 116 72 58 67 101 111 225 164" />
          <path d="M66 522c93-40 142-56 210-90 76-38 111-91 157-132 42-37 82-63 118-62 45 1 70 25 106 65 53 59 96 98 204 139" />
          <path d="M114 536c83-34 129-50 188-79 68-34 106-77 150-115 41-35 75-53 109-50 39 4 64 27 95 59 50 50 86 83 175 117" />
          <path d="M166 548c71-29 111-42 163-67 61-29 96-68 136-101 38-31 69-47 99-43 35 5 58 25 84 53 42 44 75 71 150 99" />
        </g>

        <path class={styles.fill} d="M52 492 172 402l90 23 135-168 80 70 98-178 76 91 63-44 138 296Z" />

        <g class={styles.ridges}>
          <path d="M52 492 172 402l90 23 135-168 80 70 98-178 76 91 63-44 138 296" />
          <path d="M78 505 183 423l83 20 132-153 78 64 99-165 73 86 65-46 122 276" />
          <path d="M107 518 197 447l74 16 127-137 75 58 101-149 70 75 65-44 105 252" />
          <path d="M140 530 214 470l66 13 119-119 73 50 102-131 68 66 62-42 86 223" />
          <path d="M177 540 237 493l56 10 108-101 69 42 104-112 63 55 59-37 67 190" />
          <path d="M220 548 267 514l46 8 93-82 63 34 103-93 59 45 53-31 49 153" />
        </g>

        <g class={styles.circuit}>
          <path d="M574 157v-58h54V61h39" />
          <path d="M574 157h58v49h66v55h72" />
          <path d="M574 157h-43v80h-58v67" />
          <path d="M574 157v112h43v61h84" />
          <path d="M574 157l-59 75v87h-54" />
          <path d="M574 157l61 74v82h53v58h86" />
          <path d="M574 157l-23-45v-42" />
          <path d="M574 157l26-42v-54" />
          <circle cx="574" cy="157" r="5" />
          <circle cx="667" cy="61" r="4" />
          <circle cx="770" cy="261" r="4" />
          <circle cx="473" cy="304" r="4" />
          <circle cx="701" cy="330" r="4" />
          <circle cx="461" cy="319" r="4" />
          <circle cx="774" cy="371" r="4" />
          <circle cx="551" cy="70" r="4" />
          <circle cx="600" cy="61" r="4" />
        </g>

        <g class={styles.code}>
          <text x="300" y="330">01  git checkout -b new-idea</text>
          <text x="342" y="360">02  build locally()</text>
          <text x="378" y="390">03  share openly()</text>
          <text x="430" y="420">04  git commit -m &quot;ship it&quot;</text>
        </g>

        <g class={styles.commandBoxes}>
          <rect x="485" y="285" width="156" height="34" rx="8" />
          <text x="502" y="307">git commit -m "ship it"</text>
          <rect x="654" y="394" width="148" height="34" rx="8" />
          <text x="671" y="416">git push origin main</text>
        </g>
      </svg>
    </div>
  );
}
