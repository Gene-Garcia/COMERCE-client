// Action types
const manageInventoryTypes = {
  LOAD_PRODUCTS: "LOAD_PRODUCTS",
  SET_SELECTED_PRODUCT: "SET_SELECTED_PRODUCT",
  UPDATE_LOADING: "UPDATE_LOADING",
  TRIGGER_RELOAD: "TRIGGER_RELOAD",
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

const updateLoading = (isLoading) => {
  return {
    type: manageInventoryTypes.updateLoading,
    payload: isLoading,
  };
};

const triggerReload = () => {
  return {
    type: manageInventoryTypes.TRIGGER_RELOAD,
  };
};

export {
  manageInventoryTypes,
  loadProducts,
  setSelectedProduct,
  updateLoading,
  triggerReload,
};
