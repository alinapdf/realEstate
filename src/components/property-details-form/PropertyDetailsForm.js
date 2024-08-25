import "./PropertyDetailsForm.scss";
const PropertyDetailsForm = (props) => {
  return (
    <>
      <section className="property-details-form">
        <div className="container">
          <div className="property-details-form-wrapper">
            <div className="property-details-form-wrapper-right-part">
              <h2 className="property-details-form-wrapper-right-part-header">
                Inquire About Seaside Serenity Villa
              </h2>
              <p className="property-details-form-wrapper-right-part-text">
                Interested in this property? Fill out the form below, and our
                real estate experts will get back to you with more details,
                including scheduling a viewing and answering any questions you
                may have.
              </p>
            </div>

            <form action="#" className="property-details-form-itself">
              <div className="property-details-form-itself-client-info">
                <label
                  htmlFor="first-name"
                  className="property-details-form-itself-client-info-label"
                >
                  First Name
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="property-details-form-itself-client-info-input"
                    placeholder="Enter First Name"
                  />
                </label>

                <label
                  htmlFor="last-name"
                  className="property-details-form-itself-client-info-label"
                >
                  Last Name
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="property-details-form-itself-client-info-input"
                    placeholder="Enter Last Name"
                  />
                </label>

                <label
                  htmlFor="email"
                  className="property-details-form-itself-client-info-label"
                >
                  Email
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="property-details-form-itself-client-info-input"
                    placeholder="Enter your Email"
                  />
                </label>

                <label
                  htmlFor="phone"
                  className="property-details-form-itself-client-info-label"
                >
                  Phone
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="property-details-form-itself-client-info-input"
                    placeholder="Enter Phone Number"
                  />
                </label>
              </div>
              <div className="property-details-form-itself-selected-property">
                <p className="property-details-form-itself-selected-property-header">
                  Selected Property
                </p>
                <div className="property-details-form-itself-selected-property-parametr">
                  {props.name}, {props.location}
                </div>
              </div>
              <label
                htmlFor="message"
                className="property-details-form-itself-message"
              >
                Message
                <input
                  type="textarea"
                  className="property-details-form-itself-message-input"
                  id="message"
                  placeholder="Enter your Message here.."
                />
              </label>

              <div className="property-details-form-itself-bottom-part">
                <label
                  htmlFor="terms"
                  className="property-details-form-itself-bottom-part-terms"
                >
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="property-details-form-itself-bottom-part-terms-input"
                  />
                  I agree with Terms of Use and Privacy Policy
                </label>
                <button className="property-details-form-itself-bottom-part-btn">
                  Send Your Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetailsForm;
