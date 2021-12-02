import React from "react";
import { Link } from "react-router-dom";
import useSellerRegistration from "../../../../../../../hooks/useSellerRegistration";
import comerceLogo from "../../../../../../../shared/images/comerce-logo-blue.webp";

function RegistrationSteps() {
  return (
    <div className="flex flex-row md:flex-col gap-1 xs:gap-2 sm:gap-3">
      {/* COMERCE logo */}
      <Link to="/">
        <div className="bg-white rounded-l-lg p-4 hidden md:flex flex-wrap flex-row items-center justify-center gap-y-0.5 gap-x-3">
          <img alt="COMERCE Logo" className="w-10" src={comerceLogo} />
          <span className="text-black text-2xl font-mono">COMERCE</span>
        </div>
      </Link>
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
      className="group bg-white rounded-t-lg md:rounded-t-none md:rounded-l-lg p-2 sm:p-3 md:p-4 flex flex-row items-center justify-between cursor-pointer"
    >
      <div>
        <p
          className={`${theme[status].main} font-medium text-md  md:text-lg transition duration-200 group-hover:text-my-accent`}
        >
          {main}
        </p>
        <p
          className={`${theme[status].sub} text-sm md:text-md font-regular transition duration-200 group-hover:text-my-accent`}
        >
          {sub}
        </p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block h-4 w-4 group-hover:text-my-accent transition duration-200"
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
