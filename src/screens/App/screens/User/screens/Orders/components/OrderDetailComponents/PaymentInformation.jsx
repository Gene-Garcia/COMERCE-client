import React from "react";
import { useSelector } from "react-redux";
import {
  displayPaymentInfo,
  methods as pMethods,
} from "../../../../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../../../../shared/utils/price";
import InformationBody from "./InformationBody";

function PaymentInformation() {
  // redux order reducer & states
  const loading = useSelector((s) => s.ORDER_HISTORY.loading);
  const order = useSelector((s) => s.ORDER_HISTORY.selectedOrder);

  const computeSubTotal = () => {
    let subTotal = 0;
    order.orderedProducts.forEach(
      (e) => (subTotal += e.priceAtPoint * e.quantity)
    );
    return subTotal;
  };

  return (
    <>
      {loading || !order ? (
        <>Loading...</>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row gap-y-4 xl:gap-y-24 gap-x-16 2xl:gap-x-24 mb-6">
            {/* subtotal */}
            <div>
              <InformationBody
                title="Subtotal"
                value={`₱${formatPrice(computeSubTotal())}`}
              />
            </div>
            {/* shipping fee */}
            <div>
              <InformationBody
                title="Shipping Fee"
                value={`₱${formatPrice(order.shippingFee)}`}
              />
            </div>

            {/* grand total */}
            <div>
              <InformationBody
                title="Grand Total after shipping fee"
                value={`₱${formatPrice(order.shippingFee + computeSubTotal())}`}
              />
            </div>
          </div>

          <div>
            <p className="font-medium text-gray-800 text-opacity-80 text-md">
              <span className="text-accent text-opacity-80">
                {pMethods[order.paymentMethod]}
              </span>{" "}
              payment
            </p>
            <p className="font-regular text-gray-800 bg-gray-100 rounded-md shadow-sm px-2 py-1">
              {displayPaymentInfo(
                order.paymentMethod,
                order.paymentInformation
              )}
            </p>
          </div>
        </>
      )}
    </>
  );
}
export default PaymentInformation;
