import React, { forwardRef, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "./SliderFrequentlyQuestions.scss";
import styles from "./SliderFrequentlyQuestions.module.scss";

import { faqArray } from "./frequentlyQuestionsList";
import FrequentlyQuestionsItem from "./FrequentlyQuentionsItem";

const FrequentlyQuestions = forwardRef((props, ref) => {
  return (
    <>
      <section className="swiper-faq" ref={ref}>
        <div className="container">
          <h2 className="swiper-faq-header">Frequently Asked Questions</h2>
          <div className="swiper-faq-info">
            <p className="swiper-faq-info-text">
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process. We're here to
              provide clarity and assist you every step of the way.
            </p>
          </div>
          <div className="swiper-faq-swiper">
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
              {faqArray.map((faq) => {
                return (
                  <SwiperSlide className={styles.swiperSlide} key={faq.id}>
                    <FrequentlyQuestionsItem
                      question={faq.question}
                      answer={faq.answer}
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
});

export default FrequentlyQuestions;
