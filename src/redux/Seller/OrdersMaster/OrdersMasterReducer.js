import { ordersMasterActionTypes as types } from "./OrdersMasterAction";

const initial = {
  orders: [],
  status: "PLACED",

  pageLoading: true,
};

const ordersMasterReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_ORDERS:
      return {
        ...state,
        orders: payload,
      };

    case types.UPDATE_ORDER_QUERY_STATUS:
      return {
        ...state,
        status: payload.toUpperCase(),
      };

    case types.UPDATE_PAGE_LOADING:
      return {
        ...state,
        pageLoading: payload,
      };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};
export default ordersMasterReducer;
