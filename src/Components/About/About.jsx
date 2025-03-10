import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.head}>
          <div className={styles.title}>
            <h1>Who am I? 🤔</h1>
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.line}></div>
          </div>
        </div>
        <div className={styles.head}></div>
        <div className={styles.bottom}></div>
      </div>
    </section>
  );
};
