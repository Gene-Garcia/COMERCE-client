const shipOrdersActionTypes = {
  LOAD_PENDING_ORDERS: "LOAD_PENDING_ORDERS",
  TOGGLE_PAGE_LOADING: "TOGGLE_PAGE_LOADING",
  CHECK_THIS_ORDER: "CHECK_THIS_ORDER",
  CHECK_ALL_ORDERS: "CHECK_ALL_ORDERS",
  TOGGLE_RELOAD: "TOGGLE_RELOAD",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const loadPendingOrders = (pendingOrders) => {
  return {
    type: shipOrdersActionTypes.LOAD_PENDING_ORDERS,
    payload: pendingOrders,
  };
};

const togglePageLoading = (isLoading) => {
  return {
    type: shipOrdersActionTypes.TOGGLE_PAGE_LOADING,
    payload: isLoading,
  };
};

const checkThisOrder = (orderId, status) => {
  return {
    type: shipOrdersActionTypes.CHECK_THIS_ORDER,
    payload: { orderId, status },
  };
};

const checkAllOrders = (status) => {
  return {
    type: shipOrdersActionTypes.CHECK_ALL_ORDERS,
    payload: status,
  };
};

const toggleReload = () => {
  return {
    type: shipOrdersActionTypes.TOGGLE_RELOAD,
  };
};

const resetToDefault = () => {
  return {
    type: shipOrdersActionTypes.RESET_TO_DEFAULT,
  };
};

export {
  shipOrdersActionTypes,
  loadPendingOrders,
  togglePageLoading,
  checkThisOrder,
  checkAllOrders,
  toggleReload,
  resetToDefault,
};
