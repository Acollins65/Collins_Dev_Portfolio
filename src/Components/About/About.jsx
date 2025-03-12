import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.head}>
          <div className={`${styles.title} ${styles.half}`}>
            <h2>Who am I? 🤔</h2>
          </div>
          <div className={`${styles.lineWrapper} ${styles.half}`}>
            <div className={styles.line}>Line</div>
          </div>
        </div>
        <div className={styles.head}></div>
        <div className={styles.bottom}></div>
      </div>
    </section>
  );
};
