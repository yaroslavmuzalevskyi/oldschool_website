import NavItem from "../navitem/NavItem.jsx";
import styles from "./navitemcontainer.module.scss";

const NavItemsContainer = ({ array = [{ link: "", text: "" }] }) => {
  return (
    <nav className={styles.nav}>
      {array.map((item) => (
        <NavItem key={item.link} link={item.link} text={item.text} />
      ))}
    </nav>
  );
};
export default NavItemsContainer;
