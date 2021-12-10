import React from "react";
import { Link } from "react-router-dom";

function SidebarGroup({ groupName, links }) {
  return (
    <div className="space-y-4 py-7">
      <div>
        <p className=" text-gray-300 text-sm font-medium mb-1.5 uppercase">
          {groupName}
        </p>

        <div className="space-y-1.5">
          {Object.entries(links).map(([k, v]) => (
            <SidebarLink key={k} {...v} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ svgD, name, to }) {
  return (
    <Link
      to={to}
      className="w-full py-2 px-3 inline-flex text-white gap-2.5 transition duration-150 ease-linear hover:bg-my-accent rounded"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
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
