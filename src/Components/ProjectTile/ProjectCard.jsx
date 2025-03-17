import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.header}>
        <span>This is a heading</span>
        <img src={getImageUrl("techStack/python-original.svg")} alt="python" />
      </div>
      <div className={styles.contentRow}>
        <div className={styles.image}>hello</div>
        <div className={styles.writing}>hey</div>
      </div>
    </div>
  );
};
