import "./SliderComments.scss";
import star from "./../../img/slider-comments/commentStar-icon.svg";
const SlliderItem = (props) => {
  return (
    <>
      <li className="slider-comment-item">
        <ul className="slider-comment-item-stars">
          {renderStars(props.starsQuantity)}
        </ul>
        <h3 className="slider-comment-item-main-comment">
          {props.mainComment}
        </h3>
        <p className="slider-comment-item-text">{props.commentText}</p>
        <div className="slider-comment-item-commentator">
          <div className="slider-comment-item-commentator-avatar">
            <img src={props.commentatorAvatar} alt={props.commentatorName} />
          </div>
          <div className="slider-comment-item-commentator-info">
            <div className="slider-comment-item-commentator-info-name">
              {props.commentatorName}
            </div>
            <div className="slider-comment-item-commentator-info-location">
              {props.commentatorLocation}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

const renderStars = (count) => {
  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <li className="slider-comment-item-stars-item" key={i}>
        <img src={star} alt="value" />
      </li>
    );
  }
  return stars;
};

export default SlliderItem;
