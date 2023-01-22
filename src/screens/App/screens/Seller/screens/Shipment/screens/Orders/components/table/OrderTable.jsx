import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAllOrders } from "../../../../../../../../../../redux/Seller/ShipOrders/ShipOrdersAction";
import SpaciousTable, {
  Body,
  Data,
  Head,
  Heading,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import ShipOrdersSkeleton from "./ShipOrdersSkeleton";
import OrderRow from "./OrderRow";

const OrderTable = () => {
  // redux
  const dispatch = useDispatch();

  // redux ship order reducer & state
  const isLoading = useSelector((state) => state.SHIP_ORDERS.isLoading);

  const onCheckboxChange = (e) => {
    dispatch(checkAllOrders(e.target.checked));
  };

  return (
    <SpaciousTable>
      <Head grid="grid-cols-15">
        <Heading className="col-span-1 text-center">
          <input
            type="checkbox"
            className="my-auto"
            onChange={onCheckboxChange}
          />
        </Heading>
        <Heading className="col-span-1">ID</Heading>
        <Heading className="col-span-3">Customer</Heading>
        <Heading className="col-span-2">Date Ordered</Heading>
        <Heading className="col-span-2">Lead Order Time</Heading>
        <Heading className="col-span-2">Address</Heading>
        <Heading className="col-span-2">Payment</Heading>
        <Heading className="col-span-2">Actions</Heading>
      </Head>

      <Body>{isLoading ? <ShipOrdersSkeleton /> : <RenderOrderRows />}</Body>
    </SpaciousTable>
  );
};
export default OrderTable;

const RenderOrderRows = () => {
  // redux ship orders reducer & state
  const orders = useSelector((state) => state.SHIP_ORDERS.pendingOrders);

  return orders && orders.length > 0 ? (
    orders.map((order) => <OrderRow key={order._id} order={order} />)
  ) : (
    <Row grid="grid-cols-1">
      <Data className="col-span-1 text-center font-medium text-gray-700 py-9">
        No pending orders for shipment
      </Data>
    </Row>
  );
};
