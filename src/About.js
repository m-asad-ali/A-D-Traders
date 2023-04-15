import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "A&D Traders",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} type="about" />
    </>
  );
};

export default About;
