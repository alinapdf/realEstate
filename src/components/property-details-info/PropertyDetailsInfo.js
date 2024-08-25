import "./PropertyDetailsInfo.scss";

const PropertyDetailsInfo = (props) => {
  return (
    <>
      <section className="property-details-info2">
        <div className="container">
          <div className="property-details-info2-wrapper">
            <div className="property-details-info2-wrapper-right-part">
              <div className="property-details-info2-wrapper-right-part-desc">
                <p className="property-details-info2-wrapper-right-part-desc-header">
                  Description
                </p>
                <p className="property-details-info2-wrapper-right-part-desc-text">
                  {props.desc}
                </p>
              </div>
              <ul className="property-details-info2-wrapper-right-part-components">
                <li className="property-details-info2-wrapper-right-part-components-item ">
                  <p className="property-details-info2-wrapper-right-part-components-item-header bedrooms">
                    Bedrooms
                  </p>
                  <p className="property-details-info2-wrapper-right-part-components-item-number">
                    {props.bedroomsQuantity}
                  </p>
                </li>
                <li className="property-details-info2-wrapper-right-part-components-item ">
                  <p className="property-details-info2-wrapper-right-part-components-item-header bathrooms">
                    Bathrooms
                  </p>
                  <p className="property-details-info2-wrapper-right-part-components-item-number">
                    {props.bathroomsQuantity}
                  </p>
                </li>
                <li className="property-details-info2-wrapper-right-part-components-item ">
                  <p className="property-details-info2-wrapper-right-part-components-item-header area">
                    Area
                  </p>
                  <p className="property-details-info2-wrapper-right-part-components-item-number">
                    {props.area}
                  </p>
                </li>
              </ul>
            </div>
            <div className="property-details-info2-wrapper-left-part">
              <p className="property-details-info2-wrapper-left-part-header">
                Key Features and Amenities
              </p>
              <ul className="property-details-info2-wrapper-left-part-features">
                {props.keyFeatures.map((feature, index) => {
                  return (
                    <li
                      className="property-details-info2-wrapper-left-part-features-item"
                      key={index}
                    >
                      {feature}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetailsInfo;
