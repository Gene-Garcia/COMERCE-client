import React from "react";
import iconLogo from "../../../shared/images/comerce-logo-blue.webp";
import Search from "./Search.Nav";
import Dropdown from "./Dropdown.Nav";
import Cart from "./Cart.Nav";

function Navbar() {
  return (
    <div className="w-full bg-my-contrast flex items-center p-2 sm:p-5 shadow-lg ">
      {/* logo */}
      <div className="flex flex-col sm:flex-row items-center flex-grow ">
        <div className="place-self-center">
          <img src={iconLogo} width="50" />
        </div>

        <div className="ml-0 sm:ml-3 ">
          <p className="font-mono text-2xl font-bold tracking-widest text-my-dim text-opacity-80">
            COMERCE
          </p>
        </div>
      </div>

      {/* links */}
      <div className="justify-self-end text-my-dim flex-grow-0 place-self-end md:mt-2.5">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-4 md:gap-y-0 self-center">
          {/* search */}
          <div className="place-self-end col-span-2 sm:col-span-4 md:col-span-3 w-full">
            <Search />
          </div>

          {/* account */}
          <div className="place-self-end sm:place-self-center col-span-2 sm:col-span-3 md:col-span-2 pb-1 sm:pb-0">
            {/* account dropdown */}
            {/* <Dropdown /> */}

            <div className="space-x-4">
              <button className="transition bg-my-contrast font-sans font-medium text-base text-my-accent  px-3.5 py-1 rounded-md border border-my-accent hover:bg-my-accent hover:text-my-contrast">
                Login
              </button>
              <button className="transition bg-my-accent font-sans font-medium text-base text-my-contrast px-3.5 py-1 rounded-md border border-my-accent hover:border-my-accent-mono hover:bg-my-accent-mono">
                Sign Up
              </button>
            </div>
          </div>

          {/* cart */}
          <div className="place-self-end sm:place-self-center col-span-2 sm:col-span-1 md:col-span-1">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
