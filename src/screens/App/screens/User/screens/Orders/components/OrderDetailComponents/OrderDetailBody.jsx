import React from "react";

function OrderDetailBody({ title, children }) {
  return (
    <div className="rounded-lg shadow-md p-8 w-full">
      <p className="mb-6 font-semibold text-lg text-gray-600">{title}</p>

      <>{children}</>
    </div>
  );
}
export default OrderDetailBody;
