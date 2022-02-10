import React from "react";
import { PaymentCTA } from "../utils/CallToAction";
import { formatPrice } from "../../../../../../shared/utils/price";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  loadPaymentDetails,
  nextStep,
} from "../../../../../../redux/Checkout/CheckoutAction";

function CashOnDelivery() {
  // redux
  const dispatch = useDispatch();

  const loadCashOnDelivery = () => {
    batch(() => {
      dispatch(loadPaymentDetails("COD", null));
      dispatch(nextStep(false, 3, "RD"));
    });
  };

  // redux shopping cart reducer and state
  const grandTotal = useSelector((s) => s.SHOPPING_CART.grandTotal);

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

      <PaymentCTA submit={loadCashOnDelivery} type="COD" />
    </div>
  );
}
export default CashOnDelivery;
