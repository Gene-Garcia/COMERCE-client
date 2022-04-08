import React from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../../../../../../hooks/useForm";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../redux/Alert/AlertAction";
import { LinedInput } from "../../../../../../../../shared/Components/input/Inputs";
import { AccountInfoCTA } from "../utils/CTA";
import Title from "../utils/Title";
import axios from "../../../../../../../../shared/caller";
import { useHistory } from "react-router-dom";

function AccountInfo() {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // redux seller registration reducer & state
  const businessDetails = useSelector(
    (state) => state.SELLER_REGISTRATION.businessDetails
  );

  // submit API function
  const createAccountAPI = async () => {
    // build data for API
    const data = {
      businessData: {
        ...businessDetails,
      },

      firstName: values.firstName,
      lastName: values.lastName,
      email: values.ownerEmail,
      username: (values.firstName + values.lastName).toLowerCase(),
      password: values.password,

      userType: "SELLER",
    };

    await axios
      .post("/api/signup", data)
      .then((res) => {
        if (res.status === 200) {
          batch(() => {
            dispatch(setSeverity("success"));
            dispatch(
              setMessage(
                "Account created succesfully. We will now redirect to the login page."
              )
            );
          });

          history.push("/login/seller");
        }
      })
      .catch((err) => {
        // so that when an error is not 403, the user can still re-submit the page
        setIsLoading(false);

        if (!err.response)
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage("Something went wrong. Please try again."));
          });
        else if (err.response.status === 403) history.push("/forbidden");
        else
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage(err.response.data.error));
          });
      });
  };

  const init = {
    firstName: "",
    lastName: "",
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

  const {
    values,
    errors,
    handleInput,
    handleFormSubmit,
    isLoading,
    setIsLoading,
  } = useForm(init, init, validate, createAccountAPI);

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

      <AccountInfoCTA isLoading={isLoading} onClick={handleFormSubmit} />
    </div>
  );
}

export default AccountInfo;
