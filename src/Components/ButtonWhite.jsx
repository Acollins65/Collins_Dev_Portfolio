import React from "react";

export const ButtonWhite = ({ children, onClick }) => {
  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    border: "none",
    borderRadius: "50px",
    padding: "16px 20px",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    transition: "all 0.3s ease",
  };

  const arrowStyle = {
    transition: "transform 0.3s ease",
    width: "20px",
    height: "20px",
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.querySelector(".arrow").style.transform = "translateX(5px)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.querySelector(".arrow").style.transform = "translateX(0)";
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <svg
        className="arrow"
        style={arrowStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
