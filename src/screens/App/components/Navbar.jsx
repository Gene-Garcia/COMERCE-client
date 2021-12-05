import React from "react";
import comerceLogo from "../../../shared/images/comerce-logo-blue.webp";
import Search from "../../../shared/Components/navigation/Search";
import Cart from "../../../shared/Components/navigation/Cart";
import { Link } from "react-router-dom";
import Account from "../../../shared/Components/navigation/Account";

function Navbar() {
  return <Prototype />;
  return (
    <div className="w-full bg-gray-50 flex flex-col xs:flex-row items-center justify-between gap-y-5 py-5 px-3 sm:px-5 shadow-lg gap-x-10 md:gap-x-0">
      {/* logo */}
      <Link
        to="/"
        className="flex flex-row xs:flex-col sm:flex-row items-center  "
      >
        <div className="place-self-center">
          <img src={comerceLogo} alt="comerce-logo" width="50" />
        </div>

        <div className="ml-3 xs:ml-0 sm:ml-3 ">
          <p className="font-mono text-2xl font-bold tracking-widest text-black text-opacity-80">
            COMERCE
          </p>
        </div>
      </Link>

      {/* links */}
      <div className="w-full sm:w-3/4 items-center text-black flex flex-row justify-end">
        <div className="w-full flex justify-end flex-col md:flex-row gap-x-6 lg:gap-x-10 gap-y-4">
          {/* search */}
          <div className="flex-grow">
            <Search bgType="contrast" />
          </div>

          {/* account */}
          <div className="flex-shrink flex flex-row items-center justify-end gap-x-4">
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

function Prototype() {
  const links = [
    { name: "Home", to: "/" },
    { name: "Catalogue", to: "/catalogue" },
    { name: "be a Seller", to: "/sign-up/seller" },
  ];

  return (
    <>
      {/* logo and cta */}
      <div className="px-7 py-3 flex flex-row justify-between items-center">
        <div className="inline-flex items-center gap-2">
          <img src={comerceLogo} alt="Logo" className="h-10" />
          <span className="font-mono text-black text-xl tracking-wider">
            COMERCE
          </span>
        </div>

        <div>
          <Account bgType="contrast" />
        </div>
      </div>

      <hr />

      {/* search and links */}
      <div className="px-7 flex flex-row justify-between items-center gap-4 sm:gap-8 md:gap-16 lg:gap-24 bg-gray-50">
        {/* link */}
        <div className="h-12 inline-flex items-stretch gap-3 md:gap-6">
          {links.map((e, i) => (
            <Link
              key={i}
              to={e.to}
              className=" flex items-center text-sm font-semibold text-gray-500 transition duration-200 ease-linear hover:text-my-accent"
            >
              {e.name}
            </Link>
          ))}
        </div>

        <div className="flex-grow">
          <Search bgType="contrast" />
        </div>
      </div>
    </>
  );
}
