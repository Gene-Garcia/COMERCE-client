import React from "react";
import OrderDetailBody from "./OrderDetailComponents/OrderDetailBody";
import OrderedProducts from "./OrderDetailComponents/OrderedProducts";
import OrderInformation from "./OrderDetailComponents/OrderInformation";
import PaymentInformation from "./OrderDetailComponents/PaymentInformation";
import ShipmentInformation from "./OrderDetailComponents/ShipmentInformation";

function OrderDetails() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-10">
      <OrderDetailBody title="Order Information">
        <OrderInformation />
      </OrderDetailBody>

      <OrderDetailBody title="Ordered Products">
        <OrderedProducts />
      </OrderDetailBody>

      <div className="flex flex-col xl:flex-row justify-between gap-6">
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
