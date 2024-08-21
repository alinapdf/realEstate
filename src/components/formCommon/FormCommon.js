import FormCommonComponent from "./FormCommonComponent";

const FormCommon = () => {
  return (
    <>
      <section className="form-common">
        <div className="container">
          <h2 className="form-common-header">Let's Make it Happen</h2>
          <p className="form-common-text">
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don't wait; let's embark on this exciting
            journey together.
          </p>
          <FormCommonComponent />
        </div>
      </section>
    </>
  );
};

export default FormCommon;
