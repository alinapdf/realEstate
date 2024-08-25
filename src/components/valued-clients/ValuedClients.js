import React, { forwardRef, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "./ValuedClients.scss";
import styles from "./ValuedClients.module.scss";

import { valuedClients } from "./valuedClientsList";

import ValuedClientItem from "./ValuedClientItem";

const ValuedClients = forwardRef((props, ref) => {
  return (
    <>
      <section className="valued-clients" ref={ref}>
        <div className="container">
          <h2 className="valued-clients-header">Our Valued Clients</h2>
          <p className="valued-clients-text">
            At Estatein, we have had the privilege of working with a diverse
            range of clients across various industries. Here are some of the
            clients we've had the pleasure of serving
          </p>
          <div className="valued-clients-swiper">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                type: "fraction",
                renderFraction: function (currentClass, totalClass) {
                  return `
                  
                    <span class="${currentClass} ${styles.customPaginationCurrent}"></span> <span  class="${styles.paginationOf}">of</span/> 
                    <span class="${totalClass} ${styles.customPaginationTotal}"></span>
                  
                `;
                },
                element: `${styles.paginationStyles}`,
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
              {valuedClients.map((client) => {
                return (
                  <SwiperSlide className={styles.swiperSlide} key={client.id}>
                    <ValuedClientItem
                      since={client.year}
                      name={client.name}
                      domain={client.domain}
                      category={client.category}
                      whatTheySaid={client.whatTheySaid}
                    />
                  </SwiperSlide>
                );
              })}

              <div className={styles.customPrevButton}></div>
              <div className={styles.customNextButton}></div>
              <div className={styles.paginationStyles}></div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
});

export default ValuedClients;
