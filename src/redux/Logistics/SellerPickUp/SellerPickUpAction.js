const sellerPickUpRegistrationTypes = {
  LOAD_FOR_PICK_UP_ORDERS: "LOAD_FOR_PICK_UP_ORDERS",
  TOGGLE_LOADING: "TOGGLE_LOADING",
  TOGGLE_ORDER_CHECKED: "TOGGLE_ORDER_CHECKED",
  TOGGLE_ALL_ORDER_CHECKED: "TOGGLE_ALL_ORDER_CHECKED",
  FILTER_FOR_PICKUP_ORDERS: "FILTER_FOR_PICKUP_ORDERS",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const loadForPickUpOrders = (orders) => {
  return {
    type: sellerPickUpRegistrationTypes.LOAD_FOR_PICK_UP_ORDERS,
    payload: orders,
  };
};
const toggleLoading = (isLoading) => {
  return {
    type: sellerPickUpRegistrationTypes.TOGGLE_LOADING,
    payload: isLoading,
  };
};
const toggleOrderChecked = (orderId, isChecked) => {
  return {
    type: sellerPickUpRegistrationTypes.TOGGLE_ORDER_CHECKED,
    payload: { orderId, isChecked },
  };
};
const toggleAllOrderChecked = (isChecked) => {
  return {
    type: sellerPickUpRegistrationTypes.TOGGLE_ALL_ORDER_CHECKED,
    payload: isChecked,
  };
};
const filterForPickUpOrders = (orderIds) => {
  return {
    type: sellerPickUpRegistrationTypes.FILTER_FOR_PICKUP_ORDERS,
    payload: orderIds,
  };
};
const resetToDefault = () => {
  return { type: sellerPickUpRegistrationTypes.RESET_TO_DEFAULT };
};

export {
  sellerPickUpRegistrationTypes,
  loadForPickUpOrders,
  toggleLoading,
  toggleAllOrderChecked,
  toggleOrderChecked,
  filterForPickUpOrders,
  resetToDefault,
};
