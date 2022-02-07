import { orderHistoryActionTypes as types } from "./OrderHistoryAction";

const initial = {
  orders: [],
  selectedOrder: null,
  loading: true,
};

const orderHistoryReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_ORDERS:
      return { ...state, orders: payload };

    case types.SET_SELECTED_ORDERS:
      return { ...state, selectedOrder: payload };

    case types.SET_LOADING:
      return { ...state, loading: payload };

    default:
      return { ...state };
  }
};
export default orderHistoryReducer;
