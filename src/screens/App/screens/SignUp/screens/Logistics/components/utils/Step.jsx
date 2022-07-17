import React from "react";
import { useSelector } from "react-redux";

const Step = ({ toggle, number, name, first }) => {
  // redux logistics registration reducer & states
  const activeStepNumber = useSelector(
    (state) => state.LOGISTICS_REGISTRATION.activeStepNumber
  );
  const visitedStepNumber = useSelector(
    (state) => state.LOGISTICS_REGISTRATION.visitedStepNumber
  );

  const toggled = number === activeStepNumber;
  const passed = number <= visitedStepNumber;

  return (
    <>
      {/* if the Step is the first step then it must not have an associated divider */}
      {!first && <Divider passed={passed} />}

      <button className="group gap-0.5" onClick={toggle}>
        <div
          className={`relative
            w-10 h-10 rounded-full 
            border-2 border-accent
            ${passed ? "bg-accent" : "bg-white"}
            flex items-center justify-center
            transition duration-150 ease-linear
            group-hover:ring-1 group-hover:ring-accent group-hover:ring-offset-2`}
        >
          <span
            className={`relative font-semibold text-lg
                ${passed ? "text-white" : "text-accent"}`}
          >
            {number}
          </span>

          <span
            className={`absolute -bottom-6 text-sm font-semibold 
        ${toggled ? "text-gray-800" : "text-accent"}`}
          >
            {name}
          </span>
        </div>
      </button>
    </>
  );
};
export default Step;

const Divider = ({ passed }) => {
  // the divider is associated to the step in its right
  return (
    <div
      className={`flex-grow 
      h-1.5 rounded-l-sm ${passed ? "bg-accent" : "bg-gray-200"}`}
    ></div>
  );
};
export { Divider };
