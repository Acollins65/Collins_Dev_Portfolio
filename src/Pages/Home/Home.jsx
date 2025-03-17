import React from "react";
import { Hero } from "../../Sections/Hero Section/Hero";
import { About } from "../../Sections/About Section/About";
import { ProjectSection } from "../../Sections/Project Section/ProjectSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ProjectSection />
    </div>
  );
};

export default Home;
