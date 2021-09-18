import React from "react";
import useCheckout from "../../../../../../../../hooks/useCheckout";
import { useForm } from "../../../../../../../../hooks/useForm";
import { PaymentCTA } from "../CallToAction";
import CheckoutInput from "../CheckoutInput";

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

export default PayPal;
