import React from "react";

const SettingsCard = ({ className, title, children }) => {
  return (
    <div
      className={`bg-my-white-tint shadow-md rounded-md p-8 ${className} space-y-4`}
    >
      <h3 className="font-medium text-gray-700">{title}</h3>

      <div>{children}</div>
    </div>
  );
};
export default SettingsCard;
