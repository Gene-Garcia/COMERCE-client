// Action types
const manageInventoryTypes = {
  LOAD_PRODUCTS: "LOAD_PRODUCTS",
  SET_SELECTED_PRODUCT: "SET_SELECTED_PRODUCT",
  TOGGLE_PAGE_LOADING: "TOGGLE_PAGE_LOADING",
  TRIGGER_RELOAD: "TRIGGER_RELOAD",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

// Actions
const loadProducts = (products) => {
  return {
    type: manageInventoryTypes.LOAD_PRODUCTS,
    payload: products,
  };
};

const setSelectedProduct = (selectedProduct) => {
  return {
    type: manageInventoryTypes.SET_SELECTED_PRODUCT,
    payload: selectedProduct,
  };
};

const togglePageLoading = (isLoading) => {
  return {
    type: manageInventoryTypes.TOGGLE_PAGE_LOADING,
    payload: isLoading,
  };
};

const triggerReload = () => {
  return {
    type: manageInventoryTypes.TRIGGER_RELOAD,
  };
};

const resetToDefault = () => {
  return {
    type: manageInventoryTypes.RESET_TO_DEFAULT,
  };
};

export {
  manageInventoryTypes,
  loadProducts,
  setSelectedProduct,
  togglePageLoading,
  triggerReload,
  resetToDefault,
};
