import React from "react";
import styles from "./ProjectCardDesktop.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCardDesktop = ({ title, description, technologies }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.head}>
        <span style={{ fontSize: "14px" }}>This is a heading</span>
        <img src={getImageUrl("techStack/python-original.svg")} alt="python" />
      </div>
      <div className={styles.contentRow}>
        <div className={styles.image}>
          <img src={getImageUrl("Project/iPhone-Mock.png")} alt="" />
        </div>
        <div className={styles.writing}>
          <h2 className={styles.title}>Crossair</h2>
          <p className={styles.description}>
            This is the Desk top Card this s the desktop card
          </p>
          <div className={styles.techStack}>Git || Framer || Wordpress</div>
        </div>
      </div>
    </div>
  );
};
