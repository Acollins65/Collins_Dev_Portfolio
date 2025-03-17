import React from "react";
import styles from "./ProjectSection.module.css";
import { ButtonTransfer } from "../../Components/ButtonTransfer/ButtonTransfer";
import { ProjectCard } from "../../Components/ProjectTile/ProjectCard";

export const ProjectSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>Some of my featured Projects</h4>
        </div>
        <div className={styles.body}>
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className={styles.bottom}>
          <div className={styles.buttonSm}>
            <ButtonTransfer onClick={() => navigate("/about")}>
              View All
            </ButtonTransfer>
          </div>
        </div>
      </div>
    </div>
  );
};
