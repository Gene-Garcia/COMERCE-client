import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutStep } from "../../../../../../redux/Steps/StepsAction";

import LinedTitle from "../../../../../../shared/Components/purchase/LinedTitle";
import { stepTheme } from "./theme";

function StepIndicators() {
  // step redux state
  const active = useSelector((state) => state.STEPS.active);
  const visited = useSelector((state) => state.STEPS.visited);

  return (
    <div className="shadow rounded-md p-6 space-y-4">
      <LinedTitle title="Checkout Steps" />

      <div className="flex flex-col xs:flex-row justify-around">
        {/* shipping */}
        <Indicator
          stepName="Shipping"
          status={1 === active ? "ACTIVE" : 1 <= visited ? "VISITED" : "IDLE"}
          id={1}
        />

        {/* payment */}
        <Indicator
          stepName="Payment"
          status={2 === active ? "ACTIVE" : 2 <= visited ? "VISITED" : "IDLE"}
          id={2}
        />

        {/* review */}
        <Indicator
          stepName="Review"
          status={3 === active ? "ACTIVE" : 3 <= visited ? "VISITED" : "IDLE"}
          id={3}
        />
      </div>
    </div>
  );
}
export default StepIndicators;

function Indicator({ id, stepName: name, status }) {
  // redux
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(checkoutStep(id))}
      className={`flex items-center gap-x-2.5 ${stepTheme[status].BUTTON}`}
    >
      <div
        className={`h-8 w-8 rounded-full border
                  flex items-center justify-center
                  text-base font-bold 
                  transition duration-200 ease-linear
                  group-hover:ring-2 group-hover:ring-accent/50 group-hover:ring-offset
                  ${stepTheme[status].NUMBER}`}
      >
        {id}
      </div>

      <p
        className={`font-semibold text-sm 
                  transition duration-200 ease-linear
                  ${stepTheme[status].TEXT}`}
      >
        {name}
      </p>
    </button>
  );
}
