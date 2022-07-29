const initial = {
  data: [],
  isLoading: true,
};

const dataArrayReducer = (state = initial, { type, payload }) => {
  switch (type) {
    // {withCheck, data}
    case "LOAD_DATA_ARRAY":
      if (payload.withCheck) {
        return {
          ...state,
          data: payload.data.map((e) => ({ ...e, checked: false })),
        };
      } else {
        return { ...state, data: payload.data };
      }

    // isChecked
    case "TOGGLE_ALL_CHECK":
      return {
        ...state,
        data: state.data.map((e) => ({ ...e, checked: payload })),
      };

    // {isChecked, idName, id}
    case "TOGGLE_CHECK":
      return {
        ...state,
        data: state.data.map((e) => ({
          ...e,
          checked:
            e[payload.idName] === payload.id ? payload.isChecked : e.checked,
        })),
      };

    case "RESET_DATA_ARRAY_REDUX":
      return { ...initial };

    default:
      return { ...state };
  }
};
