import "./OurValues.scss";

import value1 from "./../../img/our-values/trust-icon.svg";
import value2 from "./../../img/our-values/excellence-icon.svg";
import value3 from "./../../img/our-values/client-centric-icon.svg";
import value4 from "./../../img/our-values/commitment-icon.svg";
const OurValues = () => {
  return (
    <>
      <section className="our-values">
        <div className="container">
          <div className="our-values-wrapper">
            <div className="our-values-wrapper-info">
              <h2 className="our-values-wrapper-info-header">Our Values</h2>
              <p className="our-values-wrapper-info-text">
                Our story is one of continuous growth and evolution. We started
                as a small team with big dreams, determined to create a real
                estate platform that transcended the ordinary.
              </p>
            </div>
            <ul className="our-values-wrapper-list">
              <li className="our-values-wrapper-list-item">
                <h3 className="our-values-wrapper-list-item-header trust">
                  Trust
                </h3>
                <p className="our-values-wrapper-list-item-text">
                  Trust is the cornerstone of every successful real estate
                  transaction.
                </p>
              </li>
              <li className="our-values-wrapper-list-item">
                <h3 className="our-values-wrapper-list-item-header excellence">
                  Excellence
                </h3>
                <p className="our-values-wrapper-list-item-text">
                  We set the bar high for ourselves. From the properties we list
                  to the services we provide.
                </p>
              </li>
              <li className="our-values-wrapper-list-item">
                <h3 className="our-values-wrapper-list-item-header client-centric">
                  Client Centric
                </h3>
                <p className="our-values-wrapper-list-item-text">
                  Your dreams and needs are at the center of our universe. We
                  listen, understand.
                </p>
              </li>
              <li className="our-values-wrapper-list-item">
                <h3 className="our-values-wrapper-list-item-header commitment">
                  Our Commitment
                </h3>
                <p className="our-values-wrapper-list-item-text">
                  We are dedicated to providing you with the highest level of
                  service, professionalism, and support.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValues;
