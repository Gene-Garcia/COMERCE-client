const packOrdersActionTypes = {
  LOAD_ORDERS: "LOAD_ORDERS",

  TOGGLE_ORDER_CHECK: "TOGGLE_ORDER_CHECK",
  TOGGLE_ALL_ORDER_CHECK: "TOGGLE_ALL_ORDER_CHECK",

  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_WAYBILL: "SET_WAYBILL",

  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const loadOrders = (orders) => {
  return { type: packOrdersActionTypes.LOAD_ORDERS, payload: orders };
};

const toggleOrderCheck = (orderId, checked) => {
  return {
    type: packOrdersActionTypes.TOGGLE_ORDER_CHECK,
    payload: { orderId, checked },
  };
};

const toggleAllOrderCheck = (checked) => {
  return {
    type: packOrdersActionTypes.TOGGLE_ALL_ORDER_CHECK,
    payload: checked,
  };
};

const toggleModal = (isOpened) => {
  return { type: packOrdersActionTypes.TOGGLE_MODAL, payload: isOpened };
};

const setWaybill = (orderData) => {
  return { type: packOrdersActionTypes.SET_WAYBILL, payload: orderData };
};

const resetToDefault = () => {
  return { type: packOrdersActionTypes.RESET_TO_DEFAULT };
};

export {
  packOrdersActionTypes,
  loadOrders,
  toggleOrderCheck,
  toggleAllOrderCheck,
  toggleModal,
  setWaybill,
  resetToDefault,
};
