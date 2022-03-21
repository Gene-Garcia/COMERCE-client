import React from "react";
import Form from "./utils/Form";
import Steps from "./utils/Steps";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-bl from-my-accent via-my-accent-tone to-my-accent-tint">
      <div className={`flex flex-col items-center justify-center w-5/12`}>
        <Steps />
        <Form />
      </div>
    </div>
  );
};
export default SignUp;
