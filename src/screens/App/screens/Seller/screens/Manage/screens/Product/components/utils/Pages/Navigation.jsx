import React from "react";
import { useManageProduct } from "../../../../../../../../../../../hooks/useManage";

function Navigation() {
  const { updateToggled, toggled } = useManageProduct();

  return (
    <div className="px-2 inline-flex border-b border-gray-300 w-full gap-5">
      <Button
        text="Overview"
        state={toggled === "OVERVIEW" ? "active" : "default"}
        onClick={() => updateToggled("OVERVIEW")}
      />

      <Button
        text="Add Product"
        state={toggled === "ADD_PRODUCT" ? "active" : "default"}
        onClick={() => updateToggled("ADD_PRODUCT")}
      />
    </div>
  );
}
export default Navigation;

function Button({ text, state, onClick }) {
  const theme = {
    active: "border-gray-900",
    default: "border-transparent",
  };
  return (
    <div className="space-y-1">
      <button
        className="text-sm font-semibold text-gray-700 
      rounded px-2 py-1 
      transition duration-150 ease-linear 
      hover:bg-gray-200 hover:shadow-sm
      active:text-my-accent"
        onClick={onClick}
      >
        {text}
      </button>
      <div className={`mx-3 border-b-2 ${theme[state]}`}></div>
    </div>
  );
}
