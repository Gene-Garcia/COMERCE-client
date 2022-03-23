import React from "react";
import Account from "../PagesStep/Account";
import Agreement from "../PagesStep/Agreement";
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

      <>
        {/* <Agreement /> */}
        {/* <Vehicle /> */}
        <Account />
      </>
    </div>
  );
};
export default Form;
