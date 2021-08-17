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

        {/* account dropdown */}
        <div className="self-center group ropdown inline-block relative px-3">
          <button className="text-my-accent font-semibold inline-flex items-center">
            <span className="mr-1">JohnDoe</span>
            <svg
              className="fill-current h-4 w-4 font-bold"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="dropdown-menu shadow-xl bg-my-contrast rounded border border-gray-200 absolute hidden  text-gray-500 group-hover:block">
            <li className="px-4 pt-2">
              <p className="text-sm font-semibold w-full">Signed in as</p>
              <p className="text-base font-semibold text-gray-600">
                johndoe@yahoo.com
              </p>
            </li>

            <li className="px-4 pt-2 border-b border-gray-200"></li>

            <li className="px-4 pt-2 hover:text-gray-600 transition">
              <a
                className="flex items-center font-semi-bold py-1 font-semibold"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                My Account
              </a>
            </li>

            <li className="px-4 pt-2 border-b border-gray-200"></li>

            <li className="px-4 pt-2 hover:text-gray-600 transition">
              <a
                className="flex items-center font-semi-bold py-1 font-semibold"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                Purchases
              </a>
            </li>

            <li className="px-4 pt-1 hover:text-gray-600 transition">
              <a
                className="flex items-center font-semi-bold py-1 font-semibold"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
                Orders
              </a>
            </li>

            <li className="px-4 pt-2 border-b border-gray-200"></li>

            <li className="px-4 pt-2 pb-2 hover:text-gray-600 transition">
              <a
                className="flex items-center font-semi-bold py-1 font-semibold"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Orders
              </a>
            </li>
          </ul>
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
