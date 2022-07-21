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
      return { ...state, lowest: payload.lowest, highest: payload.highest };

    case types.PROCEED_TO_NEXT_STEP:
      const newStep = state.visited + 1;
      if (isBetween(newStep, state.lowest, state.highest))
        return {
          ...state,
          visited: newStep,
          active: newStep,
        };
      else return { ...state };

    case types.CHECKOUT_STEP:
      if (isBetween(payload, state.lowest, state.highest)) {
        if (payload <= state.visited) {
          return { ...state, active: payload };
        } // step to be checked is not yet visited
      } // out of bounds step to be checked out
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
