import FastLinks from "../fastLinks/FastLinks";
import "./ServiceHero.scss";
const ServiceHero = () => {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h2 className="service-hero-header">
            Elevate Your Real Estate Experience
          </h2>
          <p className="service-hero-text">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
      </section>
      <FastLinks />
    </>
  );
};

export default ServiceHero;
