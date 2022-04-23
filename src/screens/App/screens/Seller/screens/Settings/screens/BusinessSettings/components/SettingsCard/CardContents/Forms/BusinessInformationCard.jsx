import React from "react";
import Cookies from "universal-cookie";
import { useForm } from "../../../../../../../../../../../../hooks/useForm";
import { FormButton } from "../../../../../../../../../../../../shared/Components/button/ButtonBase";
import { InputFirst } from "../../../../../../../../../../../../shared/Components/input/InputBase";
import { BorderedInput } from "../../../../../../../../../../../../shared/Components/input/Inputs";

const BusinessInformationCard = () => {
  const cookies = new Cookies();

  // use form confiugation
  const ChangeBusinessInformationAPI = () => {
    // check if atleast 1 field has data

    setIsLoading(false);

    // this reset form is necessary after submitting to clear the fields of any UGLY PLACEHOLDER
    resetForms();
  };

  const validate = (data, setErrors) => {
    const temp = { ...errors };
    // nothing to validate for now
    setErrors({ ...temp });
  };

  const init = {
    newLogo: "",
    businessName: "",
    tagline: "",
  };

  const {
    values,
    setValues,
    errors,
    handleInput,
    handleFormSubmit,
    isLoading,
    resetForms,
    setIsLoading,
  } = useForm(init, init, validate, ChangeBusinessInformationAPI);

  return (
    <div className="space-y-4">
      <div className="flex flex-row justify-between gap-8">
        {/* logo */}
        <div className="flex-shrink space-y-3">
          <div className="m-auto w-max rounded-full border border-gray-400 flex items-center justify-center">
            <img
              src={
                values.newLogo
                  ? values.newLogo
                  : cookies.get(process.env.REACT_APP_BS_LOGO)
              }
              // src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png"
              className="w-28 h-28 p-2 object-contain object-center"
            />
          </div>

          <BorderedInput
            type="text"
            name="newLogo"
            value={values.newLogo}
            onChange={handleInput}
            placeholder="Upload New Logo"
            error={errors.newLogo}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-my-accent mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            }
          />
        </div>

        {/* inputs */}
        <div className="flex-grow space-y-4">
          <InputFirst
            type="text"
            name="businessName"
            value={values.businessName}
            onChange={handleInput}
            inputStyle="bg-transparent rounded-t-sm px-2 text-base"
            border="py-1.5 border-b-2 rounded-t shadow"
            label="BUSINESS NAME"
            error={errors.businessName}
            focusWithin="focus-within:border-my-accent"
          />

          <InputFirst
            type="text"
            name="tagline"
            value={values.tagline}
            onChange={handleInput}
            inputStyle="bg-transparent rounded-t-sm px-2 text-base"
            border="py-1.5 border-b-2 rounded-t shadow"
            label="TAGLINE"
            error={errors.tagline}
            focusWithin="focus-within:border-my-accent"
          />
        </div>
      </div>

      <div className="w-max ml-auto">
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
export default BusinessInformationCard;
