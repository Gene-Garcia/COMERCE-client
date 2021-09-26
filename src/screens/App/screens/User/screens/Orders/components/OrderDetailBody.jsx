import React from "react";

function OrderDetailBody({ title, children }) {
  return (
    <div>
      <p className="mb-6">{title}</p>

      <>{children}</>
    </div>
  );
}
export default OrderDetailBody;
