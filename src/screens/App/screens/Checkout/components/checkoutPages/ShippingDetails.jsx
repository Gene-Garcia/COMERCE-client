import React from "react";

import { batch, useDispatch } from "react-redux";
import { loadShippingDetails } from "../../../../../../redux/Checkout/CheckoutAction";
import { proceedToNextStep } from "../../../../../../redux/Steps/StepsAction";

import { useForm } from "../../../../../../hooks/useForm";

import { BorderedInput } from "../../../../../../shared/Components/input/Inputs";
import { ShippingCTA } from "../utils/CallToAction";
import LinedTitle from "../../../../../../shared/Components/purchase/LinedTitle";

function ShippingDetails() {
  // redux
  const dispatch = useDispatch();

  // Form submit
  async function saveShippingDetails() {
    batch(() => {
      dispatch(loadShippingDetails(values));
      // dispatch(nextStep(false, 2, "PD"));
      dispatch(proceedToNextStep(2));
    });
  }

  //#region form configuration
  function validate(data, setError) {
    let tempErrs = { ...errors };

    if ("firstName" in data)
      tempErrs["firstName"] = data["firstName"].trim()
        ? ""
        : "First name is required";

    if ("lastName" in data)
      tempErrs["lastName"] = data["lastName"].trim()
        ? ""
        : "Last name is required";

    if ("cellphoneNumber" in data) {
      // must be numeric
      tempErrs["cellphoneNumber"] = !isNaN(data["cellphoneNumber"].trim())
        ? ""
        : "Cellphone number should only contain numbers";

      if (!tempErrs["cellphoneNumber"])
        tempErrs["cellphoneNumber"] = data["cellphoneNumber"].trim()
          ? ""
          : "Cellphone number is required";
    }

    if ("streetAddress" in data)
      tempErrs["streetAddress"] = data["streetAddress"].trim()
        ? ""
        : "Street address is required";

    if ("province" in data)
      tempErrs["province"] = data["province"].trim()
        ? ""
        : "Province is required";

    if ("cityMunicipality" in data)
      tempErrs["cityMunicipality"] = data["cityMunicipality"].trim()
        ? ""
        : "City or municipality is required";

    if ("barangay" in data)
      tempErrs["barangay"] = data["barangay"].trim()
        ? ""
        : "Barangay address is required";

    if ("additionalNotes" in data)
      tempErrs["additionalNotes"] = data["additionalNotes"].trim()
        ? ""
        : "Input N/A if you have no additional notes";

    setError(tempErrs);
  }

  const init = {
    firstName: "",
    lastName: "",
    cellphoneNumber: "",
    streetAddress: "",
    province: "",
    cityMunicipality: "",
    barangay: "",
    additionalNotes: "",
  };
  const { values, errors, handleInput, handleFormSubmit } = useForm(
    init,
    init,
    validate,
    saveShippingDetails
  );
  //#endregion

  return (
    <div className="rounded-md shadow-md p-6 flex flex-col gap-y-4 sm:gap-y-8">
      <LinedTitle title="Shipping Details" />

      {/* form for shipping information */}
      <>
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 sm:gap-y-8">
          <BorderedInput
            label="First Name"
            type="text"
            placeholder="John Doe"
            name="firstName"
            width="w-full sm:w-1/2"
            onChange={handleInput}
            value={values.firstName}
            error={errors.firstName}
          />

          <BorderedInput
            label="Last Name"
            type="text"
            placeholder="John Doe"
            name="lastName"
            width="w-full sm:w-1/2"
            onChange={handleInput}
            value={values.lastName}
            error={errors.lastName}
          />
        </div>

        <BorderedInput
          label="Cellphone Number"
          type="number"
          placeholder="Cellphone Number"
          name="cellphoneNumber"
          width="w-full sm:w-1/2"
          onChange={handleInput}
          value={values.cellphoneNumber}
          error={errors.cellphoneNumber}
        />

        <BorderedInput
          label="House/Unit/Flr #, Bldg Name, Blk or Lot #"
          type="text"
          placeholder="Street Address"
          name="streetAddress"
          width="w-full sm:w-4/5"
          onChange={handleInput}
          value={values.streetAddress}
          error={errors.streetAddress}
        />

        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 sm:gap-y-8">
          <BorderedInput
            label="Province"
            type="text"
            placeholder="Enter your province"
            name="province"
            width="w-full sm:w-4/6"
            onChange={handleInput}
            value={values.province}
            error={errors.province}
          />

          <BorderedInput
            label="City or Municipality"
            type="text"
            placeholder="Enter your city or municipality"
            name="cityMunicipality"
            width="w-full sm:w-4/6"
            onChange={handleInput}
            value={values.cityMunicipality}
            error={errors.cityMunicipality}
          />
        </div>

        <BorderedInput
          label="Barangay"
          type="text"
          placeholder="Enter your barangay"
          name="barangay"
          width="w-full sm:w-1/2"
          onChange={handleInput}
          value={values.barangay}
          error={errors.barangay}
        />

        <BorderedInput
          label="Additional Notes"
          type="textarea"
          placeholder="Enter any notes you want to let the logistic courier to know when they deliver your order"
          name="additionalNotes"
          width="w-full"
          onChange={handleInput}
          value={values.additionalNotes}
          error={errors.additionalNotes}
        />
      </>

      {/* CTA of shipping */}
      <ShippingCTA submit={handleFormSubmit} />
    </div>
  );
}
export default ShippingDetails;
