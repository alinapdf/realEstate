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
              <div className="detailed-info">
                <div className="top-part">
                  <h3 className="top-part-header">Additional Fees</h3>
                  <a href="#" className="top-part-link">
                    Learn More
                  </a>
                </div>
                <div className="grid">
                  <div className="grid-item">
                    <p className="grid-item-title">Property Transfer Tax</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$25,000</p>
                      <p className="grid-item-wrapper-desc">
                        Based on the sale price and local regulations
                      </p>
                    </div>
                  </div>
                  <div className="grid-item">
                    <p className="grid-item-title">Legal Fees</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$3,000</p>
                      <p className="grid-item-wrapper-desc">
                        Approximate cost for legal services, including title
                        transfer
                      </p>
                    </div>
                  </div>
                  <div className="grid-item">
                    <p className="grid-item-title">Home Inspection</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$500</p>
                      <p className="grid-item-wrapper-desc">
                        Recommended for due diligence
                      </p>
                    </div>
                  </div>
                  <div className="grid-item">
                    <p className="grid-item-title">Property Insurance</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$1,200</p>
                      <p className="grid-item-wrapper-desc">
                        Annual cost for comprehensive property insurance
                      </p>
                    </div>
                  </div>
                  <div className="grid-item  full-width">
                    <p className="grid-item-title">Mortgage Fees</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">Varies</p>
                      <p className="grid-item-wrapper-desc">
                        If applicable, consult with your lender for specific
                        details
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detailed-info">
                <div className="top-part">
                  <h3 className="top-part-header">Monthly Costs</h3>
                  <a href="#" className="top-part-link">
                    Learn More
                  </a>
                </div>
                <div className="grid">
                  <div className="grid-item full-width">
                    <p className="grid-item-title">Property Taxes</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$1,250</p>
                      <p className="grid-item-wrapper-desc">
                        Approximate monthly property tax based on the sale price
                        and local rates
                      </p>
                    </div>
                  </div>
                  <div className="grid-item full-width">
                    <p className="grid-item-title">
                      Homeowners' Association Fee
                    </p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$300</p>
                      <p className="grid-item-wrapper-desc">
                        Monthly fee for common area maintenance and security
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detailed-info">
                <div className="top-part">
                  <h3 className="top-part-header">Total Initial Costs</h3>
                  <a href="#" className="top-part-link">
                    Learn More
                  </a>
                </div>
                <div className="grid">
                  <div className="grid-item">
                    <p className="grid-item-title">Listing Price</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$1,250,000</p>
                    </div>
                  </div>
                  <div className="grid-item">
                    <p className="grid-item-title">Additional Fees</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$29,700</p>
                    </div>
                  </div>
                  <div className="grid-item border-none">
                    <p className="grid-item-title">Down Payment</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$250,000</p>
                      <p className="grid-item-wrapper-desc">20%</p>
                    </div>
                  </div>
                  <div className="grid-item">
                    <p className="grid-item-title">Mortgage Amount</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$1,000,000</p>
                      <p className="grid-item-wrapper-desc">If applicable</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detailed-info">
                <div className="top-part">
                  <h3 className="top-part-header">Monthly Expenses</h3>
                  <a href="#" className="top-part-link">
                    Learn More
                  </a>
                </div>
                <div className="grid">
                  <div className="grid-item">
                    <p className="grid-item-title">Property Taxes</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$1,250</p>
                    </div>
                  </div>
                  <div className="grid-item">
                    <p className="grid-item-title">
                      Homeowners' Association Fee
                    </p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$300</p>
                    </div>
                  </div>
                  <div className="grid-item border-none">
                    <p className="grid-item-title">Mortgage Payment</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">
                        Varies based on terms and interest rate
                      </p>
                      <p className="grid-item-wrapper-desc">If applicable</p>
                    </div>
                  </div>
                  <div className="grid-item">
                    <p className="grid-item-title">Property Insurance</p>
                    <div className="grid-item-wrapper">
                      <p className="grid-item-wrapper-amount">$100</p>
                      <p className="grid-item-wrapper-desc">
                        Approximate monthly cost
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
