import "./PricingDetails.scss";
const PricingDetails = () => {
  return (
    <>
      <section className="pricing-details">
        <div className="container">
          <h2 className="pricing-details-header">
            Comprehensive Pricing Details
          </h2>
          <p className="pricing-details-text">
            At Estatein, transparency is key. We want you to have a clear
            understanding of all costs associated with your property investment.
            Below, we break down the pricing for Seaside Serenity Villa to help
            you make an informed decision
          </p>
          <div className="pricing-details-note">
            <p className="pricing-details-note-header">Note</p>
            <p className="pricing-details-note-text">
              The figures provided above are estimates and may vary depending on
              the property, location, and individual circumstances.
            </p>
          </div>
          <div className="pricing-details-wrapper">
            <div className="pricing-details-wrapper-listing-price">
              <p className="pricing-details-wrapper-listing-price-header">
                Listing Price
              </p>
              <p className="pricing-details-wrapper-listing-price-number">
                $1,250,000
              </p>
            </div>
            <div className="pricing-details-wrapper-main-info">
              <div className="additional-fees">
                <div className="additional-fees-top-part">
                  <h3 className="additional-fees-top-part-header">
                    Additional Fees
                  </h3>
                  <a href="#" className="additional-fees-top-part-link">
                    Learn More
                  </a>
                </div>
                <div className="additional-fees-grid">
                  <div className="additional-fees-grid-item">
                    <p className="additional-fees-grid-item-title">
                      Property Transfer Tax
                    </p>
                    <div className="additional-fees-grid-item-wrapper">
                      <p className="additional-fees-grid-item-wrapper-amount">
                        $25,000
                      </p>
                      <p className="additional-fees-grid-item-wrapper-desc">
                        Based on the sale price and local regulations
                      </p>
                    </div>
                  </div>
                  <div className="additional-fees-grid-item">
                    <p className="additional-fees-grid-item-title">
                      Legal Fees
                    </p>
                    <div className="additional-fees-grid-item-wrapper">
                      <p className="additional-fees-grid-item-wrapper-amount">
                        $3,000
                      </p>
                      <p className="additional-fees-grid-item-wrapper-desc">
                        Approximate cost for legal services, including title
                        transfer
                      </p>
                    </div>
                  </div>
                  <div className="additional-fees-grid-item">
                    <p className="additional-fees-grid-item-title">
                      Home Inspection
                    </p>
                    <div className="additional-fees-grid-item-wrapper">
                      <p className="additional-fees-grid-item-wrapper-amount">
                        $500
                      </p>
                      <p className="additional-fees-grid-item-wrapper-desc">
                        Recommended for due diligence
                      </p>
                    </div>
                  </div>
                  <div className="additional-fees-grid-item">
                    <p className="additional-fees-grid-item-title">
                      Property Insurance
                    </p>
                    <div className="additional-fees-grid-item-wrapper">
                      <p className="additional-fees-grid-item-wrapper-amount">
                        $1,200
                      </p>
                      <p className="additional-fees-grid-item-wrapper-desc">
                        Annual cost for comprehensive property insurance
                      </p>
                    </div>
                  </div>
                  <div className="additional-fees-grid-item  full-width">
                    <p className="additional-fees-grid-item-title">
                      Mortgage Fees
                    </p>
                    <div className="additional-fees-grid-item-wrapper">
                      <p className="additional-fees-grid-item-wrapper-amount">
                        Varies
                      </p>
                      <p className="additional-fees-grid-item-wrapper-desc">
                        If applicable, consult with your lender for specific
                        details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingDetails;
