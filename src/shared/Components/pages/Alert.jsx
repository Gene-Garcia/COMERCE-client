/*
 * This component is only instantiated or called once, however, it is capable of 
 * appearing (when an error message is set) and disappearing (when the user clicks the x button). 
 *
 * The value used by this component is provided by the AlertContext, and using it
 * must go through the useAlert which creates the AlertContext and returns the state variables
 * 
 */

import React from "react";
import useAlert from "../../../hooks/useAlert";

function Alert() {
  const { message, setMessage, severity } = useAlert();

  let color;
  if (severity === "error") color = "bg-red-100 border-red-500";
  else if (severity === "success") color = "bg-green-100 border-green-500";

  return (
    <div
      className={(message ? "absolute" : "hidden") + " top-32 left-1/2 z-10"}
    >
      <div
        className={
          (message ? "relative" : "hidden") +
          " transition duration-300 py-4 rounded-md shadow-md border-l-4 gap-x-6 px-3 flex justify-between items-center mx-auto -left-1/2 " +
          color
        }
      >
        <div className="text-gray-600 font-semibold pr-4">{message}</div>

        <button
          onClick={() => {
            setMessage("");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
    </div>
  );
}

export default Alert;
