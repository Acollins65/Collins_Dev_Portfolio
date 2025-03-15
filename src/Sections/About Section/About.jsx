import React from "react";
import styles from "./About.module.css";
import { ButtonWhite } from "../../Components/ButtonWhite/ButtonWhite";
import { ButtonPlain } from "../../Components/ButtonPlain/ButtonPlain";

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
        <div className={styles.contentDetails}>
          <div className={styles.writing}>
            <p>
              A front-end engineer dedicated to crafting high-performance
              solutions, from sleek, intuitive interfaces to scalable, efficient
              systems, using the best tools for the job. With a year of
              experience, I specialize in building responsive, user-friendly
              designs while optimizing web performance to deliver seamless
              digital experiences.
            </p>
            <div className={styles.buttons}>
              <ButtonWhite onClick={() => navigate("/about")}>
                About Me
              </ButtonWhite>
              <ButtonPlain onClick={() => window.open("/path-to-cv.pdf")}>
                Download CV
              </ButtonPlain>
            </div>
          </div>
          <div className={styles.tech}>
            <div className={styles.techStack}>
              <div className={styles.techIcons}></div>
              <div className={styles.techIcons}></div>
              <div className={styles.techIcons}></div>
              <div className={styles.techIcons}></div>
              <div className={styles.techIcons}></div>
              <div className={styles.techIcons}></div>
              <div className={styles.techIcons}></div>
              <div className={styles.techIcons}></div>
              <div className={styles.techIcons}></div>
              <div className={styles.techIcons}></div>
              <div className={styles.techIcons}></div>
              <div className={styles.techIcons}></div>
              <div className={styles.techIcons}></div>
            </div>
          </div>
          <div className={styles.buttonSm}>
            <ButtonWhite onClick={() => navigate("/about")}>
              About Me
            </ButtonWhite>
            <ButtonPlain onClick={() => window.open("/path-to-cv.pdf")}>
              Download CV
            </ButtonPlain>
          </div>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </section>
  );
};
