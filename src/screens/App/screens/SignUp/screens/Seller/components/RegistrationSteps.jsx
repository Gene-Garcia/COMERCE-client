import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentStep } from "../../../../../../../redux/Seller/SellerRegistration/SellerRegistrationAction";

function RegistrationSteps() {
  return (
    <div className="flex flex-col gap-8">
      <div
        className="flex flex-row md:flex-col 
    gap-x-4 xs:gap-x-6 sm:gap-x-8 gap-y-3 
    items-center justify-center md:justify-start"
      >
        {/* Steps */}
        <Step id={0} sub="Agreement" />

        <div className="hidden md:block w-0.5 h-12 bg-accent"></div>

        <Step id={1} sub="Business" />

        <div className="hidden md:block w-0.5 h-12 bg-accent"></div>

        <Step id={2} sub="Account" />
      </div>

      <div className="block md:hidden m-auto h-0.5 w-1/2 bg-accent"></div>
    </div>
  );
}
export default RegistrationSteps;

function Step({ sub, id }) {
  // redux
  const dispatch = useDispatch();

  // redux seller registration reducer & state
  const activeStepId = useSelector(
    (state) => state.SELLER_REGISTRATION.activeStepId
  );
  const visitedStep = useSelector(
    (state) => state.SELLER_REGISTRATION.visitedStep
  );

  let status;
  if (activeStepId === id) status = "toggled";
  else if (activeStepId !== id && id <= visitedStep) status = "visited";
  else status = "idle";

  const theme = {
    toggled: {
      circle: "bg-accent",
      number: "text-white",
      sub: "text-black",
    },

    idle: {
      circle: "bg-white",
      number: "text-gray-500",
      sub: "text-gray-300",
    },

    visited: {
      circle: "bg-accent",
      number: "text-white",
      sub: "text-gray-700 ",
    },
  };

  return (
    <div
      onClick={() => dispatch(changeCurrentStep(id))}
      className="group cursor-pointer
      flex flex-col items-center gap-1"
    >
      <div
        className={`h-9 w-9 rounded-full bg-white
                  border border-accent
                  flex items-center justify-center`}
      >
        <span
          className={`h-7 w-7 rounded-full 
        ${theme[status].circle} 
        flex items-center justify-center
        text-sm font-bold ${theme[status].number}`}
        >
          {id + 1}
        </span>
      </div>

      <p
        className={`${theme[status].sub} mb-0
        text-base md:text-md font-medium 
        transition duration-150 
        group-hover:text-accent`}
      >
        {sub}
      </p>
    </div>
  );
}
