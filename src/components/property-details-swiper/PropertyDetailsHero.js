import PropertyDetailsSwiper from "./PropertyDetailsSwiper";
import "./PropertyDetailsSwiper.scss";

const PropertyDetailsHero = (props) => {
  return (
    <>
      <section className="property-details">
        <div className="container">
          <div className="property-details-info">
            <div className="property-details-info-right-part">
              <h2 className="property-details-info-right-part-header">
                {props.name}
              </h2>
              <p className="property-details-info-right-part-location">
                {props.location}
              </p>
            </div>
            <div className="property-details-info-left-part">
              <p className="property-details-info-left-part-header-price">
                Price
              </p>
              <p className="property-details-info-left-part-price">
                {props.price}
              </p>
            </div>
          </div>
          <PropertyDetailsSwiper images={props.images} />
        </div>
      </section>
    </>
  );
};

export default PropertyDetailsHero;
