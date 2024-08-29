import "./FormCommon.scss";

import checkActive from "./../../img/form-common/shape-checked-icon.svg";
import checkInactive from "./../../img/form-common/shape-uncheked-icon.svg";

import { useForm } from "react-hook-form";

import { housesAray } from "../sliderHouses/housesArray";

import { useEffect, useState } from "react";
import BudgetBody from "./BudgetBody";
import { FALSE } from "sass";

const FormCommonComponent = () => {
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

  const [budget, setSBudget] = useState([]);
  useEffect(() => {
    const uniqueBdget = [...new Set(housesAray.map((house) => house.price))];
    setSBudget(uniqueBdget);
  }, []);

  const [isActiveBudget, setIsActiveBudget] = useState(false);
  const toggleParametrBudget = () => {
    setIsActiveBudget(!isActiveBudget);
  };

  const [currentBudget, setCurrentBudget] = useState("Select Budget");
  const currentBudgetParametr = (budget) => {
    setCurrentBudget(budget);
    setIsActiveBudget(false);
  };

  const [contactMedhod, setContactMethod] = useState(true);
  const toggleContactMethod = () => {
    setContactMethod(!contactMedhod);
  };

  const [contactMedhod2, setContactMethod2] = useState(true);
  const toggleContactMethod2 = () => {
    setContactMethod2(!contactMedhod2);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="#"
        className="form-common-form"
      >
        <div className="form-common-form-client-info">
          {/* //firstname */}
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

          {/* //lastname */}
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
          <label htmlFor="email" className="form-common-form-client-info-label">
            Email
            <input
              type="text"
              name="email"
              id="email"
              className="form-common-form-client-info-input"
              placeholder="Enter your Email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
          <label htmlFor="phone" className="form-common-form-client-info-label">
            Phone
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-common-form-client-info-input"
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
        <div className="form-common-form-choose-info">
          <div className="form-common-form-choose-info-wrapper">
            <p className="form-common-form-choose-info-wrapper-name">Budget</p>
            <div
              className={`form-common-form-choose-info-wrapper-current ${
                isActiveBudget ? "is-active" : ""
              }`}
              onClick={toggleParametrBudget}
            >
              {currentBudget}
            </div>
            <div className="form-common-form-choose-info-wrapper-body">
              <BudgetBody
                results={budget}
                onClickFunction={currentBudgetParametr}
              />
            </div>
          </div>
          <div className="form-common-form-choose-info-preffered-contact">
            <p className="form-common-form-choose-info-preffered-contact-name">
              Preferred Contact Method
            </p>
            <div className="wrapper-prefered-contact">
              <div
                className="form-common-form-choose-info-preffered-contact-method phone "
                onClick={toggleContactMethod2}
              >
                Phone Number
                <div className="form-common-form-choose-info-preffered-contact-method-checking">
                  {contactMedhod2 ? (
                    <img
                      src={checkInactive}
                      alt="Unchecked"
                      className="display-block"
                    />
                  ) : (
                    <img
                      src={checkActive}
                      alt="Checked"
                      className="display-block"
                    />
                  )}
                </div>
              </div>
              <div
                className="form-common-form-choose-info-preffered-contact-method email"
                onClick={toggleContactMethod}
              >
                Email
                <div className="form-common-form-choose-info-preffered-contact-method-checking">
                  {contactMedhod ? (
                    <img
                      src={checkInactive}
                      alt="Unchecked"
                      className="display-block"
                    />
                  ) : (
                    <img
                      src={checkActive}
                      alt="Checked"
                      className="display-block"
                    />
                  )}
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
