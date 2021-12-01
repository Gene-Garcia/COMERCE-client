import { createContext, useState } from "react";

/*
 * The AlertContext holds the state variables used in displaying a
 * global notification.
 *
 * Components that wants to display an Alert notification, they need to
 * have access to these state variables.
 * Additionally, access to these state vars, they need to use the hook useAlert, which
 * uses this context and returns the state variables
 */
const AlertContext = createContext();
export default AlertContext;

function AlertProvider({ children }) {
  const [message, setUnWrappedMessage] = useState("");
  const [severity, setSeverity] = useState("");

  // message
  const setMessage = (s) => {
    setUnWrappedMessage(s);

    setTimeout(() => setUnWrappedMessage(""), 5000);
  };

  return (
    <AlertContext.Provider
      value={{ message, setMessage, severity, setSeverity }}
    >
      {children}
    </AlertContext.Provider>
  );
}
export { AlertProvider };
