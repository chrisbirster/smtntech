import CommunityActivity from './CommunityActivity';
import HomeHero from './HomeHero';
import styles from './HomeIntroduction.module.css';

export default function HomeIntroduction() {
  return (
    <div class={styles.region}>
      <HomeHero />
      <CommunityActivity />
    </div>
  );
}
