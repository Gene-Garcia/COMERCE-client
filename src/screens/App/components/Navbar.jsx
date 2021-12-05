import React from "react";
import comerceLogo from "../../../shared/images/comerce-logo-blue.webp";
import Search from "../../../shared/Components/navigation/Search";
import { Link } from "react-router-dom";
import Account from "../../../shared/Components/navigation/Account";

function Navbar() {
  const links = [
    { name: "Home", to: "/" },
    { name: "Catalogue", to: "/catalogue" },
    { name: "be a Seller", to: "/sign-up/seller" },
  ];

  return (
    <>
      {/* logo and cta */}
      <div className="px-4 md:px-7 py-2 xs:py-3 flex flex-row justify-between items-center">
        <div className="inline-flex items-center gap-2">
          <img src={comerceLogo} alt="Logo" className="h-10" />
          <span className="hidden xs:block font-mono text-black text-xl tracking-wider">
            COMERCE
          </span>
        </div>

        <div>
          <Account bgType="contrast" />
        </div>
      </div>

      <hr />

      {/* search and links */}
      <div className="py-1.5 sm:py-0 px-4 md:px-7 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-8 md:gap-12 lg:gap-24 bg-gray-50">
        {/* link */}
        <div className="h-6 sm:h-12 inline-flex items-stretch gap-4 md:gap-6 lg:gap-8">
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

        <div className="order-first sm:order-last flex-grow">
          <Search bgType="contrast" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
