import { logisticsRegistrationTypes as types } from "./LogisticsRegistrationAction";

const initial = {
  activeStepNumber: 1,
  // visited step number includes the newly active step number
  visitedStepNumber: 1,

  agree: false,

  vehicleData: {},
  personalData: {},
  accountData: {},
};

const logisticsRegistrationReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.NEXT_STEP:
      return {
        ...state,
        activeStepNumber: payload,
        visitedStepNumber: payload,
      };

    case types.TOGGLE_STEP:
      return {
        ...state,
        activeStepNumber:
          payload <= state.visitedStepNumber ? payload : state.activeStepNumber,
      };

    case types.AGREE:
      return { ...state, agree: payload };

    case types.LOAD_VEHICLE_DATA:
      return { ...state, vehicleData: payload };

    case types.LOAD_PERSONAL_DATA:
      return { ...state, personalData: payload };

    case types.LOAD_ACCOUNT_DATA:
      return { ...state, accountData: payload };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};
export default logisticsRegistrationReducer;
