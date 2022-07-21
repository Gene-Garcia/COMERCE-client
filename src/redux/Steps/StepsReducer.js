/*
 * A reusable redux reducer for any component that utilizes step-based
 * logic, such as, registration and checkout
 */

import { stepsActionTypes as types } from "./StepsAction";

const initial = {
  lowest: 0,
  highest: 0,

  active: 0,
  visited: 0,
};

const stepsReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.INITIALIZE_STEPS:
      return {
        ...state,
        lowest: payload.lowest,
        highest: payload.highest,
        active: payload.initialStep,
        visited: payload.initialStep,
      };

    case types.PROCEED_TO_NEXT_STEP:
      if (isBetween(payload, state.lowest, state.highest)) {
        if (payload <= state.visited) {
          // The button could have been clicked again after backtracking a step
          return { ...state, active: payload };
        } else {
          // the previos step is complete and new step will be opened
          return { ...state, visited: payload, active: payload };
        }
      }

      return { ...state };

    case types.CHECKOUT_STEP:
      if (isBetween(payload, state.lowest, state.highest)) {
        // the passed step number to be opened must be valid
        if (payload <= state.visited) {
          // opening/toggling a step must already be visited
          return { ...state, active: payload };
        }
      }
      return { ...state };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};
export default stepsReducer;

const isBetween = (d, min, max) => {
  return d >= min && d <= max;
};
