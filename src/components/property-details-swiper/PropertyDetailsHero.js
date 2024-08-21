import PropertyDetailsSwiper from "./PropertyDetailsSwiper";
import "./PropertyDetailsSwiper.scss";

const PropertyDetailsHero = () => {
  return (
    <>
      <section className="property-details">
        <div className="container">
          <div className="property-details-info">
            <div className="property-details-info-right-part">
              <h2 className="property-details-info-right-part-header">
                Seaside Serenity Villa
              </h2>
              <p className="property-details-info-right-part-location">
                Malibu, California
              </p>
            </div>
            <div className="property-details-info-left-part">
              <p className="property-details-info-left-part-header-price">
                Price
              </p>
              <p className="property-details-info-left-part-price">
                $1,250,000
              </p>
            </div>
          </div>
          <PropertyDetailsSwiper />
        </div>
      </section>
    </>
  );
};

export default PropertyDetailsHero;
