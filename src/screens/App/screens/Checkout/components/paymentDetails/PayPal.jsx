import React from "react";
import { batch, useDispatch } from "react-redux";
import { useForm } from "../../../../../../hooks/useForm";
import {
  loadPaymentDetails,
  nextStep,
} from "../../../../../../redux/Checkout/CheckoutAction";
import { BorderedInput } from "../../../../../../shared/Components/input/Inputs";
import { PaymentCTA } from "../utils/CallToAction";

function PayPal() {
  // redux
  const dispatch = useDispatch();

  function loadPayPal() {
    batch(() => {
      dispatch(loadPaymentDetails("PP", values));
      dispatch(nextStep(false, 3, "RD"));
    });
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
      <p className="">
        Payment through{" "}
        <span className="text-accent font-semibold text-md">PayPal</span>{" "}
        requires you to login to your valid
        <span className="text-accent font-semibold text-md">
          {" "}
          PayPal account
        </span>
        .
      </p>

      <BorderedInput
        label="PayPal Email"
        type="email"
        placeholder="Enter your valid and active PayPal email"
        name="payPalEmail"
        className="w-3/4"
        onChange={handleInput}
        value={values.payPalEmail}
        error={errors.payPalEmail}
      />

      <PaymentCTA submit={handleFormSubmit} type="PP" />
    </div>
  );
}

export default PayPal;
