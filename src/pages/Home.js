import Cta from "../components/cta/Cta";
import FastLinks from "../components/fastLinks/FastLinks";
import Hero from "../components/hero/Hero";
import SliderComments from "../components/sliderComments/SliderComments";
import FrequentlyQuestions from "../components/sliderFrequentlyQuestions/FrequentlyQuestions";
import SliderHouses from "../components/sliderHouses/SliderHouses";

const Home = () => {
  return (
    <>
      <Hero />
      <FastLinks />
      <SliderHouses />
      <SliderComments />
      <FrequentlyQuestions />
      <Cta />
    </>
  );
};

export default Home;
