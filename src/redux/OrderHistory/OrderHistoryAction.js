// Action types
const orderHistoryActionTypes = {
  LOAD_ORDERS: "LOAD_ORDERS",
  SET_SELECTED_ORDERS: "SET_SELECTED_ORDERS",
  SET_LOADING: "SET_LOADING",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

// Action
const loadOrders = (orders) => {
  return {
    type: orderHistoryActionTypes.LOAD_ORDERS,
    payload: orders,
  };
};

const setSelectedOrder = (order) => {
  return {
    type: orderHistoryActionTypes.SET_SELECTED_ORDERS,
    payload: order,
  };
};

const setLoading = (isLoading) => {
  return {
    type: orderHistoryActionTypes.SET_LOADING,
    payload: isLoading,
  };
};

const resetToDefault = () => {
  return {
    type: orderHistoryActionTypes.RESET_TO_DEFAULT,
  };
};

export {
  orderHistoryActionTypes,
  loadOrders,
  setSelectedOrder,
  setLoading,
  resetToDefault,
};
