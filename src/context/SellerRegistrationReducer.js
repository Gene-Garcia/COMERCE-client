function SellerRegistrationReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TOA":
      return { ...state, toaAgreed: action.payload };

    case "LOAD_ACCOUNT_INFORMATION":
      return { ...state, accountInformation: action.payload };

    case "LOAD_BUSINESS_INFORMATION":
      return { ...state, businesInformation: action.payload };

    case "CHANGE_ACTIVE_STEP":
      return {
        ...state,
        activeStepId:
          action.payload <= state.visitedStep
            ? action.payload
            : state.visitedStep,
      };

    case "PROCEDD_TO_NEXT_STEP":
      return {
        ...state,
        visitedStep: action.payload,
        activeStepId: activeStepId.payload,
      };

    case "RESET_TO_DEFAULT":
      return {
        activeStepId: 0,
        visitedStep: 0,
        toaAgreed: false,
        accountInformation: {},
        businesInformation: {},
      };

    default:
      throw Error;
  }
}
export default SellerRegistrationReducer;

function actions(dispatch) {
  // sets the variable toaAgreed to the set value
  const updateTOA = (value) => {
    dispatch({
      type: "UPDATE_TOA",
      payload: value,
    });
  };

  // loads the form data from the component
  const loadAccountInformation = (data) => {
    dispatch({
      type: "LOAD_ACCOUNT_INFORMATION",
      payload: data,
    });
  };

  // loads the form data from the component
  const loadBusinesssInformation = (data) => {
    dispatch({
      type: "LOAD_BUSINESS_INFORMATION",
      payload: data,
    });
  };

  // changes the active step component based on the given id.
  // triggered by clicking the step buttons
  const changeActiveStep = (id) => {
    dispatch({
      type: "CHANGE_ACTIVE_STEP",
      payload: id,
    });
  };

  // proceed to the next unvisited step and also changes the visitedStep var
  const proceedToNextStep = (next) => {
    dispatch({
      type: "PROCEDD_TO_NEXT_STEP",
      payload: next,
    });
  };

  // reset every state data back to default
  const resetToDefault = () => {
    dispatch({
      type: "RESET_TO_DEFAULT",
    });
  };

  return {
    updateTOA,
    loadAccountInformation,
    loadBusinesssInformation,
    changeActiveStep,
    proceedToNextStep,
    resetToDefault,
  };
}
export { actions };
