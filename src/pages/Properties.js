import Cta from "../components/cta/Cta";
import FindYourDreamProperty from "../components/find-your-dream-property/FindYourDreamProperty";
import FormCommon from "../components/formCommon/FormCommon";
import PaginatedHousesList from "../components/HousesList/PaginatedHousesList";
const Properties = () => {
  return (
    <>
      <FindYourDreamProperty />
      <PaginatedHousesList />
      <FormCommon />
      <Cta />
    </>
  );
};

export default Properties;
