import dom1 from "./../../img/slider-houses/dom1.jpg";
import "./SliderHouses.scss";
const HouseItem = (props) => {
  return (
    <>
      <li className="swiper-house-list-item">
        <div className="swiper-house-list-item-img">
          <img src={props.mainImg} alt={props.name} />
        </div>
        <h3 className="swiper-house-list-item-name">{props.name}</h3>
        <div className="text-wrapper">
          <p className="swiper-house-list-item-text">{props.desc}</p>
          <a href="#" className="swiper-house-list-item-text-read-more">
            {"..."}
            Read More
          </a>
        </div>

        {/* readmore */}
        <ul className="swiper-house-list-item-properties">
          <li className="swiper-house-list-item-properties-item bedroom">
            {props.bedroomsQuantity}
          </li>
          <li className="swiper-house-list-item-properties-item bathroom">
            {props.bathroomsQuantity}
          </li>
          <li className="swiper-house-list-item-properties-item type">
            {props.type}
          </li>
        </ul>
        <div className="swiper-house-list-item-bottom-part">
          <div className="swiper-house-list-item-bottom-part-price">
            <p className="swiper-house-list-item-bottom-part-price-text">
              Price
            </p>
            <div className="swiper-house-list-item-bottom-part-price-quantity">
              {props.totalPrice}
            </div>
          </div>
          <a href="#" className="swiper-house-list-item-bottom-part-link">
            View Property Details
          </a>
        </div>
      </li>
    </>
  );
};

export default HouseItem;
