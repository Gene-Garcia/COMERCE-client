import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAllOrders } from "../../../../../../../../../../redux/Seller/ShipOrders/ShopOrdersAction";
import SpaciousTable, {
  Body,
  Head,
  Heading,
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
      <Head grid="grid-cols-12">
        <Heading className="col-span-1 text-center">
          <input
            type="checkbox"
            className="my-auto"
            onChange={onCheckboxChange}
          />
        </Heading>
        <Heading className="col-span-1">Order ID</Heading>
        <Heading className="col-span-4">Items</Heading>
        <Heading className="col-span-2">Address</Heading>
        <Heading className="col-span-2">Mode of Payment</Heading>
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

  return orders.map((order) => <OrderRow key={order._id} order={order} />);
};
