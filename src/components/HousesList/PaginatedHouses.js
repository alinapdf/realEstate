import React, { useState } from "react";
import HouseItem from "../sliderHouses/HouseItem";

import "./PaginatedHousesList.scss";

import btnPrev from "./../../img/common-imgs/prev-active.svg";
import btnNext from "./../../img/common-imgs/next-active.svg";

const PaginatedHouses = ({ houses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const housesPerPage = 9;

  // Определяем, какие дома показывать на текущей странице
  const indexOfLastHouse = currentPage * housesPerPage;
  const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
  const currentHouses = houses.slice(indexOfFirstHouse, indexOfLastHouse);

  // Функция для переключения страниц
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Функция для перехода на следующую страницу
  const nextPage = () =>
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(houses.length / housesPerPage))
    );

  // Функция для перехода на предыдущую страницу
  const prevPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="container">
      <ul className="house-list">
        {currentHouses.map((house, index) => (
          <div key={index} className="house-list-item">
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
          </div>
        ))}
      </ul>
      <div className="house-pagination">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="house-pagination-prev"
        >
          <img src={btnPrev} alt="Previous" />
        </button>
        {[...Array(Math.ceil(houses.length / housesPerPage)).keys()].map(
          (number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className="house-pagination-number"
            >
              {number + 1}
            </button>
          )
        )}
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(houses.length / housesPerPage)}
          className="house-pagination-next"
        >
          <img src={btnNext} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default PaginatedHouses;
