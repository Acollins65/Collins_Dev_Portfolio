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
              I’m a front-end engineer focused on creating high-performance
              solutions, from sleek interfaces to scalable systems, using the
              best tools for the job. With a year of experience, I specialise in
              building responsive, user-friendly designs and optimising web
              performance to deliver seamless digital experiences.
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
          <div className={styles.techStack}>
            Tech stach for Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quas assumenda cum distinctio sunt at sit ad sint eos autem
            minus ex doloremque accusamus consequatur, quasi facilis! Quo atque
            quasi impedit.
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
