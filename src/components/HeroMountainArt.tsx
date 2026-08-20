import styles from "./HeroMountainArt.module.css";

export default function HeroMountainArt() {
  return (
    <div class={styles.wrap} aria-hidden="true">
      <svg viewBox="0 0 1000 560" role="img">
        <defs>
          <linearGradient id="hero-mountain-back" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="var(--moss-400)" stop-opacity=".19" />
            <stop offset=".62" stop-color="var(--moss-500)" stop-opacity=".075" />
            <stop offset="1" stop-color="var(--ink-950)" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="hero-mountain-front" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="var(--moss-500)" stop-opacity=".18" />
            <stop offset=".48" stop-color="var(--ink-850)" stop-opacity=".48" />
            <stop offset="1" stop-color="var(--ink-950)" stop-opacity=".08" />
          </linearGradient>
          <linearGradient id="hero-circuit" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="var(--accent)" />
            <stop offset=".62" stop-color="var(--accent)" />
            <stop offset="1" stop-color="var(--success)" />
          </linearGradient>
        </defs>

        <path class={styles.backFill} d="M18 500 112 438 180 446 252 382 313 394 383 302 439 324 511 222 558 241 620 144 670 213 718 188 776 270 833 249 986 500Z" />
        <path class={styles.midFill} d="M38 514 132 451 204 458 280 389 333 403 408 311 462 333 532 233 577 247 624 155 675 222 725 198 783 282 842 262 994 514Z" />
        <path class={styles.frontFill} d="M58 529 156 468 229 478 304 410 360 424 432 340 486 360 548 274 593 286 631 205 681 260 733 242 789 320 850 304 1000 529Z" />

        <g class={styles.contours}>
          <path d="M27 494 114 438 183 447 253 383 314 395 384 303 440 326 512 223 559 243 620 145 671 214 719 190 777 271 834 251 986 494" />
          <path d="M38 501 124 445 194 454 265 390 326 402 396 313 451 336 523 236 570 255 622 160 674 228 723 204 781 285 840 265 990 501" />
          <path d="M49 508 136 453 206 462 278 399 339 412 409 326 464 349 535 251 582 270 625 178 677 244 727 221 785 301 846 281 994 508" />
          <path d="M61 516 148 462 219 471 292 409 353 422 423 338 478 361 547 267 595 286 628 197 680 261 731 238 789 318 852 299 998 516" />
          <path d="M75 524 162 471 233 480 306 419 367 432 437 350 492 373 559 284 608 303 632 218 684 280 735 257 794 335 858 316 1000 524" />
          <path d="M90 532 177 480 248 489 321 430 382 443 452 363 506 386 572 302 621 320 636 240 689 300 740 277 800 353 865 334 1000 532" />
          <path d="M107 540 194 490 265 499 338 442 399 455 469 378 523 401 586 321 635 338 641 263 694 321 745 299 806 372 872 353 1000 540" />
          <path d="M127 547 214 500 285 509 357 454 418 467 487 393 541 416 601 341 650 358 647 286 700 342 751 321 813 391 879 373 1000 547" />
          <path d="M150 553 236 511 307 520 379 467 440 480 508 410 562 433 617 362 666 379 654 312 707 365 758 344 820 411 887 394 1000 553" />
          <path d="M176 558 262 522 333 531 405 481 466 494 534 429 588 452 635 385 684 401 662 339 715 390 766 370 829 433 895 417 1000 558" />
        </g>

        <g class={styles.innerContours}>
          <path d="M223 471c65-47 108-94 153-145 48-55 88-86 129-91 44-6 76 23 112 64 49 56 93 94 181 137" />
          <path d="M244 484c62-44 104-89 148-137 47-52 85-81 124-85 42-5 72 22 107 60 47 52 89 88 173 128" />
          <path d="M266 497c60-41 101-84 143-130 45-49 82-76 119-79 40-4 69 20 102 56 45 49 85 82 165 120" />
          <path d="M289 509c57-38 97-79 137-122 43-46 78-71 114-73 37-3 65 19 97 53 42 45 81 77 156 111" />
          <path d="M313 520c54-35 92-73 130-114 41-43 75-65 109-67 35-2 61 17 91 48 40 42 76 70 146 102" />
          <path d="M338 530c50-32 87-68 122-105 39-40 71-60 103-61 33-2 57 15 85 44 37 38 71 64 136 94" />
          <path d="M365 539c47-29 81-62 114-96 36-36 67-55 97-56 30-1 53 14 79 40 34 35 66 59 126 86" />
          <path d="M393 547c43-26 75-56 105-87 33-33 61-49 89-50 28-1 49 12 72 36 32 32 61 54 115 78" />
        </g>

        <g class={styles.circuitPrimary}>
          <path d="M620 144v51h28v49h31v53h42v57h58v48h82" />
          <path d="M620 144h-31v48h-28v57h-34v55h-56" />
          <path d="M620 144v-43h34V70h38" />
          <path d="M620 144h36v34h39v47h45v50h59" />
          <path d="M620 144l-39 55v76h-42v50" />
          <path d="M620 144l24 37v38h28v48" />
          <path d="M594 183h-42v42h-35v49h-51" />
          <path d="M655 207h42v44h43v46h65" />
          <circle cx="620" cy="144" r="5" />
          <circle cx="692" cy="70" r="4" />
          <circle cx="861" cy="402" r="4" />
          <circle cx="471" cy="304" r="4" />
          <circle cx="799" cy="275" r="4" />
          <circle cx="466" cy="274" r="3.5" />
          <circle cx="805" cy="297" r="3.5" />
        </g>

        <g class={styles.circuitSecondary}>
          <path d="M646 164v75h28v55h37v58h58v44h64" />
          <path d="M600 164v61h-31v55h-35v62h-55" />
          <path d="M665 186h38v42h40v48h61" />
          <path d="M573 207h-36v42h-32v43h-45" />
          <path d="M683 239h37v38h37v39h59" />
          <circle cx="833" cy="396" r="3.5" />
          <circle cx="479" cy="342" r="3.5" />
          <circle cx="460" cy="292" r="3" />
          <circle cx="816" cy="316" r="3" />
        </g>

        <g class={styles.codePanel}>
          <text x="372" y="323">01</text><text x="411" y="323">git checkout -b new-idea</text>
          <text x="372" y="347">02</text><text x="411" y="347">build locally()</text>
          <text x="372" y="371">03</text><text x="411" y="371">share openly()</text>
          <text x="372" y="395">04</text><text x="411" y="395">git commit -m "ship it"</text>
          <path d="M406 415h116m-116 12h84m-84 12h128m-128 12h98" />
        </g>

        <g class={styles.commandBoxes}>
          <rect x="566" y="338" width="168" height="34" rx="8" />
          <text x="582" y="360">git commit -m "ship it"</text>
          <rect x="748" y="423" width="160" height="34" rx="8" />
          <text x="764" y="445">git push origin main</text>
        </g>
      </svg>
    </div>
  );
}
