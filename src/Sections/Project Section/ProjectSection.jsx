import React from "react";
import styles from "./ProjectSection.module.css";
import { ButtonTransfer } from "../../Components/ButtonTransfer/ButtonTransfer";
import { ProjectCardPhone } from "../../Components/ProjectCardPhone/ProjectCardPhone";
import { ProjectCardDesktop } from "../../Components/ProjectCardDesktop/ProjectCardDesktop";
export const ProjectSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>Some of my featured Projects</h4>
        </div>
        <div className={styles.body}>
          <ProjectCardPhone />
          <ProjectCardDesktop />
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
