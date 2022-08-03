import { orderModalActionTypes as types } from "./OrderModalAction";

/*
 * A redux dedicated for the reusable Order Modal.
 * A general reusable redux for any modal were not build because there
 * would be instances where a component could use multiple modals
 */

const initial = {
  isOpen: true,
  orderId: "",
  isLoading: false,
};

const orderModalReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.TOGGLE_ORDER_MODAL:
      return { ...state, isOpen: payload };

    case types.SET_MODAL_ORDER_ID:
      return { ...state, orderId: payload };

    case types.TOGGLE_MODAL_LOADING:
      return { ...state, isLoading: payload };

    case types.RESET_REDUX_ORDER_MODAL:
      return { ...initial };

    default:
      return { ...state };
  }
};
export default orderModalReducer;
