import "./Hero.scss";
import mainImg from "./../../img/hero/hero-section-main-photo-1.jpg";
import arrowPromo from "./../../img/hero/discover-your-dream-property-arrow.svg";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-wrapper-info">
              <h1 className="hero-wrapper-info-header">
                Discover Your Dream Property with Estatein
              </h1>
              <p className="hero-wrapper-info-text">
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
              <div className="hero-wrapper-info-btns">
                <button className="hero-wrapper-info-btns-learn-more">
                  Learn More
                </button>
                <button className="hero-wrapper-info-btns-browse-properties">
                  Browse Properties
                </button>
              </div>
              <ul className="hero-wrapper-info-counts">
                <li className="hero-wrapper-info-counts-item">
                  <p className="hero-wrapper-info-counts-item-number">200+</p>
                  <p className="hero-wrapper-info-counts-item-text">
                    Happy Customers
                  </p>
                </li>
                <li className="hero-wrapper-info-counts-item">
                  <p className="hero-wrapper-info-counts-item-number">10k+</p>
                  <p className="hero-wrapper-info-counts-item-text">
                    Properties For Clients
                  </p>
                </li>
                <li className="hero-wrapper-info-counts-item">
                  <p className="hero-wrapper-info-counts-item-number">16+</p>
                  <p className="hero-wrapper-info-counts-item-text">
                    Years of Experience
                  </p>
                </li>
              </ul>
            </div>
            <div className="hero-wrapper-img">
              <img src={mainImg} alt="EstateinMain" />
            </div>
          </div>
          <div className="hero-round-promo">
            <a href="#" className="hero-round-promo-link">
              <img
                src={arrowPromo}
                alt="Discover your dream property"
                className="hero-round-promo-link-img"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
