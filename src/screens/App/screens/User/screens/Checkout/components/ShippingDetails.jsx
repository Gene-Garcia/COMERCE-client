import React from "react";
import useCheckout from "../../../../../../../hooks/useCheckout";
import { useForm } from "../../../../../../../hooks/useForm";
import { ShippingCTA } from "./CallToAction";
import CheckoutInput from "./CheckoutInput";

function ShippingDetails() {
  const { loadShippingDetails, nextStep } = useCheckout();

  async function saveShippingDetails() {
    loadShippingDetails(values);
    nextStep(false, 2, "PD");
  }

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

  return (
    <div className="rounded-md shadow-md py-4 px-5 flex flex-col gap-y-4 sm:gap-y-8">
      <p className="text-lg text-gray-600 font-medium">Shipping Details</p>

      <>
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 sm:gap-y-8">
          <CheckoutInput
            label="First Name"
            type="text"
            placeholder="John Doe"
            name="firstName"
            className="w-full sm:w-1/2"
            onChange={handleInput}
            value={values.firstName}
            error={errors.firstName}
          />
          <CheckoutInput
            label="Last Name"
            type="text"
            placeholder="John Doe"
            name="lastName"
            className="w-full sm:w-1/2"
            onChange={handleInput}
            value={values.lastName}
            error={errors.lastName}
          />
        </div>

        <CheckoutInput
          label="Cellphone Number"
          type="text"
          placeholder="Cellphone Number"
          name="cellphoneNumber"
          className="w-full sm:w-1/2"
          onChange={handleInput}
          value={values.cellphoneNumber}
          error={errors.cellphoneNumber}
        />

        <CheckoutInput
          label="House/Unit/Flr #, Bldg Name, Blk or Lot #"
          type="text"
          placeholder="Street Address"
          name="streetAddress"
          className="w-full sm:w-4/5"
          onChange={handleInput}
          value={values.streetAddress}
          error={errors.streetAddress}
        />

        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 sm:gap-y-8">
          <CheckoutInput
            label="Province"
            type="text"
            placeholder="Enter your province"
            name="province"
            className="w-full sm:w-4/6"
            onChange={handleInput}
            value={values.province}
            error={errors.province}
          />

          <CheckoutInput
            label="City or Municipality"
            type="text"
            placeholder="Enter your city or municipality"
            name="cityMunicipality"
            className="w-full sm:w-4/6"
            onChange={handleInput}
            value={values.cityMunicipality}
            error={errors.cityMunicipality}
          />
        </div>

        <CheckoutInput
          label="Barangay"
          type="text"
          placeholder="Enter your barangay"
          name="barangay"
          className="w-full sm:w-1/2"
          onChange={handleInput}
          value={values.barangay}
          error={errors.barangay}
        />

        <CheckoutInput
          label="Additional Notes"
          type="textarea"
          placeholder="Enter any notes you want to let the logistic courier to know when they deliver your order"
          name="additionalNotes"
          className="w-full"
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
