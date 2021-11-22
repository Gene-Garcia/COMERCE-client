import React, { useReducer } from "react";
import SellerRegistrationContext from "../context/SellerRegistrationContext";

function useSellerRegistration() {
  const {
    updateTOA,
    loadAccountInformation,
    loadBusinesssInformation,
    changeActiveStep,
    proceedToNextStep,
    resetToDefault,

    state: {
      activeStepId,
      visitedStep,
      toaAgreed,
      accountInformation,
      businessInformation,
    },
  } = useReducer(SellerRegistrationContext);

  return {
    updateTOA,
    loadAccountInformation,
    loadBusinesssInformation,
    changeActiveStep,
    proceedToNextStep,
    resetToDefault,

    activeStepId,
    visitedStep,
    toaAgreed,
    accountInformation,
    businessInformation,
  };
}
export default useSellerRegistration;
