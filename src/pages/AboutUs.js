import NavigatingExperience from "../components/navigating-experience/NavigatingExperience";
import OurAchievements from "../components/our-achievements/OurAchievements";
import OurJourney from "../components/our-journey/OurJourney";
import OurValues from "../components/our-values/OurValues";
import Team from "../components/team/Team";
import ValuedClients from "../components/valued-clients/ValuedClients";

const AboutUs = () => {
  return (
    <>
      <OurJourney />
      <OurValues />
      <OurAchievements />
      <NavigatingExperience />
      <Team />
      <ValuedClients />
    </>
  );
};

export default AboutUs;
