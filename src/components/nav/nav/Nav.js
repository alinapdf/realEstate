import BtnDarkMode from "../../btn-mode/BtnMode";
import logoDesctop from "./../../../img/nav/logo-descktop.svg";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const activeLink = "nav-wrapper-list-item-link active";
  const normalLink = "nav-wrapper-list-item-link";
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav-wrapper">
            <NavLink to="/" className="nav-wrapper-logo">
              <img src={logoDesctop} alt="Estatein" />
            </NavLink>
            <ul className="nav-wrapper-list">
              <li className="nav-wrapper-list-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-wrapper-list-item">
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-wrapper-list-item">
                <NavLink
                  to="/properties"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Properties
                </NavLink>
              </li>
              <li className="nav-wrapper-list-item">
                <NavLink
                  to="service/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Services
                </NavLink>
              </li>
            </ul>
            <div className="wpapper-btns">
              <BtnDarkMode />
              <NavLink to="/contacts" className="nav-wrapper-contact-us">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
