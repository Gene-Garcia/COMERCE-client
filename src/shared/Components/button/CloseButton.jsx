import React from "react";

const CloseButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-0.5
                bg-rose-50 p-1 rounded
                text-sm uppercase font-semibold
                group transition duration-150 ease-linear
                hover:bg-red-100
                active:ring-2 active:ring-rose-600/40 active:bg-rose-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-rose-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      {name && <span className="text-gray-600">{name}</span>}
    </button>
  );
};
export default CloseButton;
