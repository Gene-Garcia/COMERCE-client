import React from "react";
import { Link } from "react-router-dom";
import axios from "../../../../../../../shared/caller";
import { useForm } from "../../../../../../../hooks/useForm";
import { setUserPersistData } from "../../../../../../../shared/Auth/Login";
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

function Login({ history }) {
  // redux
  const dispatch = useDispatch();

  async function LoginApi() {
    await axios
      .post("/api/signin", { ...values, expectedUserType: "CUSTOMER" })
      .then((res) => {
        if (res.status === 200) {
          setUserPersistData(res.data.user.email, res.data.user.username);

          batch(() => {
            dispatch(setSeverity("success"));
            dispatch(setMessage("Logged in Successfully!"));
          });

          history.push("/user");
        }
      })
      .catch((err) => {
        setIsLoading(false);

        if (err.response)
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage(err.response.data.error));
          });
        else
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage("Something went wrong. Try again."));
          });
      });
  }

  function validate(formData, setErrors) {
    let tempErrs = { ...errors };

    if ("email" in formData)
      tempErrs.email =
        formData.email === "" || formData.email === null
          ? "Email is required"
          : "";

    if ("password" in formData)
      tempErrs.password =
        formData.password === "" || formData.password === null
          ? "Password is required"
          : "";

    setErrors(tempErrs);
  }

  const initialState = { email: "", password: "" };
  const {
    values,
    errors,
    handleInput,
    handleFormSubmit,
    isLoading,
    setIsLoading,
  } = useForm(initialState, initialState, validate, LoginApi);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* hero */}
      <Hero />

      {/* form */}
      <div className="bg-white flex-grow flex flex-col justify-center items-center">
        <div
          className="w-4/5 md:w-3/4 lg:w-10/12 xl:w-seventy 2xl:w-1/2
                     flex flex-col justify-center items-center 
                     gap-y-8 lg:gap-y-10 xl:gap-y-11 2xl:gap-y-16"
        >
          {/* comerce logo on MD and lower devices */}
          <div className="flex items-center gap-2 lg:hidden">
            <img src={comerceBlue} className="w-12 h-min" />
            <h1 className="font-mono font-bold text-2xl">COMERCE</h1>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="flex flex-col items-center gap-y-0.5">
              <h1 className="font-bold text-center text-3xl lg:text-4xl font-serif text-gray-900">
                COMERCE Login
              </h1>
              <p className="text-lg md:text-xl text-gray-400">
                Welcome back! Login to your account
              </p>
            </div>

            <OAuths />
          </div>

          <div className="w-full relative">
            <p className="bg-white relative z-10 mx-auto w-max px-6 text-gray-300 font-medium text-sm ">
              or login with email
            </p>
            <div className="absolute z-0 top-2.5 w-full bg-gray-200 h-0.5"></div>
          </div>

          <div className="flex flex-col w-full gap-y-6 lg:gap-y-9">
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
              type="password"
              name="password"
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

            <div className="flex flex-row justify-between gap-4 items-center">
              <div className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="rouned-xl border"
                />
                <label
                  for="rememberMe"
                  className="text-sm font-medium text-gray-600"
                >
                  Remember Me
                </label>
              </div>

              <Link
                to="/password/forgot"
                className="text-my-accent text-sm font-medium transition ease-linear hover:text-gray-600"
              >
                Forgot Password
              </Link>
            </div>

            <div className="w-min ml-auto lg:ml-0">
              <FormButton
                size="medium"
                isLoading={isLoading}
                text="LOGIN"
                uppercase="uppercase"
                onClick={handleFormSubmit}
                textColor="text-white"
              >
                <span className="text-white font-semibold text-base ">
                  LOGIN
                </span>
              </FormButton>
            </div>
          </div>

          <Link
            to="/sign-up/user"
            className="text-gray-400 font-medium text-base
                     transition duration-150 ease-linear
                     hover:text-gray-800"
          >
            Don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

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
                 bg-gradient-to-br from-my-accent via-my-accent-tin to-my-accent-tone"
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
                     text-my-accent font-semibold"
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
