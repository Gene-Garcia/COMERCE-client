import React from "react";
import { useSelector } from "react-redux";
import Account from "../PagesStep/Account";
import Agreement from "../PagesStep/Agreement";
import Personal from "../PagesStep/Personal";
import Vehicle from "../PagesStep/Vehicle";

const Form = () => {
  return (
    <div
      className={`bg-white w-full shadow-2xl rounded-b-2xl py-4 px-8
    flex flex-col gap-10`}
    >
      {/* title */}
      <div className="">
        <h1 className="text-2xl text-gray-800 font-semibold font-serif">
          Logistics Sign Up
        </h1>
        <p className=" xs:text-lg text-gray-500 font-medium">Welcome Back!</p>
      </div>

      <RenderAppropriateStep />
    </div>
  );
};
export default Form;

const RenderAppropriateStep = () => {
  // redux logistics registrations reducer & state
  const activeStepNumber = useSelector(
    (state) => state.LOGISTICS_REGISTRATION.activeStepNumber
  );

  // even if we render and unrender these form, the loaded data will not be wiped
  // hence, when the user toggles back previous step corresponding form data loaded will still
  // be available. Only when SignUp component will be unmounted will the data of reducer be resetted.
  return (
    <>
      {activeStepNumber === 1 && <Agreement />}
      {activeStepNumber === 2 && <Vehicle />}
      {activeStepNumber === 3 && <Personal />}
      {activeStepNumber === 4 && <Account />}
    </>
  );
};
