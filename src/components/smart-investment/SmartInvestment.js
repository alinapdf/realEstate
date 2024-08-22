import "./SmartInvestment.scss";

import React, { forwardRef } from "react";
const SmartInvestment = forwardRef((props, ref) => {
  return (
    <>
      <section className="smart-investment" ref={ref}>
        <div className="container">
          <div className="smart-investment-wrapper">
            <div className="smart-investment-wrapper-right-part">
              <h2 className="smart-investment-wrapper-right-part-header">
                Smart Investments, Informed Decisions
              </h2>
              <p className="smart-investment-wrapper-right-part-text">
                Building a real estate portfolio requires a strategic approach.
                Estatein's Investment Advisory Service empowers you to make
                smart investments and informed decisions.
              </p>
              <div className="smart-investment-wrapper-right-part-unlock">
                <h3 className="smart-investment-wrapper-right-part-unlock-header">
                  Unlock Your Investment Potential
                </h3>
                <p className="smart-investment-wrapper-right-part-unlock-text">
                  Explore our Property Management Service categories and let us
                  handle the complexities while you enjoy the benefits of
                  property ownership.
                </p>
                <a
                  href="#"
                  className="smart-investment-wrapper-right-part-unlock-link"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="smart-investment-wrapper-grid">
              <ul className="smart-investment-wrapper-grid-list">
                <li className="smart-investment-wrapper-grid-list-item">
                  <p className="smart-investment-wrapper-grid-list-item-title market-insight">
                    Market Insight
                  </p>
                  <p className="smart-investment-wrapper-grid-list-item-text">
                    Stay ahead of market trends with our expert Market Analysis.
                    We provide in-depth insights into real estate market
                    conditions
                  </p>
                </li>
                <li className="smart-investment-wrapper-grid-list-item">
                  <p className="smart-investment-wrapper-grid-list-item-title roi-assessment">
                    ROI Assessment
                  </p>
                  <p className="smart-investment-wrapper-grid-list-item-text">
                    Make investment decisions with confidence. Our ROI
                    Assessment services evaluate the potential returns on your
                    investments
                  </p>
                </li>
                <li className="smart-investment-wrapper-grid-list-item">
                  <p className="smart-investment-wrapper-grid-list-item-title customized-strategies">
                    Customized Strategies
                  </p>
                  <p className="smart-investment-wrapper-grid-list-item-text">
                    Every investor is unique, and so are their goals. We develop
                    Customized Investment Strategies tailored to your specific
                    needs
                  </p>
                </li>
                <li className="smart-investment-wrapper-grid-list-item">
                  <p className="smart-investment-wrapper-grid-list-item-title diversification-mastery">
                    Diversification Mastery
                  </p>
                  <p className="smart-investment-wrapper-grid-list-item-text">
                    Diversify your real estate portfolio effectively. Our
                    experts guide you in spreading your investments across
                    various property types and locations
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default SmartInvestment;
