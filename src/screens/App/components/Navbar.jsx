import React from "react";
import iconLogo from "../../../shared/images/comerce-logo-blue.webp";
import Search from "../../../shared/Components/navigation/Search.Nav";
import Cart from "../../../shared/Components/navigation/Cart.Nav";
import { Link } from "react-router-dom";
import Account from "../../../shared/Components/navigation/Account.Nav";

function Navbar() {
  return (
    <div className="w-full bg-my-contrast flex items-center p-2 sm:p-5 shadow-lg ">
      {/* logo */}
      <Link
        to="/"
        className="flex flex-col sm:flex-row items-center flex-grow "
      >
        <div className="place-self-center">
          <img src={iconLogo} alt="comerce-logo" width="50" />
        </div>

        <div className="ml-0 sm:ml-3 ">
          <p className="font-mono text-2xl font-bold tracking-widest text-my-dim text-opacity-80">
            COMERCE
          </p>
        </div>
      </Link>

      {/* links */}
      <div className="justify-self-end text-my-dim flex-grow-0 place-self-end md:mt-2.5">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-4 md:gap-y-0 self-center">
          {/* search */}
          <div className="place-self-end col-span-2 sm:col-span-4 md:col-span-3 w-full">
            <Search />
          </div>

          {/* account */}
          <div className="place-self-end sm:place-self-center col-span-2 sm:col-span-3 md:col-span-2 pb-1 sm:pb-0">
            <Account bgType="contrast" />
          </div>

          {/* cart */}
          <div className="place-self-end sm:place-self-center col-span-2 sm:col-span-1 md:col-span-1">
            <Cart bgType="contrast" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
