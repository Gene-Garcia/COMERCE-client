import React from "react";

function InformationBody({ title, value }) {
  return (
    <>
      <div className="flex flex-col">
        <p className="font-regular text-gray-400">{title}</p>
        <p className="font-medium text-gray-800 text-lg">{value}</p>
      </div>
    </>
  );
}
export default InformationBody;
