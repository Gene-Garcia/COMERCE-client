function CheckoutReducer(state, action) {}
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

  return { toggleStep, togglePaymentOption };
}
export { actions };
