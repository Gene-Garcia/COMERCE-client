import React from "react";
import Form from "./utils/Form";
import Steps from "./utils/Steps";

const SignUp = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-bl from-accent via-accent-tone to-accent-tint">
      <div
        className={`flex flex-col items-center justify-center 
        py-8 px-2 xs:px-3 sm:px-6 md:px-0
        w-full md:w-4/5 lg:w-3/4 xl:w-1/2 2xl:w-2/5 max-w-2xl`}
      >
        <Steps />
        <Form />
      </div>
    </div>
  );
};
export default SignUp;
