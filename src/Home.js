import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "A&D Traders";
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
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
