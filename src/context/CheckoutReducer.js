function CheckoutReducer(state, action) {
  switch (action.type) {
    /*
     * changes the toggled step to the next step, SD (shippingdetails) --> (paymentdetails) --> (reviewdetails)
     * changes the visited step, which means that this step has been finished and be revisited later
     *
     * toggled step is the variable that determines which component will be displayed
     * visited step is crucial for determining which step is finished and can be clicked
     */
    case "NEXT_STEP":
      if (!action.payload.finalStep)
        return {
          ...state,
          toggledStep: action.payload.nextStepId,
          visitedStep: action.payload.nextStepNumber,
        };
      else return { ...state };

    /*
     * changes the current toggled step that chanes the rendered component through
     * changing the toggled step variable
     */
    case "TOGGLE_STEP":
      return {
        ...state,
        toggledStep:
          action.payload.stepNumber <= state.visitedStep
            ? action.payload.stepId
            : state.toggledStep,
      };

    /*
     * in the payment details component, there are also 3 more renderable components - COD, Credit Card, and PayPal
     * this function changes the current rendered payment option in the payment details component.
     */
    case "TOGGLE_PAYMENT":
      return { ...state, toggledPayment: action.payload };

    // the submit function in shipping details component to load the form data to this context's state variables

    case "LOAD_SHIPPING_DETAILS":
      return { ...state, shippingDetails: { ...action.payload } };

    /* the following load functions are triggered by only one method in this context, but are called based on paramter */

    // tells that the payment method is COD. there are needed details, because it only needs the shipping details
    case "LOAD_COD_PAYMENT":
      return { ...state, paymentMethod: "COD" };

    // payment method is credit card, and loads the payment details from the form data in the credit card component (card num, name, cvv, date)
    case "LOAD_CC_PAYMENT":
      return {
        ...state,
        paymentMethod: "CC",
        paymentDetails: { ...action.payload },
      };

    // payment method is paypal, and loads the payment details from the form data in the paypal component (email)
    case "LOAD_PP_PAYMENT":
      return {
        ...state,
        paymentMethod: "PP",
        paymentDetails: { ...action.payload },
      };

    // resets all the state variables of the checkout context, so that every details is empty
    case "RESET_TO_DEFAULT":
      return {
        toggledStep: "SD",
        visitedStep: 1,
        shippingDetails: {},
        toggledPayment: "COD",
        paymentMethod: "",
        paymentDetails: {},
      };

    default:
      throw Error;
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

  const loadPaymentDetails = (paymentType, details) => {
    let type;

    if (paymentType === "PP") type = "LOAD_PP_PAYMENT";
    else if (paymentType === "CC") type = "LOAD_CC_PAYMENT";
    else type = "LOAD_COD_PAYMENT";

    dispatch({
      type,
      payload: details,
    });
  };

  const resetToDefault = () => {
    dispatch({
      type: "RESET_TO_DEFAULT",
    });
  };

  return {
    nextStep,
    toggleStep,
    togglePaymentOption,
    loadShippingDetails,
    loadPaymentDetails,
    resetToDefault,
  };
}
export { actions };
