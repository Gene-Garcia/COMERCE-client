import React from "react";
import { Link } from "react-router-dom";
import axios from "../../../../../../../shared/caller";
import { useForm } from "../../../../../../../hooks/useForm";
import OAuths from "../../../../../../../shared/Auth/OAuths";
import { EmbossedInput } from "../../../../../../../shared/Components/input/Inputs";
import { FormButton } from "../../../../../../../shared/Components/button/ButtonBase";
import { batch, useDispatch } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../redux/Alert/AlertAction";

function SignUp({ history }) {
  // redux
  const dispatch = useDispatch();

  async function SignUpAPI() {
    await axios
      .post("/api/signup", { ...values, userType: "CUSTOMER" })
      .then((res) => {
        if (res.status === 200) {
          batch(() => {
            dispatch(setSeverity("success"));
            dispatch(setMessage("Account created successfully!"));
          });

          history.push("/login/user");
        }
      })
      .catch((err) => {
        setIsLoading(false);

        if (!err.response)
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage("Something went wrong. Try again."));
          });
        else if (err.reponse.status === 403) history.push("/forbidden");
        else
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage(err.response.data.error));
          });
      });
  }

  function validate(data, setErrors) {
    let errs = { ...errors };

    if ("firstName" in data)
      errs.firstName = data.firstName ? "" : "First name is required";

    if ("lastName" in data)
      errs.lastName = data.lastName ? "" : "Last name is required";

    if ("username" in data)
      errs.username = data.username ? "" : "Username is required";

    if ("email" in data) errs.email = data.email ? "" : "Email is required";

    if ("confirmEmail" in data) {
      errs.confirmEmail = data.confirmEmail ? "" : "Confirm email is required";

      if (!errs.confirmEmail)
        errs.confirmEmail =
          data.confirmEmail === values.email ? "" : "Email does not match";
    }

    if ("password" in data)
      errs.password = data.password ? "" : "Password is required";

    setErrors(errs);
  }

  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
  };
  const {
    values,
    errors,
    handleInput,
    handleFormSubmit,
    isLoading,
    setIsLoading,
  } = useForm(initialState, initialState, validate, SignUpAPI);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* form */}
      <div className="lg:order-last lg:h-full bg-white flex-grow flex flex-col justify-evenly items-center gap-y-10 lg:gap-y-0 py-5 sm:py-12 md:py-16 lg:py-0 px-3 xs:px-7 sm:px-16 md:px-28 lg:px-20 xl:px-44">
        <div className="flex flex-col items-center gap-y-1">
          <h1 className="font-bold text-center text-2xl md:text-3xl font-sans text-gray-700">
            Create an account
          </h1>
          <p className="font-medium text-lg md:text-xl text-gray-400">
            CoMerce Account
          </p>
        </div>

        <div className="flex flex-row gap-x-4">
          <OAuths />
        </div>

        <div className="flex flex-col w-full gap-y-8">
          <div className="flex flex-col md:flex-row items-stretch gap-8">
            <EmbossedInput
              name="firstName"
              type="text"
              label="FIRST NAME"
              error={errors.firstName}
              value={values.firstName}
              onChange={handleInput}
              background="bg-gray-100"
              shadow="shadow-md"
              width="w-full"
            />

            <EmbossedInput
              name="lastName"
              type="text"
              label="LAST NAME"
              error={errors.lastName}
              value={values.lastName}
              onChange={handleInput}
              background="bg-gray-100"
              shadow="shadow-md"
              width="w-full"
            />
          </div>

          <EmbossedInput
            name="email"
            type="email"
            label="EMAIL"
            error={errors.email}
            value={values.email}
            onChange={handleInput}
            background="bg-gray-100"
            shadow="shadow-md"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-my-accent mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            }
          />

          <EmbossedInput
            name="confirmEmail"
            type="email"
            label="CONFIRM EMAIL"
            error={errors.confirmEmail}
            value={values.confirmEmail}
            onChange={handleInput}
            background="bg-gray-100"
            shadow="shadow-md"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-my-accent mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            }
          />

          <EmbossedInput
            name="username"
            type="text"
            label="USERNAME"
            error={errors.username}
            value={values.username}
            onChange={handleInput}
            background="bg-gray-100"
            shadow="shadow-md"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-my-accent mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          />

          <EmbossedInput
            name="password"
            type="password"
            label="PASSWORD"
            error={errors.password}
            value={values.password}
            onChange={handleInput}
            background="bg-gray-100"
            shadow="shadow-md"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-my-accent mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            }
          />

          <FormButton
            size="medium"
            text="SIGN UP"
            uppercase="uppercase"
            isLoading={isLoading}
            onClick={handleFormSubmit}
            textColor="text-white"
          ></FormButton>
        </div>
      </div>

      {/* hero */}
      <div className="lg:w-2/5 lg:h-full flex justify-start items-center py-6 sm:py-10 lg:py-20 gap-y-2 sm:gap-y-3 lg:gap-y-40 flex-col  bg-gradient-to-br from-my-accent via-my-accent-tin to-my-accent-tone">
        <div className="flex flex-col justify-center items-center lg:gap-y-6">
          <h2 className="text-white font-bold text-xl lg:text-3xl text-opacity-80">
            Already have an account?
          </h2>
          <Link
            to="/login/user"
            className="transition duration-300 rounded-full border-b border-transparent text-white font-semibold text-md lg:text-xl hover:border-white px-20 py-3"
          >
            Login
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center lg:gap-y-6">
          <h2 className="text-white font-bold text-xl lg:text-3xl text-opacity-80">
            Start filling up your cart
          </h2>
          <Link
            to="/catalogue"
            className="transition duration-300 rounded-full border-b border-transparent text-white font-semibold text-md lg:text-xl hover:border-white px-20 py-3"
          >
            Browse
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
