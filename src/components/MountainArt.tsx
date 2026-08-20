import styles from "./MountainArt.module.css";

export default function MountainArt() {
  return (
    <div class={styles.wrap} aria-hidden="true">
      <svg viewBox="0 0 760 470" role="img">
        <defs><linearGradient id="ridge" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".18" /><stop offset="1" stop-color="currentColor" stop-opacity=".03" /></linearGradient></defs>
        <path class={styles.fill} d="M0 390 92 318l72 24 107-135 73 78 87-162 78 106 58-50 125 211Z" />
        <g class={styles.ridges}><path d="M0 390 92 318l72 24 107-135 73 78 87-162 78 106 58-50 125 211" /><path d="M20 408 108 342l66 20 98-124 70 72 90-154 74 101 62-51 112 202" /><path d="M48 426 121 367l62 16 93-112 67 63 90-139 75 89 62-48 92 190" /><path d="M90 444 144 391l55 13 80-93 66 51 87-119 78 70 58-45 68 176" /></g>
        <g class={styles.circuit}><path d="M433 164v-50h54V76h43" /><path d="M433 164h57v48h66v55h66" /><path d="M433 164h-45v77h-56v59" /><path d="M433 164v111h42v56h80" /><circle cx="433" cy="164" r="5" /><circle cx="530" cy="76" r="4" /><circle cx="622" cy="267" r="4" /><circle cx="332" cy="300" r="4" /><circle cx="555" cy="331" r="4" /></g>
        <g class={styles.code}><text x="112" y="285">01  git checkout -b new-idea</text><text x="144" y="316">02  build locally()</text><text x="183" y="347">03  share openly()</text><text x="238" y="378">04  git commit -m &quot;ship it&quot;</text></g>
      </svg>
    </div>
  );
}
