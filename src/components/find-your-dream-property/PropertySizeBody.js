const PropertySizeBody = ({ results, onClickFunction }) => {
  return (
    <>
      <div className="find-your-drean-property-filter-list-item-body">
        {results.map((propertySize, index) => (
          <div
            key={index}
            className="find-your-drean-property-filter-list-item-body-item"
            onClick={() => {
              onClickFunction(propertySize);
            }}
          >
            {propertySize}
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertySizeBody;
