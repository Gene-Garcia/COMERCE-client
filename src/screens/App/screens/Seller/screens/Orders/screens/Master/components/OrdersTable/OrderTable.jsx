import React, { useState } from "react";
import {
  Action,
  ActionGroup,
} from "../../../../../../../../../../shared/Components/table/TableActions";
import { methods } from "../../../../../../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";
import CollapseRow from "./CollapseRow";
import { useSelector } from "react-redux";
import SpaciousTable, {
  Body,
  Data,
  Head,
  Heading,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import OrderSkeleton from "./OrderSkeleton";

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

      <Body>{loading ? <OrderSkeleton /> : <RenderOrderRows />}</Body>
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

const OrderRow = ({ data }) => {
  // deconstruct
  const {
    _id: orderId,
    shipmentDetails: {
      firstName,
      lastName,
      province,
      cityMunicipality,
      barangay,
    },
    paymentMethod,
    orderedProducts,
  } = data;

  // computer order total
  let orderTotal = 0;
  orderedProducts.forEach((product) => {
    orderTotal = orderTotal + (product.quantity + product.priceAtPoint);
  });

  const [toggled, setToggled] = useState(false);

  return (
    <>
      <Row grid="grid-cols-9">
        <Data className="col-span-1 text-xs font-light break-all">
          {orderId}
        </Data>
        <Data className="col-span-2">{`${firstName} ${lastName}`}</Data>
        <Data className="col-span-2">{`${barangay}, ${cityMunicipality}, ${province}`}</Data>
        <Data className="col-span-1 text-my-accent">
          ₱{formatPrice(orderTotal)}
        </Data>
        <Data className="col-span-1">{methods[paymentMethod]}</Data>
        <Data className="col-span-2">
          <ActionGroup>
            <Action type="BUTTON" text="Edit" onClick={() => {}} />
            <Action
              type="BUTTON"
              text="Ordered Products"
              onClick={() => {
                setToggled((prev) => !prev);
              }}
            />
          </ActionGroup>
        </Data>
      </Row>

      {toggled && (
        <Row grid="grid-cols-9">
          <CollapseRow orderId={data._id} />
        </Row>
      )}
    </>
  );
};
