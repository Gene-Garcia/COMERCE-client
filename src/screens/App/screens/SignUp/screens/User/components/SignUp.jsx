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
import comerceBlue from "../../../../../../../shared/images/comerce-logo-blue.webp";
import comerceWhite from "../../../../../../../shared/images/comerce-logo-white.webp";

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
    <div className="flex flex-col lg:flex-row py-12 md:py-0 md:h-screen">
      <Hero />

      {/* form */}
      <div className="bg-white flex-grow flex flex-col justify-center items-center">
        <div
          className="w-4/5 md:w-3/4 lg:w-10/12 xl:w-seventy 2xl:w-1/2
                     flex flex-col justify-center items-center 
                     gap-y-8 lg:gap-y-10 xl:gap-y-11 2xl:gap-y-16"
        >
          {/* comerce logo on MD and lower devices */}
          <Link to="/" className="flex items-center gap-2 lg:hidden">
            <img src={comerceBlue} className="w-12 h-min" />
            <h1 className="font-mono font-bold text-2xl">COMERCE</h1>
          </Link>

          <div className="space-y-6 lg:space-y-8">
            <div className="flex flex-col items-center gap-y-0.5">
              <h1 className="font-bold text-center text-3xl lg:text-4xl font-serif text-gray-900">
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

          <div className="flex flex-col w-full gap-y-6 lg:gap-y-9">
            <div className="flex flex-col md:flex-row items-stretch gap-6 lg:gap-9">
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

            <div className="flex flex-col md:flex-row items-stretch gap-6 lg:gap-9">
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
                    className="h-5 w-5 text-accent mx-2"
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
                    className="h-5 w-5 text-accent mx-2"
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
                  className="h-5 w-5 text-accent mx-2"
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
                  className="h-5 w-5 text-accent mx-2"
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

            <div className="w-max ml-auto lg:ml-0">
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
              className="block w-full text-center
                    text-zinc-400 text-sm 
                    transition duration-150 ease-linear 
                    hover:text-neutral-500"
            >
              already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

const Hero = () => {
  return (
    <>
      <div className="absolute top-3 left-3 z-50">
        <Link to="/">
          <img src={comerceWhite} className="w-7 h-auto" />
        </Link>
      </div>

      <div
        className="w-thirty hidden lg:flex items-center justify-center 
                 bg-gradient-to-br from-accent via-accent-tin to-accent-tone"
      >
        <div
          className="w-3/4 2xl:w-3/5 
                   flex flex-col justify-center items-start content-center
                   gap-y-16"
        >
          <Link
            to="/catalogue"
            className="w-full h-20 bg-white rounded-lg shadow-lg
                     flex items-center justify-center
                     font-serif text-lg 
                     text-accent font-semibold"
          >
            Browse Products
          </Link>
          <div className="w-4/6 xl:w-3/5 h-20 bg-white rounded-lg"></div>
          <div className="w-2/5 xl:w-thirty h-20 bg-white rounded-lg"></div>
        </div>
      </div>
    </>
  );
};
