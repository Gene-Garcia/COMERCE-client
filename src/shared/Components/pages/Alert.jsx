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
import { icon, themes } from "./alertData";

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
    }, 4500 + iteration * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-10 max-h-28 min-w-[18rem] max-w-lg
        bg-gray-50
        flex items-center gap-2
        border rounded shadow-md
        ${themes[severity.toUpperCase()].border}`}
    >
      <div
        className={`${themes[severity.toUpperCase()].icon}
          self-stretch rounded-l
          p-2
          flex items-center justify-center`}
      >
        {icon[severity.toUpperCase()]}
      </div>

      <p className="overflow-y-auto max-h-28 h-full flex-grow flex-shrink text-sm font-semibold text-gray-800 py-0.5">
        {message}
      </p>

      <button
        onClick={() => dispatch(filterMessages(id))}
        className="p-1 hover:text-accent transition ease-linear"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
