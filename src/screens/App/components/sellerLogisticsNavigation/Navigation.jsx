import React from "react";
import comerceWhite from "../../../../shared/images/comerce-logo-white.webp";
import { SidebarGroup } from "./SidebarLinks";
import useWindow from "../../../../hooks/useWindow";
import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";

function Navigation({ links }) {
  const { width } = useWindow();

  return width >= 1024 ? <Sidebar links={links} /> : <Navbar links={links} />;
}
export default Navigation;

function Sidebar({ links }) {
  return (
    <div
      className="h-screen overflow-y-auto bg-accent-shade/95 
                  px-2 lg:px-4 py-6 lg:py-10 
                  flex flex-col justify-between gap-3"
    >
      <Link
        to="/"
        className="flex md:flex-col lg:flex-row md:gap-1 lg:gap-3 items-center justify-center"
      >
        <img src={comerceWhite} alt="COMERCE Logo" className="w-8 lg:w-11" />
        <h2 className="tracking-wide md:text-lg lg:text-2xl text-gray-50 text-opacity-90 font-mono">
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
  );
}

function Navbar({ links }) {
  return (
    <div
      className="bg-accent-shade p-3 sm:p-4 gap-6 sm:gap-2 
                flex flex-row justify-between items-center"
    >
      <Link className="flex items-center justify-center gap-2" to="/">
        <img
          src={comerceWhite}
          alt="COMERCE logo"
          className="w-8 sm:w-10 object-contain"
        />
        <h2 className="hidden md:block text-base tracking-wide text-gray-50 text-opacity-90 font-mono">
          COMERCE
        </h2>
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
