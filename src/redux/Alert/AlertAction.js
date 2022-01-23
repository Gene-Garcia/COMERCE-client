// Action types
const alertActionTypes = {
  SET_MESSAGE: "SET_MESSAGE",
  SET_SEVERITY: "SET_SEVERITY",
};

// Action methods
const setMessage = (message) => {
  return {
    type: "",
    payload: message,
  };
};

const setSeverity = (severity) => {
  return {
    type: "",
    payload: severity,
  };
};

export { alertActionTypes, setMessage, setSeverity };
