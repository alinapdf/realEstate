import Cta from "../components/cta/Cta";
import EffortlessPropertyManagement from "../components/effortless-property-management/EffortlessPropertyManagement";
import ServiceHero from "../components/service-hero/ServiceHero";
import SmartInvestment from "../components/smart-investment/SmartInvestment";
import UnlockPropertyValue from "../components/unlock-property-value/UnlockPropertyValue";

import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Service = () => {
  const unlockPropertyValueRef = useRef(null);
  const locationunlockPropertyValue = useLocation();

  useEffect(() => {
    if (locationunlockPropertyValue.hash === "#unlockPropertyValue") {
      unlockPropertyValueRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationunlockPropertyValue]);

  //

  const effortlessPropertyManagementRef = useRef(null);
  const locationEffortlessPropertyManagement = useLocation();

  useEffect(() => {
    if (
      locationEffortlessPropertyManagement.hash ===
      "#effortlessPropertyManagement"
    ) {
      effortlessPropertyManagementRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [locationEffortlessPropertyManagement]);

  //

  const smartInvestmentRef = useRef(null);
  const locationSmartInvestment = useLocation();

  useEffect(() => {
    if (locationSmartInvestment.hash === "#smartInvestment") {
      smartInvestmentRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [locationSmartInvestment]);

  return (
    <>
      <ServiceHero />
      <UnlockPropertyValue ref={unlockPropertyValueRef} />
      <EffortlessPropertyManagement ref={effortlessPropertyManagementRef} />
      <SmartInvestment ref={smartInvestmentRef} />
      <Cta />
    </>
  );
};

export default Service;
