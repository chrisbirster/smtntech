import { useLocation } from '@solidjs/router';
import { For, Show, createSignal } from 'solid-js';
import { navItems } from '../../data/content';
import BrandMark from '../BrandMark';
import SearchDialog from '../SearchDialog';
import styles from './SiteHeader.module.css';

const primaryNavItems = navItems.filter(
  ([label]) => !['Showcase', 'Client Work', 'About'].includes(label),
);

const secondaryNavItems = [
  ...navItems.filter(([label]) => ['Showcase', 'Client Work', 'About'].includes(label)),
  ['Meeting Notes', '/notes'] as const,
];

function ThemeIcon(props: { theme: 'dark' | 'light' }) {
  return (
    <Show
      when={props.theme === 'dark'}
      fallback={
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" />
        </svg>
      }
    >
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </svg>
    </Show>
  );
}

export default function SiteHeader() {
  const location = useLocation();
  const storedTheme = localStorage.getItem('smt-theme');
  const initialTheme: 'dark' | 'light' = storedTheme === 'light' ? 'light' : 'dark';
  const [menuOpen, setMenuOpen] = createSignal(false);
  const [theme, setTheme] = createSignal<'dark' | 'light'>(initialTheme);

  document.documentElement.dataset.theme = initialTheme;

  const isActive = (href: string) =>
    location.pathname === href || (href !== '/' && location.pathname.startsWith(`${href}/`));

  const toggleTheme = () => {
    const nextTheme = theme() === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('smt-theme', nextTheme);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div class={styles.announcement}>
        <div class={`container ${styles.announcementInner}`}>
          <p>
            <span aria-hidden="true">▲</span>
            The developer community across Pennsylvania’s South Mountain region is taking shape.
          </p>
          <a href="/join">Help build it →</a>
        </div>
      </div>

      <header class={styles.header}>
        <div class={`container ${styles.headerInner}`}>
          <BrandMark />
          <nav class={styles.desktopNav} aria-label="Main navigation">
            <a
              href="/"
              class={location.pathname === '/' ? styles.active : undefined}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </a>
            <For each={primaryNavItems}>
              {([label, href]) => (
                <a
                  href={href}
                  class={isActive(href) ? styles.active : undefined}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {label}
                </a>
              )}
            </For>
            <details class={styles.moreMenu}>
              <summary
                class={
                  secondaryNavItems.some(([, href]) => isActive(href)) ? styles.active : undefined
                }
              >
                More <span aria-hidden="true">⌄</span>
              </summary>
              <div class={styles.morePanel}>
                <For each={secondaryNavItems}>
                  {([label, href]) => (
                    <a
                      href={href}
                      class={isActive(href) ? styles.active : undefined}
                      aria-current={isActive(href) ? 'page' : undefined}
                    >
                      {label}
                    </a>
                  )}
                </For>
              </div>
            </details>
          </nav>

          <div class={styles.actions}>
            <SearchDialog />
            <button
              class={styles.iconButton}
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme() === 'dark' ? 'light' : 'dark'} theme`}
            >
              <ThemeIcon theme={theme()} />
            </button>
            <a
              class={styles.iconButton}
              href="https://github.com/chrisbirster/smtntech"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
            >
              <svg class={styles.githubIcon} aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.74-1.55-2.57-.29-5.28-1.29-5.28-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.96 10.96 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
              </svg>
            </a>
            <a class="button" data-variant="primary" href="/join">
              Join the Community
            </a>
            <button
              class={styles.menuButton}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen() ? 'true' : 'false'}
              aria-controls="mobile-menu"
            >
              Menu
            </button>
          </div>
        </div>

        <Show when={menuOpen()}>
          <nav id="mobile-menu" class={styles.mobileNav} aria-label="Mobile navigation">
            <a
              href="/"
              onClick={closeMenu}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </a>
            <For each={navItems}>
              {([label, href]) => (
                <a
                  href={href}
                  onClick={closeMenu}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {label}
                </a>
              )}
            </For>
            <a href="/notes" onClick={closeMenu}>
              Meeting Notes
            </a>
            <a href="/join" onClick={closeMenu}>
              Join the Community
            </a>
          </nav>
        </Show>
      </header>
    </>
  );
}
