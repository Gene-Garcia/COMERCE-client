import React from "react";
import Cart from "../../../../../shared/Components/navigation/Cart";
import Search from "../../../../../shared/Components/navigation/Search";
import iconLogo from "../../../../../shared/images/comerce-logo-white.webp";
import { Link } from "react-router-dom";
import Account from "../../../../../shared/Components/navigation/Account";

function HomeNav() {
  return (
    <div className="flex justify-between flex-wrap w-full bg-gradient-to-t from-my-accent to-my-accent-mono px-16">
      {/* logo */}
      <div className="mx-auto md:mx-0 py-16 ">
        <div className="inline-flex space-x-8">
          <div>
            <img src={iconLogo} alt="comerce-logo" width="180" />
          </div>
          <div className="self-center font-mono font-bold text-4xl tracking-widest text-my-contrast">
            COMERCE
          </div>
        </div>
      </div>

      {/* links actions */}
      <div className="py-9 ">
        <div className="flex justify-end items-center space-x-6">
          {/* catalogue link */}
          <div className="flex-shrink place-self-center">
            <Link
              to="/catalogue"
              className="font-sans text-lg mb-0 font-semibold text-my-contrast transition ml-8 sm:ml-0 duration-300 border-opacity-50 hover:border-opacity-50 hover:border-b hover:border-my-contrast"
            >
              Product Catalogue
            </Link>
          </div>

          {/* search */}
          <div className="flex-shrink-0">
            <Search />
          </div>

          {/* account */}
          <div className="flex-shrink-0">
            <Account bgType="accent" />
          </div>

          {/* cart */}
          <div className="">
            <Cart bgType="accent" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeNav;
