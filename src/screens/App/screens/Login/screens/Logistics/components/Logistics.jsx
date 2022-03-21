import React from "react";
import { Link } from "react-router-dom";
import { FormButton } from "../../../../../../../shared/Components/button/ButtonBase";
import { EmbossedInput } from "../../../../../../../shared/Components/input/Inputs";
import comerceWhiteLogo from "../../../../../../../shared/images/comerce-logo-white.webp";

const Login = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen p-48 bg-gradient-to-bl from-my-accent via-my-accent-tone to-my-accent-tint">
      <Form />
      <Hero />
    </div>
  );
};
export default Login;

const Form = () => {
  return (
    <div className="w-3/5 h-3/4 bg-white shadow-xl rounded-l-2xl p-14">
      <div className="flex flex-col gap-6 justify-between h-full">
        {/* title */}
        <div className="">
          <h1 className="text-3xl text-gray-800 font-semibold font-serif">
            Logistics Login
          </h1>
          <p className=" xs:text-xl text-gray-500 font-medium">Welcome Back!</p>
        </div>

        {/* input fields and button */}
        <div className="space-y-8">
          <EmbossedInput
            type="email"
            name="email"
            value={""}
            onChange={() => {}}
            background="bg-gray-100"
            label="EMAIL"
            error={""}
            width="w-full"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-my-accent mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            }
          />

          <EmbossedInput
            type="password"
            name="password"
            value={""}
            onChange={() => {}}
            background="bg-gray-100"
            label="PASSWORD"
            error={""}
            width="w-full"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-my-accent mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            }
          />

          {/* button and forgot passwords */}
          <div className="flex flex-row justify-between items-center">
            <FormButton
              size="REGULAR"
              text="Login"
              uppercase="uppercase"
              onClick={() => {}}
              isLoading={false}
              textColor="text-white"
              type="BUTTON"
            />

            <Link
              to="/password/forgot"
              className={`text-my-accent font-medium text-sm
        transition duration-150 ease-linear
        hover:text-gray-500`}
            >
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className={`w-2/5 h-full shadow-xl rounded-2xl p-14
    bg-gradient-to-bl from-my-accent via-my-accent-tone to-my-accent-tint 
    flex flex-col justify-between items-center`}
    >
      {/* logo */}
      <div className="flex flex-row items-center gap-2 md:gap-4 xl:gap-6">
        <img
          alt="COMERCE express Logo"
          src={comerceWhiteLogo}
          className="h-max w-16 md:w-24 lg:w-20 xl:w-24"
        />

        <div>
          <h2 className="font-mono text-white text-2xl md:text-3xl xl:text-4xl">
            COMERCE
          </h2>
          <p className="text-right font-medium text-white text-xl">express</p>
        </div>
      </div>

      {/* button */}
      <div className="flex flex-row gap-5">
        <HeroLink to="/catalogue" onClick={() => {}} text="Buy Now" />
        <HeroLink to="/login/seller" onClick={() => {}} text="Start Selling " />
      </div>
    </div>
  );
};

const HeroLink = ({ to, text, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`bg-white rounded-full w-36 h-8
    group transition duration-150 ease-linear
    hover:bg-my-accent
    hover:ring-1 hover:ring-my-accent hover:ring-offset-2`}
    >
      <div
        className={`bg-my-accent rounded-full h-full w-34 
        ml-auto
        relative flex items-center justify-center
        transition duration-150 ease-linear
        group-hover:bg-white`}
      >
        <span
          className={`text-white font-semibold
        transition duration-150 ease-linear
        group-hover:text-my-accent`}
        >
          {text}
        </span>
      </div>
    </Link>
  );
};
