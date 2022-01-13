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

function SecondaryButton({ title, link }) {
  return (
    <a
      href={link}
      className="text-nase font-medium text-gray-400 
      lowercase px-3 
      flex justify-center items-center 
      transition duration-200 ease-linear 
      hover:text-my-accent-tint active:ring-2 active:ring-gray-600 active:ring-opacity-20"
    >
      {title}
    </a>
  );
}

function Body({ children }) {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-start sm:justify-between gap-y-5">
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
      <FormButton
        size="MEDIUM"
        textColor="text-white"
        uppercase="uppercase"
        text="Agree"
        onClick={onClick}
      />

      <SecondaryButton title="Disagree" link="#" />
    </Body>
  );
}

function AccountInfoCTA({ onClick }) {
  return (
    <Body>
      <FormButton
        size="MEDIUM"
        textColor="text-white"
        uppercase="uppercase"
        text="Submit"
        onClick={onClick}
      />

      <SecondaryButton title="Cancel" link="#" />
    </Body>
  );
}

function BusinessInfoCTA({ isLoading, onClick }) {
  return (
    <Body>
      <FormButton
        size="MEDIUM"
        textColor="text-white"
        uppercase="uppercase"
        text="Create Account"
        onClick={onClick}
        isLoading={isLoading}
      />

      <SecondaryButton title="Cancel" link="#" />
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
