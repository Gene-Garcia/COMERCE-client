import React from "react";
import { ProductData, ProductHead } from "./ProductRow";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../../../../../../../../../redux/Seller/ManageInventory/ManageInventoryAction";
import SpaciousTable, {
  Body,
  Head,
  Heading,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import Loading from "../../../../../../../../../../shared/Loading/Loading";

function InventoryTable() {
  // redux manage inventory reducer & states
  const isLoading = useSelector((state) => state.MANAGE_INVENTORY.isLoading);

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
          {isLoading ? (
            <div className="py-8 bg-transparent">
              <Loading />
            </div>
          ) : (
            <RenderInventoryRows />
          )}
        </Body>
      </SpaciousTable>
    </div>
  );
}
export default InventoryTable;

const RenderInventoryRows = () => {
  // redux
  const dispatch = useDispatch();

  // redux manage inventory reducer & states
  const products = useSelector((state) => state.MANAGE_INVENTORY.products);

  return products.map((product) => (
    <ProductData
      data={product}
      key={product._id}
      onClick={() => dispatch(setSelectedProduct(product))}
    />
  ));
};
