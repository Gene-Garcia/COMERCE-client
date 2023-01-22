import React from "react";
import { stepTheme } from "./theme";

const Step = ({ id, status, toggle, name, first }) => {
  return (
    <>
      {/* if the Step is the first step then it must not have an associated divider */}
      {!first && <Divider passed={status !== "IDLE"} />}

      <button
        className={`gap-0.5 relative
                    w-9 h-9 rounded-full border
                    flex items-center justify-center
                    transition duration-150 ease-linear
                    ${stepTheme[status].BUTTON}`}
        onClick={toggle}
      >
        <span
          className={`relative font-semibold text-base ${stepTheme[status].NUMBER}`}
        >
          {id}
        </span>

        <span
          className={`absolute -bottom-6 text-sm font-medium ${stepTheme[status].TEXT}`}
        >
          {name}
        </span>
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
      h-1 rounded-l-sm ${passed ? "bg-accent/70" : "bg-slate-100"}`}
    ></div>
  );
};
export { Divider };
