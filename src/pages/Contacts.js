import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ContactsHero from "../components/contacts-hero/ContactsHero";
import Cta from "../components/cta/Cta";
import ExploreWorld from "../components/explore-world/ExploreWorld";
import FastLinks from "../components/fastLinks/FastLinks";
import FormCommon from "../components/formCommon/FormCommon";
import LocationTabs from "../components/location-tabs/LocationTabs";

const Contacts = () => {
  const formRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#form") {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <ContactsHero />
      <FastLinks />
      <FormCommon ref={formRef} />
      <LocationTabs />
      <ExploreWorld />
      <Cta />
    </>
  );
};

export default Contacts;
