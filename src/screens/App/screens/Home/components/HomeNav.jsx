import React from "react";
import Cart from "../../../../../shared/Components/navigation/Cart";
import Search from "../../../../../shared/Components/navigation/Search";
import iconLogo from "../../../../../shared/images/comerce-logo-white.webp";
import { Link } from "react-router-dom";
import Account from "../../../../../shared/Components/navigation/Account";

function HomeNav() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full bg-gradient-to-t from-my-accent to-my-accent-mono py-3 md:py-0 px-3 sm:px-10 lg:px-16 gap-y-3 md:gap-x-10 2xl:gap-x-80">
      {/* logo */}
      <div className="flex items-center mx-auto md:mx-0 py-0 sm:py-4 md:py-16 ">
        <div className="flex flex-row justify-center md:justify-start gap-x-5">
          <div className="w-1/5 md:w-1/3 lg:w-2/4 xl:3/4 2xl:w-full ">
            <img src={iconLogo} alt="comerce-logo" className="" />
          </div>
          <div className="self-center font-mono font-bold text-2xl sm:text-4xl tracking-widest text-my-contrast">
            COMERCE
          </div>
        </div>
      </div>

      {/* links actions */}
      <div className="w-full py-0 sm:py-3 md:py-9 flex-col">
        <div className="flex flex-col xl:flex-row gap-x-6 gap-y-4 md:gap-y-6">
          {/* search & catalogue link */}
          <div className="flex-grow flex flex-col">
            <Search bgType="accent" />
          </div>

          {/* account */}
          <div className="self-end xl:place-self-start flex flex-row items-center  gap-x-6 ">
            <div className="">
              <Account bgType="accent" />
            </div>
            {/* cart */}
            <Cart bgType="accent" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeNav;
