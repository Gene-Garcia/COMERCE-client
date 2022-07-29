const dataObjectActionTypes = {
  LOAD_DATA_OBJECT: "LOAD_DATA_OBJECT",
  TOGGLE_ALL_CHECK: "TOGGLE_ALL_CHECK",
  TOGGLE_CHECK: "TOGGLE_CHECK",
  RESET_DATA_ARRAY_REDUX: "RESET_DATA_ARRAY_REDUX",
};

const loadDataObject = (data, withChecked) => {
  return {
    type: dataArrayActionTypes.LOAD_DATA_OBJECT,
    payload: { data, withChecked },
  };
};

const toggleAllCheck = (isChecked) => {
  return {
    type: dataArrayActionTypes.TOGGLE_ALL_CHECK,
    payload: isChecked,
  };
};

const toggleCheck = (isChecked, objectKey) => {
  return {
    type: dataArrayActionTypes.TOGGLE_CHECK,
    payload: { isChecked, objectKey },
  };
};

const resetDataArrayRedux = () => {
  return {
    type: dataArrayActionTypes.RESET_DATA_ARRAY_REDUX,
  };
};

export {
  dataObjectActionTypes,
  loadDataObject,
  toggleAllCheck,
  toggleCheck,
  resetDataArrayRedux,
};
