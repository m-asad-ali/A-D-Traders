import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "A&D Traders",
  };
  return <HeroSection myData={data} />;
};

export default About;
