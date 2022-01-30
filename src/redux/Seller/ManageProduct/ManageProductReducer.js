import { manageProductActionTypes as types } from "./ManageProductAction";

const initial = {
  toggledProductSubPage: "OVERVIEW",
  forModalProductId: "",
  isModalOpen: false,
};

const manageProductReducer = (state = initial, { type, payload }) => {
  switch (type) {
    // there currently only to subpages in seller products page: OVERVIEW and ADD_PRODUCT
    case types.TOGGLE_PRODUCT_SUB_PAGE:
      return { ...state, toggledProductSubPage: payload };

    case types.UPDATE_MODALABLE_PRODUCT:
      return { ...state, forModalProductId: payload };

    case types.TOGGLE_PRODUCT_MODAL:
      return { ...state, isModalOpen: payload };

    default:
      return { ...state };
  }
};

export default manageProductReducer;