import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleProductSubPage } from "../../../../../../../../../../../redux/Seller/ManageProduct/ManageProductAction";

function Navigation() {
  // redux
  const dispatch = useDispatch();

  // redux manage product reducer & states
  const toggledProductSubPage = useSelector(
    (state) => state.toggledProductSubPage
  );

  return (
    <div className="px-2 inline-flex border-b border-gray-300 w-full gap-5">
      <Button
        text="Overview"
        state={toggledProductSubPage === "OVERVIEW" ? "active" : "default"}
        onClick={() => dispatch(toggleProductSubPage("OVERVIEW"))}
      />

      <Button
        text="Add Product"
        state={toggledProductSubPage === "ADD_PRODUCT" ? "active" : "default"}
        onClick={() => dispatch(toggleProductSubPage("ADD_PRODUCT"))}
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
      active:text-accent"
        onClick={onClick}
      >
        {text}
      </button>
      <div className={`mx-3 border-b-2 ${theme[state]}`}></div>
    </div>
  );
}
