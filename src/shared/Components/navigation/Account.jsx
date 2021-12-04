/*
 * The account component has two sub-components that can be rendered
 * based on the current status of user authentication.
 *
 * That is, when there is no logged in user, the <UnAuthenticated> component will be rendered.
 * This component basically shows the sign up and login buttons
 *
 * On the other hand, when there is a logged in user, it will render the <Authenticated>.
 * Now, this compoment will show the username of the user which also is a dropdown for other
 * options. Like, orders, purchase, my account, and sign out.
 *
 * Notably, both components accepts a prop name bgType. Through this, we are
 * promoting component reusability with changing design.
 * This prop is responsible for influencing the design and layout of the component.
 * That is, the app has to navbar design, one with a gradient bg and one with white bg.
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { checkLoggedIn } from "../../Auth/Login";

function UnAuthenticated({ bgType }) {
  const base =
    "transition duration-200 ease-linear h-9 font-semibold px-4 py-1.5 mb-0";
  const themes = {
    accent: {
      login:
        "text-white rounded-full border border-transparent hover:border hover:border-white",
      signUp:
        "text-my-accent bg-white rounded-full border border-white hover:bg-transparent hover:text-white",
    },
    contrast: {
      login:
        "text-my-accent rounded-md border border-my-accent hover:bg-my-accent hover:text-white",
      signUp:
        "text-white bg-my-accent rounded-md border border-my-accent hover:bg-my-accent-mono",
    },
  };

  return (
    <div className="flex flex-row gap-x-3">
      <Link to="/login/user" className={`${base} ${themes[bgType].login}`}>
        Login
      </Link>
      <Link to="/sign-up/user" className={`${base} ${themes[bgType].signUp}`}>
        Sign Up
      </Link>
    </div>
  );
}

function Authenticated({ bgType }) {
  const cookies = new Cookies();

  // const color = "text-white";
  const themes = {
    accent: "text-gray-50",
    contrast: "text-my-accent",
  };

  return (
    <div className="self-center group dropdown inline-block relative px-3">
      {/* username and the arrow */}
      <button
        className={`${themes[bgType]} font-medium inline-flex items-center`}
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

      {/* the menu */}
      <ul className="w-64 dropdown-menu absolute -right-6 xs:right-0 z-50 hidden transition duration-300 ease-linear group-hover:block">
        <div className="w-full mt-3 bg-white shadow-lg rounded px-2 py-4 space-y-1.5">
          <li className="px-2">
            <p className="text-sm font-regular -mb-1 text-gray-400">
              Signed in as
            </p>
            <p className="text-base font-semibold text-gray-500">
              {cookies.get(process.env.REACT_APP_LS_EMAIL_KEY)}
            </p>
          </li>

          <AuthenticatedLink
            to="/user"
            name="My Account"
            svg="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />

          <hr />

          <AuthenticatedLink
            to="/user/purchases"
            name="Purchases"
            svg="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />

          <AuthenticatedLink
            to="/users/orders"
            name="Orders"
            svg="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          />

          <hr />

          <AuthenticatedLink
            to="/sign-out"
            name="Sign Out"
            svg="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </div>
      </ul>
    </div>
  );
}

// a component to render the link for the user dropdown menu
function AuthenticatedLink({ to, name, svg }) {
  return (
    <li className="rounded transition ease-linear hover:bg-gray-200 px-2 py-1">
      <Link className="flex flex-row items-center gap-3 font-medium" to={to}>
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
            d={svg}
          />
        </svg>
        {name}
      </Link>
    </li>
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
