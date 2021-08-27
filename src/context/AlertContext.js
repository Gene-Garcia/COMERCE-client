import { createContext, useState } from "react";

const AlertContext = createContext();
export default AlertContext;

function AlertProvider({ children }) {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  return (
    <AlertContext.Provider
      value={{ message, setMessage, severity, setSeverity }}
    >
      {children}
    </AlertContext.Provider>
  );
}
export { AlertProvider };
