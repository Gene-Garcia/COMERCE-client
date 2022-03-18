const ordersMasterActionTypes = {
  LOAD_ORDERS: "LOAD_ORDERS",
  UPDATE_ORDER_QUERY_STATUS: "UPDATE_ORDER_QUERY_STATUS",
  UPDATE_PAGE_LOADING: "UPDATE_PAGE_LOADING",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const loadOrders = (orders) => {
  return {
    type: ordersMasterActionTypes.LOAD_ORDERS,
    payload: orders,
  };
};

const updateOrderQueryStatus = (status) => {
  return {
    type: ordersMasterActionTypes.UPDATE_ORDER_QUERY_STATUS,
    payload: status,
  };
};

const updatePageLoading = (isLoading) => {
  return {
    type: ordersMasterActionTypes.UPDATE_PAGE_LOADING,
    payload: isLoading,
  };
};

const resetToDefault = () => {
  return {
    type: ordersMasterActionTypes.RESET_TO_DEFAULT,
  };
};

export {
  ordersMasterActionTypes,
  loadOrders,
  updateOrderQueryStatus,
  updatePageLoading,
  resetToDefault,
};
