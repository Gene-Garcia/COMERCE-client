import React from "react";

function Alert({ reqErr, setReqErr }) {
  return (
    <div
      className={
        (reqErr ? "absolute" : "hidden") +
        " transition duration-300 py-6 w-80 bg-red-100 rounded-md shadow-md border-l-4 border-red-500 px-4 flex justify-between items-center  left-8 bottom-8"
      }
    >
      <div className="text-red-800 font-semibold">{reqErr}</div>

      <button
        onClick={() => {
          setReqErr("");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default Alert;
