import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import { useEffect } from "react";
import AboutData from "./components/AboutData";

const About = () => {
  useEffect(() => {
    document.title = "About Us - A&D Traders";
    window.scrollTo(0, 0);
  }, []);
  const { myName } = useProductContext();

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
