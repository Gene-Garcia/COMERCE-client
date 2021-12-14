import React from "react";
import { useManageProduct } from "../../../../../../../../../../../hooks/useManage";

function Navigation() {
  const { updateToggled } = useManageProduct();

  const base =
    "py-2 px-2 text-sm font-semibold text-gray-700 border-b-2 transition duration-250 ease-linear hover:text-my-accent active:shadow-lg active:border-my-accent active:rounded-xl active:bg-gray-100";
  const theme = {
    active: "border-my-accent-shade",
    default: "border-gray-300",
  };
  return (
    <div className="flex flex-row items-stretch gap-5">
      <button
        className={`${base} ${theme.active}`}
        onClick={() => updateToggled("OVERVIEW")}
      >
        Overview
      </button>
      <button
        className={`${base} ${theme.default}`}
        onClick={() => updateToggled("ADD_PRODUCT")}
      >
        Add Product
      </button>
      <div className="flex-grow border-b-2 border-gray-300"></div>
    </div>
  );
}
export default Navigation;
