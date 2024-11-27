import styles from './footer.module.scss';
import Links from "./components/links/Links.jsx";
import Logo from "./components/logo/Logo.jsx";
import Language from "./components/language/Language.jsx";
import Copyright from "./components/copyrights/Copyright.jsx";


function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.leftdiv}>
          <Links />
          <Logo />
        </div>
        <div className={styles.rightdiv}>
          <Language />
          <Copyright />
        </div>
      </footer>
    </>
  );
}

export default Footer;
