import "./PromoTop.scss";
import closeBtn from "./../../../img/nav/close-btn.svg";

const PromoTop = () => {
  return (
    <>
      <section className="promo-top">
        <div className="container">
          <div className="promo-top-wrapper-main">
            <div className="promo-top-wrapper-main-text">
              ✨Discover Your Dream Property with Estatein
            </div>
            <a href="#" className="promo-top-wrapper-main-link">
              Learn More
            </a>
          </div>
          <button className="promo-top-close-btn">
            <img src={closeBtn} alt="close" />
          </button>
        </div>
      </section>
    </>
  );
};

export default PromoTop;
