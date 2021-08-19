import React from "react";
import Cart from "../../../../../shared/Components/Navigation/Cart.Nav";
import Dropdown from "../../../../../shared/Components/Navigation/Dropdown.Nav";
import Search from "../../../../../shared/Components/Navigation/Search.Nav";
import iconLogo from "../../../../../shared/images/comerce-logo-white.webp";

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
        <div className="flex justify-end space-x-6">
          {/* catalogue link */}
          <div className="flex-shrink place-self-center">
            <a className="font-sans text-lg mb-0 font-semibold text-my-contrast transition ml-8 sm:ml-0 duration-300 border-opacity-50 hover:border-opacity-50 hover:border-b hover:border-my-contrast">
              Product Catalogue
            </a>
          </div>

          {/* search */}
          <div className="flex-shrink-0">
            <Search />
          </div>

          {/* account */}
          <div className="flex-shrink-0">
            <Dropdown bgType="accent" />
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
