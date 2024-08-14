import "./Footer.scss";
import logoDesctop from "./../../img/nav/logo-descktop.svg";
import sendYourEmailBtn from "./../../img/footer/send-email-icon.svg";

import facebook from "./../../img/footer/facebook-icon.svg";
import linkedin from "./../../img/footer/linkedin-icon.svg";
import twitter from "./../../img/footer/twitter-icon.svg";
import youtube from "./../../img/footer/youtube-icon.svg";
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
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Hero Section
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Features
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Properties
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      FAQ’s
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Hero Section
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-main-right-part-list-wrapper about-us">
                <p className="footer-main-right-part-list-wrapper-header">
                  About Us
                </p>
                <ul className="footer-main-right-part-list-wrapper-list">
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Our Story
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Our Works
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      How It Works
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Our Team
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Our Clients
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-main-right-part-list-wrapper properties">
                <p className="footer-main-right-part-list-wrapper-header">
                  Properties
                </p>
                <ul className="footer-main-right-part-list-wrapper-list">
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Categories
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-main-right-part-list-wrapper services">
                <p className="footer-main-right-part-list-wrapper-header">
                  Services
                </p>
                <ul className="footer-main-right-part-list-wrapper-list">
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Valuation Mastery
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Strategic Marketing
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Negotiation Wizardry
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Closing Success
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Property Management
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-main-right-part-list-wrapper contact-us">
                <p className="footer-main-right-part-list-wrapper-header">
                  Contact Us
                </p>
                <ul className="footer-main-right-part-list-wrapper-list">
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Contact Form
                    </a>
                  </li>
                  <li className="footer-main-right-part-list-wrapper-list-item">
                    <a
                      href="#"
                      className="footer-main-right-part-list-wrapper-list-item-link"
                    >
                      Our Offices
                    </a>
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
