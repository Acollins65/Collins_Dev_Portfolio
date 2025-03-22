import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <h4>Alfred Collins-Bimpong</h4>
          <p>© {currentYear} | All rights reserved.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.linkSection}>
            <h5>Navigate</h5>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About me</Link>
            {/* <Link to="/contact">Contact me</Link> */}
          </div>
          <div className={styles.linkSection}>
            <h5>Projects</h5>
            <Link to="/projects/shop">Shoptidy</Link>
            <Link to="/projects/socialsphere">SocialSphere</Link>
            <Link to="/projects/nextcut">NextCut</Link>
            <Link to="/projects/nextfood">NextFood</Link>
          </div>
          <div className={styles.linkSection}>
            <h5>Socials</h5>
            <a
              href="https://linkedin.com/in/alfredcollins65"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/alfredcollins65"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://instagram.com/alfredcollins65"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
