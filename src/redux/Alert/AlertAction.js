// Action types
const alertActionTypes = {
  SET_MESSAGE: "SET_MESSAGE",
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

export { alertActionTypes, setMessage, setSeverity };
