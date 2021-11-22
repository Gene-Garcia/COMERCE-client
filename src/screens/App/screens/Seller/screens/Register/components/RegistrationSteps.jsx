import React from "react";
import useSellerRegistration from "../../../../../../../hooks/useSellerRegistration";
import comerceLogo from "../../../../../../../shared/images/comerce-logo-blue.webp";

function RegistrationSteps() {
  return (
    <div className="flex flex-col gap-3">
      {/* COMERCE logo */}
      <div className="bg-white rounded-l-lg p-4 flex flex-row items-center gap-3">
        <img alt="COMERCE Logo" className="w-10" src={comerceLogo} />
        <span className="text-black text-2xl font-mono">COMERCE</span>
      </div>

      {/* Steps */}
      <Step id={0} main="Step 1" sub="Terms of Agreement" />
      <Step id={1} main="Step 2" sub="Account Information" />
      <Step id={2} main="Step 3" sub="Business Information" />
    </div>
  );
}
export default RegistrationSteps;

function Step({ main, sub, id }) {
  const { activeStepId, visitedStep, changeActiveStep } =
    useSellerRegistration();

  let status;
  if (activeStepId === id) status = "toggled";
  else if (activeStepId !== id && id <= visitedStep) status = "visited";
  else status = "idle";

  const theme = {
    toggled: {
      main: "text-my-accent",
      sub: "text-my-accent",
    },

    idle: {
      main: "text-gray-400",
      sub: "text-gray-300",
    },

    visited: {
      main: "text-gray-800 ",
      sub: "text-gray-700 ",
    },
  };

  return (
    <div
      onClick={() => changeActiveStep(id)}
      className="group bg-white rounded-l-lg p-4 flex flex-row items-center justify-between cursor-pointer"
    >
      <div>
        <p
          className={`${theme[status].main} font-medium text-lg transition duration-200 group-hover:text-my-accent`}
        >
          {main}
        </p>
        <p
          className={`${theme[status].sub} text-md font-regular transition duration-200 group-hover:text-my-accent`}
        >
          {sub}
        </p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 group-hover:text-my-accent transition duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}
