import React from "react";

function OrderLinks() {
  return (
    <div className="rounded-lg shadow-lg p-8 ">
      <div className="flex flex-row items-center gap-6 mb-8">
        <p className="font-medium text-lg text-gray-600">Orders</p>
        <p className="font-base text-gray-400">Select to view details</p>
      </div>

      {/* link buttons */}
      <div className="flex flex-col gap-y-6">
        <OrderLink />
        <OrderLink />
        <OrderLink />
        <OrderLink />
        <OrderLink />
      </div>
    </div>
  );
}
export default OrderLinks;

function OrderLink() {
  return (
    <div
      className="group flex flex-row items-center justify-between"
      onClick={() => alert("Clicked")}
    >
      {/* id and date */}
      <div>
        <p className="transition duration-300 font-medium text-md text-gray-700 group-hover:text-my-accent group-hover:underline">
          61330ffda979f0da4b4a3f4
        </p>
        <p className="font-regular text-md text-gray-400">SEP 18 2021</p>
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
