import React from "react";

function OrderDetailBody({ title, children }) {
  return (
    <div className="rounded-lg shadow-md p-8 ">
      <p className="mb-6 font-semibold text-xl">{title}</p>

      <>{children}</>
    </div>
  );
}
export default OrderDetailBody;
