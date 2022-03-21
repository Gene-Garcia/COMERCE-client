import React from "react";

const Step = ({ number, name, active }) => {
  return (
    <div className="group gap-0.5">
      <div
        className={`relative
            w-10 h-10 rounded-full 
            border-2 border-my-accent
            ${active ? "bg-my-accent" : "bg-white"}
            flex items-center justify-center
            transition duration-150 ease-linear
            group-hover:ring-1 group-hover:ring-my-accent group-hover:ring-offset-2`}
      >
        <span
          className={`relative font-semibold text-lg
                ${active ? "text-white" : "text-my-accent"}`}
        >
          {number}
        </span>

        <span className="absolute -bottom-6 text-sm font-semibold text-gray-600">
          {name}
        </span>
      </div>
    </div>
  );
};
export default Step;

const Divider = ({ active }) => {
  return (
    <div
      className={`flex-grow 
      h-1.5 rounded-l-sm ${active ? "bg-my-accent" : "bg-gray-200"}`}
    ></div>
  );
};
export { Divider };
