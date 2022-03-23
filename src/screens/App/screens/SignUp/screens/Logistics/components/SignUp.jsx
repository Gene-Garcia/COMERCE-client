import React from "react";
import Form from "./utils/Form";
import Steps from "./utils/Steps";

const SignUp = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-bl from-my-accent via-my-accent-tone to-my-accent-tint">
      <div
        className={`py-16 flex flex-col items-center justify-center w-thirtyfive`}
      >
        <Steps />
        <Form />
      </div>
    </div>
  );
};
export default SignUp;
