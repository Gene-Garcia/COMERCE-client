import React from "react";

const OrderField = ({ label, value, width = "w-max" }) => {
  return (
    <div className={width}>
      <label className="font-medium uppercase text-sm text-neutral-500 mr-4">
        {label}
      </label>
      <p className="bg-gray-100 rounded shadow px-2.5 py-1.5 font-medium text-gray-800">
        {value}
      </p>
    </div>
  );
};

const SkeletonOrderField = ({ width = "w-max" }) => {
  return (
    <div className={`animate-pulse h-8 rounded ${width} bg-slate-200`}></div>
  );
};

const SummaryField = ({ label, value }) => {
  return (
    <>
      <p className="font-medium text-slate-900 uppercase text-sm">{label}</p>
      <p className="text-lg">{value}</p>
    </>
  );
};

export { OrderField, SkeletonOrderField, SummaryField };
