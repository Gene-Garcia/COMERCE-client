import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStep } from "../../../../../../redux/Checkout/CheckoutAction";
import LinedTitle from "../../../../../../shared/Components/purchase/LinedTitle";

function StepIndicators() {
  // reduc checkout reducer
  const toggledStep = useSelector((state) => state.CHECKOUT.toggledStep);

  return (
    <div className="shadow rounded-md p-6 space-y-4">
      <LinedTitle title="Checkout Steps" />

      <div className="flex flex-col xs:flex-row justify-around">
        {/* shipping */}
        <Indicator
          number="1"
          stepName="Shipping"
          active={toggledStep === "SD"}
          id="SD"
        />

        {/* payment */}
        <Indicator
          number="2"
          stepName="Payment"
          active={toggledStep === "PD"}
          id="PD"
        />

        {/* review */}
        <Indicator
          number="3"
          stepName="Review"
          active={toggledStep === "RD"}
          id="RD"
        />
      </div>
    </div>
  );
}
export default StepIndicators;

function Indicator({ id, number, stepName: name, active }) {
  // redux
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleStep(id, number))}
      className="flex items-center gap-x-2.5 group"
    >
      <div
        className={`h-8 w-8 bg-opacity-90 rounded-full border
        flex items-center justify-center
        text-base font-bold 
        ${
          active
            ? "bg-accent border-transparent text-white"
            : "border-accent text-gray-500"
        } 
            transition duration-200 ease-linear
            group-hover:ring-2 group-hover:ring-accent/50 group-hover:ring-offset-2`}
      >
        {number}
      </div>

      <p
        className="font-semibold text-slate-600 text-sm 
                  transition duration-200 ease-linear
                  group-hover:text-slate-800"
      >
        {name}
      </p>
    </button>
  );
}
