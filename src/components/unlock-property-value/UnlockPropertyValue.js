import "./UnlockPropertyValue.scss";

import React, { forwardRef } from "react";

const UnlockPropertyValue = forwardRef((props, ref) => {
  return (
    <>
      <section className="unlock-property-value" ref={ref}>
        <div className="container">
          <h2 className="unlock-property-value-header">
            Unlock Property Value
          </h2>
          <p className="unlock-property-value-text">
            Selling your property should be a rewarding experience, and at
            Estatein, we make sure it is. Our Property Selling Service is
            designed to maximize the value of your property, ensuring you get
            the best deal possible. Explore the categories below to see how we
            can help you at every step of your selling journey
          </p>
          <ul className="service-list">
            <li className="service-list-item">
              <p className="service-list-item-title valation-mastery">
                Valuation Mastery
              </p>
              <p className="service-list-item-text">
                Discover the true worth of your property with our expert
                valuation services.
              </p>
            </li>
            <li className="service-list-item">
              <p className="service-list-item-title strategic-marketing">
                Strategic Marketing
              </p>
              <p className="service-list-item-text">
                Selling a property requires more than just a listing; it demands
                a strategic marketing approach.
              </p>
            </li>
            <li className="service-list-item">
              <p className="service-list-item-title negotiation-wizardy">
                Negotiation Wizardry
              </p>
              <p className="service-list-item-text">
                Negotiating the best deal is an art, and our negotiation experts
                are masters of it.
              </p>
            </li>
            <li className="service-list-item">
              <p className="service-list-item-title closing-success">
                Closing Success
              </p>
              <p className="service-list-item-text">
                A successful sale is not complete until the closing. We guide
                you through the intricate closing process.
              </p>
            </li>
            <li className="service-list-item link">
              <div className="service-list-item-top-part">
                <h3 className="service-list-item-top-part-header">
                  Unlock the Value of Your Property Today
                </h3>
                <a href="#" className="service-list-item-top-part-link">
                  Learn More
                </a>
              </div>
              <p className="service-list-item-text">
                Ready to unlock the true value of your property? Explore our
                Property Selling Service categories and let us help you achieve
                the best deal possible for your valuable asset.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
});

export default UnlockPropertyValue;
