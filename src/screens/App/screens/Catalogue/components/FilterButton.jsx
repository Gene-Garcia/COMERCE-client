import React from "react";

function FilterButton({ name }) {
  return (
    <button className="w-36 lg:w-40 xl:w-44 text-left p-4 py-1.5 text-sm font-medium text-gray-700 rounded transition duration-200 ease-linear hover:bg-gray-200">
      {name}
    </button>
  );
}
export default FilterButton;

function FilterHeader({ name }) {
  return (
    <span className="text-sm font-semibold text-my-accent text-opacity-50">
      {name}
    </span>
  );
}
export { FilterHeader };
