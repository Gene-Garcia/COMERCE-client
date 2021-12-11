import React from "react";

function Navigation() {
  const base =
    "pt-3 pb-1 px-2 text-sm font-semibold text-gray-500 border-b-2 rounded-t-xl transition duration-200 ease-linear hover:text-my-accent active:shadow-lg active:border-my-accent";
  const theme = {
    active: "border-my-accent-shade",
    default: "border-gray-300",
  };
  return (
    <div className="flex flex-row items-stretch gap-5">
      <button className={`${base} ${theme.active}`}>Overview</button>
      <button className={`${base} ${theme.default}`}>Add Product</button>
      <div className="flex-grow border-b-2 border-gray-300"></div>
    </div>
  );
}
export default Navigation;
