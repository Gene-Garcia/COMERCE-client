const orderModalActionTypes = {
  TOGGLE_ORDER_MODAL: "TOGGLE_ORDER_MODAL",
  SET_MODAL_ORDER_ID: "SET_MODAL_ORDER_ID",
  TOGGLE_MODAL_LOADING: "TOGGLE_MODAL_LOADING",
  RESET_REDUX_ORDER_MODAL: "RESET_REDUX_ORDER_MODAL",
};

const toggleOrderModal = (isOpen) => {
  return {
    type: orderModalActionTypes.TOGGLE_ORDER_MODAL,
    payload: isOpen,
  };
};

const setModalOrderId = (orderId) => {
  return {
    type: orderModalActionTypes.SET_MODAL_ORDER_ID,
    payload: orderId,
  };
};

const toggleModalLoading = (isLoading) => {
  return {
    type: orderModalActionTypes.TOGGLE_MODAL_LOADING,
    payload: isLoading,
  };
};

const resetReduxOrderModal = () => {
  return { type: orderModalActionTypes.RESET_REDUX_ORDER_MODAL };
};

export {
  orderModalActionTypes,
  toggleOrderModal,
  setModalOrderId,
  toggleModalLoading,
  resetReduxOrderModal,
};
