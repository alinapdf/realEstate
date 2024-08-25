import { useParams } from "react-router-dom";
import Cta from "../components/cta/Cta";
import PricingDetails from "../components/pricing-details/PricingDetails";
import PropertyDetailsForm from "../components/property-details-form/PropertyDetailsForm";
import PropertyDetailsInfo from "../components/property-details-info/PropertyDetailsInfo";
import PropertyDetailsHero from "../components/property-details-swiper/PropertyDetailsHero";
import FrequentlyQuestions from "../components/sliderFrequentlyQuestions/FrequentlyQuestions";

import { housesAray } from "../components/sliderHouses/housesArray";

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesAray.find((house) => house.id === parseInt(id));
  return (
    <>
      <PropertyDetailsHero
        name={house.name}
        location={house.location}
        price={house.price}
        images={house.images}
      />
      <PropertyDetailsInfo
        desc={house.description}
        bedroomsQuantity={house.bedroomsQuantity}
        bathroomsQuantity={house.bathroomsQuantity}
        area={house.area}
        keyFeatures={house.keyFeatures}
      />
      <PropertyDetailsForm name={house.name} location={house.location} />
      <PricingDetails
        listingPrice={house.listingPrice}
        additionalFees={house.additionalFees}
        monthlyCosts={house.monthlyCosts}
        totalInitialCosts={house.totalInitialCosts}
        monthlyExpenses={house.monthlyExpenses}
      />
      <FrequentlyQuestions />
      <Cta />
    </>
  );
};

export default PropertyDetails;
