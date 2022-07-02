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
      <Hero />

      {/* form */}
      <div
        className="h-full bg-white flex-grow 
                   flex flex-col justify-center items-center gap-y-14
                   py-5 sm:py-12 md:py-16 lg:py-0 
                   px-3 xs:px-7 sm:px-16 md:px-28 lg:px-20 xl:px-44"
      >
        <div className="space-y-10">
          <div className="flex flex-col items-center gap-y-1">
            <h1 className="font-bold text-center text-2xl md:text-4xl font-serif text-gray-700">
              Sign Up to COMERCE
            </h1>
            <p className=" text-lg md:text-xl text-gray-400">
              Create an account
            </p>
          </div>

          <OAuths />
        </div>

        <div className="w-full relative">
          <p className="bg-white relative z-10 mx-auto w-max px-6 text-gray-300 font-medium text-sm ">
            or sign up with email
          </p>
          <div className="absolute z-0 top-2.5 w-full bg-gray-200 h-0.5"></div>
        </div>

        <div className="flex flex-col w-full gap-y-6">
          <div className="flex flex-col md:flex-row items-stretch gap-6">
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

          <div className="flex flex-col md:flex-row items-stretch gap-6">
            <EmbossedInput
              name="email"
              type="email"
              label="EMAIL"
              error={errors.email}
              value={values.email}
              onChange={handleInput}
              background="bg-gray-100"
              shadow="shadow-md"
              width="w-full"
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
              width="w-full"
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
          </div>

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

        <Link
          to="/login/user"
          className="text-gray-400 font-medium text-base
                     transition duration-150 ease-linear
                     hover:text-gray-800"
        >
          Already have an account?
        </Link>
      </div>
    </div>
  );
}

export default SignUp;

const Hero = () => {
  return (
    <div
      className="lg:w-2/5 lg:h-full
                 bg-gradient-to-br from-my-accent via-my-accent-tin to-my-accent-tone
                 flex items-center justify-center"
    >
      <div className="w-3/5 flex flex-col justify-center items-start gap-y-20 content-center">
        <Link
          to="/catalogue"
          className="w-full h-20 bg-white rounded-lg shadow-lg
                     flex items-center justify-center
                     text-2xl text-my-accent font-semibold"
        >
          Browse Products
        </Link>
        <div className="w-3/5 h-20 bg-white rounded-lg"></div>
        <div className="w-thirty h-20 bg-white rounded-lg"></div>
      </div>
    </div>
  );
};
