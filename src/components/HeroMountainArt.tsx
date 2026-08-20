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

        <path class={styles.backFill} d="M38 493 124 430 184 440 252 378 313 392 383 302 439 324 511 222 558 241 620 144 670 213 718 188 776 270 833 249 958 493Z" />
        <path class={styles.midFill} d="M56 506 142 445 207 455 280 387 333 403 408 311 462 333 532 233 577 247 624 155 675 222 725 198 783 282 842 262 967 506Z" />
        <path class={styles.frontFill} d="M72 521 166 463 231 474 304 410 360 424 432 340 486 360 548 274 593 286 631 205 681 260 733 242 789 320 850 304 978 521Z" />

        <g class={styles.contours}>
          <path d="M45 488 127 431 187 441 253 379 314 393 384 303 440 325 512 223 559 242 620 145 671 214 719 189 777 271 834 250 958 488" />
          <path d="M54 500 138 443 199 453 267 390 327 403 397 315 452 337 523 237 571 255 622 164 674 230 723 206 781 286 840 266 964 500" />
          <path d="M66 511 151 456 213 466 282 404 342 417 412 330 466 352 536 255 583 272 625 185 677 248 727 225 785 302 846 283 970 511" />
          <path d="M80 522 165 470 228 480 297 420 356 433 426 348 480 370 548 277 596 293 629 209 681 270 731 247 790 322 852 303 976 522" />
          <path d="M97 532 181 484 244 494 312 437 371 450 441 368 494 389 560 301 609 316 633 234 685 294 735 271 795 343 858 324 982 532" />
          <path d="M116 541 198 497 261 507 328 453 387 466 456 388 509 409 572 326 622 341 638 260 690 318 740 296 800 365 864 347 988 541" />
          <path d="M139 549 218 510 280 520 346 469 404 482 473 409 526 430 586 352 636 367 644 287 696 344 746 322 807 388 871 370 994 549" />
          <path d="M169 555 244 521 304 531 367 485 424 498 492 430 544 451 601 378 651 393 652 315 704 370 754 349 815 411 880 394 1000 555" />
        </g>

        <g class={styles.fineContours}>
          <path d="M255 465c54-41 96-80 142-132 50-57 89-88 128-92 43-5 72 24 109 65 50 56 90 91 170 129" />
          <path d="M279 481c52-38 93-75 137-124 48-53 86-82 123-85 40-4 68 22 103 60 47 51 85 84 161 119" />
          <path d="M307 497c49-35 88-69 130-114 45-49 81-75 116-77 38-3 64 20 97 55 44 47 80 77 150 109" />
          <path d="M338 512c46-32 82-63 121-104 42-45 76-68 109-70 35-2 59 18 90 50 41 43 74 70 138 99" />
        </g>

        <g class={styles.circuitPrimary}>
          <path d="M621 145v52h28v48h31v54h42v56h58v47h80" />
          <path d="M621 145h-31v48h-28v57h-34v54h-54" />
          <path d="M621 145v-43h34V71h36" />
          <path d="M621 145h36v33h39v48h45v49h57" />
          <path d="M621 145l-39 55v76h-42v49" />
          <circle cx="621" cy="145" r="5" />
          <circle cx="691" cy="71" r="4" />
          <circle cx="860" cy="402" r="4" />
          <circle cx="474" cy="304" r="4" />
          <circle cx="798" cy="275" r="4" />
        </g>

        <g class={styles.circuitSecondary}>
          <path d="M646 164v75h28v55h37v58h58v44h64" />
          <path d="M600 164v61h-31v55h-35v62h-55" />
          <path d="M665 186h38v42h40v48h61" />
          <circle cx="833" cy="396" r="3.5" />
          <circle cx="479" cy="342" r="3.5" />
        </g>

        <g class={styles.codePanel}>
          <text x="396" y="330">01</text><text x="435" y="330">git checkout -b new-idea</text>
          <text x="396" y="354">02</text><text x="435" y="354">build locally()</text>
          <text x="396" y="378">03</text><text x="435" y="378">share openly()</text>
          <text x="396" y="402">04</text><text x="435" y="402">git commit -m "ship it"</text>
          <path d="M430 422h116m-116 12h84m-84 12h128m-128 12h98" />
        </g>

        <g class={styles.commandBoxes}>
          <rect x="575" y="344" width="168" height="34" rx="8" />
          <text x="591" y="366">git commit -m "ship it"</text>
          <rect x="758" y="429" width="160" height="34" rx="8" />
          <text x="774" y="451">git push origin main</text>
        </g>
      </svg>
    </div>
  );
}
