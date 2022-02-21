import { manageInventoryTypes as types } from "./ManageInventoryAction";

const initial = {
  products: [],
  selectedProduct: null,
  reload: false,
};

const manageInventoryReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_PRODUCTS:
      return { ...state, products: payload };

    case types.SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };

    case types.TRIGGER_RELOAD:
      return { ...state, reload: !state.reload };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};
export default manageInventoryReducer;
