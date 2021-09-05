/*
 * This hook function uses the AlertContext.
 *
 * It accesses the alert context's state variable and returns
 * it to the consumer component.
 *
 */

import { useContext } from "react";
import AlertContext from "../context/AlertContext";

function useAlert() {
  const { message, setMessage, severity, setSeverity } =
    useContext(AlertContext);

  return { message, setMessage, severity, setSeverity };
}
export default useAlert;
