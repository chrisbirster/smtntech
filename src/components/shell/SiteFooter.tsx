import BrandMark from '../BrandMark';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer class={styles.footer}>
      <div class={`container ${styles.footerGrid}`}>
        <div class={styles.footerBrand}>
          <BrandMark />
          <p>
            Building useful software and a stronger developer community across Pennsylvania’s South
            Mountain region.
          </p>
          <span>⌖ Pennsylvania’s South Mountain region</span>
        </div>
        <div>
          <h2>Explore</h2>
          <a href="/podcast">Podcast</a>
          <a href="/articles">Articles</a>
          <a href="/projects">Projects</a>
          <a href="/events">Events</a>
        </div>
        <div>
          <h2>Community</h2>
          <a href="/community">Community</a>
          <a href="/join">Join</a>
          <a href="/notes">Meeting Notes</a>
          <a href="/showcase">Showcase</a>
        </div>
        <div>
          <h2>Organization</h2>
          <a href="/about">About</a>
          <a href="/client-work">Client Work</a>
          <a href="mailto:chris@southmountaintech.com">Email</a>
          <a href="https://github.com/chrisbirster/smtntech">GitHub</a>
        </div>
      </div>
      <div class={`container ${styles.footerBottom}`}>
        <span>© 2026 South Mountain Technologies</span>
        <span>Built in Pennsylvania’s South Mountain region ♡</span>
      </div>
    </footer>
  );
}
