import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

import "./PropertyDetailsSwiper.scss";
import styles from "./PropertyDetailsSwiper.module.scss";

import btnNext from "./../../img/common-imgs/next-active.svg";
import btnPrev from "./../../img/common-imgs/prev-active.svg";

import "swiper/css/pagination";

const PropertyDetailsSwiper = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(images);
  return (
    <>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={9}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide>
              <img src={image} alt={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* //второй свайпер */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={20}
        navigation={{
          prevEl: `.${styles.customPrevButton}`,
          nextEl: `.${styles.customNextButton}`,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className={styles.mySwiper2}
        slidesPerView={2}
        pagination={{
          clickable: true,
          el: `.${styles.paginationCustom}`,
        }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide>
              <img src={image} alt={index} />
            </SwiperSlide>
          );
        })}
        <div className={styles.customPrevButton}>
          <img src={btnPrev} alt="Previous" />
        </div>
        <div className={styles.customNextButton}>
          <img src={btnNext} alt="Next" />
        </div>
        <div className={styles.paginationCustom}></div>
      </Swiper>
    </>
  );
};

export default PropertyDetailsSwiper;
