import { dataArrayActionTypes as types } from "./DataArrayAction";

const initial = {
  data: [],
  isLoading: true,

  reload: false,
};

const dataArrayReducer = (state = initial, { type, payload }) => {
  switch (type) {
    // {withCheck, data}
    case types.LOAD_DATA_ARRAY:
      if (payload.withCheck) {
        return {
          ...state,
          data: payload.data.map((e) => ({ ...e, checked: false })),
        };
      } else {
        return { ...state, data: payload.data };
      }

    // isChecked
    case types.TOGGLE_ALL_CHECK:
      return {
        ...state,
        data: state.data.map((e) => ({ ...e, checked: payload })),
      };

    // {isChecked, idName, id}
    case types.TOGGLE_CHECK:
      return {
        ...state,
        data: state.data.map((e) => ({
          ...e,
          checked:
            e[payload.idName] === payload.id ? payload.isChecked : e.checked,
        })),
      };

    case types.TOGGLE_RELOAD:
      return {
        ...state,
        reload: !state.reload,
      };

    case types.RESET_DATA_ARRAY_REDUX:
      return { ...initial };

    default:
      return { ...state };
  }
};

export default dataArrayReducer;
