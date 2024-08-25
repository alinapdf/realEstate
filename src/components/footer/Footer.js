import "./Footer.scss";
import logoDesctop from "./../../img/nav/logo-descktop.svg";
import sendYourEmailBtn from "./../../img/footer/send-email-icon.svg";

import facebook from "./../../img/footer/facebook-icon.svg";
import linkedin from "./../../img/footer/linkedin-icon.svg";
import twitter from "./../../img/footer/twitter-icon.svg";
import youtube from "./../../img/footer/youtube-icon.svg";
import { NavLink } from "react-router-dom";
import Nav from "../nav/nav/Nav";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-main-left-part">
              <a href="#" className="footer-main-left-part-logo">
                <img src={logoDesctop} alt="Estatein" />
              </a>
              <form action="#" className="footer-main-left-part-form">
                <input
                  type="text"
                  className="footer-main-left-part-form-input"
                  placeholder="Enter Your Email"
                />
                <button className="footer-main-left-part-form-button">
                  <img src={sendYourEmailBtn} alt="Send E-mail" />
                </button>
              </form>
            </div>
            <div className="footer-main-right-part">
              <div className="footer-main-right-part-list-wrapper home">
                <p className="footer-main-right-part-list-wrapper-header">
                  Home
                </p>
                <ul className="footer-main-right-part-list-wrapper-list">
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/#heroSection"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Hero Section
                    </NavLink>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/#features"
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Features
                    </NavLink>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/#properties"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Properties
                    </NavLink>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/#faq"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      FAQ’s
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-main-right-part-list-wrapper about-us">
                <p className="footer-main-right-part-list-wrapper-header">
                  About Us
                </p>
                <ul className="footer-main-right-part-list-wrapper-list">
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/about-us#ourJourney"
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Our Journey
                    </NavLink>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/about-us#howItWorks"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      How It Works
                    </NavLink>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/about-us#ourTeam"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Our Team
                    </NavLink>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/about-us#ourClients"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Our Clients
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-main-right-part-list-wrapper properties">
                <p className="footer-main-right-part-list-wrapper-header">
                  Properties
                </p>
                <ul className="footer-main-right-part-list-wrapper-list">
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/properties#findProperty"
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Find Property
                    </NavLink>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="properties#portfolio"
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Portfolio
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-main-right-part-list-wrapper services">
                <p className="footer-main-right-part-list-wrapper-header">
                  Services
                </p>
                <ul className="footer-main-right-part-list-wrapper-list">
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/properties"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Find Your Dream Home
                    </NavLink>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/service#unlockPropertyValue"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Unlock Property Value
                    </NavLink>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/service#effortlessPropertyManagement"
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Effortless Property Management
                    </NavLink>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/service#smartInvestment"
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Smart Investment, Informed Decisions
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-main-right-part-list-wrapper contact-us">
                <p className="footer-main-right-part-list-wrapper-header">
                  Contact Us
                </p>
                <ul className="footer-main-right-part-list-wrapper-list">
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/contacts#form"
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Contact Form
                    </NavLink>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <NavLink
                      to="/contacts#offices"
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Our Offices
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-wrapper">
              <div className="footer-bottom-left-part">
                <p className="footer-bottom-left-part-rights">
                  @2024 Estatein. All Rights Reserved. Alina Khamova Frontend
                  Developer.
                </p>
                <a
                  href="#"
                  className="footer-bottom-left-part-terms-and-conditions"
                >
                  Terms & Conditions
                </a>
              </div>
              <ul className="footer-bottom-right-part-sm">
                <li className="footer-bottom-right-part-sm-item">
                  <a href="#" className="footer-bottom-right-part-sm-item-link">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li className="footer-bottom-right-part-sm-item">
                  <a href="#" className="footer-bottom-right-part-sm-item-link">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                </li>
                <li className="footer-bottom-right-part-sm-item">
                  <a href="#" className="footer-bottom-right-part-sm-item-link">
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
                <li className="footer-bottom-right-part-sm-item">
                  <a href="#" className="footer-bottom-right-part-sm-item-link">
                    <img src={youtube} alt="youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
