import LocationBody from "./LocationBody";
import { housesAray } from "../sliderHouses/housesArray";
import { useState, useEffect } from "react";
import "./FindYourDreamProperty.scss";
import PropertyTypeBody from "./PropertyTypeBody";
import PricingBody from "./Pricing.body";
import PropertySizeBody from "./PropertySizeBody";
import BuildYearBody from "./BuildYearBody";

import { useContext } from "react";

import { FilterContext } from "../../utils/FilterContext";

const FindYourDreamPropertyFilter = () => {
  const { searchQuery, filters, updateFilters } = useContext(FilterContext);

  // const [localSearchQuery, setLocalSearchQuery] = useState("");

  // const handleSearchClick = () => {
  //   updateSearchQuery(localSearchQuery);
  // };

  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const { updateSearchQuery } = useContext(FilterContext);

  const handleSearchClick = () => {
    updateSearchQuery(localSearchQuery);
  };

  // Location
  const [isActiveLocation, setIsActiveLocation] = useState(false);
  const toggleParametrLocation = () => {
    setIsActiveLocation(!isActiveLocation);
  };

  const [currentLocation, setCurrenLocation] = useState("Location");
  const currentLocationParametr = (location) => {
    setCurrenLocation(location);
    updateFilters({ location });
    setIsActiveLocation(false);
  };

  const [locationBody, setLocationBody] = useState([]);
  useEffect(() => {
    const uniqueLocations = [
      ...new Set(housesAray.map((house) => house.location)),
    ];
    setLocationBody(uniqueLocations);
  }, []);

  // Property Type
  const [isActivePropertyType, setIsActivePropertyType] = useState(false);
  const toggleParametrPropertyType = () => {
    setIsActivePropertyType(!isActivePropertyType);
  };

  const [propertyTypeBody, setPropertyTypeBody] = useState([]);
  useEffect(() => {
    const uniquePropertyTypes = [
      ...new Set(housesAray.map((house) => house.type)),
    ];
    setPropertyTypeBody(uniquePropertyTypes);
  }, []);

  const [currentPropertyType, setCurrenPropertyType] =
    useState("Property Type");
  const currentPropertyTypeParametr = (propertyType) => {
    setCurrenPropertyType(propertyType);
    updateFilters({ propertyType });
    setIsActivePropertyType(false);
  };

  // Pricing
  const [isActivePricing, setIsActivePricing] = useState(false);
  const toggleParametrPricing = () => {
    setIsActivePricing(!isActivePricing);
  };

  const [pricingBody, setPricingBody] = useState([]);
  useEffect(() => {
    const uniquePricing = [...new Set(housesAray.map((house) => house.price))];
    setPricingBody(uniquePricing);
  }, []);

  const [currentPricing, setCurrenPricing] = useState("Pricing");
  const currentPricingParametr = (pricing) => {
    setCurrenPricing(pricing);
    updateFilters({ pricing });
    setIsActivePricing(false);
  };

  //propertysize
  const [isActivePropertySize, setIsActivePropertySize] = useState(false);
  const toggleParametrPropertySize = () => {
    setIsActivePropertySize(!isActivePropertySize);
  };

  const [propertySizeBody, setPropertySizeBody] = useState([]);
  useEffect(() => {
    const uniquePropertySize = [
      ...new Set(housesAray.map((house) => house.area)),
    ];
    setPropertySizeBody(uniquePropertySize);
  }, []);

  const [currentPropertySize, setCurrenPropertySize] =
    useState("Property Size");
  const currentPropertySizeParametr = (propertySize) => {
    setCurrenPropertySize(propertySize);
    updateFilters({ propertySize });
    setIsActivePropertySize(false);
  };

  //buildYear

  const [isActiveBuildYear, setIsActiveBuildYear] = useState(false);
  const toggleParametrBuildYear = () => {
    setIsActiveBuildYear(!isActiveBuildYear);
  };

  const [buildYear, setSBuildYear] = useState([]);
  useEffect(() => {
    const uniqueBuilYear = [
      ...new Set(housesAray.map((house) => house.buildYear)),
    ];
    setSBuildYear(uniqueBuilYear);
  }, []);

  const [currentBuildYear, setCurrenBuildYear] = useState("Build Year");
  const currentBuildYearParametr = (buildYear) => {
    setCurrenBuildYear(buildYear);
    updateFilters({ buildYear });
    setIsActiveBuildYear(false);
  };

  return (
    <div className="find-your-drean-property-filter">
      <div className="container">
        <div className="find-your-drean-property-filter-search">
          <input
            type="text"
            className="find-your-drean-property-filter-search-input"
            placeholder="Search For A Property"
            onChange={(e) => updateSearchQuery(e.target.value)}
            value={searchQuery}
          />
          {/* <button
            className="find-your-drean-property-filter-search-btn"
            onClick={handleSearchClick}
          >
            Find Property
          </button> */}
        </div>
        <ul className="find-your-drean-property-filter-list">
          <li
            className={`find-your-drean-property-filter-list-item ${
              isActiveLocation ? "is-active" : ""
            }`}
            onClick={toggleParametrLocation}
          >
            <div className="find-your-drean-property-filter-list-item-current location">
              {currentLocation}
            </div>
            <LocationBody
              results={locationBody}
              onClickFunction={currentLocationParametr}
            />
          </li>
          <li
            className={`find-your-drean-property-filter-list-item ${
              isActivePropertyType ? "is-active" : ""
            }`}
            onClick={toggleParametrPropertyType}
          >
            <div className="find-your-drean-property-filter-list-item-current property-type">
              {currentPropertyType}
            </div>
            <PropertyTypeBody
              results={propertyTypeBody}
              onClickFunction={currentPropertyTypeParametr}
            />
          </li>
          <li
            className={`find-your-drean-property-filter-list-item ${
              isActivePricing ? "is-active" : ""
            }`}
            onClick={toggleParametrPricing}
          >
            <div className="find-your-drean-property-filter-list-item-current pricing">
              {currentPricing}
            </div>
            <PricingBody
              results={pricingBody}
              onClickFunction={currentPricingParametr}
            />
          </li>
          <li
            className={`find-your-drean-property-filter-list-item ${
              isActivePropertySize ? "is-active" : ""
            }`}
            onClick={toggleParametrPropertySize}
          >
            <div className="find-your-drean-property-filter-list-item-current property-size">
              {currentPropertySize}
            </div>
            <PropertySizeBody
              results={propertySizeBody}
              onClickFunction={currentPropertySizeParametr}
            />
          </li>
          <li
            className={`find-your-drean-property-filter-list-item ${
              isActiveBuildYear ? "is-active" : ""
            }`}
            onClick={toggleParametrBuildYear}
          >
            <div className="find-your-drean-property-filter-list-item-current build-year">
              {currentBuildYear}
            </div>
            <BuildYearBody
              results={buildYear}
              onClickFunction={currentBuildYearParametr}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FindYourDreamPropertyFilter;
