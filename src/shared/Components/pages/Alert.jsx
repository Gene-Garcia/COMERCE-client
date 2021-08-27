import React from "react";
import useAlert from "../../../hooks/useAlert";

function Alert() {
  const { message, setMessage, severity } = useAlert();

  let color;
  if (severity === "error") color = "bg-red-100 border-red-500";
  else if (severity === "success") color = "bg-green-100 border-green-500";

  return (
    <div
      className={
        (message ? "absolute" : "hidden") +
        " transition duration-300 py-6 w-80 rounded-md shadow-md border-l-4 px-4 flex justify-between items-center left-8 bottom-8 " +
        color
      }
    >
      <div className="text-gray-800 font-semibold">{message}</div>

      <button
        onClick={() => {
          setMessage("");
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
