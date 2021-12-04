import React from "react";

function OrderDetailBody({ title, children }) {
  return (
    <div className="rounded-md shadow-md p-6">
      <p className="mb-6 font-semibold text-lg text-gray-600 font-serif">
        {title}
      </p>

      <>{children}</>
    </div>
  );
}
export default OrderDetailBody;
