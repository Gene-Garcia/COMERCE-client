const stepsActionTypes = {
  INITIALIZE_STEPS: "INITIALIZE_STEPS",
  PROCEED_TO_NEXT_STEP: "PROCEED_TO_NEXT_STEP",
  CHECKOUT_STEP: "CHECKOUT_STEP",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const initializeSteps = (lowest, highest, initialStep) => {
  return {
    type: stepsActionTypes.INITIALIZE_STEPS,
    payload: {
      lowest,
      highest,
      initialStep,
    },
  };
};

const proceedToNextStep = (nextStep) => {
  return { type: stepsActionTypes.PROCEED_TO_NEXT_STEP, payload: nextStep };
};

const checkoutStep = (stepNumber) => {
  return { type: stepsActionTypes.CHECKOUT_STEP, payload: stepNumber };
};

const resetStepReduxToDefault = () => {
  return { type: stepsActionTypes.RESET_TO_DEFAULT };
};

export {
  stepsActionTypes,
  initializeSteps,
  proceedToNextStep,
  checkoutStep,
  resetStepReduxToDefault,
};
