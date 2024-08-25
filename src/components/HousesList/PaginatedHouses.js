import React, { useState, useContext } from "react";
import HouseItem from "../sliderHouses/HouseItem";
import { FilterContext } from "../../utils/FilterContext";
import "./PaginatedHousesList.scss";

import btnPrev from "./../../img/common-imgs/prev-active.svg";
import btnNext from "./../../img/common-imgs/next-active.svg";

const PaginatedHouses = ({ houses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const housesPerPage = 9;
  const { searchQuery, filters } = useContext(FilterContext);

  const filteredHouses = houses.filter((house) => {
    return (
      house.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.location ? house.location === filters.location : true) &&
      (filters.propertyType ? house.type === filters.propertyType : true) &&
      (filters.pricing ? house.price <= filters.pricing : true) &&
      (filters.propertySize ? house.area >= filters.propertySize : true) &&
      (filters.buildYear ? house.buildYear === filters.buildYear : true)
    );
  });

  // Calculate pagination based on filtered houses
  const indexOfLastHouse = currentPage * housesPerPage;
  const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
  const currentHouses = filteredHouses.slice(
    indexOfFirstHouse,
    indexOfLastHouse
  );

  // Pagination functions
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(filteredHouses.length / housesPerPage))
    );
  const prevPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="container">
      {filteredHouses.length === 0 ? (
        <p>No houses found.</p>
      ) : (
        <>
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
                  id={house.id}
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
            {[
              ...Array(Math.ceil(filteredHouses.length / housesPerPage)).keys(),
            ].map((number) => (
              <button
                key={number}
                onClick={() => paginate(number + 1)}
                className="house-pagination-number"
              >
                {number + 1}
              </button>
            ))}
            <button
              onClick={nextPage}
              disabled={
                currentPage === Math.ceil(filteredHouses.length / housesPerPage)
              }
              className="house-pagination-next"
            >
              <img src={btnNext} alt="Next" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PaginatedHouses;
