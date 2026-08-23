import { For, Show, type ParentProps } from 'solid-js';
import styles from './PageHero.module.css';

export type PageHeroAction = {
  href: string;
  label: string;
  primary?: boolean;
};

type PageHeroProps = ParentProps<{
  actions?: PageHeroAction[];
  copy: string;
  eyebrow: string;
  title: string;
}>;

export default function PageHero(props: PageHeroProps) {
  return (
    <header class={`container ${styles.hero}`}>
      <span class="eyebrow">{props.eyebrow}</span>
      <h1>{props.title}</h1>
      <p>{props.copy}</p>

      <Show when={props.actions?.length}>
        <div class={styles.actions}>
          <For each={props.actions}>
            {(action) => (
              <a
                class="button"
                data-variant={action.primary ? 'primary' : undefined}
                href={action.href}
              >
                {action.label}
              </a>
            )}
          </For>
        </div>
      </Show>

      {props.children}
    </header>
  );
}
