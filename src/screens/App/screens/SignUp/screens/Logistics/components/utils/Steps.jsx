import React from "react";
import { useDispatch } from "react-redux";
import Step, { Divider } from "./Step";
import comerceBlueLogo from "../../../../../../../../shared/images/comerce-logo-blue.webp";
import { toggleStep } from "../../../../../../../../redux/Logistics/LogisticsRegistration/LogisticsRegistrationAction";

const Steps = () => {
  // redux
  const dispatch = useDispatch();

  return (
    <div
      className={`bg-white w-full shadow-2xl rounded-t-2xl py-4 flex flex-col gap-4`}
    >
      <div className="place-self-center">
        {/* logo */}
        <div className="flex flex-row items-center gap-4">
          <img
            alt="COMERCE express Logo"
            src={comerceBlueLogo}
            className="h-max w-14"
          />

          <div className="flex flex-col gap-0 justify-end items-end">
            <h2 className="font-mono text-my-accent text-2xl my-0">COMERCE</h2>
            <p className="text-right font-medium text-my-accent text-lg my-0">
              express
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="overflow-x-auto pt-1 pb-7">
        <div className="h-96 min-w-rr1 px-8 xs:px-14 sm:px-20 md:px-24 h-full flex flex-row items-center justify-center">
          <Step
            toggle={() => dispatch(toggleStep(1))}
            number={1}
            name="Agreement"
            first={true}
          />

          <Step
            toggle={() => dispatch(toggleStep(2))}
            number={2}
            name="Vehicle"
          />

          <Step
            toggle={() => dispatch(toggleStep(3))}
            number={3}
            name="Personal"
          />

          <Step
            toggle={() => dispatch(toggleStep(4))}
            number={4}
            name="Account"
          />
        </div>
      </div>
    </div>
  );
};
export default Steps;
