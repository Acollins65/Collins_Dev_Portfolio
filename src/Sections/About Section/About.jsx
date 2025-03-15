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
              Front-end developer with an eye for performance and user
              experience. I build responsive interfaces while constantly
              expanding my technical horizons. My tools of choice transform
              complex challenges into elegant solutions.
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
              <div className={styles.techIcons}>
                <img
                  src={getImageUrl("techStack/react-original.svg")}
                  alt="react"
                />
                <p>React</p>
              </div>
              <div className={styles.techIcons}>
                <img
                  src={getImageUrl("techStack/html5-original.svg")}
                  alt="html"
                />
                <p>HTML</p>
              </div>
              <div className={styles.techIcons}>
                <img
                  src={getImageUrl("techStack/css3-original.svg")}
                  alt="css"
                />
                <p>CSS</p>
              </div>
              <div className={styles.techIcons}>
                <img
                  src={getImageUrl("techStack/sass-original.svg")}
                  alt="sass"
                />
                <p>Sass</p>
              </div>
              <div className={styles.techIcons}>
                <img
                  src={getImageUrl("techStack/javascript-original.svg")}
                  alt="javascript"
                />
                <p>JavaScript</p>
              </div>
              <div className={styles.techIcons}>
                <img
                  src={getImageUrl("techStack/nextjs-original.svg")}
                  alt="nextjs"
                />
                <p>Next.js</p>
              </div>
              <div className={styles.techIcons}>
                <img
                  src={getImageUrl("techStack/tailwindcss-original.svg")}
                  alt="tailwind"
                />
                <p>Tailwind</p>
              </div>
              <div className={styles.techIcons}>
                <img
                  src={getImageUrl("techStack/python-original.svg")}
                  alt="python"
                />
                <p>Python</p>
              </div>
              <div className={styles.techIcons}>
                <img
                  src={getImageUrl("techStack/nodejs-original.svg")}
                  alt="nodejs"
                />
                <p>Node.js</p>
              </div>
              <div className={styles.techIcons}>
                <img
                  src={getImageUrl("techStack/git-original.svg")}
                  alt="git"
                />
                <p>Git</p>
              </div>
              <div className={styles.techIcons}>
                <img
                  src={getImageUrl("techStack/figma-original.svg")}
                  alt="figma"
                />
                <p>Figma</p>
              </div>
              <div className={styles.techIcons}>
                <img
                  src={getImageUrl("techStack/vercel-original.svg")}
                  alt="vercel"
                />
                <p>Vercel</p>
              </div>
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
