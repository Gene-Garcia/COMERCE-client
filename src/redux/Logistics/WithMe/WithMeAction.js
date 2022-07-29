const withMeActionTypes = {
  LOAD_LOGISTICS: "LOAD_LOGISTICS",
  TOGGLE_LOADING: "TOGGLE_LOADING",
  CHECK_LOGISTIC: "CHECK_LOGISTIC",
  CHECK_ALL_LOGISTICS: "CHECK_ALL_LOGISTICS",
  UPDATE_LOGISTICS_TYPE: "UPDATE_LOGISTICS_TYPE",
  TOGGLE_RELOAD: "TOGGLE_RELOAD",

  SET_LOGISTICS_IN_MODAL: "SET_LOGISTICS_IN_MODAL",
  TOGGLE_ATTEMPT_MODAL: "TOGGLE_ATTEMPT_MODAL",

  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const loadLogistics = (logistics) => {
  return { type: withMeActionTypes.LOAD_LOGISTICS, payload: logistics };
};

const toggleLoading = (isLoading) => {
  return { type: withMeActionTypes.TOGGLE_LOADING, payload: isLoading };
};

const checkLogistic = (logisticsId, isChecked) => {
  return {
    type: withMeActionTypes.CHECK_LOGISTIC,
    payload: { logisticsId, isChecked },
  };
};

const checkAllLogistics = (isChecked) => {
  return { type: withMeActionTypes.CHECK_ALL_LOGISTICS, payload: isChecked };
};

const updateLogisticsType = (type) => {
  return { type: withMeActionTypes.UPDATE_LOGISTICS_TYPE, payload: type };
};

const toggleReload = () => {
  return { type: withMeActionTypes.TOGGLE_RELOAD };
};

const setLogisticsInModal = (logisticsId) => {
  return {
    type: withMeActionTypes.SET_LOGISTICS_IN_MODAL,
    payload: logisticsId,
  };
};

const toggleAttemptModal = (isOpen) => {
  return {
    type: withMeActionTypes.TOGGLE_ATTEMPT_MODAL,
    payload: isOpen,
  };
};

const resetToDefault = () => {
  return { type: withMeActionTypes.RESET_TO_DEFAULT };
};

export {
  withMeActionTypes,
  loadLogistics,
  toggleLoading,
  checkLogistic,
  checkAllLogistics,
  updateLogisticsType,
  toggleReload,
  setLogisticsInModal,
  toggleAttemptModal,
  resetToDefault,
};
