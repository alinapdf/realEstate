import Cta from "../components/cta/Cta";
import PricingDetails from "../components/pricing-details/PricingDetails";
import PropertyDetailsForm from "../components/property-details-form/PropertyDetailsForm";
import PropertyDetailsInfo from "../components/property-details-info/PropertyDetailsInfo";
import PropertyDetailsHero from "../components/property-details-swiper/PropertyDetailsHero";
import FrequentlyQuestions from "../components/sliderFrequentlyQuestions/FrequentlyQuestions";

const PropertyDetails = () => {
  return (
    <>
      <PropertyDetailsHero />
      <PropertyDetailsInfo />
      <PropertyDetailsForm />
      <PricingDetails />
      <FrequentlyQuestions />
      <Cta />
    </>
  );
};

export default PropertyDetails;
