import React from "react";
import { useSelector } from "react-redux";
import SpaciousTable, {
  Body,
  Data,
  Head,
  Heading,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import Loading from "../../../../../../../../../../shared/Loading/Loading";
import OrderRow from "./OrderRow";

const OrderTable = () => {
  // redux orders master reducer & state
  const loading = useSelector((state) => state.ORDERS_MASTER.pageLoading);

  return (
    <SpaciousTable>
      <Head grid="grid-cols-9">
        <Heading className="col-span-1">Order ID</Heading>
        <Heading className="col-span-2">Customer</Heading>
        <Heading className="col-span-2">Address</Heading>
        <Heading className="col-span-1">Order Total</Heading>
        <Heading className="col-span-1">Payment Method</Heading>
        <Heading className="col-span-2">Actions</Heading>
      </Head>

      <Body>
        {loading ? (
          <div className="p-8">
            <Loading />
          </div>
        ) : (
          <RenderOrderRows />
        )}
      </Body>
    </SpaciousTable>
  );
};
export default OrderTable;

const RenderOrderRows = () => {
  // redux orders master reducer & state
  const orders = useSelector((state) => state.ORDERS_MASTER.orders);

  return (
    <>
      {orders.length <= 0 ? (
        <Row className="grid-cols-9">
          <Data className="col-span-9">
            <div className="py-8 text-center">
              <p>No Orders</p>
            </div>
          </Data>
        </Row>
      ) : (
        orders.map((order, i) => <OrderRow key={order._id} data={order} />)
      )}
    </>
  );
};
