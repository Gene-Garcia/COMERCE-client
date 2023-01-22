import { logisticsRegistrationTypes as types } from "./LogisticsRegistrationAction";

const initial = {
  agree: false,
  vehicleData: {},
  personalData: {},
  accountData: {},
};

const logisticsRegistrationReducer = (state = initial, { type, payload }) => {
  switch (type) {
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
