import React from "react";
import { Link } from "react-router-dom";
import { FormButton } from "../../../../../../../../shared/Components/button/ButtonBase";

function SecondaryButton({ title, link = "/login/seller" }) {
  return (
    <Link
      to={link}
      className="order-first lg:order-last
      self-stretch px-5
      font-regular text-base font-sans lowercase text-neutral-300 
      rounded leading-none bg-stone-50
      flex justify-center items-center 
      transition duration-200 ease-linear 
      hover:text-neutral-400
      border border-transparent hover:border-neutral-300"
    >
      {title}
    </Link>
  );
}

function Body({ children }) {
  return (
    <div className="flex flex-col w-full gap-6 md:gap-7 xl:gap-8">
      <div className="flex flex-row gap-5 md:gap-3 lg:gap-4 items-center justify-end lg:justify-start">
        {children}
      </div>

      <div className="w-max mx-auto">
        <ToLogin />
      </div>
    </div>
  );
}

function TOACTA({ onClick }) {
  return (
    <Body>
      <div className="">
        <FormButton
          size="REGULAR"
          textColor="text-white"
          uppercase=""
          text="I Agree"
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
      <div className="">
        <FormButton
          size="REGULAR"
          textColor="text-white"
          uppercase=""
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
      <div className="">
        <FormButton
          size="REGULAR"
          textColor="text-white"
          uppercase=""
          text="Create Account"
          onClick={onClick}
        />
      </div>

      <SecondaryButton title="Cancel" />
    </Body>
  );
}

export { TOACTA, AccountInfoCTA, BusinessInfoCTA };

const ToLogin = () => {
  return (
    <Link
      to="/login/seller"
      className="text-zinc-400 text-sm 
      transition duration-150 ease-linear 
      hover:text-neutral-500"
    >
      already have an account?
    </Link>
  );
};
