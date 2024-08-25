import { useState } from "react";
import "./LocationTabs.scss";
import { allOffices } from "./locationTabsLists";

import React, { forwardRef } from "react";

const LocationTabs = forwardRef((props, ref) => {
  const regionalOffices = allOffices.filter((office) => office.isRegional);
  const internationalOffices = allOffices.filter(
    (office) => !office.isRegional
  );

  const [toggle, setToggle] = useState(1);
  const updateToggle = (tabNumber) => {
    setToggle(tabNumber);
  };

  return (
    <>
      <section className="location-tabs" ref={ref}>
        <div className="container">
          <h2 className="location-tabs-header">
            Discover Our Office Locations
          </h2>
          <p className="location-tabs-text">
            Estatein is here to serve you across multiple locations. Whether
            you're looking to meet our team, discuss real estate opportunities,
            or simply drop by for a chat, we have offices conveniently located
            to serve your needs. Explore the categories below to find the
            Estatein office nearest to you
          </p>
          <ul className="location-tabs-btns">
            <li
              className={
                toggle === 1
                  ? "location-tabs-btns-item active"
                  : "location-tabs-btns-item"
              }
            >
              <button
                className="location-tabs-btns-item-btn"
                onClick={() => updateToggle(1)}
              >
                All
              </button>
            </li>
            <li
              className={
                toggle === 2
                  ? "location-tabs-btns-item active"
                  : "location-tabs-btns-item"
              }
            >
              <button
                className="location-tabs-btns-item-btn"
                onClick={() => updateToggle(2)}
              >
                Regional
              </button>
            </li>
            <li
              className={
                toggle === 3
                  ? "location-tabs-btns-item active"
                  : "location-tabs-btns-item"
              }
            >
              <button
                className="location-tabs-btns-item-btn"
                onClick={() => updateToggle(3)}
              >
                International
              </button>
            </li>
          </ul>
          <ul
            className={`location-tabs-content display-none ${
              toggle === 1 ? "display-block" : "display-none"
            }`}
          >
            {allOffices.map((office) => {
              return (
                <li className="location-tabs-content-item" key={office.id}>
                  <span className="location-tabs-content-item-type">
                    {office.locationType}
                  </span>
                  <h3 className="location-tabs-content-item-adress">
                    {office.locationAdress}
                  </h3>
                  <p className="location-tabs-content-item-text">
                    {office.locationDesc}
                  </p>
                  <div className="location-tabs-content-item-wrapper">
                    <div className="location-tabs-content-item-wrapper-item email">
                      {office.locationEmail}
                    </div>
                    <div className="location-tabs-content-item-wrapper-item phone">
                      {office.locationPhone}
                    </div>
                    <div className="location-tabs-content-item-wrapper-item location">
                      {office.locationLocation}
                    </div>
                  </div>
                  <a href="#" className="location-tabs-content-item-link">
                    Get Direction
                  </a>
                </li>
              );
            })}
          </ul>
          <ul
            className={`location-tabs-content display-none ${
              toggle === 2 ? "display-block" : "display-none"
            }`}
          >
            {regionalOffices.map((office) => {
              return (
                <li className="location-tabs-content-item" key={office.id}>
                  <span className="location-tabs-content-item-type">
                    {office.locationType}
                  </span>
                  <h3 className="location-tabs-content-item-adress">
                    {office.locationAdress}
                  </h3>
                  <p className="location-tabs-content-item-text">
                    {office.locationDesc}
                  </p>
                  <div className="location-tabs-content-item-wrapper">
                    <div className="location-tabs-content-item-wrapper-item email">
                      {office.locationEmail}
                    </div>
                    <div className="location-tabs-content-item-wrapper-item phone">
                      {office.locationPhone}
                    </div>
                    <div className="location-tabs-content-item-wrapper-item location">
                      {office.locationLocation}
                    </div>
                  </div>
                  <a href="#" className="location-tabs-content-item-link">
                    Get Direction
                  </a>
                </li>
              );
            })}
          </ul>
          <ul
            className={`location-tabs-content display-none ${
              toggle === 3 ? "display-block" : "display-none"
            }`}
          >
            {internationalOffices.map((office) => {
              return (
                <li className="location-tabs-content-item" key={office.id}>
                  <span className="location-tabs-content-item-type">
                    {office.locationType}
                  </span>
                  <h3 className="location-tabs-content-item-adress">
                    {office.locationAdress}
                  </h3>
                  <p className="location-tabs-content-item-text">
                    {office.locationDesc}
                  </p>
                  <div className="location-tabs-content-item-wrapper">
                    <div className="location-tabs-content-item-wrapper-item email">
                      {office.locationEmail}
                    </div>
                    <div className="location-tabs-content-item-wrapper-item phone">
                      {office.locationPhone}
                    </div>
                    <div className="location-tabs-content-item-wrapper-item location">
                      {office.locationLocation}
                    </div>
                  </div>
                  <a href="#" className="location-tabs-content-item-link">
                    Get Direction
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
});

export default LocationTabs;
