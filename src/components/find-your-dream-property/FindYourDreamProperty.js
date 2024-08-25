import FindYourDreamPropertyFilter from "./FindYourDreamPropertyFilter";
import "./FindYourDreamProperty.scss";

import React, { forwardRef } from "react";

const FindYourDreamProperty = forwardRef((props, ref) => {
  return (
    <>
      <section className="find-your-drean-property" ref={ref}>
        <div className="info-text">
          <div className="container">
            <h2 className="find-your-drean-property-header">
              Find Your Dream Property
            </h2>
            <p className="find-your-drean-property-text">
              Welcome to Estatein, where your dream property awaits in every
              corner of our beautiful world. Explore our curated selection of
              properties, each offering a unique story and a chance to redefine
              your life. With categories to suit every dreamer, your journey
            </p>
          </div>
        </div>
        <FindYourDreamPropertyFilter />
      </section>
    </>
  );
});

export default FindYourDreamProperty;
