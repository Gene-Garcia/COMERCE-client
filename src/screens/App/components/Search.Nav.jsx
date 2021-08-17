import React from "react";

function Search() {
  return (
    <div className="inline-flex rounded-md border border-grey-300 focus-within:border focus-within:border-my-accent">
      <div className="">
        <input
          className="w-full rounded-md py-1.5 px-3 text-gray-700 leading-tight bg-my-contrast focus:outline-none h-full"
          type="text"
          placeholder=""
        />
      </div>
      <div className="">
        <button className="transition rounded-md bg-my-contrast font-medium text-base text-my-accent px-3.5 py-1 h-full active:text-my-dim ">
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
  );
}

export default Search;
