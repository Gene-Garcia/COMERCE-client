const dataObjectActionTypes = {
  LOAD_DATA_OBJECT: "LOAD_DATA_OBJECT",
  TOGGLE_ALL_CHECK: "TOGGLE_ALL_CHECK",
  TOGGLE_CHECK: "TOGGLE_CHECK",
  RESET_DATA_OBJECT_REDUX: "RESET_DATA_OBJECT_REDUX",
};

const loadDataObject = (data, withChecked) => {
  return {
    type: dataObjectActionTypes.LOAD_DATA_OBJECT,
    payload: { data, withChecked },
  };
};

const toggleAllCheck = (isChecked) => {
  return {
    type: dataObjectActionTypes.TOGGLE_ALL_CHECK,
    payload: isChecked,
  };
};

const toggleCheck = (isChecked, objectKey) => {
  return {
    type: dataObjectActionTypes.TOGGLE_CHECK,
    payload: { isChecked, objectKey },
  };
};

const resetDataObjectRedux = () => {
  return {
    type: dataObjectActionTypes.RESET_DATA_OBJECT_REDUX,
  };
};

export {
  dataObjectActionTypes,
  loadDataObject,
  toggleAllCheck,
  toggleCheck,
  resetDataObjectRedux,
};
