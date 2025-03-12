import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={`${styles.title} ${styles.half}`}>
            <h4>Who am I? 🤔</h4>
          </div>
          <div className={`${styles.lineWrapper} ${styles.half}`}>
            <div className={styles.line}></div>
          </div>
        </div>
        <div className={styles.contentDetails}></div>
        <div className={styles.bottom}></div>
      </div>
    </section>
  );
};
