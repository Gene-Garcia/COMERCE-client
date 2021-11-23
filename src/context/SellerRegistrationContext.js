import React, { createContext, useReducer } from "react";
import SellerRegistrationReducer, {
  actions,
} from "./SellerRegistrationReducer";

const SellerRegistrationContext = createContext();
export default SellerRegistrationContext;

const init = {
  activeStepId: 0, // s1:0, s2:1, s3:2
  visitedStep: 2,

  // variable to hold if the user has agreed to the TOA.
  // false will stop the user from navigating to the 3 steps even if it has been visited already
  toaAgreed: false,

  // object to hold the form from account component
  accountInformation: {},
  // object to hold the form data from the business component
  businessInformation: {},
};

function SellerRegistrationProvider({ children }) {
  const [state, dispatch] = useReducer(SellerRegistrationReducer, init);

  const {
    updateTOA,
    loadAccountInformation,
    loadBusinesssInformation,
    changeActiveStep,
    proceedToNextStep,
    resetToDefault,
  } = actions(dispatch);

  return (
    <SellerRegistrationContext.Provider
      value={{
        state,

        updateTOA,
        loadAccountInformation,
        loadBusinesssInformation,
        changeActiveStep,
        proceedToNextStep,
        resetToDefault,
      }}
    >
      {children}
    </SellerRegistrationContext.Provider>
  );
}
export { SellerRegistrationProvider };
