import "./FindYourDreamProperty.scss";

const LocationBody = ({ results, onClickFunction }) => {
  return (
    <>
      <div className="find-your-drean-property-filter-list-item-body">
        {results.map((location, index) => (
          <div
            key={index}
            className="find-your-drean-property-filter-list-item-body-item"
            onClick={() => {
              onClickFunction(location);
            }}
          >
            {location}
          </div>
        ))}
      </div>
    </>
  );
};

export default LocationBody;
