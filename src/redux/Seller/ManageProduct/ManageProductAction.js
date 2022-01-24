// Action types
const manageProductActionTypes = {
  TOGGLE_PRODUCT_SUB_PAGE: "TOGGLE_PRODUCT_SUB_PAGE",
  UPDATE_MODALABLE_PRODUCT: "UPDATE_MODALABLE_PRODUCT",
  TOGGLE_PRODUCT_MODAL: "TOGGLE_PRODUCT_MODAL",
};

// Actions
const toggleProductSubPage = (pageId) => {
  return {
    type: manageProductActionTypes.TOGGLE_PRODUCT_SUB_PAGE,
    payload: pageId,
  };
};

const setModalableProduct = (productId) => {
  return {
    type: manageProductActionTypes.UPDATE_MODALABLE_PRODUCT,
    payload: productId,
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
  setModalableProduct,
  toggleProductModal,
};
