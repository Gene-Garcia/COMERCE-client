import React from "react";
import OrderDetailBody from "./OrderDetailBody";
import OrderedProducts from "./OrderedProducts";
import OrderInformation from "./OrderInformation";
import PaymentInformation from "./PaymentInformation";
import ShipmentInformation from "./ShipmentInformation";

function OrderDetails() {
  return (
    <div className="flex flex-col gap-y-6">
      <OrderDetailBody title="Order Information">
        <OrderInformation />
      </OrderDetailBody>

      <OrderDetailBody title="Ordered Products">
        <OrderedProducts />
      </OrderDetailBody>

      <div className="flex flex-row justify-between gap-6">
        <OrderDetailBody title="Payment Information">
          <PaymentInformation />
        </OrderDetailBody>

        <OrderDetailBody title="Shipment Information">
          <ShipmentInformation />
        </OrderDetailBody>
      </div>
    </div>
  );
}
export default OrderDetails;
