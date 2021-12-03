import React from "react";
import useCheckout from "../../../../../../hooks/useCheckout";
import { useShoppingCart } from "../../../../../../hooks/useCart";
import { PaymentCTA } from "../utils/CallToAction";
import { formatPrice } from "../../../../../../shared/utils/price";

function CashOnDelivery() {
  // Checkout context
  const { loadPaymentDetails, nextStep } = useCheckout();

  // cart context
  const { grandTotal } = useShoppingCart();

  return (
    <div className="space-y-8">
      <div className="space-y-3 font-regular">
        <p>
          You have selected
          <span className="font-semibold text-my-accent">
            {" "}
            cash-on-delivery{" "}
          </span>
          payment.
        </p>
        <p>Please wait for your order to arrive at your address.</p>
        <p>
          Upon arrival of the ordered parcel, please pay the exact amount due{" "}
          <span className="font-semibold text-my-accent">
            {`₱${formatPrice(grandTotal)}`}
          </span>
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
