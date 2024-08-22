import "./Hero.scss";
import mainImg from "./../../img/hero/hero-section-main-photo-1.jpg";
import arrowPromo from "./../../img/hero/discover-your-dream-property-arrow.svg";
import Counts from "../counts/Counts";

import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-wrapper-info">
              <h1 className="hero-wrapper-info-header">
                Discover Your Dream Property with Estatein
              </h1>
              <p className="hero-wrapper-info-text">
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
              <div className="hero-wrapper-info-btns">
                <NavLink
                  to="/contacts#form"
                  className="hero-wrapper-info-btns-learn-more"
                >
                  Learn More
                </NavLink>
                <NavLink
                  to="/properties"
                  className="hero-wrapper-info-btns-browse-properties"
                >
                  Browse Properties
                </NavLink>
              </div>
              <Counts />
            </div>
            <div className="hero-wrapper-img">
              <img src={mainImg} alt="EstateinMain" />
            </div>
          </div>
          <div className="hero-round-promo">
            <NavLink to="/properties" className="hero-round-promo-link">
              <img
                src={arrowPromo}
                alt="Discover your dream property"
                className="hero-round-promo-link-img"
              />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
