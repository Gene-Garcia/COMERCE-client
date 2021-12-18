import React from "react";

function ProductAction({ title, onClick, svgD, color, effect }) {
  return (
    <button
      onClick={onClick}
      className={`${color} transition ease-linear ${effect} inline-flex gap-0.5 lg:gap-1 items-center justify-center rounded-full w-16 lg:w-20 h-7`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={svgD}
        />
      </svg>

      <span className="font-medium text-sm">{title}</span>
    </button>
  );
}
export default ProductAction;
