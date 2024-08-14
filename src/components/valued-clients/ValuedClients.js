import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "./ValuedClients.scss";
// import styles from "./ValuedClients.module.scss";

import { valuedClients } from "./valuedClientsList";

const ValuedClients = () => {
  return (
    <>
      <section className="valued-clients">
        <div className="container">
          <h2 className="valued-clients-header">Our Valued Clients</h2>
          <p className="valued-clients-text">
            At Estatein, we have had the privilege of working with a diverse
            range of clients across various industries. Here are some of the
            clients we've had the pleasure of serving
          </p>
          <div className="valued-clients-swiper">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                type: "fraction",
                // el: `.${styles.customPaginationFraction}`,
                renderFraction: function (currentClass, totalClass) {
                  return `
                    <span class="${currentClass} "> </span> of 
                    <span class="${totalClass} "></span>
                  `;
                },
              }}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>323</SwiperSlide>
              <SwiperSlide>323</SwiperSlide>
              <SwiperSlide>323</SwiperSlide>
              <SwiperSlide>323</SwiperSlide>
              <SwiperSlide>323</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValuedClients;
