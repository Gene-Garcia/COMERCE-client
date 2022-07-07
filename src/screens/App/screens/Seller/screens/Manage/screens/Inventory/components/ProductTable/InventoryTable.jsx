import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../../../../../../../../../redux/Seller/ManageInventory/ManageInventoryAction";
import SpaciousTable, {
  Body,
  Data,
  Head,
  Heading,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import InventorySkeleton from "./InventorySkeleton";

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
          {isLoading ? <InventorySkeleton /> : <RenderInventoryRows />}
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

const ProductData = ({
  onClick,
  data: { imageAddress, item, onHand, inventory },
}) => {
  return (
    <Row grid="grid-cols-5" onClick={onClick}>
      <Data className="col-span-1">
        <img
          alt="product"
          src={imageAddress}
          className="w-14 object-contain m-auto"
        />
      </Data>

      <Data className="col-span-2 break-words font-medium">{item}</Data>

      <Data className="col-span-1 text-my-accent">{onHand}</Data>

      <Data className="col-span-1 text-gray-700">{inventory}</Data>
    </Row>
  );
};

export { ProductData };
