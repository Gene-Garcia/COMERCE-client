import React from "react";
import InformationBody from "./InformationBody";

function PaymentInformation() {
  return (
    <>
      <div className="flex flex-row gap-24 mb-6">
        {/* subtotal */}
        <div>
          <InformationBody title="Subtotal" value="P17,680.00" />
        </div>
        {/* shipping fee */}
        <div>
          <InformationBody title="Shipping Fee" value="P70.00" />
        </div>

        {/* grand total */}
        <div>
          <InformationBody
            title="Grand Total after shipping fee"
            value="P17,750.00"
          />
        </div>
      </div>

      <div>
        <p className="font-medium text-gray-800 text-lg">
          <span className="text-my-accent">Payment Method</span> payment
        </p>
        <p className="font-medium text-gray-800 text-lg">
          9887 7898 7985 | johndoe@paypal.com
        </p>
      </div>
    </>
  );
}
export default PaymentInformation;
