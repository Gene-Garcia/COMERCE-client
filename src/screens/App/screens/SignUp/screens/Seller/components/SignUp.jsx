import React, { useEffect } from "react";
import useSellerRegistration from "../../../../../../../hooks/useSellerRegistration";
import RegistrationSteps from "./RegistrationSteps";
import AccountInfo from "./steps/AccountInfo";
import BusinessInfo from "./steps/BusinessInfo";
import TermsOfAgreement from "./steps/TOA";

function SignUp() {
  // seller registration context
  const { activeStepId, resetToDefault } = useSellerRegistration();

  // clean up once user leaves page
  useEffect(() => {
    return () => resetToDefault();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-bl from-my-accent via-my-accent-tone to-my-accent-tint flex items-center justify-center">
      {/* root container - no bg color */}
      <div className="w-11/12  md:w-11/12 lg:w-4/5 xl:w-3/4 2xl:w-1/2 flex flex-col md:flex-row shadow-2xl bg-transparent rounded-lg">
        {/* steps container */}
        <div className="md:w-1/4 rounded-l-lg">
          <RegistrationSteps />
        </div>

        {/* content */}
        <div className="md:w-3/4 bg-white rounded-b-lg md:rounded-r-lg p-5 md:p-8">
          <div className={`${activeStepId === 0 ? "block" : "hidden"}`}>
            <TermsOfAgreement />
          </div>

          <div className={`${activeStepId === 1 ? "block" : "hidden"}`}>
            <AccountInfo />
          </div>

          <div className={`${activeStepId === 2 ? "block" : "hidden"}`}>
            <BusinessInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
