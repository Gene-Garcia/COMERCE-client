import React from "react";

import { useSelector } from "react-redux";

import Account from "../PagesStep/Account";
import Agreement from "../PagesStep/Agreement";
import Personal from "../PagesStep/Personal";
import Vehicle from "../PagesStep/Vehicle";

const Form = () => {
  return (
    <div
      className={`bg-white w-full shadow-2xl rounded-b-2xl py-4 px-4 xs:px-6 sm:px-8
    flex flex-col gap-10`}
    >
      {/* title */}
      <div className="">
        <h1 className="text-2xl text-gray-800 font-semibold font-serif">
          Logistics Sign Up
        </h1>
        <p className=" xs:text-lg text-gray-500 font-medium">Let's deliver!</p>
      </div>

      <div className="space-y-10">
        <RenderAppropriateStep />
      </div>
    </div>
  );
};
export default Form;

const RenderAppropriateStep = () => {
  // step redux states
  const active = useSelector((state) => state.STEPS.active);

  return (
    <>
      {active === 1 && <Agreement />}
      {active === 2 && <Vehicle />}
      {active === 3 && <Personal />}
      {active === 4 && <Account />}
    </>
  );
};
