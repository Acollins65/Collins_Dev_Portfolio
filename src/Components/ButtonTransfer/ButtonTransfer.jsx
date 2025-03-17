import React, { useState } from "react";
import styles from "./ButtonTransfer.module.css";

export const ButtonTransfer = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`${styles.button} ${isHovered ? styles.hovered : ""}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <svg
        className={`${styles.arrow} ${isHovered ? styles.arrowHovered : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
