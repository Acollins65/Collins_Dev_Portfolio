import React from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <a className={styles.logo} href="/">
          Collins.Dev
        </a>
        <div className={styles.menu}>
          <ul
            className={`${styles.menuItems} ${
              menuOpen && styles.menuItemsSmall
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#aboutMe">About me</a>
            </li>
            <li>
              <a href="#myProjects">My Projects</a>
            </li>
            <li>
              <a href="#ContactMe">Contact me</a>
            </li>
          </ul>
        </div>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu_button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
    </nav>
  );
};
