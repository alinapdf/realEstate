import flDreamHome from "./../../img/fast-links/fl-dream-home.svg";
import flPropertyValue from "./../../img/fast-links/fl-unlock-property-value.svg";
import flPropertyManagement from "./../../img/fast-links/fl-property-management.svg";
import flSmartInvestment from "./../../img/fast-links/fl-smart-investment.svg";
import "./FastLinks.scss";
import { NavLink } from "react-router-dom";

import React, { forwardRef } from "react";

const FastLinks = forwardRef((props, ref) => {
  return (
    <>
      <section className="fast-links" ref={ref}>
        <div className="fast-links-container">
          <ul className="fast-links-list">
            <li className="fast-links-list-item">
              <NavLink to="/properties" className="fast-links-list-item-link">
                <div className="fast-links-list-item-link-img">
                  <img src={flDreamHome} alt="Dream Home" />
                </div>
                <p className="fast-links-list-item-link-text">
                  Find Your Dream Home
                </p>
              </NavLink>
            </li>
            <li className="fast-links-list-item">
              <NavLink
                to="/service#unlockPropertyValue"
                className="fast-links-list-item-link"
              >
                <div className="fast-links-list-item-link-img">
                  <img src={flPropertyValue} alt="Unlock Property Value" />
                </div>
                <p className="fast-links-list-item-link-text">
                  Unlock Property Value
                </p>
              </NavLink>
            </li>
            <li className="fast-links-list-item">
              <NavLink
                to="/service#effortlessPropertyManagement"
                href="#"
                className="fast-links-list-item-link"
              >
                <div className="fast-links-list-item-link-img">
                  <img
                    src={flPropertyManagement}
                    alt="Effortless Property Management"
                  />
                </div>
                <p className="fast-links-list-item-link-text">
                  Effortless Property Management
                </p>
              </NavLink>
            </li>
            <li className="fast-links-list-item">
              <NavLink
                to="/service#smartInvestment"
                className="fast-links-list-item-link"
              >
                <div className="fast-links-list-item-link-img">
                  <img
                    src={flSmartInvestment}
                    alt="Smart Investments, Informed Decisions"
                  />
                </div>
                <p className="fast-links-list-item-link-text">
                  Smart Investments, Informed Decisions
                </p>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
});

export default FastLinks;
