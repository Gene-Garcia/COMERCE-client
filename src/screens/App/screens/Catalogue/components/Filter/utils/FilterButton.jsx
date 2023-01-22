import React from "react";

function FilterButton({ name }) {
  return (
    <button className="w-36 lg:w-40 xl:w-44 text-left p-4 py-1.5 text-sm font-medium text-gray-700 rounded transition duration-200 ease-linear hover:bg-gray-200">
      {name}
    </button>
  );
}
export default FilterButton;

const FilterBody = ({ children, name }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <span className="text-sm font-semibold text-accent text-opacity-60">
        {name}
      </span>

      <>{children}</>
    </div>
  );
};
export { FilterBody };
