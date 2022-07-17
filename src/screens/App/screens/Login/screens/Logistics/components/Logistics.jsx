import React from "react";
import Form from "./utils/Form";
import Hero from "./utils/Hero";
import comerceLogo from "../../../../../../../shared/images/comerce-logo-blue.webp";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="flex flex-row justify-end xl:justify-center items-center h-screen 
    bg-gradient-to-bl from-accent via-accent-tone to-accent-tint"
    >
      <div
        className="w-11/12 sm:w-4/5 md:w-seventy lg:4/6 xl:w-fifty-five h-max 
      bg-white shadow-xl rounded-l-xl md:rounded-l-2xl xl:rounded-r-2xl 
      p-7 md:p-10 lg:p-12
      flex flex-col gap-6"
      >
        <Logo />
        <Form />
      </div>
      {/* <Hero /> */}
    </div>
  );
};
export default Login;

const Logo = () => {
  return (
    <Link to="/" className="flex flex-row items-start gap-3 md:gap-4">
      <img
        alt="COMERCE express Logo"
        src={comerceLogo}
        className="h-auto w-10 md:w-12 xl:w-14"
      />

      <div>
        <h2
          className="font-mono text-accent
          leading-none
        text-xl md:text-2xl xl:text-3xl"
        >
          COMERCE
        </h2>
        <p className="-mt-0.5 sm:-mt-1 md:-mt-2 font-medium text-accent text-md sm:text-lg md:text-xl">
          express
        </p>
      </div>
    </Link>
  );
};
