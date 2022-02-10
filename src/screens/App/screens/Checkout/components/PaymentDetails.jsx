import React from "react";
import visaIcon from "../../../../../shared/images/visa.png";
import mastercardIcon from "../../../../../shared/images/mastercard.png";
import paypalIcon from "../../../../../shared/images/paypal.png";
import PaymentMethodBody from "./paymentDetails/MethodBody";
import CashOnDelivery from "./paymentDetails/CashOnDelivery";
import CreditCard from "./paymentDetails/CreditCard";
import PayPal from "./paymentDetails/PayPal";
import { useSelector } from "react-redux";

function PaymentDetails() {
  return (
    <div className="rounded-md shadow-md py-4 px-5 flex flex-col justify-evenly gap-y-8">
      <div className=" flex flex-col md:flex-row gap-x-2 gap-y-2">
        <Options />
      </div>

      <p className="text-lg text-gray-600 font-medium mb-0">Payment Details</p>

      <div>
        <PaymentMethodsContainer />
      </div>
    </div>
  );
}
export default PaymentDetails;

function Options() {
  // redux checkout reducer
  const toggledPayment = useSelector((state) => state.CHECKOUT.toggledPayment);

  return (
    <>
      <PaymentMethodBody active={toggledPayment === "COD"} id="COD">
        <span>Cash on Delivery</span>
      </PaymentMethodBody>

      <PaymentMethodBody active={toggledPayment === "CC"} id="CC">
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
      </PaymentMethodBody>

      <PaymentMethodBody active={toggledPayment === "PP"} id="PP">
        <img
          src={paypalIcon}
          className="w-20 object-scale-down"
          alt="paypal-logo"
        />
      </PaymentMethodBody>
    </>
  );
}

const PaymentMethodsContainer = () => {
  // redux checkout reducer
  const toggledPayment = useSelector((state) => state.CHECKOUT.toggledPayment);

  return (
    <>
      <div className={toggledPayment === "COD" ? "block" : "hidden"}>
        <CashOnDelivery />
      </div>

      <div className={toggledPayment === "CC" ? "block" : "hidden"}>
        <CreditCard />
      </div>

      <div className={toggledPayment === "PP" ? "block" : "hidden"}>
        <PayPal />
      </div>
    </>
  );
};
