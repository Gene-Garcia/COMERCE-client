import React from "react";
import useCheckout from "../../../../../../../hooks/useCheckout";
import { useForm } from "../../../../../../../hooks/useForm";
import { PaymentCTA } from "./CallToAction";
import CheckoutInput from "./CheckoutInput";

function PaymentMethod({ id, children, active }) {
  const { togglePaymentOption } = useCheckout();

  return (
    <button
      onClick={() => togglePaymentOption(id)}
      className={
        (active ? `border-my-accent` : `border-gray-200`) +
        ` transition duration-300 px-7 py-0 border-b-4 font-semibold text-gray-600 flex items-center justify-center`
      }
    >
      {children}
    </button>
  );
}
export default PaymentMethod;

function CashOnDelivery() {
  return (
    <div className="space-y-10">
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

      <PaymentCTA submit={() => {}} type="COD" />
    </div>
  );
}

function CreditCard() {
  return (
    <>
      <div className="space-y-6">
        <CheckoutInput
          label="Name of Card Holder"
          type="text"
          placeholder="Enter your name indicated on the card"
          name="cardHolderName"
          className="w-3/4"
        />

        <CheckoutInput
          label="Card Number"
          type="number"
          placeholder="Enter your credit card number"
          name="cardNumber"
          className="w-3/5"
        />

        <div className="flex flex-row gap-x-3">
          <CheckoutInput
            label="Card Expiration"
            type="text"
            placeholder="Month / Year"
            name="cardExpiration"
            className="w-1/5"
          />

          <CheckoutInput
            label="Card Security Number"
            type="number"
            placeholder="CVV"
            name="securityNumber"
            className="w-1/5"
          />
        </div>
      </div>

      <PaymentCTA submit={() => {}} type="CC" />
    </>
  );
}

function PayPal() {
  return (
    <>
      <div className=" space-y-6">
        <p className="font-semibold text-lg">
          Payment through <span className="text-my-accent">PayPal</span> will
          require you to login to your valid
          <span className="text-my-accent"> PayPal</span> account.
        </p>

        <CheckoutInput
          label="PayPal Email"
          type="email"
          placeholder="Enter your valid and active PayPal email"
          name="paypalEmail"
          className="w-3/4"
        />
      </div>
      <PaymentCTA submit={() => {}} type="PP" />{" "}
    </>
  );
}

export { CashOnDelivery, CreditCard, PayPal };
