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
    <table className="table-fixed spaced-table-row w-full min-w-rr35">
      <thead className="">
        <ProductHead />
      </thead>

      <tbody className="">
        {products.map((product) => (
          <ProductData
            data={product}
            key={product._id}
            onClick={() => dispatch(setSelectedProduct(product))}
          />
        ))}
      </tbody>
    </table>
  );
}

export default InventoryTable;
