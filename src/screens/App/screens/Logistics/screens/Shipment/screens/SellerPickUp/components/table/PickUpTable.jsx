import React from "react";
import { useSelector } from "react-redux";
import SpaciousTable, {
  Body,
  Data,
  Head,
  Heading,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import ProductRow from "./ProductRow";
import ProductSkeleton from "./ProductSkeleton";

const PickUpTable = () => {
  // seller pick up order redux state
  const isLoading = useSelector((state) => state.SELLER_PICK_UP.isLoading);

  return (
    <SpaciousTable>
      <Head grid="grid-cols-14">
        <Heading className="col-span-1 text-center">
          <input type="checkbox" className="" />
        </Heading>
        <Heading className="col-span-1">Business ID</Heading>
        <Heading className="col-span-3">Pick Up Address</Heading>
        <Heading className="col-span-1">Item Quantity</Heading>
        <Heading className="col-span-2">Seller Name</Heading>
        <Heading className="col-span-2">Contact Number</Heading>
        <Heading className="col-span-2">Email</Heading>
        <Heading classNam="col-span-2">Actions</Heading>
      </Head>

      <Body>{isLoading ? <ProductSkeleton /> : <RenderProductRows />}</Body>
    </SpaciousTable>
  );
};
export default PickUpTable;

const RenderProductRows = () => {
  // seller pick up redux state
  const products = useSelector((state) => state.SELLER_PICK_UP.products);

  return products && products.length > 0 ? (
    Object.entries(products).map(([k, v]) => (
      <ProductRow key={k} businessId={k} product={v} />
    ))
  ) : (
    <Row grid="grid-cols-1">
      <Data className="col-span-1 text-center py-9 font-medium text-gray-800">
        No pending orders for pick up.
      </Data>
    </Row>
  );

  // return products.map((product) => <ProductRow key={order._id} order={order} />);
};
