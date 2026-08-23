import type { ParentProps } from 'solid-js';
import SiteFooter from './shell/SiteFooter';
import SiteHeader from './shell/SiteHeader';
import styles from './AppShell.module.css';

export default function AppShell(props: ParentProps) {
  return (
    <div class={styles.shell}>
      <SiteHeader />

      <main id="main-content" class={styles.main} tabindex={-1}>
        {props.children}
      </main>
      <SiteFooter />
    </div>
  );
}
