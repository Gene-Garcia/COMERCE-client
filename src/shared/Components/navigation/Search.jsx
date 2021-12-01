import React from "react";
import { Link } from "react-router-dom";

function Search({ bgType }) {
  const themes = {
    accent: {
      root: "bg-transparent border border-gray-300 focus-within:border focus-within:border-gray-50",
      input: "bg-transparent text-white ",
      button: "bg-transparent text-gray-50 active:text-my-black",
      texts: "text-gray-50 hover:border-white",
    },
    contrast: {
      root: "bg-white border border-gray-300 focus-within:border focus-within:border-my-accent ",
      input: "bg-white text-gray-700 ",
      button: "bg-white text-my-accent active:text-my-dim",
      texts: "text-gray-600 hover:text-my-accent",
    },
  };

  return (
    <div>
      <div
        className={`inline-flex rounded-md place-self-center w-full ${themes[bgType].root}`}
      >
        <div className="w-full">
          <input
            className={`w-full rounded-md py-1.5 px-3 leading-tight h-full focus:outline-none ${themes[bgType].input} `}
            type="text"
            placeholder=""
          />
        </div>
        <div className="w-auto">
          <button
            className={`transition rounded-md font-medium text-base px-3.5 py-1 h-full ${themes[bgType].button}`}
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-end gap-6">
        <Link
          to="/sign-up/seller"
          className={`transition duration-250 ease-linear mt-0.5 px-1 font-sans text-sm font-medium border-b border-transparent ${themes[bgType].texts}`}
        >
          Sell on COMERCE
        </Link>

        <Link
          to="/catalogue"
          className={`transition duration-250 ease-linear mt-0.5 font-sans text-sm font-medium border-b border-transparent ${themes[bgType].texts}`}
        >
          Catalogue
        </Link>
      </div>
    </div>
  );
}

export default Search;
