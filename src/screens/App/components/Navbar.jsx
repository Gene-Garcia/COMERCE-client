import React from "react";
import iconLogo from "../../../shared/images/comerce-logo-blue.webp";

function Navbar() {
  return (
    <div className="w-full bg-my-contrast flex items-center justify-start px-5 py-5 shadow-lg ">
      {/* logo */}
      <div className="flex justify-start items-center">
        <div className="">
          <img src={iconLogo} width="50" />
        </div>

        <div className="ml-3">
          <p className="font-mono text-2xl font-bold tracking-widest text-my-dim">
            COMERCE
          </p>
        </div>
      </div>

      {/* links */}
      <div className="ml-auto flex space-x-6 text-my-dim">
        {/* search */}
        <div className="inline-flex rounded-md border border-grey-300 focus-within:border focus-within:border-my-accent">
          <div className="">
            <input
              class="w-full rounded-md py-1.5 px-3 text-gray-700 leading-tight bg-my-contrast focus:outline-none h-full"
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

        {/* account */}
        <div className="space-x-3">
          <button className="transition bg-my-contrast font-sans font-medium text-base text-my-accent  px-3.5 py-1 rounded-md border border-my-accent hover:bg-my-accent hover:text-my-contrast">
            Login
          </button>
          <button className="transition bg-my-accent font-sans font-medium text-base text-my-contrast px-3.5 py-1 rounded-md border border-my-accent hover:border-my-accent-light hover:bg-my-accent-light">
            Sign Up
          </button>
        </div>

        {/* cart */}
        <div className="flex items-center group">
          <div className="group-hover:text-my-accent font-semibold">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="ml-1.5 text-lg font-semibold">5</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
