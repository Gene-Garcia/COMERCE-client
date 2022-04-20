import React from "react";

const OtherInformationCard = () => {
  return (
    <div className="space-y-4">
      <UneditableInput
        width="w-3/4"
        text="account@apple.com"
        label="Business Email"
      />
      <UneditableInput
        width="w-1/2"
        text="November 15, 2021"
        label="ESTABLISHED"
      />
      <UneditableInput
        width="w-1/2"
        text="April 20, 2022"
        label="DATE CREATED"
      />
    </div>
  );
};
export default OtherInformationCard;

const UneditableInput = ({ width, text, label }) => {
  return (
    <div className={`${width}`}>
      <label className="uppercase text-gray-400 font-semibold text-sm">
        {label}
      </label>

      <p className="shadow-md rounde-dm px-2 py-1.5">{text}</p>
    </div>
  );
};
