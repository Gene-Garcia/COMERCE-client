import React from "react";
import useCheckout from "../../../../../../../../hooks/useCheckout";
import { PaymentCTA } from "../utils/CallToAction";

function CashOnDelivery() {
  const { loadPaymentDetails, nextStep } = useCheckout();

  return (
    <div className="space-y-8">
      <div className="space-y-4 font-regular text-md">
        <p className="text-lg">
          You have selected
          <span className="font-semibold text-my-accent">
            {" "}
            cash-on-delivery
          </span>
          payment.
        </p>
        <p>Please wait for your order to arrive at your address.</p>
        <p>
          Upon arrival of the ordered parcel, please pay the exact amount due
          <span className="font-semibold text-my-accent"> P#,###.##</span>
        </p>
      </div>

      <PaymentCTA
        submit={() => {
          loadPaymentDetails("COD", null);
          nextStep(false, 3, "RD");
        }}
        type="COD"
      />
    </div>
  );
}
export default CashOnDelivery;
