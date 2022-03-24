import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../../../../../../../hooks/useForm";
import { loadAccountData } from "../../../../../../../../redux/Logistics/LogisticsRegistration/LogisticsRegistrationAction";
import { EmbossedInput } from "../../../../../../../../shared/Components/input/Inputs";
import { AccountCTA } from "./CallToAction";

const Account = () => {
  // redux
  const dispatch = useDispatch();

  const SubmitLogisticsRegistration = async () => {
    dispatch(loadAccountData(values));
  };

  const validate = (data, setErrors) => {
    const temp = { ...errors };

    if ("username" in data) temp.username = data.username ? "" : "Required";
    if ("email" in data) temp.email = data.email ? "" : "Required";
    if ("password" in data) temp.password = data.password ? "" : "Required";

    setErrors(temp);
  };

  const initial = {
    username: "",
    email: "",
    password: "",
  };
  const {
    values,
    errors,
    handleInput,
    handleFormSubmit,
    setIsLoading,
    isLoading,
  } = useForm(initial, initial, validate, SubmitLogisticsRegistration);

  return (
    <>
      {/* form */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between gap-5">
          <EmbossedInput
            type="text"
            name="username"
            value={values.username}
            onChange={handleInput}
            placeholder="How would you like to be addressed"
            background="bg-gray-100"
            label="Username"
            error={errors.username}
            width="w-full"
          />

          <EmbossedInput
            type="email"
            name="email"
            value={values.email}
            onChange={handleInput}
            placeholder="Enter your unique email"
            background="bg-gray-100"
            label="Email"
            error={errors.email}
            width="w-full"
          />
        </div>

        <EmbossedInput
          type="password"
          name="password"
          value={values.password}
          onChange={handleInput}
          placeholder="Strong password for your account"
          background="bg-gray-100"
          label="Account Password"
          error={errors.password}
          width="w-full"
        />
      </div>

      <AccountCTA onClick={handleFormSubmit} isLoading={isLoading} />
    </>
  );
};
export default Account;
