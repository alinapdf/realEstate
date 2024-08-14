import Counts from "../counts/Counts";
import "./OurJourney.scss";

import ourJourneyMainImg from "./../../img/our-journey/our-journey-main-photo.jpg";
const OurJourney = () => {
  return (
    <>
      <section className="our-journey">
        <div className="container">
          <div className="our-journey-wrapper">
            <div className="our-journey-wrapper-info">
              <h2 className="our-journey-wrapper-info-header">Our Journey</h2>
              <p className="our-journey-wrapper-info-text">
                Our story is one of continuous growth and evolution. We started
                as a small team with big dreams, determined to create a real
                estate platform that transcended the ordinary. Over the years,
                we've expanded our reach, forged valuable partnerships, and
                gained the trust of countless clients.
              </p>
              <Counts />
            </div>
            <div className="our-journey-wrapper-img">
              <img src={ourJourneyMainImg} alt="Our Jorney" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurJourney;
