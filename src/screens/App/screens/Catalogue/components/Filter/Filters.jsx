import React from "react";
import FilterButton, { FilterBody } from "./utils/FilterButton";

const Filters = () => {
  return (
    <>
      <FilterBody name="Product View">
        <FilterButton name="Grid View" />
        <FilterButton name="Board View" />
      </FilterBody>

      <FilterBody name="Sort By">
        <FilterButton name="All-time Sales" />
        <FilterButton name="Product Rating" />
      </FilterBody>

      <FilterBody name="Order by">
        <FilterButton name="Highest Price" />
        <FilterButton name="Lowest Price" />
      </FilterBody>

      <FilterBody name="Price Range">
        <FilterButton name="Coming Soon..." />
      </FilterBody>

      <FilterBody name="Product Category">
        <FilterButton name="Coming Soon..." />
      </FilterBody>
    </>
  );
};
export default Filters;
