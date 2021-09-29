import React from "react";
import useOrders from "../../../../../../../../hooks/useOrders";
import {
  displayPaymentInfo,
  methods as pMethods,
} from "../../../../../../../../shared/utils/payment";
import InformationBody from "./InformationBody";

function PaymentInformation() {
  const { order, loading, computeSubTotal } = useOrders();

  return (
    <>
      {loading || !order ? (
        <></>
      ) : (
        <>
          <div className="flex flex-row gap-24 mb-6">
            {/* subtotal */}
            <div>
              <InformationBody
                title="Subtotal"
                value={`P${computeSubTotal()}`}
              />
            </div>
            {/* shipping fee */}
            <div>
              <InformationBody
                title="Shipping Fee"
                value={`P${order.shippingFee}`}
              />
            </div>

            {/* grand total */}
            <div>
              <InformationBody
                title="Grand Total after shipping fee"
                value={`P${order.shippingFee + computeSubTotal()}`}
              />
            </div>
          </div>

          <div>
            <p className="font-medium text-gray-800 text-opacity-80 text-lg px-2">
              <span className="text-my-accent text-opacity-80">
                {pMethods[order.paymentMethod]}
              </span>{" "}
              payment
            </p>
            <p className="font-medium text-gray-800 text-lg bg-gray-100 rounded-md shadow-sm px-2 py-.05">
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
