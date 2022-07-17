import React from "react";
import { Link } from "react-router-dom";

function SidebarGroup({ groupName, links }) {
  return (
    <div className="py-6 xl:py-8">
      <p className="uppercase text-gray-50 text-opacity-50 text-xs font-semibold mb-2">
        {groupName}
      </p>

      <div className="space-y-1.5">
        {Object.entries(links).map(([k, v]) => (
          <SidebarLink key={k} {...v} />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ svg, name, to }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-white
      w-full py-1.5 md:px-1 lg:px-3 rounded
      inline-flex items-center md:gap-1.5 lg:gap-2 
      transition duration-150 ease-linear 
      hover:bg-accent-tone"
    >
      {svg}

      {name}
    </Link>
  );
}
export { SidebarGroup, SidebarLink };
