import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.contentRows} ${styles.firstRow}`}>
          <div>
            <h1>User</h1>
          </div>
          <div className={styles.roundedBoarder}>
            <h3>
              <span className={styles.waveEmoji}> 👋</span> Hello, I'm Collins
            </h3>
          </div>
        </div>
        <div className={styles.contentRows}>
          <div>
            <h1>Experience</h1>
          </div>
        </div>
        <div className={`${styles.contentRows} ${styles.secondRow}`}>
          <div>
            <h3>
              &lt;/ UI/UX Designer <br />
              Front-End Developer /&gt;
            </h3>
          </div>
          <div>
            <h1>Designer</h1>
          </div>
        </div>
        <div className={`${styles.contentRows} ${styles.thirdRow}`}>
          <div>
            <h1> & Developer</h1>
          </div>
          <div className={styles.roundedBoarder}>
            <h3>Contact me</h3>
          </div>
        </div>
        <div className={styles.contentRows}>
          <div className={styles.headerDetail}>
            <h2>
              I build accessible, pixel-perfect digital experiences for the web.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
