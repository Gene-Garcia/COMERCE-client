// Action types
const orderHistoryActionTypes = {
  LOAD_ORDERS: "LOAD_ORDERS",
  SET_SELECTED_ORDERS: "SET_SELECTED_ORDERS",
  SET_LOADING: "SET_LOADING ",
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

// NEEDS COMPUTE SUB_TOTAL
// NEEDS GET ORDER BY ID

export { orderHistoryActionTypes, loadOrders, setSelectedOrder, setLoading };
