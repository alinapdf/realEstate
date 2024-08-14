import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "./SliderComments.scss";
import styles from "./SliderComments.module.scss";

import { commentsList } from "./commentsList";
import SliderItem from "./SliderItem";
const SliderComments = () => {
  return (
    <>
      <section className="swiper-comments">
        <div className="container">
          <h2 className="swiper-comments-header">What Our Clients Say</h2>
          <div className="swiper-comments-info">
            <p className="swiper-comments-info-text">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>
            {/* <a href="#" className="swiper-comments-info-link">
              View All Testimonials
            </a> */}
          </div>
          <div className="swiper-comments-swiper">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                type: "fraction",
                el: `.${styles.customPaginationFraction}`,
                renderFraction: function (currentClass, totalClass) {
                  return `
                  <span class="${currentClass} ${styles.customPaginationCurrent}"></span> of 
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
              {commentsList.map((comment) => {
                return (
                  <SwiperSlide className={styles.swiperSlide} key={comment.id}>
                    <SliderItem
                      key={comment.id}
                      starsQuantity={comment.starsQuantity}
                      mainComment={comment.mainComment}
                      commentText={comment.commentText}
                      commentatorAvatar={comment.commentatorAvatar}
                      commentatorName={comment.commentatorName}
                      commentatorLocation={comment.commentatorLocation}
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

export default SliderComments;
