import { NavLink } from "react-router-dom";
import styles from "./navitem.module.scss";

function Navitem({ link, text }) {
  return (
    <NavLink to={link} title={text} className={styles.nav_item}>
      {text}
    </NavLink>
  );
}

export default Navitem;
