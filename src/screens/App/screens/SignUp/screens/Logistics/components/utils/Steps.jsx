import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleStep } from "../../../../../../../../redux/Logistics/LogisticsRegistration/LogisticsRegistrationAction";
import { checkoutStep } from "../../../../../../../../redux/Steps/StepsAction";

import Step from "./Step";

const Steps = () => {
  // dispatch
  const dispatch = useDispatch();

  // step redux states
  const active = useSelector((state) => state.STEPS.active);
  const visited = useSelector((state) => state.STEPS.visited);

  return (
    <div
      className="min-w-[25rem] px-8 xs:px-14 sm:px-20 md:px-24 
                h-full flex flex-row items-center justify-center"
    >
      <Step
        id={1}
        status={1 === active ? "ACTIVE" : 1 <= visited ? "VISITED" : "IDLE"}
        toggle={() => dispatch(checkoutStep(1))}
        name="Agreement"
        first={true}
      />

      <Step
        id={2}
        status={2 === active ? "ACTIVE" : 2 <= visited ? "VISITED" : "IDLE"}
        toggle={() => dispatch(checkoutStep(2))}
        name="Vehicle"
      />

      <Step
        id={3}
        status={3 === active ? "ACTIVE" : 3 <= visited ? "VISITED" : "IDLE"}
        toggle={() => dispatch(checkoutStep(3))}
        name="Personal"
      />

      <Step
        id={4}
        status={4 === active ? "ACTIVE" : 4 <= visited ? "VISITED" : "IDLE"}
        toggle={() => dispatch(checkoutStep(4))}
        name="Account"
      />
    </div>
  );
};
export default Steps;
