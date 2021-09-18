import React from "react";

function FilterButton({ name }) {
  return (
    <button className="w-36 text-left px-2 py-1 font-medium text-gray-700 rounded-md hover:bg-gray-200    ">
      {name}
    </button>
  );
}
export default FilterButton;
