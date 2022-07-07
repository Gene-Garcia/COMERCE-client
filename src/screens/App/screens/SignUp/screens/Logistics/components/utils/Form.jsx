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

  // we have this kind of render setup to usie block-hidden so that the loaded data will not be wiped
  // hence, when the user toggles back previous step corresponding form data loaded will still
  // be available. Only when SignUp component will be unmounted will the data of reducer be resetted.
  // Each respective form-values object will retain their values because we have just set their parent divs to hidden
  return (
    <>
      <div
        className={`space-y-10 ${activeStepNumber === 1 ? "block" : "hidden"}`}
      >
        <Agreement />
      </div>
      <div
        className={`space-y-10 ${activeStepNumber === 2 ? "block" : "hidden"}`}
      >
        <Vehicle />
      </div>
      <div
        className={`space-y-10 ${activeStepNumber === 3 ? "block" : "hidden"}`}
      >
        <Personal />
      </div>
      <div
        className={`space-y-10 ${activeStepNumber === 4 ? "block" : "hidden"}`}
      >
        <Account />
      </div>
    </>
  );
};
