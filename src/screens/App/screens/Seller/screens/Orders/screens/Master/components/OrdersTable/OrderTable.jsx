import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../../../../../../../../../shared/Loading/Loading";
import OrderHeading from "./OrderHeading";
import OrderRow from "./OrderRow";

const OrderTable = () => {
  // redux orders master reducer & state
  const loading = useSelector((state) => state.ORDERS_MASTER.pageLoading);

  return (
    <table className="w-full table-fixed min-w-rr60">
      <OrderHeading />

      <tbody className="text-center">
        {loading ? (
          <tr className="">
            <td colSpan={6} className="h-44 text-center">
              <Loading />
            </td>
          </tr>
        ) : (
          <RenderOrderRows />
        )}
      </tbody>
    </table>
  );
};
export default OrderTable;

const RenderOrderRows = () => {
  // redux orders master reducer & state
  const orders = useSelector((state) => state.ORDERS_MASTER.orders);

  return (
    <>
      {orders.length <= 0 ? (
        <tr>
          <td colSpan={6}>
            <h1>No Orders</h1>
          </td>
        </tr>
      ) : (
        orders.map((order, i) => (
          <OrderRow key={order._id} data={order} stripe={i % 2 !== 0} />
        ))
      )}
    </>
  );
};
