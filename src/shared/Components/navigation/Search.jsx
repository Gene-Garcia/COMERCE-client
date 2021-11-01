import React from "react";
import { Link } from "react-router-dom";

function Search({ bgType }) {
  const themes = {
    accent: {
      root: "bg-transparent border border-gray-300 focus-within:border focus-within:border-my-contrast",
      input: "bg-transparent text-white ",
      button: "bg-transparent text-my-contrast active:text-my-black",
      catalog: "text-my-contrast hover:text-gray-800",
    },
    contrast: {
      root: "bg-my-contrast border border-gray-300 focus-within:border focus-within:border-my-accent ",
      input: "bg-my-contrast text-gray-700 ",
      button: "bg-my-contrast text-my-accent active:text-my-dim",
      catalog: "text-gray-600 hover:text-my-accent",
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

      <div className="flex justify-end">
        <Link
          to="/catalogue"
          className={`transition duration-200 mt-0.5 font-sans text-sm font-medium ${themes[bgType].catalog}`}
        >
          Product Catalogue
        </Link>
      </div>
    </div>
  );
}

export default Search;
