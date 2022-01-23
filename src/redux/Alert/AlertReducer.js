import { alertActionTypes } from "./AlertAction";

const initial = {
  message: "",
  severity: "default",
};

const alertReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case alertActionTypes.SET_MESSAGE:
      return { ...state, message: payload };

    case alertActionTypes.SET_SEVERITY:
      return { ...state, severity: payload };

    default:
      return { ...state };
  }
};
export default alertReducer;
