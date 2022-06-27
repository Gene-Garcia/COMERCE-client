const packOrdersActionTypes = {
  LOAD_ORDERS: "LOAD_ORDERS",

  TOGGLE_ORDER_CHECK: "TOGGLE_ORDER_CHECK",
  TOGGLE_ALL_ORDER_CHECK: "TOGGLE_ALL_ORDER_CHECK",

  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_WAYBILLS: "SET_WAYBILLS",

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

const setWaybills = (orderData) => {
  return { type: packOrdersActionTypes.SET_WAYBILLS, payload: orderData };
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
  setWaybills,
  resetToDefault,
};
