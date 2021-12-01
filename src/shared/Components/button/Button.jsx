import React from "react";

/*
 * This a template for button that is capable of displaying a loading image and disabling
 * the button. The state is based on the isLoading state.
 *
 * The styling of this button is stil dependent on the buttonClass paramater.
 *
 * Note, do not update the isLoading state variable when the page using this component
 * will be redirected to another page. The reason for this is that react will raise a
 * warning on updating an unmounted component.
 * In other words
 *  -. The consumer component after clicking the button will redirect to another page
 *  -. That consumer component will update isLoading after history.push
 *
 */
function Button({ isLoading, buttonClass, svgClass, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-center justify-center ${buttonClass} ${
        isLoading ? "cursor-not-allowed" : ""
      }`}
      disabled={isLoading}
    >
      {isLoading && (
        <svg
          className={`animate-spin h-6 w-6 mr-2 ${svgClass}`}
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-0"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      <div>{children}</div>
    </button>
  );
}
export default Button;
