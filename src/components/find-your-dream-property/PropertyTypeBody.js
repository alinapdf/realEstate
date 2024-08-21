import "./FindYourDreamProperty.scss";

const PropertyTypeBody = ({ results, onClickFunction }) => {
  return (
    <>
      <div className="find-your-drean-property-filter-list-item-body">
        {results.map((propertyType, index) => (
          <div
            key={index}
            className="find-your-drean-property-filter-list-item-body-item"
            onClick={() => {
              onClickFunction(propertyType);
            }}
          >
            {propertyType}
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertyTypeBody;
