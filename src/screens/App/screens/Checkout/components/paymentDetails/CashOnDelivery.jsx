import React from "react";

import { batch, useDispatch, useSelector } from "react-redux";
import { loadPaymentDetails } from "../../../../../../redux/Checkout/CheckoutAction";
import { proceedToNextStep } from "../../../../../../redux/Steps/StepsAction";

import { PaymentCTA } from "../utils/CallToAction";
import { formatPrice } from "../../../../../../shared/utils/price";

function CashOnDelivery() {
  // redux
  const dispatch = useDispatch();

  const loadCashOnDelivery = () => {
    batch(() => {
      dispatch(loadPaymentDetails("COD", null));
      dispatch(proceedToNextStep(3));
    });
  };

  // redux shopping cart reducer and state
  const grandTotal = useSelector((s) => s.SHOPPING_CART.grandTotal);

  return (
    <div className="space-y-8">
      <div className="space-y-3.5 font-regular">
        <p>
          You have selected
          <span className="font-semibold text-accent"> cash-on-delivery </span>
          payment.
        </p>
        <p>Please wait for your order to arrive at your address.</p>
        <p>
          Upon arrival of the ordered parcel, please pay the exact amount due{" "}
          <span className="font-semibold text-accent">
            {`₱${formatPrice(grandTotal)}`}
          </span>
        </p>
      </div>

      <PaymentCTA submit={loadCashOnDelivery} type="COD" />
    </div>
  );
}
export default CashOnDelivery;
