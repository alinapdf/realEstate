import flDreamHome from "./../../img/fast-links/fl-dream-home.svg";
import flPropertyValue from "./../../img/fast-links/fl-unlock-property-value.svg";
import flPropertyManagement from "./../../img/fast-links/fl-property-management.svg";
import flSmartInvestment from "./../../img/fast-links/fl-smart-investment.svg";
import "./FastLinks.scss";
const FastLinks = () => {
  return (
    <>
      <section className="fast-links">
        <div className="fast-links-container">
          <ul className="fast-links-list">
            <li className="fast-links-list-item">
              <a href="#" className="fast-links-list-item-link">
                <div className="fast-links-list-item-link-img">
                  <img src={flDreamHome} alt="Dream Home" />
                </div>
                <p className="fast-links-list-item-link-text">
                  Find Your Dream Home
                </p>
              </a>
            </li>
            <li className="fast-links-list-item">
              <a href="#" className="fast-links-list-item-link">
                <div className="fast-links-list-item-link-img">
                  <img src={flPropertyValue} alt="Unlock Property Value" />
                </div>
                <p className="fast-links-list-item-link-text">
                  Unlock Property Value
                </p>
              </a>
            </li>
            <li className="fast-links-list-item">
              <a href="#" className="fast-links-list-item-link">
                <div className="fast-links-list-item-link-img">
                  <img
                    src={flPropertyManagement}
                    alt="Effortless Property Management"
                  />
                </div>
                <p className="fast-links-list-item-link-text">
                  Effortless Property Management
                </p>
              </a>
            </li>
            <li className="fast-links-list-item">
              <a href="#" className="fast-links-list-item-link">
                <div className="fast-links-list-item-link-img">
                  <img
                    src={flSmartInvestment}
                    alt="Smart Investments, Informed Decisions"
                  />
                </div>
                <p className="fast-links-list-item-link-text">
                  Smart Investments, Informed Decisions
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default FastLinks;
