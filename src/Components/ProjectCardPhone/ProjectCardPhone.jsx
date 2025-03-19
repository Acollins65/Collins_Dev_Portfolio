import React from "react";
import styles from "./ProjectCardPhone.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCardPhone = ({ title, description, technologies }) => {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas
            provident pariatur quos ex odit impedit illo
          </p>
          <div className={styles.techStack}>Git || Framer || Wordpress</div>
        </div>
      </div>
    </div>
  );
};
