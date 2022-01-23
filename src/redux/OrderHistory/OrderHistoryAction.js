// Action types
const orderHistoryActionTypes = {
  LOAD_ORDERS: "LOAD_ORDERS",
  SET_SELECTED_ORDERS: "SET_SELECTED_ORDERS",
  UPDATE_LOADING: "UPDATE_LOADING ",
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

const updateLoading = (isLoading) => {
  return {
    type: orderHistoryActionTypes.UPDATE_LOADING,
    payload: isLoading,
  };
};

// NEEDS COMPUTE SUB_TOTAL

export { orderHistoryActionTypes, loadOrders, setSelectedOrder, updateLoading };
