import React from "react";
import Step, { Divider } from "./Step";
import comerceBlueLogo from "../../../../../../../../shared/images/comerce-logo-blue.webp";

const Steps = () => {
  return (
    <div
      className={`bg-white w-full shadow-2xl rounded-t-2xl pt-4 pb-8 flex flex-col gap-4`}
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

      <div className="px-24 flex flex-row items-center justify-center">
        <Step number={1} name="Agreement" passed={true} />
        {/* this divider is connected to the first */}
        <Divider passed={true} />

        <Step number={2} name="Vehicle" passed={false} toggled={true} />
        {/* this divider is connected to the second */}
        <Divider passed={false} />

        <Step number={3} name="Personal" passed={false} />
        {/* this divider is connected to the third */}
        <Divider passed={false} />

        <Step number={4} name="Account" passed={false} />
      </div>
    </div>
  );
};
export default Steps;
