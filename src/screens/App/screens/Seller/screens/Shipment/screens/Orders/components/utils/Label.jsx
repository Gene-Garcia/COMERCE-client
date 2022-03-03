import React from "react";

const Label = ({ title, value, accented }) => {
  return (
    <div>
      <label className="text-xs text-gray-400 font-medium">{title}</label>
      <p className={`${accented && "text-my-accent font-medium"}`}>{value}</p>
    </div>
  );
};

export default Label;
