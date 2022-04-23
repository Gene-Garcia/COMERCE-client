import React from "react";

const ErrorContainer = ({ message }) => {
  return (
    <div className="flex flex-row items-center bg-red-100 p-2 rounded-md shadow-sm">
      <div className="px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <p className="px-2 font-medium text-gray-700">{message}</p>
    </div>
  );
};
export default ErrorContainer;
