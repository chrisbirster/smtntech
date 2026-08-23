import CommunityHighlights from '../components/home/CommunityHighlights';
import HomeClientWork from '../components/home/HomeClientWork';
import HomeCta from '../components/home/HomeCta';
import HomeEditorial from '../components/home/HomeEditorial';
import HomeEvents from '../components/home/HomeEvents';
import HomeIntroduction from '../components/home/HomeIntroduction';
import HomeProjects from '../components/home/HomeProjects';
import HomeValues from '../components/home/HomeValues';
import styles from './HomePage.module.css';

export default function HomePage() {
  document.title = 'South Mountain Technologies — Build locally. Share knowledge.';

  return (
    <div class={styles.home}>
      <HomeIntroduction />

      <HomeEditorial />
      <div class={styles.topoDivider} aria-hidden="true" />
      <HomeProjects />
      <CommunityHighlights />
      <HomeEvents />
      <HomeValues />
      <HomeClientWork />
      <HomeCta />
    </div>
  );
}
