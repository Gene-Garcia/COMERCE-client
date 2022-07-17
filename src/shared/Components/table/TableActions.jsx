import React from "react";

const Action = ({ text, type = "BUTTON", onClick, href = "#" }) => {
  return type.toUpperCase() === "BUTTON" ? (
    <button
      onClick={onClick}
      className="uppercase font-medium text-center text-sm 
                text-gray-600 bg-gray-300
                min-w-[4.5rem] px-2.5 py-0.5 rounded-full
                transition duration-200 ease-linear
                hover:ring-2 hover:ring-gray-300 hover:ring-offset-2
                active:bg-gray-400 active:text-white active:ring-0"
    >
      {text}
    </button>
  ) : (
    <a href={href}>{text}</a>
  );
};

const ActionGroup = ({ children }) => {
  return <div className="flex flex-wrap justify-center gap-1">{children}</div>;
};

export { Action, ActionGroup };
