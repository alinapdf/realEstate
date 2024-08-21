import "./FormCommon.scss";

import checkActive from "./../../img/form-common/shape-checked-icon.svg";
import checkInactive from "./../../img/form-common/shape-uncheked-icon.svg";

const FormCommonComponent = () => {
  return (
    <>
      <form action="#" className="form-common-form">
        <div className="form-common-form-client-info">
          <label
            htmlFor="first-name"
            className="form-common-form-client-info-label"
          >
            First Name
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="form-common-form-client-info-input"
              placeholder="Enter First Name"
            />
          </label>

          <label
            htmlFor="last-name"
            className="form-common-form-client-info-label"
          >
            Last Name
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="form-common-form-client-info-input"
              placeholder="Enter Last Name"
            />
          </label>

          <label htmlFor="email" className="form-common-form-client-info-label">
            Email
            <input
              type="text"
              name="email"
              id="email"
              className="form-common-form-client-info-input"
              placeholder="Enter your Email"
            />
          </label>

          <label htmlFor="phone" className="form-common-form-client-info-label">
            Phone
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-common-form-client-info-input"
              placeholder="Enter Phone Number"
            />
          </label>
        </div>
        <div className="form-common-form-choose-info">
          <div className="form-common-form-choose-info-wrapper">
            <p className="form-common-form-choose-info-wrapper-name">Budget</p>
            <div className="form-common-form-choose-info-wrapper-current">
              Select Budget
            </div>
            <div className="form-common-form-choose-info-wrapper-body">
              <div className="form-common-form-choose-info-wrapper-body-item">
                200
              </div>
              <div className="form-common-form-choose-info-wrapper-body-item">
                300
              </div>
            </div>
          </div>
          <div className="form-common-form-choose-info-preffered-contact">
            <p className="form-common-form-choose-info-preffered-contact-name">
              Preferred Contact Method
            </p>
            <div className="wrapper-prefered-contact">
              <div className="form-common-form-choose-info-preffered-contact-method phone ">
                Phone Number
                <div className="form-common-form-choose-info-preffered-contact-method-checking">
                  <img
                    src={checkInactive}
                    alt="Unchecked"
                    className="display-block"
                  />
                  <img
                    src={checkActive}
                    alt="Unchecked"
                    className="display-none"
                  />
                </div>
              </div>
              <div className="form-common-form-choose-info-preffered-contact-method email">
                Email
                <div className="form-common-form-choose-info-preffered-contact-method-checking">
                  <img
                    src={checkInactive}
                    alt="Unchecked"
                    className="display-block"
                  />
                  <img
                    src={checkActive}
                    alt="Unchecked"
                    className="display-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <label htmlFor="input-textarea" className="form-common-form-textarea">
          Message
          <input
            type="textarea"
            className="form-common-form-textarea-input"
            name="input-textarea"
            id="input-textarea"
            placeholder="Enter your Message here.."
          />
        </label>
        <div className="form-common-form-bottom-part">
          <label htmlFor="terms" className="form-common-form-bottom-part-terms">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="form-common-form-bottom-part-terms-input"
            />
            I agree with Terms of Use and Privacy Policy
          </label>
          <button className="form-common-form-bottom-part-btn">
            Send Your Message
          </button>
        </div>
      </form>
    </>
  );
};

export default FormCommonComponent;
