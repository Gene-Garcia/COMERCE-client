import { manageInventoryTypes as types } from "./ManageInventoryAction";

const initial = {
  products: [],
  selected: null,
  loading: false,
  reload: false,
};

const manageInventoryReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.LOAD_PRODUCTS:
      return { ...state, products: payload };

    case types.SET_SELECTED_PRODUCT:
      return { ...state, selected: payload };

    case types.UPDATE_LOADING:
      return { ...state, loading: payload };

    case types.TRIGGER_RELOAD:
      return { ...state, reload: !state.reload };

    default:
      return { ...state };
  }
};
export default manageInventoryReducer;
