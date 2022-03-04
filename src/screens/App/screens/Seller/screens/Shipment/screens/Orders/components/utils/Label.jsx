import React from "react";

const Label = ({ full, title, value, accented }) => {
  return (
    <div className={full ? "w-full" : "w-1/2"}>
      <label className="text-xs text-gray-400 font-medium">{title}</label>
      <p className={`${accented && "text-my-accent font-medium"}`}>{value}</p>
    </div>
  );
};

export default Label;
