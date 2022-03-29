import React from "react";
import comerceWhite from "../../../../shared/images/comerce-logo-white.webp";
import { SidebarGroup } from "./SidebarLinks";
import useWindow from "../../../../hooks/useWindow";
import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";

function Navigation({ links }) {
  const { width } = useWindow();

  return width >= 768 ? <Sidebar links={links} /> : <Navbar links={links} />;
}
export default Navigation;

function Sidebar({ links }) {
  return (
    <div
      className="sticky h-screen bg-my-accent-shade
 md:w-52 lg:w-56 2xl:w-60"
    >
      <div
        className=" px-2 lg:px-4 py-6 lg:py-10 
  flex flex-col justify-center md:gap-1 lg:gap-6"
      >
        <Link
          to="/"
          className="flex md:flex-col lg:flex-row md:gap-1 lg:gap-3 items-center justify-center"
        >
          <img src={comerceWhite} alt="COMERCE Logo" className="w-9 lg:w-11" />
          <h2 className="md:text-lg lg:text-2xl text-gray-50 text-opacity-90 font-mono">
            COMERCE
          </h2>
        </Link>

        {/* links */}
        <div className="divide-y divide-gray-500">
          {Object.entries(links).map(([k, v]) => (
            <SidebarGroup key={k} groupName={v.name} links={v.links} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Navbar({ links }) {
  return (
    <div className="bg-my-accent-shade p-3 sm:p-4 gap-6 sm:gap-2 flex flex-row justify-between items-center">
      <Link className="w-10" to="/">
        <img
          src={comerceWhite}
          alt="COMERCE logo"
          className="w-full object-contain"
        />
      </Link>

      {/* link */}
      <div className="flex flex-row flex-wrap justify-end gap-x-3 sm:gap-x-5 gap-y-2 ">
        {Object.entries(links).map(([k, v]) => (
          <NavbarLink key={k} data={v} />
        ))}
      </div>
    </div>
  );
}
