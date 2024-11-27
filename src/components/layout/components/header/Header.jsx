import { useState } from "react";
import Logo from "./components/logo/Logo.jsx";
import styles from './header.module.scss'
import NavItemsContainer from "./components/navitemcontainer/NavItemContainer.jsx";
import {leftSideOfNavigationData, rightSideOfNavigationData} from './data/navigation.data'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {

      setIsOpen(!isOpen)

  }

  return (
    <header className={styles.header}>
      <NavItemsContainer array={leftSideOfNavigationData} />
      <Logo />
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        &#9776;
      </div>
      {isOpen && (
        <nav className={styles.navMenu} {...(isOpen ? "active" : "")}>
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="/contact">Contact</a>
          <a href="/about-us">About us</a>
        </nav>
      )}
      <NavItemsContainer array={rightSideOfNavigationData} />
    </header>
  );

}

export default Header
