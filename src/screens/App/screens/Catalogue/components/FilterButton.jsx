import React from "react";

function FilterButton({ name }) {
  return (
    <button className="transition duration-200 w-36 text-left px-2 py-0.5 font-sans text-base font-medium text-gray-500 rounded-md hover:bg-gray-100">
      {name}
    </button>
  );
}
export default FilterButton;

function FilterHeader({ name }) {
  return (
    <span className="font-serif text-sm font-regular text-my-accent">
      {name}
    </span>
  );
}
export { FilterHeader };
