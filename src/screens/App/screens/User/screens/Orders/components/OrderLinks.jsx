import React, { useEffect } from "react";
import useOrders from "../../../../../../../hooks/useOrders";

function OrderLinks() {
  const { orders } = useOrders();

  return (
    <div className="rounded-lg shadow-lg p-8 ">
      <div className="flex flex-row items-center gap-6 mb-8">
        <p className="font-medium text-lg text-gray-600">Orders</p>
        <p className="font-base text-gray-400">Select to view details</p>
      </div>

      {/* link buttons */}
      <div className="flex flex-col gap-y-6">
        {orders.map((e) => (
          <OrderLink key={e._id} id={e._id} date={e.orderDate} />
        ))}
      </div>
    </div>
  );
}
export default OrderLinks;

function OrderLink({ id, date }) {
  function formatDate(d) {
    const strMonth = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    const date = new Date(d);
    const month = date.getMonth();
    const day = "" + date.getDate();
    const year = "" + date.getFullYear();

    return `${strMonth[month]} ${day}, ${year}`;
  }

  return (
    <div
      className="group flex flex-row items-center justify-between"
      onClick={() => alert(`id: ${id}`)}
    >
      {/* id and date */}
      <div>
        <p className="transition duration-300 font-medium text-md text-gray-700 group-hover:text-my-accent group-hover:underline">
          {id}
        </p>
        <p className="font-regular text-md text-gray-400">{formatDate(date)}</p>
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
