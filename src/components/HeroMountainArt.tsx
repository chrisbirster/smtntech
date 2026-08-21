import mountain from "../assets/mountain.png";
import styles from "./HeroMountainArt.module.css";

export default function HeroMountainArt() {
  return (
    <div class={styles.wrap} aria-hidden="true">
      <img class={styles.art} src={mountain} alt="" />
    </div>
  );
}
