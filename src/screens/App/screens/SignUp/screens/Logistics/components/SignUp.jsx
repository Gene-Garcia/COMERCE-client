import React, { useEffect } from "react";

import { batch, useDispatch } from "react-redux";
import { resetToDefault } from "../../../../../../../redux/Logistics/LogisticsRegistration/LogisticsRegistrationAction";
import {
  initializeSteps,
  resetStepReduxToDefault,
} from "../../../../../../../redux/Steps/StepsAction";

import Form from "./utils/Form";
import Heading from "./utils/Heading";

const SignUp = () => {
  // redux
  const dispatch = useDispatch();

  // initialization
  useEffect(() => {
    dispatch(initializeSteps(1, 4, 1));
  }, []);

  // clean up
  useEffect(() => {
    return () => {
      batch(() => {
        dispatch(resetToDefault());
        dispatch(resetStepReduxToDefault());
      });
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-bl from-accent via-accent-tone to-accent-tint">
      <div
        className={`flex flex-col items-center justify-center 
                py-8 px-2 xs:px-3 sm:px-6 md:px-0
                w-full md:w-4/5 lg:w-3/4 xl:w-1/2 2xl:w-2/5 max-w-2xl`}
      >
        <Heading />
        <Form />
      </div>
    </div>
  );
};
export default SignUp;
