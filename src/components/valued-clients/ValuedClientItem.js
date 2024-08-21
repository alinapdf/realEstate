import "./ValuedClients.scss";
const ValuedClients = (props) => {
  return (
    <>
      <div className="valued-clients-item">
        <div className="valued-clients-item-top-part">
          <div className="valued-clients-item-top-part-info">
            <p className="valued-clients-item-top-part-info-since">
              {props.since}
            </p>
            <h3 className="valued-clients-item-top-part-info-header">
              {props.name}
            </h3>
          </div>
          <a href="#" className="valued-clients-item-top-part-visit-website">
            Visit Website
          </a>
        </div>
        <div className="valued-clients-item-middle-part">
          <div className="valued-clients-item-middle-part-wrapper">
            <p className="valued-clients-item-middle-part-wrapper-header domain">
              Domain
            </p>
            <p className="valued-clients-item-middle-part-wrapper-text">
              {props.domain}
            </p>
          </div>
          <div className="valued-clients-item-middle-part-wrapper">
            <p className="valued-clients-item-middle-part-wrapper-header category">
              Category
            </p>
            <p className="valued-clients-item-middle-part-wrapper-text">
              {props.category}
            </p>
          </div>
        </div>
        <div className="valued-clients-item-bottom-part">
          <p className="valued-clients-item-bottom-part-header">
            What They Said 🤗
          </p>
          <p className="valued-clients-item-bottom-part-text">
            {props.whatTheySaid}
          </p>
        </div>
      </div>
    </>
  );
};

export default ValuedClients;
