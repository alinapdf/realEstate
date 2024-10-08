import React from "react";
import PaginatedHouses from "./PaginatedHouses";
import { housesAray } from "../sliderHouses/housesArray";

import "./PaginatedHousesList.scss";

import { forwardRef } from "react";

const PaginatedHousesList = forwardRef((props, ref) => {
  return (
    <section className="swiper-houses" ref={ref}>
      {/* <div className="container">
        <h2 className="swiper-houses-header">
          Discover a World of Possibilities
        </h2>
        <p className="swiper-houses-text">
          Our portfolio of properties is as diverse as your dreams. Explore the
          following categories to find the perfect property that resonates with
          your vision of home.
        </p>
      </div> */}
      <PaginatedHouses houses={housesAray} />
    </section>
  );
});

export default PaginatedHousesList;
