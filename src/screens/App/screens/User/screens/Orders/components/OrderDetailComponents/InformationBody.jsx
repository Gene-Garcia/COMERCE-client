import React from "react";

function InformationBody({ title, value }) {
  return (
    <>
      <div className="flex flex-col">
        <p className="font-semibold uppercase text-gray-400 text-sm">{title}</p>
        <p className="font-regular text-gray-800 text-md">{value}</p>
      </div>
    </>
  );
}
export default InformationBody;
