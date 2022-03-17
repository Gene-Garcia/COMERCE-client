import React from "react";

const OrderStatusButton = () => {
  return (
    <div className="px-4 py-2.5 flex flex-row gap-10">
      <button
        className={`${
          true
            ? "font-semibold text-gray-700 underline"
            : "font-medium text-gray-400"
        }
    transition duration-150 ease-linear
    hover:text-my-accent
    `}
      >
        Placed
      </button>
      <button
        className={`font-medium text-gray-400
    transition duration-150 ease-linear
    hover:text-my-accent`}
      >
        Logistics
      </button>
      <button
        className={`font-medium text-gray-400
    transition duration-150 ease-linear
    hover:text-my-accent`}
      >
        Warehouse
      </button>
      <button
        className={`font-medium text-gray-400
    transition duration-150 ease-linear
    hover:text-my-accent`}
      >
        Rating
      </button>
      <button
        className={`font-medium text-gray-400
    transition duration-150 ease-linear
    hover:text-my-accent`}
      >
        Fulfilled
      </button>
    </div>
  );
};
export default OrderStatusButton;
