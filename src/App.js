import "./styles/reset.css";
import "./styles/common.scss";
import NavCommon from "./components/nav/navCommon/NavCommon";
import Hero from "./components/hero/Hero";
import FastLinks from "./components/fastLinks/FastLinks";
import SliderHouses from "./components/sliderHouses/SliderHouses";

const App = () => {
  return (
    <>
      <NavCommon />
      <Hero />
      <FastLinks />
      <SliderHouses />
    </>
  );
};

export default App;
