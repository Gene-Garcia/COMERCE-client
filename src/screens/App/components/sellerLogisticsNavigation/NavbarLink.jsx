import React from "react";
import Dropdown from "./Dropdown";

function NavbarLink({ data }) {
  return (
    <div className="relative group">
      <div className="inline-flex text-white items-center gap-0.5">
        <span className="font-semibold uppercase text-sm">{data.name}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <Dropdown name={data.name} links={data.links} />
    </div>
  );
}
export default NavbarLink;
