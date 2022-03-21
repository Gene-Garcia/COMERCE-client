import React from "react";
import Step, { Divider } from "../Steps/Step";

const Steps = () => {
  return (
    <div
      className={`bg-white w-full shadow-2xl py-4 px-40
    flex flex-row items-center justify-center`}
    >
      <Step number={1} name="Agreement" active={true} />
      {/* this divider is connected to the first */}
      <Divider active={true} />
      <Step number={2} name="Vehicle" active={false} />
      {/* this divider is connected to the second */}
      <Divider active={false} />
      <Step number={3} name="Account" active={false} />
    </div>
  );
};
export default Steps;
