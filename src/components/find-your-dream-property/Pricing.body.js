const PricingBody = ({ results, onClickFunction }) => {
  return (
    <>
      <div className="find-your-drean-property-filter-list-item-body">
        {results.map((pricing, index) => (
          <div
            key={index}
            className="find-your-drean-property-filter-list-item-body-item"
            onClick={() => {
              onClickFunction(pricing);
            }}
          >
            {pricing}
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingBody;
