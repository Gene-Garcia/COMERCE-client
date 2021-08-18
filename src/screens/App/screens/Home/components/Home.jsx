import React from "react";
import iconLogo from "../../../../../shared/images/comerce-logo-white.webp";

function Home() {
  return (
    <div className="flex w-full flex-wrap bg-gradient-to-t from-my-accent to-my-accent-mono px-6  sm:px-16">
      {/* logo */}
      <div className="flex items-center py-16 mx-auto lg:mx-0">
        <div>
          <img src={iconLogo} alt="comerce-logo" width="180" />
        </div>
        <div className="font-mono font-bold text-4xl tracking-widest text-my-contrast ml-8">
          COMERCE
        </div>
      </div>

      {/* links actions */}
      <div className="ml-auto py-9">
        <div className="flex justify-end j flex-wrap sm:flex-nowrap space-x-6 lg:space-x-16 gap-y-8">
          {/* catalogue link */}
          <div className="flex-shrink place-self-center">
            <a className="font-sans text-lg mb-0 font-semibold text-my-contrast transition ml-8 sm:ml-0 duration-300 border-opacity-50 hover:border-opacity-50 hover:border-b hover:border-my-contrast">
              Product Catalogue
            </a>
          </div>

          {/* search */}
          <div className="inline-flex flex-shrink h-10 order-first sm:order-none place-self-center rounded-md border border-grey-500 border-opacity-50">
            <div className="">
              <input
                className="w-full rounded-md py-1.5 px-3 font-medium text-my-contrast leading-tight bg-my-accent focus:outline-none h-full"
                type="text"
                placeholder=""
              />
            </div>
            <div className="">
              <button className="transition rounded-md bg-my-accent text-base text-my-contrast px-3.5 py-1 h-full active:text-my-contrast ">
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
          <div className="space-x-3 flex flex-shrink-0">
            <button className="transition place-self-center font-sans h-10 font-medium text-base text-my-contrast px-3.5 py-1 rounded-full border border-transparent hover:border hover:border-opacity-50 hover:border-my-contrast">
              Login
            </button>
            <button className="transition place-self-center font-sans h-10 font-medium text-base text-my-contrast px-4 py-1 rounded-full border border-my-contrast hover:bg-gray-50 hover:text-my-accent">
              Sign Up
            </button>
          </div>

          {/* cart */}
          <div className="flex items-center group flex-0 sm:flex-1">
            <div className="text-my-contrast group-hover:text-my-dim font-semibold">
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
            <div className="ml-1.5 text-my-contrast text-lg font-semibold">
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
