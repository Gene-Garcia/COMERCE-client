import { packOrdersActionTypes as types } from "./PackOrdersActions";

// waybills.orders can be one or multiple waybills
const initial = { orders: [], isModalOpen: false, waybills: null };

const packOrdersReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_ORDERS:
      // spread orders and add 'checked' property for checkbox
      return {
        ...state,
        orders: payload.map((order) => ({ ...order, checked: false })),
      };

    case types.TOGGLE_ORDER_CHECK:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order._id === payload.orderId
            ? { ...order, checked: payload.checked }
            : order
        ),
      };

    case types.TOGGLE_ALL_ORDER_CHECK:
      return {
        ...state,
        orders: state.orders.map((order) => ({ ...order, checked: payload })),
      };

    case types.TOGGLE_MODAL:
      return { ...state, isModalOpen: payload };

    case types.SET_WAYBILLS:
      return { ...state, waybills: payload };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};

export default packOrdersReducer;
