import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "./SliderHouses.scss";
import styles from "./SliderHouses.module.scss";

import { housesAray } from "./housesArray";
import HouseItem from "./HouseItem";

const SliderHouses = () => {
  return (
    <>
      <section className="swiper-houses">
        <div className="container">
          <h2 className="swiper-houses-header">Featured Properties</h2>
          <div className="swiper-houses-info">
            <p className="swiper-houses-info-text">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </p>
            <a href="#" className="swiper-houses-info-link">
              View All Properties
            </a>
          </div>
          <div className="swiper-houses-swiper">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                type: "fraction",
                el: `.${styles.customPaginationFraction}`,
                renderFraction: function (currentClass, totalClass) {
                  return `
                    <span class="${currentClass} ${styles.customPaginationCurrent}"> </span> of 
                    <span class="${totalClass} ${styles.customPaginationTotal}"></span>
                  `;
                },
              }}
              navigation={{
                prevEl: `.${styles.customPrevButton}`,
                nextEl: `.${styles.customNextButton}`,
              }}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className={styles.mySwiper}
            >
              {housesAray.map((house) => {
                return (
                  <SwiperSlide key={house.id} className={styles.swiperSlide}>
                    <HouseItem
                      mainImg={house.mainImg}
                      alt={house.name}
                      name={house.name}
                      desc={house.description}
                      bedroomsQuantity={house.bedroomsQuantity}
                      bathroomsQuantity={house.bathroomsQuantity}
                      type={house.type}
                      totalPrice={house.price}
                    />
                  </SwiperSlide>
                );
              })}
              <div className={styles.customPrevButton}></div>
              <div className={styles.customNextButton}></div>
              <div className={styles.customPaginationFraction}></div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderHouses;
