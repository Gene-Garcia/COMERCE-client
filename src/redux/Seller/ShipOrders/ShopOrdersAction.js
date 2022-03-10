const shopOrdersActionTypes = {
  LOAD_PENDING_ORDERS: "LOAD_PENDING_ORDERS",
  UPDATE_MODALED_ORDER: "UPDATE_MODALED_ORDER",
  TRIGGER_MODAL_STATE: "TRIGGER_MODAL_STATE",
  CHECK_THIS_ORDER: "CHECK_THIS_ORDER",
  CHECK_ALL_ORDERS: "CHECK_ALL_ORDERS",
  TOGGLE_RELOAD: "TOGGLE_RELOAD",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const loadPendingOrders = (pendingOrders) => {
  return {
    type: shopOrdersActionTypes.LOAD_PENDING_ORDERS,
    payload: pendingOrders,
  };
};

const updateModaledOrder = (order) => {
  return {
    type: shopOrdersActionTypes.UPDATE_MODALED_ORDER,
    payload: order,
  };
};

const triggerModalState = (isOpen) => {
  return {
    type: shopOrdersActionTypes.TRIGGER_MODAL_STATE,
    payload: isOpen,
  };
};

const checkThisOrder = (orderId, status) => {
  return {
    type: shopOrdersActionTypes.CHECK_THIS_ORDER,
    payload: { orderId, status },
  };
};

const checkAllOrders = (status) => {
  return {
    type: shopOrdersActionTypes.CHECK_ALL_ORDERS,
    payload: status,
  };
};

const toggleReload = () => {
  return {
    type: shopOrdersActionTypes.TOGGLE_RELOAD,
  };
};

const resetToDefault = () => {
  return {
    type: shopOrdersActionTypes.RESET_TO_DEFAULT,
  };
};

export {
  shopOrdersActionTypes,
  loadPendingOrders,
  updateModaledOrder,
  triggerModalState,
  checkThisOrder,
  checkAllOrders,
  toggleReload,
  resetToDefault,
};
