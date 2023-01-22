import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSelectedOrder } from "../../../../../../../redux/OrderHistory/OrderHistoryAction";
import { formatDate } from "../../../../../../../shared/utils/date";

function OrderLinks() {
  return (
    <div className="p-7 sm:p-5 lg:p-7">
      <div className="flex flex-row justify-between flex-wrap items-center gap-x-6 mb-6">
        <p className="font-medium text-lg text-gray-600 mb-0 font-serif">
          Orders
        </p>
        <p className="text-sm text-gray-500 mb-0">Select to view details</p>
      </div>

      {/* link buttons */}
      <div className="flex flex-row md:flex-col flex-wrap md:flex-wrap-none justify-between gap-2 sm:gap-5">
        <RenderOrders />
      </div>
    </div>
  );
}
export default OrderLinks;

function OrderLink({ order }) {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  return (
    <div
      className="group flex flex-row items-center justify-between"
      onClick={() => dispatch(setSelectedOrder(order))}
    >
      {/* id and date */}
      <div className="flex-grow">
        <p className="transition duration-200 font-medium text-sm text-gray-700 group-hover:text-accent">
          {order._id}
        </p>

        <p className="font-semibold text-sm text-gray-300">
          {formatDate(order.orderDate)}
        </p>

        {/* rate button which redirects user to rate this unrated or for review product */}
        {order.status.toUpperCase() === "REVIEW" && (
          <button
            className="mt-1 bg-gray-200 px-2.5 py-1 rounded text-sm font-medium text-gray-800 transition duration-200 ease-linear hover:bg-blue-200"
            onClick={() => history.push("/user/orders/rate")}
          >
            Rate
          </button>
        )}
      </div>

      {/* arrow chevron */}
      <div className="hidden xl:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 h-5 w-5 group-hover:text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
}

/* singple responsibility principle components */

const RenderOrders = () => {
  // redux order reducer & state
  const orders = useSelector((s) => s.ORDER_HISTORY.orders);

  return (
    <>
      {orders.length > 0 ? (
        orders.map((order) => <OrderLink key={order._id} order={order} />)
      ) : (
        <>Loading...</>
      )}
    </>
  );
};
