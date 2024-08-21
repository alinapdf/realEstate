import "./PropertyDetailsInfo.scss";

const PropertyDetailsInfo = () => {
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
                  Discover your own piece of paradise with the Seaside Serenity
                  Villa. T With an open floor plan, breathtaking ocean views
                  from every room, and direct access to a pristine sandy beach,
                  this property is the epitome of coastal living.
                </p>
              </div>
              <ul className="property-details-info2-wrapper-right-part-components">
                <li className="property-details-info2-wrapper-right-part-components-item ">
                  <p className="property-details-info2-wrapper-right-part-components-item-header bedrooms">
                    Bedrooms
                  </p>
                  <p className="property-details-info2-wrapper-right-part-components-item-number">
                    04
                  </p>
                </li>
                <li className="property-details-info2-wrapper-right-part-components-item ">
                  <p className="property-details-info2-wrapper-right-part-components-item-header bathrooms">
                    Bathrooms
                  </p>
                  <p className="property-details-info2-wrapper-right-part-components-item-number">
                    03
                  </p>
                </li>
                <li className="property-details-info2-wrapper-right-part-components-item ">
                  <p className="property-details-info2-wrapper-right-part-components-item-header area">
                    Area
                  </p>
                  <p className="property-details-info2-wrapper-right-part-components-item-number">
                    2,500 Square Feet
                  </p>
                </li>
              </ul>
            </div>
            <div className="property-details-info2-wrapper-left-part">
              <p className="property-details-info2-wrapper-left-part-header">
                Key Features and Amenities
              </p>
              <ul className="property-details-info2-wrapper-left-part-features">
                <li className="property-details-info2-wrapper-left-part-features-item">
                  Expansive oceanfront terrace for outdoor entertaining
                </li>
                <li className="property-details-info2-wrapper-left-part-features-item">
                  Gourmet kitchen with top-of-the-line appliances
                </li>
                <li className="property-details-info2-wrapper-left-part-features-item">
                  Private beach access for morning strolls and sunset views
                </li>
                <li className="property-details-info2-wrapper-left-part-features-item">
                  Master suite with a spa-inspired bathroom and ocean-facing
                  balcony
                </li>
                <li className="property-details-info2-wrapper-left-part-features-item">
                  Private garage and ample storage space
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetailsInfo;
