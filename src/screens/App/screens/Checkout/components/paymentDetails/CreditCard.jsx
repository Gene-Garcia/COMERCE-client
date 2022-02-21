import React from "react";
import { batch, useDispatch } from "react-redux";
import { useForm } from "../../../../../../hooks/useForm";
import {
  loadPaymentDetails,
  nextStep,
} from "../../../../../../redux/Checkout/CheckoutAction";
import { BorderedInput } from "../../../../../../shared/Components/input/Inputs";
import { PaymentCTA } from "../utils/CallToAction";

function CreditCard() {
  // redux
  const dispatch = useDispatch();

  async function loadCreditCard() {
    batch(() => {
      dispatch(loadPaymentDetails("CC", values));
      dispatch(nextStep(false, 3, "RD"));
    });
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
        : "Expiration is required";

      //add regex
    }

    if ("securityCode" in data) {
      tempErrs["securityCode"] = data["securityCode"]
        ? ""
        : "Sec code is required";

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
        <BorderedInput
          label="Name of Card Holder"
          type="text"
          placeholder="Enter your name indicated on the card"
          name="cardHolderName"
          className="w-3/4"
          values={values.cardHolderName}
          error={errors.cardHolderName}
          onChange={handleInput}
        />

        <BorderedInput
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
          <BorderedInput
            label="Card Expiration"
            type="text"
            placeholder="MM/YYYY"
            name="cardExpiration"
            className="w-1/5"
            values={values.cardExpiration}
            error={errors.cardExpiration}
            onChange={handleInput}
          />

          <BorderedInput
            label="Sec Number"
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
export default CreditCard;
