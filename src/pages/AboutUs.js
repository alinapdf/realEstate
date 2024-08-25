import Cta from "../components/cta/Cta";
import NavigatingExperience from "../components/navigating-experience/NavigatingExperience";
import OurAchievements from "../components/our-achievements/OurAchievements";
import OurJourney from "../components/our-journey/OurJourney";
import OurValues from "../components/our-values/OurValues";
import Team from "../components/team/Team";
import ValuedClients from "../components/valued-clients/ValuedClients";

import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  //our jouney
  const ourJourneyRef = useRef(null);
  const locationOurJourney = useLocation();

  useEffect(() => {
    if (locationOurJourney.hash === "#ourJourney") {
      ourJourneyRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationOurJourney]);

  //hiw

  const hiwRef = useRef(null);
  const locationHiw = useLocation();

  useEffect(() => {
    if (locationHiw.hash === "#howItWorks") {
      hiwRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationHiw]);

  //our team

  const ourTeamRef = useRef(null);
  const locationOurTeam = useLocation();

  useEffect(() => {
    if (locationOurTeam.hash === "#ourTeam") {
      ourTeamRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationOurTeam]);

  //our clients
  const ourClientsRef = useRef(null);
  const locationOurClients = useLocation();

  useEffect(() => {
    if (locationOurClients.hash === "#ourClients") {
      ourClientsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationOurClients]);

  return (
    <>
      <OurJourney ref={ourJourneyRef} />
      <OurValues />
      <OurAchievements />
      <NavigatingExperience ref={hiwRef} />
      <Team ref={ourTeamRef} />
      <ValuedClients ref={ourClientsRef} />
      <Cta />
    </>
  );
};

export default AboutUs;
