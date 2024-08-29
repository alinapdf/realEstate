const BudgetBody = ({ results, onClickFunction }) => {
  return (
    <>
      {results.map((result, index) => {
        return (
          <div
            className="form-common-form-choose-info-wrapper-body-item"
            key={index}
            onClick={() => {
              onClickFunction(result);
            }}
          >
            {result}
          </div>
        );
      })}
    </>
  );
};

export default BudgetBody;
