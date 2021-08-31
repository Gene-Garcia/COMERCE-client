import React from "react";
import iconLogo from "../../../shared/images/comerce-logo-blue.webp";
import Search from "../../../shared/Components/navigation/Search";
import Cart from "../../../shared/Components/navigation/Cart";
import { Link } from "react-router-dom";
import Account from "../../../shared/Components/navigation/Account";

function Navbar() {
  return (
    <div className="w-full bg-my-contrast flex flex-col xs:flex-row items-center justify-between gap-y-5 py-5 px-3 sm:px-5 shadow-lg ">
      {/* logo */}
      <Link
        component="div"
        to="/"
        className="flex flex-row xs:flex-col sm:flex-row items-center flex-grow-0 lg:flex-grow "
      >
        <div className="place-self-center">
          <img src={iconLogo} alt="comerce-logo" width="50" />
        </div>

        <div className="ml-3 xs:ml-0 sm:ml-3 ">
          <p className="font-mono text-2xl font-bold tracking-widest text-my-dim text-opacity-80">
            COMERCE
          </p>
        </div>
      </Link>

      {/* links */}
      <div className="w-full xs:w-auto justify-self-end text-my-dim xs:flex-grow md:flex-grow-0 place-self-end md:mt-2.5">
        <div className=" self-center flex flex-col md:flex-row gap-x-6 lg:gap-x-10 gap-y-4">
          {/* search */}
          <div className="w-full xs:w-4/5 md:w-auto self-end">
            <Search />
          </div>

          {/* account */}
          <div className="xs:self-end flex flex-row gap-x-4 items-center">
            <div className="">
              <Account bgType="contrast" />
            </div>

            {/* cart */}
            <div className="">
              <Cart bgType="contrast" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
