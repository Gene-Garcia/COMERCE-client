import React from "react";
import useCheckout from "../../../../../../../hooks/useCheckout";
import PaymentMethod, {
  CashOnDelivery,
  CreditCard,
  PayPal,
} from "./PaymentMethod";
import visaIcon from "../../../../../../../shared/images/visa.png";
import mastercardIcon from "../../../../../../../shared/images/mastercard.png";
import paypalIcon from "../../../../../../../shared/images/paypal.png";

function PaymentDetails() {
  /* Context state variables used to toggle the payment methods after onclick */
  const { toggledPayment } = useCheckout();

  return (
    <div className="rounded-md shadow-md py-4 px-5 flex flex-col justify-evenly gap-y-8">
      <div className="flex flex-row gap-x-2">
        <Options />
      </div>

      <p className="text-lg text-gray-600 font-medium mb-0">Payment Details</p>

      <div className={toggledPayment === "COD" ? "block" : "hidden"}>
        <CashOnDelivery />
      </div>

      <div className={toggledPayment === "CC" ? "block" : "hidden"}>
        <CreditCard />
      </div>

      <div className={toggledPayment === "PP" ? "block" : "hidden"}>
        <PayPal />
      </div>
    </div>
  );
}
export default PaymentDetails;

function Options() {
  const { toggledPayment } = useCheckout();

  return (
    <>
      <PaymentMethod active={toggledPayment === "COD"} id="COD">
        <span>Cash on Delivery</span>
      </PaymentMethod>

      <PaymentMethod active={toggledPayment === "CC"} id="CC">
        <div className="flex flex-row gap-x-2">
          <img src={visaIcon} className="w-16 object-scale-down" />
          <img src={mastercardIcon} className="w-12 object-scale-down" />
        </div>
      </PaymentMethod>

      <PaymentMethod active={toggledPayment === "PP"} id="PP">
        <img src={paypalIcon} className="w-20 object-scale-down" />
      </PaymentMethod>
    </>
  );
}
