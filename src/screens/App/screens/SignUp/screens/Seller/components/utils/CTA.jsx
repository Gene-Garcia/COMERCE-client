import React from "react";
import { Link } from "react-router-dom";
import { FormButton } from "../../../../../../../../shared/Components/button/ButtonBase";

function PrimaryButton({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-my-accent shadow text-white px-5 sm:px-7 lg:px-9 h-12 text-base font-semibold shadow-lg transition duration-300 hover:bg-my-accent-mono active:ring-4 active:ring-my-accent-mono active:ring-opacity-30"
    >
      {value}
    </button>
  );
}

function SecondaryButton({ title, link = "/login/seller" }) {
  return (
    <a
      href={link}
      className="font-medium text-md font-sans lowercase text-gray-400 
      py-2.5 px-5 rounded leading-none
      bg-gray-100
      flex justify-center items-center 
      transition duration-200 ease-linear 
      hover:text-gray-500
      active:ring-2 active:ring-gray-600 active:ring-opacity-20"
    >
      {title}
    </a>
  );
}

function Body({ children }) {
  return (
    <div className="flex flex-wrap w-full justify-between gap-y-5 gap-x-6">
      <div className="flex flex-row gap-5 md:gap-3 lg:gap-4 items-center">
        {children}
      </div>

      <ToLogin />
    </div>
  );
}

function TOACTA({ onClick }) {
  return (
    <Body>
      <div className="w-max">
        <FormButton
          size="REGULAR"
          textColor="text-white"
          uppercase="uppercase"
          text="Agree"
          onClick={onClick}
        />
      </div>

      <SecondaryButton title="Disagree" />
    </Body>
  );
}

function AccountInfoCTA({ isLoading, onClick }) {
  return (
    <Body>
      <div className="w-max">
        <FormButton
          size="REGULAR"
          textColor="text-white"
          uppercase="uppercase"
          text="Submit"
          onClick={onClick}
          isLoading={isLoading}
        />
      </div>

      <SecondaryButton title="Cancel" />
    </Body>
  );
}

function BusinessInfoCTA({ onClick }) {
  return (
    <Body>
      <div className="w-max">
        <FormButton
          size="REGULAR"
          textColor="text-white"
          uppercase="uppercase"
          text="Create Account"
          onClick={onClick}
        />
      </div>

      <SecondaryButton title="Cancel" />
    </Body>
  );
}

export { TOACTA, AccountInfoCTA, BusinessInfoCTA };

function ToLogin() {
  return (
    <div className="flex flex-row items-center">
      <Link
        to="/login/seller"
        className="text-gray-500 text-sm transition ease-linear hover:text-my-accent"
      >
        already have an account?
      </Link>
      {/* <Link
        to="/login/seller"
        className="px-0.5 text-my-accent font-medium text-md border-b border-transparent transition ease-linear hover:border-my-accent "
      >
        Login
      </Link> */}
    </div>
  );
}
