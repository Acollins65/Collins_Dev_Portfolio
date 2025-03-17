import React from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <a className={styles.logo} href="/">
          COLLINS
        </a>
        <div className={styles.menu}>
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuItemsSmall}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>

            {/* <li>
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
            </li> */}
            {menuOpen && (
              <div className={styles.mobileIcons}>
                <a href="mailto:your-email@example.com">
                  <img
                    src={getImageUrl("nav/socialIcons/mail.svg")}
                    alt="email"
                  />
                </a>
                <a
                  href="https://github.com/Acollins65"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={getImageUrl("nav/socialIcons/Github.svg")}
                    alt="github"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/alfred-collins-bimpong-6393a5180/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={getImageUrl("nav/socialIcons/Linkedin.svg")}
                    alt="linkedin"
                  />
                </a>
              </div>
            )}
          </ul>
        </div>
        <div className={styles.socialIcons}>
          <a href="mailto:your-email@example.com">
            <img src={getImageUrl("nav/socialIcons/mail.svg")} alt="email" />
          </a>
          <a
            href="https://github.com/Acollins65"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("nav/socialIcons/Github.svg")} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/alfred-collins-bimpong-6393a5180/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("nav/socialIcons/Linkedin.svg")}
              alt="linkedin"
            />
          </a>
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
