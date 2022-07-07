const sellerPickUpRegistrationTypes = {
  LOAD_FOR_PICK_UP_PRODUCTS: "LOAD_FOR_PICK_UP_PRODUCTS",
  TOGGLE_PAGE_LOADING: "TOGGLE_PAGE_LOADING",
  TOGGLE_PRODUCT_CHECKED: "TOGGLE_PRODUCT_CHECKED",
  TOGGLE_ALL_PRODUCT_CHECKED: "TOGGLE_ALL_PRODUCT_CHECKED",
  FILTER_FOR_PICKUP_PRODUCTS: "FILTER_FOR_PICKUP_PRODUCTS",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const loadForPickUpProducts = (products) => {
  return {
    type: sellerPickUpRegistrationTypes.LOAD_FOR_PICK_UP_PRODUCTS,
    payload: products,
  };
};
const togglePageLoading = (isLoading) => {
  return {
    type: sellerPickUpRegistrationTypes.TOGGLE_PAGE_LOADING,
    payload: isLoading,
  };
};
const toggleProductChecked = (businessId, isChecked) => {
  return {
    type: sellerPickUpRegistrationTypes.TOGGLE_PRODUCT_CHECKED,
    payload: { businessId, isChecked },
  };
};
const toggleAllProductChecked = (isChecked) => {
  return {
    type: sellerPickUpRegistrationTypes.TOGGLE_ALL_PRODUCT_CHECKED,
    payload: isChecked,
  };
};
const filterForPickUpProducts = (businessIds) => {
  return {
    type: sellerPickUpRegistrationTypes.FILTER_FOR_PICKUP_PRODUCTS,
    payload: businessIds,
  };
};
const resetToDefault = () => {
  return { type: sellerPickUpRegistrationTypes.RESET_TO_DEFAULT };
};

export {
  sellerPickUpRegistrationTypes,
  loadForPickUpProducts,
  togglePageLoading,
  toggleAllProductChecked,
  toggleProductChecked,
  filterForPickUpProducts,
  resetToDefault,
};
