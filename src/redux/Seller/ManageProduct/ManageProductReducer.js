import { manageProductActionTypes as types } from "./ManageProductAction";

const initial = {
  toggledProductSubPage: "OVERVIEW",
  product: null,
  forModalProductId: "",
  isModalOpen: false,
};

const manageProductReducer = (state = initial, { type, payload }) => {
  switch (type) {
    // there currently only to subpages in seller products page: OVERVIEW and ADD_PRODUCT
    case types.TOGGLE_PRODUCT_SUB_PAGE:
      return { ...state, toggledProductSubPage: payload };

    case types.UPDATE_INFORMATION_MODEL_PRODUCT:
      return { ...state, product: payload };

    case types.TOGGLE_PRODUCT_MODAL:
      return { ...state, isModalOpen: payload };

    case types.RESET_TO_DEFAULT:
      return { ...initial };

    default:
      return { ...state };
  }
};

export default manageProductReducer;
