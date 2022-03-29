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

function SidebarLink({ svgD, name, to }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-white
      w-full py-1.5 md:px-1 lg:px-3 rounded
      inline-flex items-center md:gap-1.5 lg:gap-2 
      transition duration-150 ease-linear 
      hover:bg-my-accent-tone"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 lg:h-5 w-4 lg:w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={svgD}
        />
      </svg>
      {name}
    </Link>
  );
}
export { SidebarGroup, SidebarLink };
