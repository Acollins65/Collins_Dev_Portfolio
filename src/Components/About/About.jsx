import React from "react";

export const About = () => {
  return (
    <div>
      <div
        style={{
          maxWidth: "800px",
          margin: "50px auto",
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          color: "black",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>About Us</h1>
        <p style={{ color: "black", lineHeight: 1.6 }}>
          Welcome to our company! We are committed to delivering the best
          products and services to our customers. Our team is dedicated to
          innovation and excellence, ensuring customer satisfaction at every
          step.
        </p>
        <p style={{ color: "black", lineHeight: 1.6 }}>
          Founded with passion and expertise, we strive to make a positive
          impact in our industry and community. Thank you for being part of our
          journey.
        </p>
      </div>
    </div>
  );
};
