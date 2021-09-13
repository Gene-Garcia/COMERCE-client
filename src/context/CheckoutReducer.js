function CheckoutReducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state };

    case "TOGGLE_STEP":
      return {
        ...state,
        toggledStep:
          action.payload.stepNumber <= state.visitedStep
            ? action.payload.stepId
            : state.toggledStep,
      };

    case "TOGGLE_PAYMENT":
      return { ...state };

    case "PLACE_ORDER":
      return { ...state };
  }
}
export default CheckoutReducer;

function actions(dispatch) {
  const nextStep = (finalStep) => {
    dispatch({
      type: "NEXT_STEP",
      payload: finalStep,
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

  const placeOrder = () => {
    dispatch({
      type: "PLACE_ORDER",
    });
  };

  return { nextStep, toggleStep, togglePaymentOption, placeOrder };
}
export { actions };
