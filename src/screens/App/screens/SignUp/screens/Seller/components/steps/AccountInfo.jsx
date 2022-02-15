import React from "react";
import { batch, useDispatch } from "react-redux";
import { useForm } from "../../../../../../../../hooks/useForm";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../redux/Alert/AlertAction";
import { proceedToNextStep } from "../../../../../../../../redux/Seller/SellerRegistration/SellerRegistrationAction";
import { LinedInput } from "../../../../../../../../shared/Components/input/Inputs";
import { AccountInfoCTA } from "../utils/CTA";
import Title from "../utils/Title";

function AccountInfo() {
  // redux
  const dispatch = useDispatch();

  // submit function
  const createAccountOnSubmit = () =>
    batch(() => {
      dispatch(loadAccountDetails(values));

      dispatch(setSeverity("information"));
      dispatch(setMessage("We are now creating your seller account."));

      dispatch(proceedToNextStep(2));
    });

  const init = {
    firstName: "",
    lastName: "",
    businessEmail: "",
    ownerEmail: "",
    confirmEmail: "",
    password: "",
  };
  const validate = (data, setErrors) => {
    let temp = { ...errors };

    if ("firstName" in data)
      temp.firstName = data.firstName ? "" : "First name is required";

    if ("lastName" in data)
      temp.lastName = data.lastName ? "" : "Last name is required";

    if ("businessEmail" in data)
      temp.businessEmail = data.businessEmail ? "" : "Put N/A if unavailable";

    if ("ownerEmail" in data)
      temp.ownerEmail = data.ownerEmail ? "" : "Owner email is required";

    if ("confirmEmail" in data)
      temp.confirmEmail = data.confirmEmail ? "" : "Confirm email is required";

    if ("confirmEmail" in data && values.ownerEmail !== data.confirmEmail)
      // omg this was the fix FUCK
      temp.confirmEmail = "Email does not match with owner email";

    if ("password" in data)
      temp.password = data.password ? "" : "Password is required";

    setErrors(temp);
  };

  const { values, errors, handleInput, handleFormSubmit } = useForm(
    init,
    init,
    validate,
    createAccountOnSubmit
  );

  return (
    <div className="flex flex-col justify-between gap-4 xs:gap-5 sm:gap-6 md:gap-10">
      <Title name="Account Information" />

      <div className="flex flex-col gap-3 xs:gap-4 sm:gap-5 md:gap-8">
        <div className="flex flex-col md:flex-row justify-start gap-3 xs:gap-x-4 sm:gap-x-5 gap-x-10">
          <LinedInput
            type="text"
            name="firstName"
            value={values.firstName}
            error={errors.firstName}
            onChange={handleInput}
            label="FIRST NAME"
            placeholder="owner's first name"
            width="xs:w-3/5 sm:w-5/12"
          />

          <LinedInput
            type="text"
            name="lastName"
            value={values.lastName}
            error={errors.lastName}
            onChange={handleInput}
            label="LAST NAME"
            placeholder="owner's last name"
            width="xs:w-3/5 sm:w-5/12"
          />
        </div>

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

        <LinedInput
          type="email"
          name="ownerEmail"
          value={values.ownerEmail}
          error={errors.ownerEmail}
          onChange={handleInput}
          label="OWNER'S EMAIL"
          placeholder="email of the business owner"
          helper="Email is used to log in to your seller account"
          width="xs:w-4/5 sm:w-3/5"
        />

        <LinedInput
          type="email"
          name="confirmEmail"
          value={values.confirmEmail}
          error={errors.confirmEmail}
          onChange={handleInput}
          label="CONFIRM EMAIL"
          placeholder="re-enter the owner's email"
          width="xs:w-4/5 sm:w-3/5"
        />

        <LinedInput
          type="password"
          name="password"
          value={values.password}
          error={errors.password}
          onChange={handleInput}
          label="PASSWORD"
          placeholder="account password"
          width="xs:w-4/5 sm:w-3/5"
        />
      </div>

      <AccountInfoCTA onClick={handleFormSubmit} />
    </div>
  );
}

export default AccountInfo;
