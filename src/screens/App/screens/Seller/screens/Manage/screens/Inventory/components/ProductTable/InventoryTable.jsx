import React from "react";
import { ProductData, ProductHead } from "./ProductRow";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../../../../../../../../../redux/Seller/ManageInventory/ManageInventoryAction";
import SpaciousTable, {
  Body,
  Head,
  Heading,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";

function InventoryTable() {
  // redux
  const dispatch = useDispatch();

  // redux manage inventory reducer & states
  const products = useSelector((state) => state.MANAGE_INVENTORY.products);

  return (
    <div className="min-w-rr1 bg-transparent">
      <SpaciousTable>
        <Head grid="grid-cols-5">
          <Heading className="col-span-1">Image</Heading>
          <Heading className="col-span-2">Product Name</Heading>
          <Heading className="col-span-1">Onhand</Heading>
          <Heading className="col-span-1">Inventory</Heading>
        </Head>

        <Body>
          {products.map((product) => (
            <ProductData
              data={product}
              key={product._id}
              onClick={() => dispatch(setSelectedProduct(product))}
            />
          ))}
        </Body>
      </SpaciousTable>
    </div>
  );

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
