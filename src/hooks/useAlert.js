import { useContext } from "react";
import AlertContext from "../context/AlertContext";

function useAlert() {
  const { message, setMessage, severity, setSeverity } =
    useContext(AlertContext);

  return { message, setMessage, severity, setSeverity };
}
export default useAlert;
