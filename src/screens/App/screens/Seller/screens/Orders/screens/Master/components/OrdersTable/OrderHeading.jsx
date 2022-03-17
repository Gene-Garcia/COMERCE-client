import React from "react";

const OrderHeading = () => {
  return (
    <thead className="">
      <tr className="text-gray-400 uppercase text-sm">
        <th className="p-3">Order ID</th>
        <th className="p-3">Customer</th>
        <th className="p-3">Address</th>
        <th className="p-3">Order Total</th>
        <th className="p-3">Payment Method</th>
        <th className="p-3">Actions</th>
      </tr>
    </thead>
  );
};
export default OrderHeading