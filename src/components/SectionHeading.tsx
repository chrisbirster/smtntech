import styles from './SectionHeading.module.css';

type Props = {
  eyebrow: string;
  title: string;
  copy?: string;
  action?: { label: string; href: string };
};

export default function SectionHeading(props: Props) {
  return (
    <div class={styles.heading}>
      <div>
        <span class="eyebrow">{props.eyebrow}</span>
        <h2>{props.title}</h2>
        {props.copy && <p>{props.copy}</p>}
      </div>
      {props.action && <a href={props.action.href}>{props.action.label} →</a>}
    </div>
  );
}
