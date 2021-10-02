import React from "react";
import useCheckout from "../../../../../../../../hooks/useCheckout";
import { useForm } from "../../../../../../../../hooks/useForm";
import { PaymentCTA } from "../utils/CallToAction";
import CheckoutInput from "../utils/CheckoutInput";

function PayPal() {
  const { loadPaymentDetails, nextStep } = useCheckout();

  function loadPayPal() {
    loadPaymentDetails("PP", values);
    nextStep(false, 3, "RD");
  }

  function validate(data, setErrors) {
    let tempErrs = { ...errors };

    if ("payPalEmail" in data) {
      tempErrs["payPalEmail"] = data["payPalEmail"]
        ? ""
        : "PayPal email is required";

      // add regex
    }

    setErrors(tempErrs);
  }

  const init = { payPalEmail: "" };
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
          name="payPalEmail"
          className="w-3/4"
          onChange={handleInput}
          value={values.payPalEmail}
          error={errors.payPalEmail}
        />
      </div>

      <PaymentCTA submit={handleFormSubmit} type="PP" />
    </div>
  );
}

export default PayPal;
