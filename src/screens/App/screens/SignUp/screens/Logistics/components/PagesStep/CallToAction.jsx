import React from "react";
import { Link } from "react-router-dom";
import { FormButton } from "../../../../../../../../shared/Components/button/ButtonBase";

const ButtonGroup = ({ children }) => {
  return (
    <div className="flex flex-col w-full gap-6 md:gap-7 xl:gap-8">
      <div
        className="w-full flex flex-row 
                gap-3 sm:gap-5 md:gap-3 lg:gap-4 
                items-center justify-end lg:justify-start"
      >
        {children}
      </div>

      <div className="w-max mx-auto">
        <ToLogin />
      </div>
    </div>
  );
};

const SecondaryButton = ({ name, to = "/login/logistics" }) => {
  return (
    <Link
      to={to}
      className="order-first lg:order-last
                self-stretch px-5
                font-regular text-base font-sans lowercase text-neutral-300 
                rounded leading-none bg-stone-50
                flex justify-center items-center 
                transition duration-200 ease-linear 
                hover:text-neutral-400
                border border-transparent hover:border-neutral-300"
    >
      {name}
    </Link>
  );
};

const AgreementCTA = ({ onClick }) => {
  return (
    <ButtonGroup>
      <div className="order-last lg:order-first">
        <FormButton
          size="REGULAR"
          text="I Agree"
          onClick={onClick}
          isLoading={false}
          textColor="text-white"
          type="BUTTON"
        />
      </div>

      <SecondaryButton name="CANCEL" />
    </ButtonGroup>
  );
};

const VehicleCTA = ({ onClick }) => {
  return (
    <ButtonGroup>
      <div className="order-last lg:order-first">
        <FormButton
          size="REGULAR"
          text="Register Vehicle"
          onClick={onClick}
          isLoading={false}
          textColor="text-white"
          type="BUTTON"
        />
      </div>

      <SecondaryButton name="CANCEL" />
    </ButtonGroup>
  );
};

const PersonalCTA = ({ onClick }) => {
  return (
    <ButtonGroup>
      <div className="order-last lg:order-first">
        <FormButton
          size="REGULAR"
          text="Save Information"
          onClick={onClick}
          isLoading={false}
          textColor="text-white"
          type="BUTTON"
        />
      </div>

      <SecondaryButton name="CANCEL" />
    </ButtonGroup>
  );
};

const AccountCTA = ({ onClick, isLoading }) => {
  return (
    <ButtonGroup>
      <div>
        <FormButton
          size="REGULAR"
          text="Create Account"
          onClick={onClick}
          isLoading={isLoading}
          textColor="text-white"
          type="BUTTON"
        />
      </div>

      <SecondaryButton name="CANCEL" />
    </ButtonGroup>
  );
};

export { AgreementCTA, VehicleCTA, PersonalCTA, AccountCTA };

const ToLogin = () => {
  return (
    <Link
      to="/login/logistics"
      className="text-zinc-400 text-sm 
      transition duration-150 ease-linear 
      hover:text-neutral-500"
    >
      already have an account?
    </Link>
  );
};
