import React from "react";
import OrderHeading from "./OrderHeading";
import OrderRow from "./OrderRow";

const OrderTable = () => {
  return (
    <table className="w-full table-fixed">
      <OrderHeading />

      <tbody className="text-center">
        <RenderOrderRows />
      </tbody>
    </table>
  );
};
export default OrderTable;

const RenderOrderRows = () => {
  return (
    <>
      <OrderRow data="" />
      <OrderRow data="" />
      <OrderRow data="" />
      <OrderRow data="" />
    </>
  );
};
