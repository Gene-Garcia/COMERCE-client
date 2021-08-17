import React from "react";
import iconLogo from "../../../shared/images/comerce-logo-blue.webp";
import Search from "./Search.Nav";
import Dropdown from "./Dropdown.Nav";
import Cart from "./Cart.Nav";

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
        <Search />

        {/* account dropdown */}
        <Dropdown />

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
        <Cart />
      </div>
    </div>
  );
}

export default Navbar;
