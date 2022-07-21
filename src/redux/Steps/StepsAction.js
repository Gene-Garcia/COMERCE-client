const stepsActionTypes = {
  INITIALIZE_STEPS: "",
  PROCEED_TO_NEXT_STEP: "",
  CHECKOUT_STEP: "",
  RESET_TO_DEFAULT: "",
};

/*
 * Logic of sequence:
 * Use of NUMERICAL values to compute visited and unvisited steps
 * Variables are:
 *  1. Active
 *  2. Visited
 *  3. lowest Step: first step
 *  4. Highest Step: last step
 *
 * Moving to the next step
 *  IF visited + 1 BETWEEN lowest AND HIGHEST
 *    THEN
 *    visited = visited + 1
 *    active = visited
 *
 * Backtracking or changing step (stepToCheck: stc)
 * IF stc BETWEEN lowest AND highest:
 *  THEN
 *  IF stc <= visited
 *    THEN
 *    // proceed to change
 *      active = stc
 *
 *    ELSE
 *    // finish previous steps first
 *
 * CONCERN:
 *    when this step redux is used with forms on each step
 *    whenever a user backtracks a step, changes made to a form in a previous step
 *    requires the user to click the correposponding submit button again to reflect
 *    changes.
 */

const initializeSteps = (lowest, highest) => {
  return {
    type: stepsActionTypes.INITIALIZE_STEPS,
    payload: {
      lowest,
      highest,
    },
  };
};

const proceedToNextStep = () => {
  return { type: stepsActionTypes.INITIALIZE_STEPS };
};

const checkoutStep = (stepNumber) => {
  return { type: stepsActionTypes.INITIALIZE_STEPS, payload: stepNumber };
};

const resetStepReduxToDefault = () => {
  return { type: stepsActionTypes.INITIALIZE_STEPS };
};

export {
  stepsActionTypes,
  initializeSteps,
  proceedToNextStep,
  checkoutStep,
  resetStepReduxToDefault,
};
