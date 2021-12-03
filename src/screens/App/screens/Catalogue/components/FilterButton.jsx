import React from "react";

function FilterButton({ name }) {
  return (
    <button className="w-36 text-left px-3 py-1.5 text-sm font-medium text-gray-700 rounded transition duration-200 ease-linear hover:bg-gray-200">
      {name}
    </button>
  );
}
export default FilterButton;

function FilterHeader({ name }) {
  return (
    <span className="font-serif text-sm font-medium text-my-accent text-opacity-60">
      {name}
    </span>
  );
}
export { FilterHeader };
