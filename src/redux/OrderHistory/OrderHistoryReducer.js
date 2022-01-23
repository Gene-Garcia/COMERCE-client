import { orderHistoryActionTypes as types } from "./OrderHistoryAction";

const initial = {
  orders: [],
  selectedOrder: null,
  loading: false,
};

const orderHistoryReducer = (state = initial, { type, action }) => {
  switch (type) {
    case types.LOAD_ORDERS:
      return { ...state, orders: action };

    case types.SET_SELECTED_ORDERS:
      return { ...state, selectedOrder: action };

    case types.UPDATE_LOADING:
      return { ...state, loading: action };

    default:
      return { ...state };
  }
};
export default orderHistoryReducer;
