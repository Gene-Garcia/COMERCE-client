const sellerRegistrationActionTypes = {
  AGREE_TO_TERMS_OF_AGREEMENT: "AGREE_TO_TERMS_OF_AGREEMENT",
  LOAD_ACCOUNT_DETAILS: "LOAD_ACCOUNT_DETAILS",
  LOAD_BUSINESS_DETAILS: "LOAD_BUSINESS_DETAILS",
  CHANGE_CURRENT_STEP: "CHANGE_CURRENT_STEP",
  PROCEED_TO_NEXT_STEP: "PROCEED_TO_NEXT_STEP",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const agreeToTOA = () => {
  return { type: sellerRegistrationActionTypes.AGREE_TO_TERMS_OF_AGREEMENT };
};

const loadAccountDetails = (accountDetails) => {
  return {
    type: sellerRegistrationActionTypes.LOAD_ACCOUNT_DETAILS,
    payload: accountDetails,
  };
};

const loadBusinessDetails = (businessDetails) => {
  return {
    type: sellerRegistrationActionTypes.LOAD_BUSINESS_DETAILS,
    payload: businessDetails,
  };
};

const changeCurrentStep = (registrationStepId) => {
  return {
    type: sellerRegistrationActionTypes.CHANGE_CURRENT_STEP,
    payload: registrationStepId,
  };
};

const proceedToNextStep = (nextRegistrationStepId) => {
  return {
    type: sellerRegistrationActionTypes.PROCEED_TO_NEXT_STEP,
    payload: nextRegistrationStepId,
  };
};

const resetToDefault = () => {
  return {
    type: sellerRegistrationActionTypes.RESET_TO_DEFAULT,
  };
};

export {
  sellerRegistrationActionTypes,
  agreeToTOA,
  loadAccountDetails,
  loadBusinessDetails,
  changeCurrentStep,
  proceedToNextStep,
  resetToDefault,
};
