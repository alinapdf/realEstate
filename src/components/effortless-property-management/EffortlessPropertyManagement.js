import "./EffortlessPropertyManagement.scss";

import React, { forwardRef } from "react";
const EffortlessPropertyManagement = forwardRef((props, ref) => {
  return (
    <>
      <section className="effortless-property-management" ref={ref}>
        <div className="container">
          <h2 className="effortless-property-management-header">
            Effortless Property Management
          </h2>
          <p className="effortless-property-management-text">
            Owning a property should be a pleasure, not a hassle. Estatein's
            Property Management Service takes the stress out of property
            ownership, offering comprehensive solutions tailored to your needs.
            Explore the categories below to see how we can make property
            management effortless for you
          </p>
          <ul className="service-list">
            <li className="service-list-item">
              <p className="service-list-item-title tenant-harmony">
                Tenant Harmony
              </p>
              <p className="service-list-item-text">
                Our Tenant Management services ensure that your tenants have a
                smooth and reducing vacancies.
              </p>
            </li>
            <li className="service-list-item">
              <p className="service-list-item-title maintenance-ease">
                Maintenance Ease
              </p>
              <p className="service-list-item-text">
                Say goodbye to property maintenance headaches. We handle all
                aspects of property upkeep.
              </p>
            </li>
            <li className="service-list-item">
              <p className="service-list-item-title financial-peace-of-mind">
                Financial Peace of Mind
              </p>
              <p className="service-list-item-text">
                Managing property finances can be complex. Our financial experts
                take care of rent collection
              </p>
            </li>
            <li className="service-list-item">
              <p className="service-list-item-title legal-guardian">
                Legal Guardian
              </p>
              <p className="service-list-item-text">
                Stay compliant with property laws and regulations effortlessly.
              </p>
            </li>
            <li className="service-list-item link">
              <div className="service-list-item-top-part">
                <h3 className="service-list-item-top-part-header">
                  Experience Effortless Property Management
                </h3>
                <a href="#" className="service-list-item-top-part-link">
                  Learn More
                </a>
              </div>
              <p className="service-list-item-text">
                Ready to experience hassle-free property management? Explore our
                Property Management Service categories and let us handle the
                complexities while you enjoy the benefits of property ownership.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
});

export default EffortlessPropertyManagement;
