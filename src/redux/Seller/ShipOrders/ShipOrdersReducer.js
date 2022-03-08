import { shopOrdersActionTypes as types } from "./ShopOrdersAction";

const initial = {
  pendingOrders: [],

  isModalOpen: false,
  modalOrder: null,

  reload: false, // a state variable which will be used as a dependency in re-requesting pending orders
};

const shipOrdersReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_PENDING_ORDERS:
      return { ...state, pendingOrders: payload };

    case types.UPDATE_MODALED_ORDER:
      return { ...state, modalOrder: payload };

    case types.TRIGGER_MODAL_STATE:
      return { ...state, isModalOpen: payload };

    case types.CHECK_THIS_ORDER:
      return {
        ...state,
        pendingOrders: state.pendingOrders.map((order) =>
          order._id === payload.orderId
            ? { ...order, checked: payload.status }
            : { ...order }
        ),
      };

    case types.CHECK_ALL_ORDERS:
      return {
        ...state,
        pendingOrders: state.pendingOrders.map((order) => ({
          ...order,
          checked: payload,
        })),
      };

    case types.TOGGLE_RELOAD:
      return {
        ...state,
        reload: !reload,
      };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};

export default shipOrdersReducer;
