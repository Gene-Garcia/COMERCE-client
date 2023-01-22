import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";

import comerceLogo from "../../../../shared/images/comerce-logo-blue.webp";
import Account from "../../../../shared/Components/navigation/Account";
import { userNavLinks } from "../data/linkData";
import Search from "../../../../shared/Components/navigation/Search";

const SmallScreenNav = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-3 p-3 ">
        {/* image */}
        <div className="inline-flex items-center gap-2">
          <img src={comerceLogo} alt="Logo" className="h-8" />
          <span className="tracking-wide text-md font-bold font-mono">
            COMERCE
          </span>
        </div>

        {/* hamburger */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button
            className="inline-flex w-full justify-center rounded-md 
                    bg-zinc-100 px-2 py-1.5
                    transition duration-200 ease-linear
                    hover:bg-slate-300
                    focus:outline-none 
                    focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-stone-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
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
            <Menu.Items
              className="absolute right-0 mt-2 h-full w-56 origin-top-right 
                        divide-y divide-gray-100 
                        bg-white
                        ring-1 ring-black ring-opacity-5 
                        focus:outline-none"
            >
              <div className="shadow-lg rounded-md ">
                <div
                  className="bg-neutral-100 
                           p-2.5 rounded-t-md
                           flex items-center justify-end"
                >
                  <Account bgType="contrast" />
                </div>

                <div className="bg-white p-2.5 flex flex-col gap-2.5">
                  {userNavLinks.map((e, i) => (
                    <Menu.Item key={i}>
                      {({ active }) => (
                        <Link
                          to={e.to}
                          className="group flex items-center gap-1.5"
                        >
                          <div
                            className={`shrink-0 h-8 w-8 
                                  flex items-center justify-center 
                                  rounded bg-slate-100 
                                  text-neutral-600
                                  transition duration-150 ease-linear
                                  group-hover:bg-gray-300 group-hover:text-stone-700`}
                          >
                            {e.svg}
                          </div>

                          <div
                            className={`grow h-8 flex items-center
                                  bg-slate-100 rounded px-3
                                  text-left text-sm font-semibold text-neutral-600
                                  transition duration-150 ease-linear
                                  group-hover:bg-gray-200 group-hover:text-stone-700`}
                          >
                            {e.name}
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className="py-2 px-4 bg-neutral-100 border-t">
        <Search bgType="contrast" />
      </div>
    </>
  );
};
export default SmallScreenNav;
