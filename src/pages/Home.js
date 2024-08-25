import Cta from "../components/cta/Cta";
import FastLinks from "../components/fastLinks/FastLinks";
import Hero from "../components/hero/Hero";
import SliderComments from "../components/sliderComments/SliderComments";
import FrequentlyQuestions from "../components/sliderFrequentlyQuestions/FrequentlyQuestions";
import SliderHouses from "../components/sliderHouses/SliderHouses";

import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  //hero section
  const heroSectionRef = useRef(null);
  const locationHeroSection = useLocation();

  useEffect(() => {
    if (locationHeroSection.hash === "#heroSection") {
      heroSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationHeroSection]);

  //features

  const featuresRef = useRef(null);
  const locationFeatures = useLocation();

  useEffect(() => {
    if (locationFeatures.hash === "#features") {
      featuresRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationFeatures]);

  //properties

  const propertiesRef = useRef(null);
  const locationProperties = useLocation();

  useEffect(() => {
    if (locationProperties.hash === "#properties") {
      propertiesRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationProperties]);

  //faq

  const faqRef = useRef(null);
  const locationFaq = useLocation();

  useEffect(() => {
    if (locationFaq.hash === "#faq") {
      faqRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationFaq]);

  return (
    <>
      <Hero ref={heroSectionRef} />
      <FastLinks ref={featuresRef} />
      <SliderHouses ref={propertiesRef} />
      <SliderComments />
      <FrequentlyQuestions ref={faqRef} />
      <Cta />
    </>
  );
};

export default Home;
