import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetToDefault as resetSellerRegistrationToDefault } from "../../../../../../../redux/Seller/SellerRegistration/SellerRegistrationAction";
import RegistrationSteps from "./RegistrationSteps";
import AccountInfo from "./steps/AccountInfo";
import BusinessInfo from "./steps/BusinessInfo";
import TermsOfAgreement from "./steps/TOA";

function SignUp() {
  // redux
  const dispatch = useDispatch();

  // clean up once user leaves page
  useEffect(() => {
    return () => dispatch(resetSellerRegistrationToDefault());
  }, []);

  return (
    <div className="h-screen bg-gradient-to-bl from-my-accent via-my-accent-tone to-my-accent-tint flex items-center justify-center px-2.5 sm:px-0">
      {/* root container - no bg color */}
      <div className="w-full sm:w-11/12 md:w-4/5 xl:w-3/4 2xl:w-1/2 flex flex-col md:flex-row shadow-2xl bg-transparent rounded-lg">
        {/* steps container */}
        <div className="md:w-1/4 rounded-l-lg">
          <RegistrationSteps />
        </div>

        {/* content */}
        <div className="md:w-3/4 bg-white rounded-bl-lg md:rounded-l-none rounded-r-none xs:rounded-br-lg md:rounded-tr-lg p-5 md:p-6 lg:p-8">
          <RegistrationContent />
        </div>
      </div>
    </div>
  );
}

export default SignUp;

// Single Responsibility Principle

const RegistrationContent = () => {
  // redux seller registration reducer & states
  const activeStepId = useSelector(
    (state) => state.SELLER_REGISTRATION.activeStepId
  );

  return (
    <>
      <div className={`${activeStepId === 0 ? "block" : "hidden"}`}>
        <TermsOfAgreement />
      </div>

      <div className={`${activeStepId === 1 ? "block" : "hidden"}`}>
        <BusinessInfo />
      </div>

      <div className={`${activeStepId === 2 ? "block" : "hidden"}`}>
        <AccountInfo />
      </div>
    </>
  );
};
