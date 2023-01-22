import React from "react";

import { batch, useDispatch } from "react-redux";
import { loadPersonalData } from "../../../../../../../../redux/Logistics/LogisticsRegistration/LogisticsRegistrationAction";
import { proceedToNextStep } from "../../../../../../../../redux/Steps/StepsAction";

import { useForm } from "../../../../../../../../hooks/useForm";

import { EmbossedInput } from "../../../../../../../../shared/Components/input/Inputs";
import { PersonalCTA } from "./CallToAction";

const Personal = () => {
  // redux
  const dispatch = useDispatch();

  // form submit
  const SubmitLogisticsRegistration = () => {
    batch(() => {
      dispatch(loadPersonalData(values));
      dispatch(proceedToNextStep(4));
    });
  };

  const validate = (data, setErrors) => {
    const temp = { ...errors };

    if ("firstName" in data) temp.firstName = data.firstName ? "" : "Required";
    if ("lastName" in data) temp.lastName = data.lastName ? "" : "Required";

    if ("streetAddress" in data)
      temp.streetAddress = data.streetAddress ? "" : "Required";
    if ("barangay" in data) temp.barangay = data.barangay ? "" : "Required";
    if ("cityMunicipality" in data)
      temp.cityMunicipality = data.cityMunicipality ? "" : "Required";
    if ("province" in data) temp.province = data.province ? "" : "Required";

    if ("primaryNumber" in data) {
      temp.primaryNumber = data.primaryNumber ? "" : "Required";

      if (!temp.primaryNumber)
        temp.primaryNumber = isNaN(data.primaryNumber) ? "Must be numeric" : "";

      if (!temp.primaryNumber)
        temp.primaryNumber = data.primaryNumber.startsWith(0)
          ? "Remove 1st 0"
          : "";

      if (!temp.primaryNumber)
        temp.primaryNumber =
          data.primaryNumber.length != 10 ? "Invalid phone" : "";
    }
    if ("secondaryNumber" in data) {
      temp.secondaryNumber = data.secondaryNumber ? "" : "Required";

      if (!temp.secondaryNumber)
        temp.secondaryNumber = isNaN(data.secondaryNumber)
          ? "Must be numeric"
          : "";

      if (!temp.secondaryNumber)
        temp.secondaryNumber = data.secondaryNumber.startsWith(0)
          ? "Remove 1st 0"
          : "";

      if (!temp.secondaryNumber)
        temp.secondaryNumber =
          data.secondaryNumber.length != 10 ? "Invalid phone" : "";

      // check if it is the same with the primary number
      if (!temp.secondaryNumber)
        temp.secondaryNumber =
          data.secondaryNumber === values.primaryNumber
            ? "Identical to primary"
            : "";
    }

    setErrors(temp);
  };

  // useform
  const initial = {
    firstName: "",
    lastName: "",
    streetAddress: "",
    barangay: "",
    cityMunicipality: "",
    province: "",
    primaryNumber: "",
    secondaryNumber: "",
  };
  const { values, errors, handleInput, handleFormSubmit } = useForm(
    initial,
    initial,
    validate,
    SubmitLogisticsRegistration
  );

  return (
    <>
      {/* form */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col xs:flex-row justify-between gap-5">
          <EmbossedInput
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleInput}
            placeholder="Your first name"
            background="bg-gray-100"
            label="First Name"
            error={errors.firstName}
            width="w-full"
          />

          <EmbossedInput
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleInput}
            placeholder="Your last name"
            background="bg-gray-100"
            label="Last Name"
            error={errors.lastName}
            width="w-full"
          />
        </div>

        <EmbossedInput
          type="text"
          name="streetAddress"
          value={values.streetAddress}
          onChange={handleInput}
          placeholder="Your street level address"
          background="bg-gray-100"
          label="Street Address"
          error={errors.streetAddress}
          width="w-full"
        />

        <div className="flex flex-col md:flex-row justify-between gap-5">
          <EmbossedInput
            type="text"
            name="barangay"
            value={values.barangay}
            onChange={handleInput}
            placeholder="The name of your barangay"
            background="bg-gray-100"
            label="Barangay"
            error={errors.barangay}
            width="w-full"
          />

          <EmbossedInput
            type="text"
            name="cityMunicipality"
            value={values.cityMunicipality}
            onChange={handleInput}
            placeholder="Name of your city or municipality"
            background="bg-gray-100"
            label="City/Municipality"
            error={errors.cityMunicipality}
            width="w-full"
          />

          <EmbossedInput
            type="text"
            name="province"
            value={values.province}
            onChange={handleInput}
            placeholder="Name of your province"
            background="bg-gray-100"
            label="Province"
            error={errors.province}
            width="w-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <EmbossedInput
            type="number"
            name="primaryNumber"
            value={values.primaryNumber}
            onChange={handleInput}
            placeholder="Your primary contact number"
            background="bg-gray-100"
            label="Primary Contact #"
            error={errors.primaryNumber}
            width="w-full"
            icon={
              <span className="mx-2 font-medium text-accent text-base">
                +63
              </span>
            }
          />

          <EmbossedInput
            type="number"
            name="secondaryNumber"
            value={values.secondaryNumber}
            onChange={handleInput}
            placeholder="Secondary contact number"
            background="bg-gray-100"
            label="Secondary Contact #"
            error={errors.secondaryNumber}
            width="w-full"
            icon={
              <span className="mx-2 font-medium text-accent text-base">
                +63
              </span>
            }
          />
        </div>
      </div>

      {/* cta */}
      <PersonalCTA onClick={handleFormSubmit} />
    </>
  );
};
export default Personal;
