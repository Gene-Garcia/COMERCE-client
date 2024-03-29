const packOrdersActionTypes = {
  LOAD_ORDERS: "LOAD_ORDERS",
  TOGGLE_PAGE_LOADING: "TOGGLE_PAGE_LOADING",

  TOGGLE_ORDER_CHECK: "TOGGLE_ORDER_CHECK",
  TOGGLE_ALL_ORDER_CHECK: "TOGGLE_ALL_ORDER_CHECK",

  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_WAYBILLS: "SET_WAYBILLS",
  FILTER_ORDERS: "FILTER_ORDERS",

  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const loadOrders = (orders) => {
  return { type: packOrdersActionTypes.LOAD_ORDERS, payload: orders };
};

const togglePageLoading = (isLoading) => {
  return {
    type: packOrdersActionTypes.TOGGLE_PAGE_LOADING,
    payload: isLoading,
  };
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

const setWaybills = (waybillIds) => {
  return { type: packOrdersActionTypes.SET_WAYBILLS, payload: waybillIds };
};

const filterOrders = (orderIds) => {
  return { type: packOrdersActionTypes.FILTER_ORDERS, payload: orderIds };
};

const resetToDefault = () => {
  return { type: packOrdersActionTypes.RESET_TO_DEFAULT };
};

export {
  packOrdersActionTypes,
  loadOrders,
  togglePageLoading,
  toggleOrderCheck,
  toggleAllOrderCheck,
  toggleModal,
  setWaybills,
  filterOrders,
  resetToDefault,
};
