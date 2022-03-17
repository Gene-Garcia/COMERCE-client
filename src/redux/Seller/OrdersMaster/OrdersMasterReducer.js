import { ordersMasterActionTypes as types } from "./OrdersMasterAction";

const initial = {
  orders: [],
  status: "PLACED",
  products: [],

  pageLoading: true,
  collapseLoading: true,
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

    case types.LOAD_ORDERED_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case types.UPDATE_PAGE_LOADING:
      return {
        ...state,
        pageLoading: payload,
      };

    case types.UPDATE_COLLAPSE_LOADING:
      return {
        ...state,
        collapseLoading: payload,
      };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};
export default ordersMasterReducer;
