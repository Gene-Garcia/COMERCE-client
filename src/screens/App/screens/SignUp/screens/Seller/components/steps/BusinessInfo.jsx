import React from "react";
import { useForm } from "../../../../../../../../hooks/useForm";
import { BusinessInfoCTA } from "../utils/CTA";
import { LinedInput } from "../../../../../../../../shared/Components/input/Inputs";
import { batch, useDispatch } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../redux/Alert/AlertAction";
import {
  loadBusinessDetails,
  proceedToNextStep,
} from "../../../../../../../../redux/Seller/SellerRegistration/SellerRegistrationAction";

function BusinessInfo() {
  // redux
  const dispatch = useDispatch();

  // file input on change
  const fileOnChange = (e) => {
    console.log(e);
  };

  // submit function
  const createBusiness = async () => {
    batch(() => {
      dispatch(loadBusinessDetails(values));

      dispatch(setSeverity("information"));
      dispatch(setMessage("Business information has been saved"));

      dispatch(proceedToNextStep(2));
    });
  };

  const init = {
    businessEmail: "",
    businessLogoAddress: "",
    businessName: "",
    established: "",
    tagline: "",
  };
  const validate = (data, setErrors) => {
    let temp = { ...errors };

    if ("businessEmail" in data)
      temp.businessEmail = data.businessEmail ? "" : "Put N/A if unavailable";

    if ("businessName" in data)
      temp.businessName = data.businessName ? "" : "Business name is required";

    if ("established" in data)
      temp.established = data.established ? "" : "Date is required";

    if ("tagline" in data)
      temp.tagline = data.tagline ? "" : "Put N/A if unavailable";

    if ("businessLogoAddress" in data)
      temp.businessLogoAddress = data.businessLogoAddress
        ? ""
        : "Logo address is required";

    setErrors(temp);
  };

  const { values, errors, handleInput, handleFormSubmit } = useForm(
    init,
    init,
    validate,
    createBusiness
  );

  return (
    <div
      className="w-full flex flex-col justify-between 
      gap-6 md:gap-7 xl:gap-8"
    >
      <div className="flex flex-col gap-3 xs:gap-4 sm:gap-5 md:gap-8">
        <FileInput
          name="businessLogoAddress"
          // onChange={fileOnChange}
          onChange={handleInput}
          label="BUSINESS LOGO"
          helper="JPEG and PNG files only"
          value={values.businessLogoAddress}
          error={errors.businessLogoAddress}
        />

        <LinedInput
          type="email"
          name="businessEmail"
          value={values.businessEmail}
          error={errors.businessEmail}
          onChange={handleInput}
          label="BUSINESS EMAIL"
          placeholder="email of the business"
          width="xs:w-4/5 sm:w-3/5"
        />

        <div className="flex flex-col sm:flex-row gap-y-4 gap-x-10">
          <LinedInput
            type="text"
            name="businessName"
            value={values.businessName}
            error={errors.businessName}
            onChange={handleInput}
            label="BUSINESS NAME"
            placeholder="name of your business"
            width="xs:w-4/5 sm:w-1/2"
          />

          <LinedInput
            type="date"
            name="established"
            value={values.established}
            error={errors.established}
            onChange={handleInput}
            label="ESTABLISHMENT DATE"
            placeholder="date of launching"
            width="xs:w-4/5 sm:w-1/2"
          />
        </div>

        <LinedInput
          type="text"
          name="tagline"
          value={values.tagline}
          error={errors.tagline}
          onChange={handleInput}
          label="TAGLINE"
          placeholder="a tagline to catch customers' attention"
          width="w-full"
        />
      </div>

      <BusinessInfoCTA onClick={handleFormSubmit} />
    </div>
  );
}
export default BusinessInfo;

function FileInput({ name, label, helper, onChange, value, error }) {
  const inputTheme = {
    valid: "border-gray-300",
    invalid: "border-red-500",
  };

  return (
    <div>
      <label for="name" className="font-medium text-gray-400 text-sm">
        {label}
      </label>

      <div className="flex flex-col xs:flex-row gap-3">
        <label
          class="flex flex-col items-center w-max
        rounded-md shadow border border-my-accent px-8 py-2.5 
        text-gray-700 cursor-pointer 
        transition duration-200 ease-linear
        hover:bg-my-accent hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <span className="text-base">Upload Logo</span>
          <input
            type="file"
            className="hidden"
            // name={name}
            // onChange={onChange}
          />
          <i className="text-sm text-gray-500">{helper}</i>
        </label>

        <div className="justify-self-start flex flex-col">
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder="Image Address"
            className={`border-b-2 ${
              error ? inputTheme.invalid : inputTheme.valid
            } font-regular text-black focus:outline-none transition duration-200 focus:border-my-accent`}
            autoComplete={`new-${name}`}
          />
          <i className="text-sm text-gray-500">Temporary file upload</i>
        </div>
      </div>
    </div>
  );
}
