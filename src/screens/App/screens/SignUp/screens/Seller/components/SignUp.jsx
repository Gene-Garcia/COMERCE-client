import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetToDefault as resetSellerRegistrationToDefault } from "../../../../../../../redux/Seller/SellerRegistration/SellerRegistrationAction";
import RegistrationSteps from "./RegistrationSteps";
import AccountInfo from "./steps/AccountInfo";
import BusinessInfo from "./steps/BusinessInfo";
import TermsOfAgreement from "./steps/TOA";
import Title from "./utils/Title";

function SignUp() {
  // redux
  const dispatch = useDispatch();

  // clean up once user leaves page
  useEffect(() => {
    return () => dispatch(resetSellerRegistrationToDefault());
  }, []);

  return (
    <div
      className="h-screen bg-gradient-to-bl from-my-accent via-my-accent-tone to-my-accent-tint 
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
  // redux seller registration reducer & states
  const activeStepId = useSelector(
    (state) => state.SELLER_REGISTRATION.activeStepId
  );

  return (
    <>
      {activeStepId === 0 && <TermsOfAgreement />}
      {activeStepId === 1 && <BusinessInfo />}
      {activeStepId === 2 && <AccountInfo />}
    </>
  );
};

const HeadingContent = () => {
  // redux seller registration reducer & states
  const activeStepId = useSelector(
    (state) => state.SELLER_REGISTRATION.activeStepId
  );

  return (
    <>
      {activeStepId === 0 && <Title name="Terms of Agreement" />}
      {activeStepId === 1 && <Title name="Business Information" />}
      {activeStepId === 2 && <Title name="Account Registration" />}
    </>
  );
};

const ConditionalRegistrationSteps = () => {
  return (
    <div className="block md:hidden">
      <RegistrationSteps />
    </div>
  );
};
