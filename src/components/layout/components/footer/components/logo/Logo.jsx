import logo_img from "../../../../../../assets/images/logo.svg";
import styles from "./logo.module.scss";

const Logo = () => {
  return <img src={logo_img} className={styles.logo} alt="logo.svg" />;
};

export default Logo;
