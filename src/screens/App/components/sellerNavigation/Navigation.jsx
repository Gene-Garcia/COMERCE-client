import React from "react";
import comerceWhite from "../../../../shared/images/comerce-logo-white.webp";
import { sidebarLinks } from "../data/linkData";
import { SidebarLink, SidebarGroup } from "./SidebarLinks";
import useWindow from "../../../../hooks/useWindow";
import NavbarLink from "./NavbarLink";

function Navigation() {
  const { width } = useWindow();

  return width >= 768 ? <Sidebar /> : <Navbar />;
}
export default Navigation;

function Sidebar() {
  return (
    <div
      className="fixed h-screen bg-my-accent-shade
 md:w-44 lg:w-56 2xl:w-60"
    >
      <div
        className="px-2 lg:px-4 py-6 lg:py-10 
  flex flex-col justify-center md:gap-1 lg:gap-6"
      >
        <div className="flex md:flex-col lg:flex-row md:gap-1 lg:gap-3 items-center justify-center">
          <img src={comerceWhite} alt="COMERCE Logo" className="w-9 lg:w-11" />
          <h2 className="md:text-lg lg:text-2xl text-gray-50 text-opacity-90 font-mono">
            COMERCE
          </h2>
        </div>

        {/* links */}
        <div className="divide-y divide-gray-500">
          {Object.entries(sidebarLinks).map(([k, v]) => (
            <SidebarGroup key={k} groupName={v.name} links={v.links} />
          ))}

          <div className="py-4">
            <SidebarLink
              svgD="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              name="LOG OUT"
              to="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-my-accent-shade p-3 sm:p-6 gap-2 flex flex-row justify-between items-center">
      <img src={comerceWhite} alt="COMERCE logo" className="w-10" />

      {/* link */}
      <div className="flex flex-row flex-wrap justify-end gap-x-3 sm:gap-x-5 gap-y-2 ">
        {Object.entries(sidebarLinks).map(([k, v]) => (
          <NavbarLink key={k} data={v} />
        ))}
      </div>
    </div>
  );
}
