// Action types
const checkoutActionTypes = {
  TOGGLE_PAYMENT_OPTION: "TOGGLE_PAYMENT_OPTION",
  LOAD_SHIPPING_DETAILS: "LOAD_SHIPPING_DETAILS",
  LOAD_PAYMENT_DETAILS: "LOAD_PAYMENT_DETAILS",
  LOAD_PAYPAL_PAYMENT: "LOAD_PAYPAL_PAYMENT",
  LOAD_CREDIT_CARD_PAYMENT: "LOAD_CREDIT_CARD_PAYMENT",
  LOAD_COD_PAYMENT: "LOAD_COD_PAYMENT",
  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

// Action

const togglePaymentOption = (paymentOptionId) => {
  return {
    type: checkoutActionTypes.TOGGLE_PAYMENT_OPTION,
    payload: paymentOptionId,
  };
};

const loadShippingDetails = (shippingDetails) => {
  return {
    type: checkoutActionTypes.LOAD_SHIPPING_DETAILS,
    payload: shippingDetails,
  };
};

// depending on the selected type of payment, this function will trigger its designated load function
const paymentType = {
  PP: checkoutActionTypes.LOAD_PAYPAL_PAYMENT,
  CC: checkoutActionTypes.LOAD_CREDIT_CARD_PAYMENT,
  COD: checkoutActionTypes.LOAD_COD_PAYMENT,
};
const loadPaymentDetails = (paymentOptionType, paymentDetails) => {
  return {
    type: paymentType[paymentOptionType],
    payload: paymentDetails,
  };
};

const resetToDefault = () => {
  return {
    type: checkoutActionTypes.RESET_TO_DEFAULT,
  };
};

export {
  checkoutActionTypes,
  togglePaymentOption,
  loadShippingDetails,
  loadPaymentDetails,
  resetToDefault,
};
