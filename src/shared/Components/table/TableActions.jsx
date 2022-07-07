import React from "react";

const Action = ({ text, type = "BUTTON", onClick, href = "#" }) => {
  return type.toUpperCase() === "BUTTON" ? (
    <button
      onClick={onClick}
      className="uppercase font-medium text-center text-sm 
                text-white bg-gray-400
                min-w-18 px-2.5 py-0.5 rounded-full"
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
