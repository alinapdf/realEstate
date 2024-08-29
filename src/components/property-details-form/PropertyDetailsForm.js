import "./PropertyDetailsForm.scss";
import { useForm } from "react-hook-form";
const PropertyDetailsForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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

            <form
              onSubmit={handleSubmit(onSubmit)}
              action="#"
              className="property-details-form-itself"
            >
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
                    {...register("firstName", {
                      required: "This field is required",
                      minLength: {
                        value: 1,
                        message: "Minimum length is 1 character",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum length is 20 characters",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Only letters are allowed",
                      },
                    })}
                  />
                  <span
                    className={`form-common-form-client-info-label-error ${
                      errors.firstName ? "active" : ""
                    }`}
                  >
                    {errors.firstName?.message}
                  </span>
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
                    {...register("lastName", {
                      required: "This field is required",
                      minLength: {
                        value: 1,
                        message: "Minimum length is 1 character",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum length is 20 characters",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Only letters are allowed",
                      },
                    })}
                  />
                  <span
                    className={`form-common-form-client-info-label-error ${
                      errors.lastName ? "active" : ""
                    }`}
                  >
                    {errors.lastName?.message}
                  </span>
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
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <span
                    className={`form-common-form-client-info-label-error ${
                      errors.email ? "active" : ""
                    }`}
                  >
                    {errors.email?.message}
                  </span>
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
                    {...register("phone", {
                      required: "This field is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Only numbers are allowed",
                      },
                    })}
                  />
                  <span
                    className={`form-common-form-client-info-label-error ${
                      errors.phone ? "active" : ""
                    }`}
                  >
                    {errors.phone?.message}
                  </span>
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
