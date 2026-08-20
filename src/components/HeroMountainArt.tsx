import styles from "./HeroMountainArt.module.css";

const routeA = "M118 518 H205 V490 H285 V455 H354 V417 H420 V375 H474 V326 H525 V274 H565 V224 H592 V178 H620 V142 H650 V104 H686 V72";
const routeB = "M376 544 V500 H422 V462 H468 V420 H510 V380 H548 V335 H580 V289 H606 V242 H625 V196 H620 V142 H648 V104 H686 V72";
const routeC = "M894 518 H836 V486 H786 V448 H744 V409 H706 V368 H674 V324 H650 V276 H634 V230 H625 V188 H620 V142 H650 V104 H686 V72";

export default function HeroMountainArt() {
  return (
    <div class={styles.wrap} aria-hidden="true">
      <svg viewBox="0 0 1000 560" role="img" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="hero-mountain-back" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="var(--moss-400)" stop-opacity=".22" />
            <stop offset=".58" stop-color="var(--moss-500)" stop-opacity=".085" />
            <stop offset="1" stop-color="var(--ink-950)" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="hero-mountain-front" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="var(--moss-500)" stop-opacity=".17" />
            <stop offset=".52" stop-color="var(--ink-850)" stop-opacity=".46" />
            <stop offset="1" stop-color="var(--ink-950)" stop-opacity=".12" />
          </linearGradient>
          <linearGradient id="hero-circuit" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stop-color="var(--success)" />
            <stop offset=".55" stop-color="var(--accent)" />
            <stop offset="1" stop-color="oklch(88% .09 84)" />
          </linearGradient>
          <filter id="current-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <path class={styles.backFill} d="M12 504 92 457 151 442 210 420 269 385 323 398 383 321 435 340 490 271 540 292 588 211 620 144 653 196 697 175 744 229 790 251 838 289 902 344 990 504Z" />
        <path class={styles.midFill} d="M29 519 112 469 174 456 234 433 293 401 346 414 405 338 458 357 513 289 563 308 604 232 625 164 661 215 703 194 751 247 798 269 846 307 910 362 998 519Z" />
        <path class={styles.frontFill} d="M48 535 133 486 196 474 258 451 317 420 371 434 429 360 483 380 537 312 588 331 619 262 632 205 669 251 711 231 759 282 807 305 855 342 920 397 1000 535Z" />

        <g class={styles.contours}>
          <path d="M20 493 98 450 154 436 214 414 272 379 326 392 386 314 438 334 493 263 543 286 590 204 620 144 653 196 697 175 744 229 790 251 838 289 902 344 990 493" />
          <path d="M30 501 108 458 164 445 224 423 282 389 336 402 396 325 448 345 503 274 553 297 594 217 622 156 656 208 700 187 747 240 793 262 841 300 905 355 992 501" />
          <path d="M40 509 118 467 174 454 234 432 292 399 346 412 406 336 458 356 513 286 563 309 598 231 624 170 659 221 703 200 750 253 796 275 844 313 908 368 994 509" />
          <path d="M51 517 129 476 185 463 245 441 303 409 357 422 417 347 469 367 524 298 574 321 602 245 627 185 662 235 706 214 753 266 799 288 847 326 911 381 996 517" />
          <path d="M63 525 141 485 197 472 257 450 315 419 369 432 429 358 481 378 536 310 586 333 606 260 630 201 665 250 709 229 756 281 802 303 850 341 914 396 998 525" />
          <path d="M76 533 154 494 210 481 270 459 328 429 382 442 442 369 494 389 549 322 599 345 611 275 633 218 668 266 712 245 759 297 805 319 853 357 917 412 1000 533" />
          <path d="M90 541 168 503 224 490 284 468 342 439 396 452 456 380 508 400 563 334 613 357 616 291 636 235 671 282 715 261 762 313 808 335 856 373 920 428 1000 541" />
          <path d="M106 548 184 512 240 499 300 477 358 449 412 462 472 392 524 412 579 346 629 369 621 308 639 252 674 299 718 278 765 330 811 352 859 390 923 445 1000 548" />
          <path d="M124 554 202 521 258 508 318 486 376 459 430 472 490 404 542 424 597 358 647 381 626 325 642 270 677 316 721 295 768 347 814 369 862 407 926 462 1000 554" />
        </g>

        <g class={styles.innerContours}>
          <path d="M154 480c92-50 145-109 205-164 61-55 111-86 167-88 57-2 103 28 153 77 53 52 105 91 207 137" />
          <path d="M178 493c86-47 137-102 194-153 58-52 105-81 157-83 54-2 98 26 145 72 50 49 100 86 195 129" />
          <path d="M202 506c81-44 129-96 183-144 55-49 99-76 148-78 51-2 92 24 136 68 47 46 94 81 184 121" />
          <path d="M226 518c75-41 121-90 172-135 52-46 93-71 139-73 47-2 86 22 127 63 44 43 88 76 173 114" />
          <path d="M251 529c70-38 113-83 161-126 49-43 87-66 130-68 44-2 80 20 118 59 41 40 82 71 162 107" />
          <path d="M277 539c65-35 105-77 150-116 46-40 82-61 121-63 41-2 74 18 109 55 38 37 77 66 151 99" />
        </g>

        <g class={styles.networkBase}>
          <path d={routeA} />
          <path d={routeB} />
          <path d={routeC} />
          <path d="M205 490H154v-36H114" />
          <path d="M285 455h-62v-34h-46" />
          <path d="M354 417h-52v-31h-54" />
          <path d="M474 326h-43v-37h-48" />
          <path d="M565 224h-44v-39h-43" />
          <path d="M422 462h-46v-40h-39" />
          <path d="M510 380h-48v-35h-38" />
          <path d="M580 289h-42v-36h-39" />
          <path d="M744 409h52v-38h48" />
          <path d="M706 368h55v-36h50" />
          <path d="M674 324h48v-36h45" />
          <path d="M650 276h45v-38h43" />
          <path d="M634 230h48v-34h39" />
        </g>

        <g class={styles.networkNodes}>
          <circle cx="118" cy="518" r="3" /><circle cx="205" cy="490" r="3" /><circle cx="285" cy="455" r="3" /><circle cx="354" cy="417" r="3" /><circle cx="420" cy="375" r="3" /><circle cx="474" cy="326" r="3" /><circle cx="525" cy="274" r="3" /><circle cx="565" cy="224" r="3" /><circle cx="592" cy="178" r="3" />
          <circle cx="376" cy="544" r="3" /><circle cx="422" cy="462" r="3" /><circle cx="510" cy="380" r="3" /><circle cx="580" cy="289" r="3" /><circle cx="606" cy="242" r="3" />
          <circle cx="894" cy="518" r="3" /><circle cx="836" cy="486" r="3" /><circle cx="786" cy="448" r="3" /><circle cx="744" cy="409" r="3" /><circle cx="706" cy="368" r="3" /><circle cx="674" cy="324" r="3" /><circle cx="650" cy="276" r="3" /><circle cx="634" cy="230" r="3" />
          <circle cx="620" cy="142" r="5" /><circle cx="650" cy="104" r="4" /><circle cx="686" cy="72" r="5" />
        </g>

        <g class={styles.currentRoutes} filter="url(#current-glow)">
          <path class={`${styles.current} ${styles.routeA}`} pathLength="1" d={routeA} />
          <path class={`${styles.current} ${styles.routeB}`} pathLength="1" d={routeB} />
          <path class={`${styles.current} ${styles.routeC}`} pathLength="1" d={routeC} />
        </g>

        <circle class={styles.summitPulse} cx="686" cy="72" r="5" />

        <g class={styles.codePanel}>
          <text x="310" y="340">01</text><text x="348" y="340">git checkout -b new-idea</text>
          <text x="310" y="365">02</text><text x="348" y="365">build locally()</text>
          <text x="310" y="390">03</text><text x="348" y="390">share openly()</text>
          <text x="310" y="415">04</text><text x="348" y="415">git commit -m "ship it"</text>
          <path d="M344 435h118m-118 13h86m-86 13h132m-132 13h99" />
        </g>

        <g class={styles.commandBoxes}>
          <rect x="520" y="360" width="174" height="36" rx="8" />
          <text x="537" y="383">git commit -m "ship it"</text>
          <rect x="718" y="438" width="165" height="36" rx="8" />
          <text x="735" y="461">git push origin main</text>
        </g>
      </svg>
    </div>
  );
}
