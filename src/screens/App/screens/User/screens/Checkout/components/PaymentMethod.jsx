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

function CreditCard() {
  const { loadPaymentDetails, nextStep } = useCheckout();

  async function loadCreditCard() {
    loadPaymentDetails("CC", values);
    nextStep(false, 3, "RD");
  }

  function validate(data, setErrors) {
    let tempErrs = { ...errors };

    if ("cardHolderName" in data)
      tempErrs["cardHolderName"] = data["cardHolderName"]
        ? ""
        : "Holder's name is required";

    if ("cardNumber" in data) {
      tempErrs["cardNumber"] = data["cardNumber"]
        ? ""
        : "Card number is required";

      // check for numeric value
      if (!tempErrs["cardNumber"])
        tempErrs["cardNumber"] = !isNaN(data["cardNumber"])
          ? ""
          : "Numeric values only";

      // check for length
      if (!tempErrs["cardNumber"])
        tempErrs["cardNumber"] =
          data["cardNumber"].trim().length === 12
            ? ""
            : "12-digit card number only";
    }

    if ("cardExpiration" in data) {
      tempErrs["cardExpiration"] = data["cardExpiration"]
        ? ""
        : "Card's expiration is required";

      //add regex
    }

    if ("securityCode" in data) {
      tempErrs["securityCode"] = data["securityCode"]
        ? ""
        : "Security code is required";

      // check for numeric value
      if (!tempErrs["securityCode"])
        tempErrs["securityCode"] = !isNaN(data["securityCode"])
          ? ""
          : "Numeric values only";

      // check for length
      if (!tempErrs["securityCode"])
        tempErrs["securityCode"] =
          data["securityCode"].trim().length === 3 ? "" : "3-digit code only";
    }

    setErrors(tempErrs);
  }

  const init = {
    cardHolderName: "",
    cardNumber: "",
    cardExpiration: "",
    securityCode: "",
  };
  const { values, errors, handleInput, handleFormSubmit } = useForm(
    init,
    init,
    validate,
    loadCreditCard
  );

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <CheckoutInput
          label="Name of Card Holder"
          type="text"
          placeholder="Enter your name indicated on the card"
          name="cardHolderName"
          className="w-3/4"
          values={values.cardHolderName}
          error={errors.cardHolderName}
          onChange={handleInput}
        />

        <CheckoutInput
          label="Card Number"
          type="number"
          placeholder="Enter your credit card number"
          name="cardNumber"
          className="w-3/5"
          values={values.cardNumber}
          error={errors.cardNumber}
          onChange={handleInput}
        />

        <div className="flex flex-row gap-x-3">
          <CheckoutInput
            label="Card Expiration"
            type="text"
            placeholder="MM/YYYY"
            name="cardExpiration"
            className="w-1/5"
            values={values.cardExpiration}
            error={errors.cardExpiration}
            onChange={handleInput}
          />

          <CheckoutInput
            label="Card Security Number"
            type="number"
            placeholder="CVV"
            name="securityCode"
            className="w-1/5"
            values={values.securityCode}
            error={errors.securityCode}
            onChange={handleInput}
          />
        </div>
      </div>

      <PaymentCTA submit={handleFormSubmit} type="CC" />
    </div>
  );
}

function PayPal() {
  const { loadPaymentDetails, nextStep } = useCheckout();

  function loadPayPal() {
    loadPaymentDetails("PP", values);
    nextStep(false, 3, "RD");
  }

  function validate(data, setErrors) {
    let tempErrs = { ...errors };

    if ("paypalEmail" in data) {
      tempErrs["paypalEmail"] = data["paypalEmail"]
        ? ""
        : "PayPal email is required";

      // add regex
    }

    setErrors(tempErrs);
  }

  const init = { paypalEmail: "" };
  const { values, errors, handleInput, handleFormSubmit } = useForm(
    init,
    init,
    validate,
    loadPayPal
  );

  return (
    <div className="space-y-8">
      <div className="space-y-6">
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
          onChange={handleInput}
          value={values.paypalEmail}
          error={errors.paypalEmail}
        />
      </div>
      <PaymentCTA submit={handleFormSubmit} type="PP" />
    </div>
  );
}

export { CashOnDelivery, CreditCard, PayPal };
