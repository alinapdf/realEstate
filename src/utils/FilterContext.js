import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    pricing: "",
    propertySize: "",
    buildYear: "",
  });

  const updateSearchQuery = (query) => setSearchQuery(query);

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <FilterContext.Provider
      value={{ searchQuery, filters, updateSearchQuery, updateFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};
