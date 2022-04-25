import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../../../../../../../../../../../hooks/useForm";
import { FormButton } from "../../../../../../../../../../../../shared/Components/button/ButtonBase";
import { InputFirst } from "../../../../../../../../../../../../shared/Components/input/InputBase";
import ErrorContainer from "../../../utils/ErrorContainer";

const AddressCard = () => {
  // redux
  const dispatch = useDispatch();

  // state for general error message
  const [formError, setFormError] = useState("");

  //#region use form configurations
  const ChangeAddressAPI = () => {
    // this reset form is necessary after submitting to clear the fields of any UGLY PLACEHOLDER
    resetForms();
    setIsLoading(false);
    setFormError("");
  };

  const validate = (data, setErrors) => {
    let temp = { ...errors };
    // nothing to validate for now, we can submit the pick up address form even with atleast 1 value
    setErrors(temp);
  };

  const formIsValid = (submitCallback) => {
    let isValid;

    // nothing to save in database if all input are empty
    if (
      !values.streetAddress &&
      !values.barangay &&
      !values.cityMunicipality &&
      !values.province
    ) {
      setFormError(
        "Nothing to save. You may edit atleast 1 field before submit"
      );

      isValid = false;
    } else isValid = true;

    submitCallback(isValid);
  };

  const init = {
    streetAddress: "",
    barangay: "",
    cityMunicipality: "",
    province: "",
  };
  const {
    values,
    errors,
    isLoading,
    handleInput,
    handleFormSubmit,
    setIsLoading,
    setValues,
    resetForms,
  } = useForm(init, init, validate, ChangeAddressAPI, formIsValid);
  //#endregion

  return (
    <div className="space-y-4">
      <div className={`${formError ? "block" : "hidden"}`}>
        <ErrorContainer message={formError} />
      </div>

      <InputFirst
        type="text"
        name="streetAddress"
        value={values.streetAddress}
        onChange={handleInput}
        inputStyle="bg-transparent rounded-t-sm px-2 text-base"
        border="py-1.5 border-b-2 rounded-t shadow"
        label="Street Address"
        error={errors.streetAddress}
        focusWithin="focus-within:border-my-accent"
      />

      <div className="flex flex-row justify-between gap-4">
        <InputFirst
          type="text"
          name="barangay"
          value={values.barangay}
          onChange={handleInput}
          inputStyle="bg-transparent rounded-t-sm px-2 text-base"
          border="py-1.5 border-b-2 rounded-t shadow"
          label="BARANGAY"
          error={errors.barangay}
          focusWithin="focus-within:border-my-accent"
          width="w-full"
        />

        <InputFirst
          type="text"
          name="cityMunicipality"
          value={values.cityMunicipality}
          onChange={handleInput}
          inputStyle="bg-transparent rounded-t-sm px-2 text-base"
          border="py-1.5 border-b-2 rounded-t shadow"
          label="CITY/MUNICIPALITY"
          error={errors.cityMunicipality}
          focusWithin="focus-within:border-my-accent"
          width="w-full"
        />
      </div>

      <InputFirst
        type="text"
        name="province"
        value={values.province}
        onChange={handleInput}
        inputStyle="bg-transparent rounded-t-sm px-2 text-base"
        border="py-1.5 border-b-2 rounded-t shadow"
        label="PROVINCE"
        error={errors.province}
        focusWithin="focus-within:border-my-accent"
        width="w-1/2"
      />

      <div className="ml-auto w-max">
        <FormButton
          isLoading={isLoading}
          size="REGULAR"
          text="SAVE CHANGES"
          uppercase="uppercase"
          onClick={handleFormSubmit}
          textColor="text-white"
          type="BUTTON"
        />
      </div>
    </div>
  );
};
export default AddressCard;
