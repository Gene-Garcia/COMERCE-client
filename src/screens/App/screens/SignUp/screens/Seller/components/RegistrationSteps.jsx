import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutStep } from "../../../../../../../redux/Steps/StepsAction";

function RegistrationSteps() {
  return (
    <div className="flex flex-col gap-8">
      <div
        className="flex flex-row md:flex-col 
    gap-x-4 xs:gap-x-6 sm:gap-x-8 gap-y-3 
    items-center justify-center md:justify-start"
      >
        {/* Steps */}
        <Step id={1} name="Agreement" />

        <div className="hidden md:block w-0.5 h-12 bg-accent"></div>

        <Step id={2} name="Business" />

        <div className="hidden md:block w-0.5 h-12 bg-accent"></div>

        <Step id={3} name="Account" />
      </div>

      <div className="block md:hidden m-auto h-0.5 w-1/2 bg-accent"></div>
    </div>
  );
}
export default RegistrationSteps;

function Step({ name, id }) {
  // redux
  const dispatch = useDispatch();

  // steps redux states
  const active = useSelector((state) => state.STEPS.active);
  const visited = useSelector((state) => state.STEPS.visited);

  let status;
  if (active === id) status = "TOGGLED";
  else if (id <= visited) status = "VISITED";
  else status = "IDLE";

  const theme = {
    TOGGLED: {
      circle: "bg-accent",
      number: "text-white",
      sub: "text-neutral-600",
    },

    IDLE: {
      circle: "bg-white",
      number: "text-gray-500",
      sub: "text-neutral-400",
    },

    VISITED: {
      circle: "bg-accent",
      number: "text-white",
      sub: "text-neutral-400 ",
    },
  };

  return (
    <div
      onClick={() => dispatch(checkoutStep(id))}
      className="group cursor-pointer
      flex flex-col items-center gap-1"
    >
      <div
        className={`h-9 w-9 rounded-full bg-white
                  border border-accent
                  flex items-center justify-center
                  `}
      >
        <span
          className={`h-7 w-7 rounded-full 
        ${theme[status].circle} 
        flex items-center justify-center
        text-sm font-bold ${theme[status].number}
        transition duration-200 ease-linear
        group-hover:ring-2 group-hover:ring-accent/50`}
        >
          {id}
        </span>
      </div>

      <p
        className={`${theme[status].sub} mb-0
        texd-sm font-medium  
        transition duration-150 
        group-hover:text-neutral-500`}
      >
        {name}
      </p>
    </div>
  );
}
