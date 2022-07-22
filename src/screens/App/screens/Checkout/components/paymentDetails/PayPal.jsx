import React from "react";

import { batch, useDispatch } from "react-redux";
import { loadPaymentDetails } from "../../../../../../redux/Checkout/CheckoutAction";
import { proceedToNextStep } from "../../../../../../redux/Steps/StepsAction";

import { useForm } from "../../../../../../hooks/useForm";

import { BorderedInput } from "../../../../../../shared/Components/input/Inputs";
import { PaymentCTA } from "../utils/CallToAction";

function PayPal() {
  // redux
  const dispatch = useDispatch();

  function loadPayPal() {
    batch(() => {
      dispatch(loadPaymentDetails("PP", values));
      dispatch(proceedToNextStep(3));
    });
  }

  //#region form configuration
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
  //#endregion

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
