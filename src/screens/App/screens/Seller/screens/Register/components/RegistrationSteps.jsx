import React from "react";
import useSellerRegistration from "../../../../../../../hooks/useSellerRegistration";
import comerceLogo from "../../../../../../../shared/images/comerce-logo-blue.webp";

function RegistrationSteps() {
  // seller context
  const { activeStepId: aSI, changeActiveStep } = useSellerRegistration();

  // onclick function
  const toggle = (id) => changeActiveStep(id);

  return (
    <div className="flex flex-col gap-3">
      {/* COMERCE logo */}
      <div className="bg-white rounded-l-lg p-4 flex flex-row items-center gap-3">
        <img alt="COMERCE Logo" className="w-10" src={comerceLogo} />
        <span className="text-black text-2xl font-mono">COMERCE</span>
      </div>

      {/* Steps */}
      <Step
        id={0}
        status={aSI === 0 ? "toggled" : "idle"}
        main="Step 1"
        sub="Terms of Agreement"
        onClick={toggle}
      />
      <Step
        id={1}
        status={aSI === 1 ? "toggled" : "idle"}
        main="Step 2"
        sub="Account Information"
        onClick={toggle}
      />
      <Step
        id={2}
        status={aSI === 2 ? "toggled" : "idle"}
        main="Step 3"
        sub="Business Information"
        onClick={toggle}
      />
    </div>
  );
}
export default RegistrationSteps;

function Step({ main, sub, status, id, onClick }) {
  const theme = {
    toggled: {
      main: "text-my-accent",
      sub: "text-my-accent",
    },

    idle: {
      main: "text-gray-800 ",
      sub: "text-gray-700 ",
    },
  };

  return (
    <div
      onClick={() => onClick(id)}
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
