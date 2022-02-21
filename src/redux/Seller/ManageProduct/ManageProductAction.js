// Action types
const manageProductActionTypes = {
  TOGGLE_PRODUCT_SUB_PAGE: "TOGGLE_PRODUCT_SUB_PAGE",
  UPDATE_INFORMATION_MODEL_PRODUCT: "UPDATE_INFORMATION_MODEL_PRODUCT",
  TOGGLE_PRODUCT_MODAL: "TOGGLE_PRODUCT_MODAL",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
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

const resetToDefault = () => {
  return {
    type: manageProductActionTypes.RESET_TO_DEFAULT,
  };
};

export {
  manageProductActionTypes,
  toggleProductSubPage,
  updateInformationModalProduct,
  toggleProductModal,
  resetToDefault,
};
