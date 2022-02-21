import { sellerRegistrationActionTypes as types } from "./SellerRegistrationAction";

const initial = {
  // step 1 ID: 0, step 2 ID: 1, step 3 ID: 2
  activeStepId: 0,
  visitedStep: 0,

  // variable to hold if the user has agreed to the TOA.
  // false will stop the user from navigating to the 3 steps even if it has been visited already
  agreementToTOAStatus: false,

  // object to hold the form from account component
  accountDetails: {},
  // object to hold the form data from the business component
  businessDetails: {},
};

const sellerRegistrationReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.AGREE_TO_TERMS_OF_AGREEMENT:
      return { ...state, agreementToTOAStatus: true };

    case types.LOAD_ACCOUNT_DETAILS:
      return { ...state, accountDetails: payload };

    case types.LOAD_BUSINESS_DETAILS:
      return { ...state, businessDetails: payload };

    case types.CHANGE_CURRENT_STEP:
      return {
        ...state,
        activeStepId:
          payload <= state.visitedStep ? payload : state.activeStepId,
      };

    case types.PROCEED_TO_NEXT_STEP:
      return {
        ...state,
        visitedStep: payload,
        activeStepId: payload,
      };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};

export default sellerRegistrationReducer;
