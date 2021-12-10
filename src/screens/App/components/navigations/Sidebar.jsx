import React from "react";
import comerceWhite from "../../../../shared/images/comerce-logo-white.webp";
import { sidebarLinks } from "../data/linkData";
import { SidebarLink, SidebarGroup } from "./utils/SidebarLinks";

function Sidebar() {
  return (
    <div className="w-72 bg-my-accent-shade h-screen">
      <div className="p-4 flex flex-col justify-center gap-6">
        <div className="inline-flex gap-4 items-center justify-center">
          <img src={comerceWhite} alt="COMERCE Logo" className="w-16" />
          <h2 className="text-2xl text-white font-mono">COMERCE</h2>
        </div>

        {/* links */}
        <div className="divide-y">
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
export default Sidebar;
