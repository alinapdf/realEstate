import Cta from "../components/cta/Cta";
import FindYourDreamProperty from "../components/find-your-dream-property/FindYourDreamProperty";
import FormCommon from "../components/formCommon/FormCommon";
import PaginatedHousesList from "../components/HousesList/PaginatedHousesList";

import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FilterProvider } from "../utils/FilterContext";
import PaginatedHouses from "../components/HousesList/PaginatedHouses";

const Properties = () => {
  const findPropertyRef = useRef(null);
  const locationFindProperty = useLocation();

  useEffect(() => {
    if (locationFindProperty.hash === "#findProperty") {
      findPropertyRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationFindProperty]);

  const portfolioRef = useRef(null);
  const locationPortfolio = useLocation();

  useEffect(() => {
    if (locationPortfolio.hash === "#portfolio") {
      portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationPortfolio]);

  return (
    <>
      <FilterProvider>
        <FindYourDreamProperty ref={findPropertyRef} />
        <PaginatedHousesList ref={portfolioRef} />
      </FilterProvider>

      <FormCommon />
      <Cta />
    </>
  );
};

export default Properties;
