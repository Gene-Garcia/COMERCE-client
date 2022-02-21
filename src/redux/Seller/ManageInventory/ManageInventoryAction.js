// Action types
const manageInventoryTypes = {
  LOAD_PRODUCTS: "LOAD_PRODUCTS",
  SET_SELECTED_PRODUCT: "SET_SELECTED_PRODUCT",
  TRIGGER_RELOAD: "TRIGGER_RELOAD",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

// Actions
const loadProducts = (products) => {
  return {
    type: manageInventoryTypes.loadProducts,
    payload: products,
  };
};

const setSelectedProduct = (selectedProduct) => {
  return {
    type: manageInventoryTypes.SET_SELECTED_PRODUCT,
    payload: selectedProduct,
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
  triggerReload,
  resetToDefault,
};
