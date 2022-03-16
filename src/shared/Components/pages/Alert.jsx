/*
 * This component is only instantiated or called once, however, it is capable of
 * appearing (when an error message is set) and disappearing (when the user clicks the x button).
 *
 * The value used by this component is provided by the newly implemented Alert Reducer through
 * Redux. Additionally, the setMessage and setSeverity usage of components are wrapped in a batch() function
 * to avoid 2 different renders.
 *
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../../redux/Alert/AlertAction";

// change implementation
function Alert() {
  // redux
  const message = useSelector((state) => state.ALERT.message);
  const severity = useSelector((state) => state.ALERT.severity);
  const dispatch = useDispatch();

  let color;
  if (severity === "error") color = "bg-red-100 border-red-500";
  else if (severity === "success") color = "bg-green-100 border-green-500";
  else if (severity === "information") color = "bg-blue-100 border-blue-500";

  // auto close of notication after certain seconds
  setTimeout(() => {
    dispatch(setMessage(""));
  }, 3500);

  return (
    <div className={(message ? "fixed" : "hidden") + " top-32 left-1/2 z-10"}>
      <div
        className={
          (message ? "relative" : "hidden") +
          " transition duration-300 py-4 rounded-md shadow-md border-l-4 gap-x-6 px-3 flex justify-between items-center mx-auto -left-1/2 " +
          color
        }
      >
        <div className="text-gray-800 font-medium pr-6">{message}</div>

        <button onClick={() => dispatch(setMessage(""))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Alert;

/*

so the new implementation will be also a single responsibility principle

render only a <AlertContainer /> in the <Alert/> whenever message is not empty
then in the <AlertContainer /> add the setTimeout on a useffect only on onMount
Also, add a cleanup to clearTimeout in the AlertContainer/>
*/
