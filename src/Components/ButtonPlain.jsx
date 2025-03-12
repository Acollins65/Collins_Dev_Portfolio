import React from "react";

export const ButtonPlain = ({ children, onClick }) => {
  const buttonStyle = {
    background: "none",
    border: "none",
    color: "white",
    padding: "12px 20px",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "all 0.3s ease",
  };

  const iconStyle = {
    transition: "transform 0.3s ease",
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.querySelector(".download-icon").style.transform =
      "translateY(3px)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.querySelector(".download-icon").style.transform =
      "translateY(0)";
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        className="download-icon"
        style={iconStyle}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 10L12 15L17 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15V3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </button>
  );
};
