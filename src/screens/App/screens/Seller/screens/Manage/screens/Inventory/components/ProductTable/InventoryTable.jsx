import React from "react";
import { ProductData, ProductHead } from "./ProductRow";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../../../../../../../../../redux/Seller/ManageInventory/ManageInventoryAction";

function InventoryTable() {
  // redux
  const dispatch = useDispatch();

  // redux manage inventory reducer & states
  const products = useSelector((state) => state.MANAGE_INVENTORY.products);

  return (
    <table className="w-full">
      <thead className="">
        <ProductHead />
      </thead>

      <tbody className="">
        <div className="space-y-1.5 flex flex-col">
          {products.map((product, i) => (
            <button
              key={i}
              onClick={() => dispatch(setSelectedProduct(product))}
              className="w-full mx-1 my-2 rounded-md odd:bg-gray-100
              cursor-pointer
              transition duration-150 ease-linear
              hover:bg-gray-200"
            >
              <ProductData data={product} />
            </button>
          ))}
        </div>
      </tbody>
    </table>
  );
}

export default InventoryTable;
