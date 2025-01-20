import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentDetails}>
          <div className={styles.introduction}>
            <h1 className={styles.name}>Hi, I'm Collins</h1>
            <img
              src={getImageUrl("Hero/wave.png")}
              alt="Wave Icon"
              className="styles.waveIcon"
            />
          </div>
          <h2 className={styles.role}>Front-End Engineer</h2>
          <p className={styles.description}>
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
        <div className={styles.contactIcons}>
          <a href="#">
            <img
              src={getImageUrl("Hero/Linkedin.svg")}
              alt="Linkedin"
              className={styles.contactIcon}
            />
          </a>
          <a href="#">
            <img
              src={getImageUrl("Hero/Github.svg")}
              alt="Github"
              className={styles.contactIcon}
            />
          </a>
          <a href="#">
            <img
              src={getImageUrl("Hero/Email.svg")}
              alt="Email"
              className={styles.contactIcon}
            />
          </a>
          <a href="#">
            <img
              src={getImageUrl("Hero/Resume.svg")}
              alt="Resume"
              className={styles.contactIcon}
            />
          </a>
        </div>
      </div>
    </section>
  );
};
