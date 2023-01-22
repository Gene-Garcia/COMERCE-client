import React, { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";

import { Link } from "react-router-dom";

function NavbarLink({ data }) {
  return (
    <Menu as="div" className="relative group">
      <Menu.Button className="flex items-center gap-1 text-white ">
        <span className="font-semibold uppercase text-sm">{data.name}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
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
          className="absolute right-0 mt-2 
                    h-full w-[12.5rem]
                    origin-top-right       
                    bg-white rounded-md 
                    ring-1 ring-black ring-opacity-5 
                    focus:outline-none
                    z-50"
        >
          <div className="bg-white shadow-lg rounded-md w-full">
            <p className="p-2 text-stone-700 rounded-t-md bg-neutral-100 font-medium border-b text-sm">
              {data.name}
            </p>

            <div className="w-full p-2 grid gap-2">
              {Object.entries(data.links).map(([k, { to, svg, name }]) => (
                <Menu.Item key={k}>
                  {({ active }) => (
                    <Link
                      to={to}
                      className="inline-flex gap-2
                                  text-stone-700 
                                  px-2 py-1.5 
                                  w-full rounded
                                  transition ease-linear
                                  hover:bg-slate-200 active:text-accent"
                    >
                      {svg}

                      <span className="font-semibold text-sm">{name}</span>
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
export default NavbarLink;
