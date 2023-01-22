import { alertActionTypes } from "./AlertAction";

const initial = {
  message: "",
  severity: "default",

  // new implementation object of {message, severity} object, { [ID]: {message: "", severity: ""} }
  messages: null,
};

const alertReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case alertActionTypes.SET_MESSAGE:
      return { ...state, message: payload };

    case alertActionTypes.SET_SEVERITY:
      return { ...state, severity: payload };

    case alertActionTypes.SET_MESSAGES:
      // payload is an array of {message, severity}
      // build into object of objects, { [ID]: {message, severity}}

      let messages = {};
      payload.forEach((msg, i) => {
        const uniq = "id" + new Date().getTime() + i;

        messages[uniq] = { message: msg.message, severity: msg.severity };
      });

      return { ...state, messages: { ...messages } };

    case alertActionTypes.FILTER_MESSAGES:
      delete state.messages[payload];

      return { ...state, messages: { ...state.messages } };

    default:
      return { ...state };
  }
};
export default alertReducer;
