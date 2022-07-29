import { dataObjectActionTypes as types } from "./DataObjectAction";

const initial = {
  data: null,
  isLoading: true,
};

const dataObjectReducer = (state = initial, { type, payload }) => {
  switch (type) {
    // {withCheck, data}
    case types.LOAD_DATA_OBJECT:
      if (payload.withCheck) {
        let data = {};
        for (let k in payload.data) {
          data[k] = {
            ...payload.data[k],
            checked: false,
          };
        }

        return {
          ...state,
          data: data,
        };
      } else {
        return { ...state, data: { ...payload.data } };
      }

    // isChecked
    case types.TOGGLE_ALL_CHECK:
      let allChecked = {};
      for (let k in state.data) {
        allChecked[k] = {
          ...state.data[k],
          checked: payload,
        };
      }

      return {
        ...state,
        data: allChecked,
      };

    // {isChecked, objectKey or id}
    case types.TOGGLE_CHECK:
      let objChecked = {};
      for (let k in state.data) {
        objChecked[k] = {
          ...state.data[k],
          checked:
            payload.objectKey === k ? payload.isChecked : state.data[k].checked,
        };
      }

      return {
        ...state,
        data: objChecked,
      };

    case types.RESET_DATA_OBJECT_REDUX:
      return { ...initial };

    default:
      return { ...state };
  }
};

export default dataObjectReducer;
