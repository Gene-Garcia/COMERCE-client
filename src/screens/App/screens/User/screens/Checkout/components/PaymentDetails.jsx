import React from "react";
import useCheckout from "../../../../../../../hooks/useCheckout";
import visaIcon from "../../../../../../../shared/images/visa.png";
import mastercardIcon from "../../../../../../../shared/images/mastercard.png";
import paypalIcon from "../../../../../../../shared/images/paypal.png";
import PMBody from "./paymentDetails/MethodBody";
import CashOnDelivery from "./paymentDetails/CashOnDelivery";
import CreditCard from "./paymentDetails/CreditCard";
import PayPal from "./paymentDetails/PayPal";

function PaymentDetails() {
  /* Context state variables used to toggle the payment methods after onclick */
  const { toggledPayment } = useCheckout();

  return (
    <div className="rounded-md shadow-md py-4 px-5 flex flex-col justify-evenly gap-y-8">
      <div className=" flex flex-col md:flex-row gap-x-2 gap-y-2">
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
      <PMBody active={toggledPayment === "COD"} id="COD">
        <span>Cash on Delivery</span>
      </PMBody>

      <PMBody active={toggledPayment === "CC"} id="CC">
        <div className="flex flex-row gap-x-2">
          <img
            src={visaIcon}
            className="w-16 object-scale-down"
            alt="visa-logo"
          />
          <img
            src={mastercardIcon}
            className="w-12 object-scale-down"
            alt="mastercard-logo"
          />
        </div>
      </PMBody>

      <PMBody active={toggledPayment === "PP"} id="PP">
        <img
          src={paypalIcon}
          className="w-20 object-scale-down"
          alt="paypal-logo"
        />
      </PMBody>
    </>
  );
}
