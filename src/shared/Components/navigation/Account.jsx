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

import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { checkLoggedIn } from "../../Auth/Login";
import accountLinks from "./accountLinks";
import Cart from "./Cart";

function UnAuthenticated({ bgType }) {
  const base =
    "transition duration-200 ease-linear px-3 sm:px-4 h-8 sm:h-9 font-semibold text-sm flex items-center tracking-wide";
  const themes = {
    accent: {
      login:
        "text-white rounded-full border border-transparent hover:border hover:border-white",
      signUp:
        "text-accent bg-white rounded-full border border-white hover:bg-transparent hover:text-white",
    },
    contrast: {
      login:
        "text-accent border border-transparent hover:border-accent hover:shadow",
      signUp:
        "text-accent shadow border border-accent hover:bg-accent hover:text-white",
    },
  };

  return (
    <div className="flex flex-row gap-x-1.5 sm:gap-x-2">
      <Link to="/sign-up/user" className={`${base} ${themes[bgType].signUp}`}>
        Sign Up
      </Link>

      <Link to="/login/user" className={`${base} ${themes[bgType].login}`}>
        Login
      </Link>
    </div>
  );
}

function Authenticated() {
  const cookies = new Cookies();

  return (
    <Menu as="div" className="px-3">
      {/* username and the arrow */}
      <Menu.Button
        className={`text-stone-800 flex items-center gap-0.5
                    transition duration-200 ease-linear
                    group-hover:text-accent`}
      >
        <span className="font-semibold text-sm">
          {cookies.get(process.env.REACT_APP_LS_USERNAME_KEY)}
        </span>
        <svg
          className="fill-current h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* the menu */}
        <Menu.Items
          className="z-50 absolute right-8 mt-2 h-full w-56 origin-top-right 
                    focus:outline-none"
        >
          <div className="bg-white rounded-md shadow-lg border-b">
            <div className="px-2.5 py-2.5 border-b border-stone-300">
              <p className="text-xs font-regular text-gray-300">Signed in as</p>
              <p className="text-sm font-semibold text-gray-500">
                {cookies.get(process.env.REACT_APP_LS_EMAIL_KEY)}
              </p>
            </div>

            <div className="">
              {accountLinks.map((group) => (
                <div className="border-b border-stone-300 py-2 space-y-0.5">
                  {group.map(({ id, to, name, svg }) => (
                    <Menu.Item key={id}>
                      {({ active }) => (
                        <Link
                          className="flex flex-row items-center gap-3 
                                  py-1.5 px-3
                                  text-stone-500
                                  transition duration-200 ease-linear 
                                  hover:bg-neutral-200 hover:text-stone-800"
                          to={to}
                        >
                          {svg}
                          <span className="font-medium text-sm">{name}</span>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function Account({ bgType }) {
  return checkLoggedIn() ? (
    <div className="inline-flex items-center justify-center gap-1">
      <Authenticated bgType={bgType} />
      <Cart bgType={bgType} />
    </div>
  ) : (
    <UnAuthenticated bgType={bgType} />
  );
}

export default Account;
