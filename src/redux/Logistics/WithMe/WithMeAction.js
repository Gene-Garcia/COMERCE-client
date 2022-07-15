const withMeActionTypes = {
  LOAD_LOGISTICS: "LOAD_LOGISTICS",
  TOGGLE_LOADING: "TOGGLE_LOADING",
  CHECK_LOGISTIC: "CHECK_LOGISTIC",
  CHECK_ALL_LOGISTICS: "CHECK_ALL_LOGISTICS",
  UPDATE_LOGISTICS_TYPE: "UPDATE_LOGISTICS_TYPE",
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
  resetToDefault,
};