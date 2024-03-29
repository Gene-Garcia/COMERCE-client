import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAllOrderCheck } from "../../../../../../../../../../redux/Seller/PackOrders/PackOrdersActions";

import SpaciousTable, {
  Body,
  Data,
  Head,
  Heading,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import OrderPackRow from "./PackOrderRow";
import PackOrderSkeleton from "./PackOrderSkeleton";

const PackOrderTable = () => {
  // redux
  const dispatch = useDispatch();

  // pack order reducer & state
  const isLoading = useSelector((state) => state.PACK_ORDERS.isLoading);

  const onCheckboxChange = (e) => {
    dispatch(toggleAllOrderCheck(e.target.checked));
  };

  return (
    <SpaciousTable>
      <Head grid="grid-cols-12">
        <Heading className="col-span-1 text-center">
          <input type="checkbox" onChange={onCheckboxChange} />
        </Heading>
        <Heading className="col-span-1">Order ID</Heading>
        <Heading className="col-span-3">Items</Heading>
        <Heading className="col-span-2">Customer</Heading>
        <Heading className="col-span-1">Order Date</Heading>
        <Heading className="col-span-1">Standard ETA</Heading>
        <Heading className="col-span-2">Day(s) remaining</Heading>
        <Heading className="col-span-1">Actions</Heading>
      </Head>

      <Body>{isLoading ? <PackOrderSkeleton /> : <RenderPackOrders />}</Body>
    </SpaciousTable>
  );
};

const RenderPackOrders = () => {
  // redux pack orders
  const orders = useSelector((s) => s.PACK_ORDERS.orders);

  return orders && orders.length > 0 ? (
    orders.map((order) => <OrderPackRow key={order._id} order={order} />)
  ) : (
    <Row grid="grid-cols-1">
      <Data className="col-span-1 text-center text-md font-medium py-8 text-neutral-800">
        No pending orders to be packed.
      </Data>
    </Row>
  );
};
export default PackOrderTable;
