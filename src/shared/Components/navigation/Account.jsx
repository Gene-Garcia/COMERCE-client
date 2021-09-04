import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { checkLoggedIn } from "../../Auth/Login";

function UnAuthenticated({ bgType }) {
  const base = "transition font-sans h-9 font-semibold text-base px-4 py-1.5";
  const themes = {
    accent: {
      login:
        "text-my-contrast rounded-full border border-transparent hover:border hover:border-my-contrast",
      signUp:
        "text-my-accent bg-my-contrast rounded-full border border-my-contrast hover:bg-transparent hover:text-my-contrast",
    },
    contrast: {
      login:
        "text-my-accent rounded-md border border-my-accent hover:bg-my-accent hover:text-my-contrast",
      signUp:
        "text-my-contrast bg-my-accent rounded-md border border-my-accent hover:bg-my-accent-mono",
    },
  };

  return (
    <div className="flex flex-row gap-x-3">
      <Link to="/login" className={`${base} ${themes[bgType].login}`}>
        Login
      </Link>
      <Link to="/sign-up" className={`${base} ${themes[bgType].signUp}`}>
        Sign Up
      </Link>
    </div>
  );
}

function Authenticated({ bgType }) {
  const cookies = new Cookies();

  // const color = "text-my-contrast";

  const themes = {
    accent: "text-my-contrast",
    contrast: "text-my-accent",
  };

  return (
    <div className="self-center group ropdown inline-block relative px-3">
      <button
        className={`${themes[bgType]} font-semibold inline-flex items-center`}
      >
        <span className="mr-1">
          {cookies.get(process.env.REACT_APP_LS_USERNAME_KEY)}
        </span>
        <svg
          className="fill-current h-4 w-4 font-bold"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>

      <ul className="dropdown-menu  absolute right-0  hidden text-gray-500 group-hover:block">
        <div className="mt-3 bg-my-contrast shadow-xl  rounded border border-gray-200">
          <li className="px-4 pt-2">
            <p className="text-sm font-semibold w-full">Signed in as</p>

            <p className="text-base font-semibold text-gray-600">
              {cookies.get(process.env.REACT_APP_LS_EMAIL_KEY)}
            </p>
          </li>

          <li className="px-4 pt-2 border-b border-gray-200"></li>

          <li className="px-4 pt-2 hover:text-gray-800 transition">
            <Link
              className="flex items-center font-semi-bold py-1 font-semibold"
              to="/user/me"
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
            </Link>
          </li>

          <li className="px-4 pt-2 border-b border-gray-200"></li>

          <li className="px-4 pt-2 hover:text-gray-800 transition">
            <Link
              className="flex items-center font-semi-bold py-1 font-semibold"
              to="/user/purchases"
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
            </Link>
          </li>

          <li className="px-4 pt-1 hover:text-gray-800 transition">
            <Link
              className="flex items-center font-semi-bold py-1 font-semibold"
              to="/user/orders"
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
            </Link>
          </li>

          <li className="px-4 pt-2 border-b border-gray-200"></li>

          <li className="px-4 pt-2 pb-2 hover:text-gray-800 transition">
            <Link
              to="/sign-out"
              className="flex items-center font-semi-bold py-1 font-semibold"
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
              Sign Out
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

function Account({ bgType }) {
  return checkLoggedIn() ? (
    <Authenticated bgType={bgType} />
  ) : (
    <UnAuthenticated bgType={bgType} />
  );
}

export default Account;
