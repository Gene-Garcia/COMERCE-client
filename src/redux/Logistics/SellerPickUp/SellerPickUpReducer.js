import { sellerPickUpRegistrationTypes as types } from "./SellerPickUpAction";

const initial = { orders: [], isLoading: false };

const sellerPickUpReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_FOR_PICK_UP_ORDERS:
      return {
        ...state,
        orders: payload.map((order) => ({ ...order, checked: false })),
      };

    case types.TOGGLE_LOADING:
      return { ...state, isLoading: payload };

    case types.TOGGLE_ORDER_CHECKED:
      return {
        ...state,
        orders: state.orders.map((order) => ({
          ...order,
          checked:
            order._id === payload.orderId ? payload.isChecked : order.checked,
        })),
      };

    case types.TOGGLE_ALL_ORDER_CHECKED:
      return {
        ...state,
        orders: state.orders.map((order) => ({
          ...order,
          checked: payload,
        })),
      };

    case types.FILTER_FOR_PICKUP_ORDERS:
      return {
        ...state,
        orders: state.orders.filter((order) => !payload.includes(order._id)),
      };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};
export default sellerPickUpReducer;
