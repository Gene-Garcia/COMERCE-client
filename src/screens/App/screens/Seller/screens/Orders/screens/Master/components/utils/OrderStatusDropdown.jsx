import React from "react";
import orderStatuses from "../../../../../../../../../../shared/utils/orderStatuses";

const OrderStatusDropdown = () => {
  return (
    <div
      className="w-max bg-my-white-tint rounded shadow p-1.5
                 transition duration-200 ease-linear
                 border border-transparent
                 focus-within:border-my-accent
                 hover:shadow-md"
    >
      <select
        className="w-full bg-transparent
                 text-sm font-medium text-gray-700
                 focus:outline-none"
      >
        {Object.entries(orderStatuses).map(([k, v]) => (
          <option key={k}>{v}</option>
        ))}
      </select>
    </div>
  );
};
export default OrderStatusDropdown;
