import React from "react";
import { useHistory } from "react-router-dom";
import useOrders from "../../../../../../../hooks/useOrders";
import { formatDate } from "../../../../../../../shared/utils/date";

function OrderLinks() {
  const { orders } = useOrders();

  return (
    <div className="p-8 ">
      <div className="flex flex-row justify-between flex-wrap items-center gap-6 mb-8">
        <p className="font-medium text-lg text-gray-600 mb-0">Orders</p>
        <p className="text-sm text-gray-500 mb-0">Select to view details</p>
      </div>

      {/* link buttons */}
      <div className="flex flex-col gap-y-6">
        {orders.map((e) => (
          <OrderLink
            key={e._id}
            id={e._id}
            date={e.orderDate}
            status={e.status}
          />
        ))}
      </div>
    </div>
  );
}
export default OrderLinks;

function OrderLink({ id, date, status }) {
  const history = useHistory();
  // Orders context
  const { getOrderById, setSelectedOrder } = useOrders();

  const selectOrder = () => {
    setSelectedOrder(getOrderById(id));
  };

  return (
    <div
      className="group flex flex-row items-center justify-between"
      onClick={selectOrder}
    >
      {/* id and date */}
      <div>
        <p className="transition duration-200 font-medium text-md text-gray-600 group-hover:text-my-accent">
          {id}
        </p>

        <div className="flex flex-wrap flex-row justify-between">
          <p className="font-regular text-sm text-gray-400">
            {formatDate(date)}
          </p>

          {status.toLowerCase() === "review" ? (
            <button
              className="bg-gray-200 px-2.5 rounded-md font-medium text-gray-600 transition duration-200 ease-linear hover:bg-blue-200"
              onClick={() => history.push("/user/orders/rate")}
            >
              Rate
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* arrow chevron */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 h-5 w-5 group-hover:text-my-accent"
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
