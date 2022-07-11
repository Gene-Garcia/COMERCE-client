// Action types
const alertActionTypes = {
  SET_MESSAGE: "SET_MESSAGE",
  SET_MESSAGES: "SET_MESSAGES",
  FILTER_MESSAGES: "FILTER_MESSAGES",
  SET_SEVERITY: "SET_SEVERITY",
};

// Action methods
const setMessage = (message) => {
  return {
    type: alertActionTypes.SET_MESSAGE,
    payload: message,
  };
};

const setSeverity = (severity) => {
  return {
    type: alertActionTypes.SET_SEVERITY,
    payload: severity,
  };
};

const setMessages = (messages) => {
  return {
    type: alertActionTypes.SET_MESSAGES,
    payload: messages,
  };
};

const filterMessages = (id) => {
  return {
    type: alertActionTypes.FILTER_MESSAGES,
    payload: id,
  };
};

export {
  alertActionTypes,
  setMessage,
  setSeverity,
  setMessages,
  filterMessages,
};
