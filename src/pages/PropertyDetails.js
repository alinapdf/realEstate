import PricingDetails from "../components/pricing-details/PricingDetails";
import PropertyDetailsForm from "../components/property-details-form/PropertyDetailsForm";
import PropertyDetailsInfo from "../components/property-details-info/PropertyDetailsInfo";
import PropertyDetailsHero from "../components/property-details-swiper/PropertyDetailsHero";

const PropertyDetails = () => {
  return (
    <>
      <PropertyDetailsHero />
      <PropertyDetailsInfo />
      <PropertyDetailsForm />
      <PricingDetails />
    </>
  );
};

export default PropertyDetails;
