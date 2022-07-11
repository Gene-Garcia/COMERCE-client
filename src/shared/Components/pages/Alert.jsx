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
import { filterMessages, setMessage } from "../../../redux/Alert/AlertAction";

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

  useEffect(() => {
    let interval = setTimeout(() => {
      dispatch(setMessage(""));
    }, 3500);

    return () => clearInterval(interval);
  }, [message, severity]);

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

const StackedAlert = () => {
  // redux alert states
  const messages = useSelector((state) => state.ALERT.messages);

  return messages ? (
    <div className={`fixed bottom-5 right-5 z-50 flex flex-col gap-3`}>
      {Object.entries(messages).map(([id, v], i) => (
        <AlertBody key={id} iteration={i + 1} id={id} {...v} />
      ))}
    </div>
  ) : (
    <></>
  );
};
export { StackedAlert };

const AlertBody = ({ id, message, severity, iteration }) => {
  // redux
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = setTimeout(() => {
      dispatch(filterMessages(id));
    }, 2500 + iteration * 1000);

    return () => clearInterval(interval);
  }, []);

  const themes = {
    ERROR: { border: "border-red-300", icon: "bg-red-100 text-red-800" }, // red
    SUCCESS: {
      border: "border-green-300",
      icon: "bg-green-100 text-green-800",
    }, // green
    INFORMATION: {
      border: "border-blue-300",
      icon: "bg-blue-100 text-blue-800",
    }, // blue
    WARNING: {
      border: "border-yellow-300",
      icon: "bg-yellow-100 text-yellow-800",
    }, // yellow
  };

  const icon = {
    ERROR: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    SUCCESS: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    INFORMATION: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    WARNING: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  return (
    <div
      className={`bg-gray-50 h-8 w-60 
        flex items-center gap-2
        border rounded shadow-md
        ${themes[severity.toUpperCase()].border}`}
    >
      <div
        className={`${themes[severity.toUpperCase()].icon}  h-full
         rounded-l p-2
         flex items-center justify-center`}
      >
        {icon[severity.toUpperCase()]}
      </div>

      <p className="flex-grow text-sm font-semibold text-gray-800">{message}</p>
    </div>
  );
};
