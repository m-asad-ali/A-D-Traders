import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import { useEffect } from "react";
import AboutData from "./components/AboutData";

const About = () => {
  const { myName } = useProductContext();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const data = {
    name: "A&D Traders",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} type="about" />
      <AboutData />
    </>
  );
};

export default About;
