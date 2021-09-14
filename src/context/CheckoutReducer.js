function CheckoutReducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      if (!action.payload.finalStep)
        return {
          ...state,
          toggledStep: action.payload.nextStepId,
          visitedStep: action.payload.nextStepNumber,
        };

    case "TOGGLE_STEP":
      return {
        ...state,
        toggledStep:
          action.payload.stepNumber <= state.visitedStep
            ? action.payload.stepId
            : state.toggledStep,
      };

    case "TOGGLE_PAYMENT":
      return { ...state, toggledPayment: action.payload };

    case "LOAD_SHIPPING_DETAILS":
      return { ...state, shippingDetails: { ...action.payload } };

    case "PLACE_ORDER":
      return { ...state };
  }
}
export default CheckoutReducer;

function actions(dispatch) {
  const nextStep = (finalStep, nextStepNumber, nextStepId) => {
    dispatch({
      type: "NEXT_STEP",
      payload: { finalStep, nextStepNumber, nextStepId },
    });
  };

  const toggleStep = (stepId, stepNumber) => {
    dispatch({
      type: "TOGGLE_STEP",
      payload: { stepId, stepNumber },
    });
  };

  const togglePaymentOption = (paymentId) => {
    dispatch({
      type: "TOGGLE_PAYMENT",
      payload: paymentId,
    });
  };

  const loadShippingDetails = (details) => {
    dispatch({
      type: "LOAD_SHIPPING_DETAILS",
      payload: details,
    });
  };

  const placeOrder = () => {
    dispatch({
      type: "PLACE_ORDER",
    });
  };

  return {
    nextStep,
    toggleStep,
    togglePaymentOption,
    loadShippingDetails,
    placeOrder,
  };
}
export { actions };
