import React, { useEffect, useState } from "react";
import "./PromoTop.scss";
import closeBtn from "./../../../img/nav/close-btn.svg";
import { NavLink } from "react-router-dom";

const PromoTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <section className={`promo-top ${visible ? "visible" : ""}`}>
      <div className="container">
        <div className="promo-top-wrapper-main">
          <div className="promo-top-wrapper-main-text">
            ✨Discover Your Dream Property with Estatein
          </div>
          <NavLink to="/properties" className="promo-top-wrapper-main-link">
            Learn More
          </NavLink>
        </div>
        <button className="promo-top-close-btn" onClick={handleClose}>
          <img src={closeBtn} alt="close" />
        </button>
      </div>
    </section>
  );
};

export default PromoTop;
