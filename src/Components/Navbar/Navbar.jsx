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
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#aboutMe")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutMe"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#aboutMe")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#myProjects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#aboutMe")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                My Projects
              </a>
            </li>
            <li>
              <a
                href="#ContactMe"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#aboutMe")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
        <button
          className={styles.menuBtn}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};
