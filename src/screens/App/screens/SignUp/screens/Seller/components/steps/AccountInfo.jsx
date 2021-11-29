import React from "react";
import useAlert from "../../../../../../../../hooks/useAlert";
import { useForm } from "../../../../../../../../hooks/useForm";
import useSellerRegistration from "../../../../../../../../hooks/useSellerRegistration";
import InputField from "../../../../../../../../shared/Components/seller/InputField";
import { AccountInfoCTA } from "../utils/CTA";
import Title from "../utils/Title";

function AccountInfo() {
  // alert message
  const { setMessage, setSeverity } = useAlert();

  // seller context
  const { proceedToNextStep, loadAccountInformation } = useSellerRegistration();

  // submit function
  const createAccountOnSubmit = () => {
    loadAccountInformation(values);
    setSeverity("information");
    setMessage("We are now creating your seller account.");
    proceedToNextStep(2);
  };

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
    <div className="flex flex-col justify-between gap-10">
      <Title name="Account Information" />

      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-start gap-10">
          <InputField
            type="text"
            name="firstName"
            value={values.firstName}
            error={errors.firstName}
            onChange={handleInput}
            label="FIRST NAME"
            placeholder="owner's first name"
            className="w-5/12"
          />
          <InputField
            type="text"
            name="lastName"
            value={values.lastName}
            error={errors.lastName}
            onChange={handleInput}
            label="LAST NAME"
            placeholder="owner's last name"
            className="w-5/12"
          />
        </div>

        <InputField
          type="email"
          name="businessEmail"
          value={values.businessEmail}
          error={errors.businessEmail}
          onChange={handleInput}
          label="BUSINESS EMAIL"
          placeholder="email of the business"
          className="w-3/5"
        />

        <InputField
          type="email"
          name="ownerEmail"
          value={values.ownerEmail}
          error={errors.ownerEmail}
          onChange={handleInput}
          label="OWNER'S EMAIL"
          placeholder="email of the business owner"
          helper="Email is used to log in to your seller account"
          className="w-3/5"
        />

        <InputField
          type="email"
          name="confirmEmail"
          value={values.confirmEmail}
          error={errors.confirmEmail}
          onChange={handleInput}
          label="CONFIRM EMAIL"
          placeholder="re-enter the owner's email"
          className="w-3/5"
        />

        <InputField
          type="password"
          name="password"
          value={values.password}
          error={errors.password}
          onChange={handleInput}
          label="PASSWORD"
          placeholder="account password"
          className="w-3/5"
        />
      </div>

      <AccountInfoCTA onClick={handleFormSubmit} />
    </div>
  );
}

export default AccountInfo;
