import React from "react";
import { Link } from "react-router-dom";
import { FormButton } from "../../../../../../../../shared/Components/button/ButtonBase";

const ButtonGroup = ({ children }) => {
  return (
    <div
      className="w-full flex flex-col xs:flex-row 
                gap-4 sm:gap-5 xl:gap-6 2xl:gap-7 
                items-center justify-end lg:justify-start"
    >
      {children}
    </div>
  );
};

const SecondaryButton = ({ name, to = "/login/logistics" }) => {
  return (
    <Link
      to={to}
      className={`py-2.5 px-5 gap-3 bg-gray-100
        inline-flex items-center justify-center flex-wrap 
        lowercase rounded
        transition duration-250 ease-linear
        hover:text-gray-500
        active:bg-gray-200
        active:ring-offset-0 active:ring-opacity-50
        font-sans text-lg font-semibold text-gray-400 tracking-normal leading-none`}
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
          text="NEXT"
          uppercase="uppercase"
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
          text="NEXT"
          uppercase="uppercase"
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
          text="NEXT"
          uppercase="uppercase"
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
      <FormButton
        size="MEDIUM"
        text="SIGN UP"
        uppercase="uppercase"
        onClick={onClick}
        isLoading={isLoading}
        textColor="text-white"
        type="BUTTON"
      />

      <SecondaryButton name="CANCEL" />
    </ButtonGroup>
  );
};

export { AgreementCTA, VehicleCTA, PersonalCTA, AccountCTA };
