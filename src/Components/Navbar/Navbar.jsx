import React from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <a className={styles.title} href="/">
          Collins.Dev
        </a>
        <div className={styles.menu}>
          <div className={styles.menuBtn}></div>
          <ul className={styles.menuItems}>
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
        <ul className={styles.menuItemsSmall}>
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
    </nav>
  );
};
