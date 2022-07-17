import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStep } from "../../../../../../redux/Checkout/CheckoutAction";

function StepIndicators() {
  // reduc checkout reducer
  const toggledStep = useSelector((state) => state.CHECKOUT.toggledStep);

  return (
    <div className="flex flex-col sm:flex-row justify-between shadow-lg rounded-lg py-4 px-5 gap-y-4">
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
  );
}
export default StepIndicators;

function Indicator({ id, number, stepName: name, active }) {
  // redux
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleStep(id, number))}
      className="flex flex-row items-center gap-x-2"
    >
      <div
        className={
          (active
            ? "bg-accent border-transparent text-white"
            : "border-accent text-gray-500") +
          ` transition border bg-opacity-90 h-8 w-8 rounded-full text-md font-bold flex items-center justify-center`
        }
      >
        {number}
      </div>

      <p className="font-semibold text-gray-600">{name}</p>
    </button>
  );
}
