const packOrdersActionTypes = {
  LOAD_ORDERS: "LOAD_ORDERS",
  TOGGLE_ORDER_CHECK: "TOGGLE_ORDER_CHECK",
  TOGGLE_ALL_ORDER_CHECK: "TOGGLE_ALL_ORDER_CHECK",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const loadOrders = (orders) => {
  return { type: packOrdersActionTypes.LOAD_ORDERS, payload: orders };
};

const toggleOrderCheck = (orderId) => {
  return { type: packOrdersActionTypes.TOGGLE_ORDER_CHECK, payload: orderId };
};

const toggleAllOrderCheck = () => {
  return { type: packOrdersActionTypes.TOGGLE_ALL_ORDER_CHECK };
};

const resetToDefault = () => {
  return { type: packOrdersActionTypes.RESET_TO_DEFAULT };
};

export {
  packOrdersActionTypes,
  loadOrders,
  toggleOrderCheck,
  toggleAllOrderCheck,
  resetToDefault,
};
