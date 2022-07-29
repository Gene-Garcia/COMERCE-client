const dataArrayActionTypes = {
  LOAD_DATA_ARRAY: "LOAD_DATA_ARRAY",
  TOGGLE_ALL_CHECK: "TOGGLE_ALL_CHECK",
  TOGGLE_CHECK: "TOGGLE_CHECK",
  RESET_DATA_ARRAY_REDUX: "RESET_DATA_ARRAY_REDUX",
};

const loadDataArray = (data, withChecked) => {
  return {
    type: dataArrayActionTypes.LOAD_DATA_ARRAY,
    payload: { data, withChecked },
  };
};

const toggleAllCheck = (isChecked) => {
  return {
    type: dataArrayActionTypes.TOGGLE_ALL_CHECK,
    payload: isChecked,
  };
};

const toggleCheck = (isChecked, idName, id) => {
  return {
    type: dataArrayActionTypes.TOGGLE_CHECK,
    payload: { isChecked, idName, id },
  };
};

const resetDataArrayRedux = () => {
  return {
    type: dataArrayActionTypes.RESET_DATA_ARRAY_REDUX,
  };
};

export {
  dataArrayActionTypes,
  loadDataArray,
  toggleAllCheck,
  toggleCheck,
  resetDataArrayRedux,
};
