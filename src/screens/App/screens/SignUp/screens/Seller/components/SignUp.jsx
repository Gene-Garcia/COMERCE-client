import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { resetToDefault as resetSellerRegistrationToDefault } from "../../../../../../../redux/Seller/SellerRegistration/SellerRegistrationAction";
import {
  initializeSteps,
  resetStepReduxToDefault,
} from "../../../../../../../redux/Steps/StepsAction";

import RegistrationSteps from "./RegistrationSteps";
import AccountInfo from "./steps/AccountInfo";
import BusinessInfo from "./steps/BusinessInfo";

import TermsOfAgreement from "./steps/TOA";

import Title from "./utils/Title";

function SignUp() {
  // redux
  const dispatch = useDispatch();

  useEffect(() => {
    // configure and initialize steps redux
    dispatch(initializeSteps(1, 3, 1));
  }, []);

  // clean up
  useEffect(() => {
    return () => {
      batch(() => {
        dispatch(resetSellerRegistrationToDefault());
        dispatch(resetStepReduxToDefault());
      });
    };
  }, []);

  return (
    <div
      className="h-screen bg-gradient-to-bl from-accent via-accent-tone to-accent-tint 
                flex items-center justify-center
                p-2.5 sm:p-0"
    >
      <div
        className="w-full sm:w-11/12 md:w-4/5 xl:w-3/4 2xl:w-1/2 
                  grid grid-cols-4 gap-8
                  shadow-2xl bg-white rounded-lg p-5 md:p-6 lg:p-8"
      >
        <div className="order-2 md:order-1 col-span-4">
          <HeadingContent />
        </div>

        <div className="order-1 md:order-2 col-span-4 md:col-span-1">
          <RegistrationSteps />
        </div>

        <div className="order-3 col-span-4 md:col-span-3">
          <FormContent />
        </div>
      </div>
    </div>
  );
}

export default SignUp;

// Single Responsibility Principle

const FormContent = () => {
  // steps redux state
  const active = useSelector((state) => state.STEPS.active);

  return (
    <>
      {active === 1 && <TermsOfAgreement />}
      {active === 2 && <BusinessInfo />}
      {active === 3 && <AccountInfo />}
    </>
  );
};

const HeadingContent = () => {
  // steps redux state
  const active = useSelector((state) => state.STEPS.active);

  return (
    <>
      {active === 1 && <Title name="Terms of Agreement" />}
      {active === 2 && <Title name="Business Information" />}
      {active === 3 && <Title name="Account Registration" />}
    </>
  );
};
