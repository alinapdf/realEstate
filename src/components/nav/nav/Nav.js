import logoDesctop from "./../../../img/nav/logo-descktop.svg";
import "./Nav.scss";
const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="nav-wrapper-logo">
              <img src={logoDesctop} alt="Estatein" />
            </a>
            <ul className="nav-wrapper-list">
              <li className="nav-wrapper-list-item">
                <a href="#" className="nav-wrapper-list-item-link active">
                  Home
                </a>
              </li>
              <li className="nav-wrapper-list-item">
                <a href="#" className="nav-wrapper-list-item-link">
                  About Us
                </a>
              </li>
              <li className="nav-wrapper-list-item">
                <a href="#" className="nav-wrapper-list-item-link">
                  Properties
                </a>
              </li>
              <li className="nav-wrapper-list-item">
                <a href="#" className="nav-wrapper-list-item-link">
                  Services
                </a>
              </li>
            </ul>
            <a href="#" className="nav-wrapper-contact-us">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
