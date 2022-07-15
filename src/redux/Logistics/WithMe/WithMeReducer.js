import { deliveryTypes } from "../../../../../server/config/deliveryType";
import { withMeActionTypes as types } from "./WithMeAction";

const initial = {
  logistics: [],
  logisticsType: deliveryTypes.SELLER_PICK_UP,
  isLoading: true,
};

const withMeReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_LOGISTICS:
      return { ...state, logistics: payload };

    case types.TOGGLE_LOADING:
      return { ...state, isLoading: payload };

    case types.CHECK_LOGISTIC:
      return {
        ...state,
        logistics: state.logistics.map((logistic) => ({
          ...logistic,
          checked:
            payload.logisticsId === logistic._id
              ? payload.isChecked
              : logistic.checked,
        })),
      };

    case types.CHECK_ALL_LOGISTICS:
      return {
        ...state,
        logistics: state.logistics.map((logistic) => ({
          ...logistic,
          checked: payload,
        })),
      };

    case types.UPDATE_LOGISTICS_TYPE:
      return {
        ...state,
        logisticsType: payload,
      };

    case types.RESET_TO_DEFAULT:
      return {
        ...initial,
      };

    default:
      return { ...state };
  }
};
export default withMeReducer;