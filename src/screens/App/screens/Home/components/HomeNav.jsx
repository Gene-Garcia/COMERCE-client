import React from "react";
import Cart from "../../../../../shared/Components/navigation/Cart";
import Search from "../../../../../shared/Components/navigation/Search";
import iconLogo from "../../../../../shared/images/comerce-logo-white.webp";
import { Link } from "react-router-dom";
import Account from "../../../../../shared/Components/navigation/Account";

function HomeNav() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full bg-gradient-to-t from-my-accent to-my-accent-mono px-3 sm:px-10 lg:px-16 gap-x-10 md:gap-x-10  xl:gap-x-40">
      {/* logo */}
      <div className="flex items-center mx-auto md:mx-0 py-4 md:py-16 ">
        <div className="flex flex-row gap-x-3 lg:gap-x-8">
          <div>
            <img src={iconLogo} alt="comerce-logo" className="w-full" />
          </div>
          <div className="self-center font-mono font-bold text-4xl tracking-widest text-my-contrast">
            COMERCE
          </div>
        </div>
      </div>

      {/* links actions */}
      <div className="py-9 flex-grow">
        <div className="flex flex-col xl:flex-row gap-x-6 gap-y-6">
          {/* search & catalogue link */}
          <div className="flex-grow flex flex-col">
            <Search />
            <Link
              to="/catalogue"
              className="self-end transition duration-100 mt-0.5 font-sans text-base font-semibold text-gray-100"
            >
              Product Catalogue
            </Link>
          </div>

          {/* account */}
          <div className="self-end xl:place-self-end flex flex-row items-center gap-x-6 ">
            <div className="">
              <Account bgType="accent" />
            </div>
            {/* cart */}
            <div className="">
              <Cart bgType="accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeNav;
