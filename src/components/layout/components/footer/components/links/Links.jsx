import styles from './links.module.scss'

const Links = () => {
    return (
      <div className={styles.links}>
        <ul>
          <li><a href="">Become a disagner</a></li>
          <li><a href="">Our contract</a></li>
          <li><a href="">Partnership</a></li>
          <li><a href="">Investors</a></li>
        </ul>
        <ul>
          <li><a href="">Career</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Support</a></li>
          <li><a href="">Terms of use</a></li>
        </ul>
        <ul>
          <li><a href="">Privacy</a></li>
          <li><a href="">Policy</a></li>
          <li><a href="">Web-site map</a></li>
        </ul>
      </div>
    );
};

export default Links;
