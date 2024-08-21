const BuildYearBody = ({ results, onClickFunction }) => {
  return (
    <>
      <div className="find-your-drean-property-filter-list-item-body">
        {results.map((buildYear, index) => (
          <div
            key={index}
            className="find-your-drean-property-filter-list-item-body-item"
            onClick={() => {
              onClickFunction(buildYear);
            }}
          >
            {buildYear}
          </div>
        ))}
      </div>
    </>
  );
};

export default BuildYearBody;
