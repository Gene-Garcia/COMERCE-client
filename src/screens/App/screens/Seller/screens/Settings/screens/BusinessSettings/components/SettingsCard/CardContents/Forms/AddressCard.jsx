import React from "react";
import { batch, useDispatch } from "react-redux";
import { useForm } from "../../../../../../../../../../../../hooks/useForm";
import { FormButton } from "../../../../../../../../../../../../shared/Components/button/ButtonBase";
import { InputFirst } from "../../../../../../../../../../../../shared/Components/input/InputBase";

const AddressCard = () => {
  // redux
  const dispatch = useDispatch();

  // use form configurations
  const ChangeAddressAPI = () => {
    // check if atleast 1 field has data
    // if (
    //   !values.streetAddress &&
    //   !values.barangay &&
    //   !values.cityMunicipality &&
    //   !values.province
    // ) {
    // }

    setIsLoading(false);

    // this reset form is necessary after submitting to clear the fields of any UGLY PLACEHOLDER
    resetForms();
  };

  const validate = (data, setErrors) => {
    let temp = { ...errors };

    // nothing to validate for now, we can submit the pick up address form even with atleast 1 value

    setErrors(temp);
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
  } = useForm(init, init, validate, ChangeAddressAPI);

  return (
    <div className="space-y-4">
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
          onClick={(e) => {
            // current useform will not submit if fields of values contains an empty field, WE NEED TO BYPASS IT
            for (const [k, v] of Object.entries(values)) {
              if (!v) {
                // empty, add placeholder |comerce-seller-placeholder|
                setValues((prev) => ({
                  ...prev,
                  [k]: "|comerce-seller-placeholder",
                }));
              }
            }

            handleFormSubmit(e);
          }}
          textColor="text-white"
          type="BUTTON"
        />
      </div>
    </div>
  );
};
export default AddressCard;
