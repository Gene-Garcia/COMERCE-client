// Action types
const manageProductActionTypes = {
  TOGGLE_PRODUCT_SUB_PAGE: "TOGGLE_PRODUCT_SUB_PAGE",
  UPDATE_INFORMATION_MODEL_PRODUCT: "UPDATE_INFORMATION_MODEL_PRODUCT",
  TOGGLE_PRODUCT_MODAL: "TOGGLE_PRODUCT_MODAL",
};

// Actions
const toggleProductSubPage = (pageId) => {
  return {
    type: manageProductActionTypes.TOGGLE_PRODUCT_SUB_PAGE,
    payload: pageId,
  };
};

const updateInformationModalProduct = (product) => {
  return {
    type: manageProductActionTypes.UPDATE_INFORMATION_MODEL_PRODUCT,
    payload: product,
  };
};

const toggleProductModal = (isModalOpen) => {
  return {
    type: manageProductActionTypes.TOGGLE_PRODUCT_MODAL,
    payload: isModalOpen,
  };
};

export {
  manageProductActionTypes,
  toggleProductSubPage,
  updateInformationModalProduct,
  toggleProductModal,
};
