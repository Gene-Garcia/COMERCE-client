import React from "react";
import { Link } from "react-router-dom";
import { FormButton } from "../../../../../../../../shared/Components/button/ButtonBase";

const ButtonGroup = ({ children }) => {
  return (
    <div className="w-full flex flex-row gap-8 items-center">{children}</div>
  );
};

const SecondaryButton = ({ name, to }) => {
  return (
    <Link
      to={to}
      className={`w-full py-3 px-7 gap-3 bg-gray-100
        inline-flex items-center justify-center flex-wrap 
        rounded
        transition duration-250 ease-linear
        hover:ring-2 hover:ring-gray-200 
        hover:ring-opacity-55 hover:ring-offset-2
        active:bg-gray-200
        active:ring-offset-0 active:ring-opacity-50`}
    >
      <span
        className={`font-sans text-lg font-semibold text-gray-300 tracking-normal leading-none`}
      >
        {name}
      </span>
    </Link>
  );
};

const AgreementCTA = ({ onClick }) => {
  return (
    <ButtonGroup>
      <FormButton
        size="MEDIUM"
        text="NEXT"
        uppercase="uppercase"
        onClick={onClick}
        isLoading={false}
        textColor="text-white"
        type="BUTTON"
      />

      <SecondaryButton to="#" name="CANCEL" />
    </ButtonGroup>
  );
};

const VehicleCTA = ({ onClick }) => {
  return <ButtonGroup></ButtonGroup>;
};

const AccountCTA = ({ onClick }) => {
  return <ButtonGroup></ButtonGroup>;
};

export { AgreementCTA, VehicleCTA, AccountCTA };
