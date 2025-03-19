import React from "react";
import { Hero } from "../../Sections/Hero Section/Hero";
import { About } from "../../Sections/About Section/About";
import { ProjectSection } from "../../Sections/Project Section/ProjectSection";
import { ContactSection } from "../../Sections/ContactSection/ContactSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default Home;
