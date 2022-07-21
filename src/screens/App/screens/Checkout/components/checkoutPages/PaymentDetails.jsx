import React from "react";
import visaIcon from "../../../../../../shared/images/visa.png";
import mastercardIcon from "../../../../../../shared/images/mastercard.png";
import paypalIcon from "../../../../../../shared/images/paypal.png";
import PaymentMethodBody from "../paymentDetails/MethodBody";
import CashOnDelivery from "../paymentDetails/CashOnDelivery";
import CreditCard from "../paymentDetails/CreditCard";
import PayPal from "../paymentDetails/PayPal";
import { useSelector } from "react-redux";
import LinedTitle from "../../../../../../shared/Components/purchase/LinedTitle";

function PaymentDetails() {
  return (
    <div className="rounded-md shadow p-6 flex flex-col justify-evenly gap-8">
      <LinedTitle title="Payment Details" />

      <div className="flex flex-row gap-2">
        <Options />
      </div>

      <PaymentMethodsContainer />
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
        <div className="flex items-center gap-1.5 text-slate-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
          <p className="hidden md:block text-sm font-semibold break-all">
            Cash on Delivery
          </p>
          <p className="block md:hidden text-md font-semibold break-all">COD</p>
        </div>
      </PaymentMethodBody>

      <PaymentMethodBody active={toggledPayment === "CC"} id="CC">
        <div className="flex flex-row gap-x-2">
          <img
            src={visaIcon}
            className="w-14 object-scale-down"
            alt="visa-logo"
          />
          <img
            src={mastercardIcon}
            className="w-11 object-scale-down"
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
    <div>
      {toggledPayment === "COD" && <CashOnDelivery />}
      {toggledPayment === "CC" && <CreditCard />}
      {toggledPayment === "PP" && <PayPal />}
    </div>
  );
};
