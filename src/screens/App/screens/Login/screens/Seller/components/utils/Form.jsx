import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../../../../../../../../hooks/useForm";
import axios from "../../../../../../../../shared/caller";
import useAlert from "../../../../../../../../hooks/useAlert";
import { setUserPersistData } from "../../../../../../../../shared/Auth/Login";
import comerceAccent from "../../../../../../../../shared/images/comerce-logo-blue.webp";
import {
  EmbossedInput,
  SellerAccountInput,
} from "../../../../../../../../shared/Components/input/Inputs";
import { FormButton } from "../../../../../../../../shared/Components/button/ButtonBase";

function Form() {
  //history
  let history = useHistory();

  // alert context and hook
  const { setMessage, setSeverity } = useAlert();

  // Form hooks
  const LoginAPI = async () => {
    await axios
      .post("/api/signin", { ...values, expectedUserType: "SELLER" })
      .then((res) => {
        if (res.status === 200) {
          setUserPersistData(
            res.data.user.email,
            res.data.user.username,
            res.data.business.businessName,
            res.data.business.businessLogoAddress,
            res.data.business.businessEmail
          );

          setSeverity("success");
          setMessage("Succesfully logged in. Welcome back!");

          history.push("/seller");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setSeverity("error");

        if (!err.response)
          setMessage("Something went wrong. Please try again later.");
        else setMessage(err.response.data.error);
      });
  };

  const validation = (data, setErrors) => {
    let temp = { ...errors };

    if ("email" in data) temp.email = data.email ? "" : "Email is required";

    if ("password" in data)
      temp.password = data.password ? "" : "Password is required";

    setErrors(temp);
  };

  const init = { email: "", password: "" };
  const {
    values,
    errors,
    handleInput,
    handleFormSubmit,
    isLoading,
    setIsLoading,
  } = useForm(init, init, validation, LoginAPI);

  return (
    <div className="w-full xs:w-4/5 sm:w-seventy md:w-3/5 xl:w-1/2 h-full p-7 md:p-10 flex flex-col justify-center gap-12 xs:gap-16">
      {/* COMERCE logo, but shows only on devices smaller than xs */}
      <Link to="/" className="block xs:hidden">
        <div className="flex flex-row items-center gap-4">
          <img alt="COMERCE Logo" src={comerceAccent} className="w-14" />
          <h2 className="text-2xl font-mono">COMERCE</h2>
        </div>
      </Link>

      <div className="">
        <h1 className="text-3xl text-gray-800 font-semibold font-serif">
          Seller Login
        </h1>
        <p className=" xs:text-xl text-gray-500 font-medium">Welcome Back!</p>
      </div>

      <div className="space-y-9">
        <EmbossedInput
          type="email"
          name="email"
          value={values.email}
          onChange={handleInput}
          label="OWNERS EMAIL"
          error={errors.email}
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
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />

        <div className="space-y-2">
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

          <div className="text-right">
            <Link
              to="/password/forgot"
              className="text-my-accent text-sm font-medium transition ease-linear hover:text-gray-600"
            >
              Forgot Password
            </Link>
          </div>
        </div>

        <FormButton
          size="REGULAR"
          isLoading={isLoading}
          onClick={handleFormSubmit}
          text="Login"
          uppercase="uppercase"
          textColor="text-white"
        />

        <div className="flex flex-row items-center justify-center gap-2">
          <p className="text-gray-400 mb-0 text-sm lg:text-base">
            don't have an account?
          </p>
          <Link
            to="/sign-up/seller"
            className="px-0.5 text-my-accent font-medium xs:text-md lg:text-lg border-b border-transparent transition ease-linear hover:border-my-accent "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Form;
