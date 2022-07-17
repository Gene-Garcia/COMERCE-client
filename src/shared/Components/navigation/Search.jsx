import React from "react";

function Search({ bgType }) {
  const themes = {
    accent: {
      root: "focus-within:border-gray-50",
      input: "text-white",
      button: "text-gray-50 ",
    },
    contrast: {
      root: "focus-within:border-accent ",
      input: "text-gray-700 ",
      button: "text-accent",
    },
  };

  return (
    <div
      className={`bg-transparent w-full inline-flex items-center justify-center rounded border border-gray-200 transition ease-linear  ${themes[bgType].root}`}
    >
      <input
        className={`bg-transparent text-sm w-full py-1.5 px-3 focus:outline-none ${themes[bgType].input} `}
        type="text"
        name="search"
        autoComplete="new-search"
        placeholder=""
      />

      <button
        className={`px-3 transition ease-linear active:text-black ${themes[bgType].button}`}
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Search;
