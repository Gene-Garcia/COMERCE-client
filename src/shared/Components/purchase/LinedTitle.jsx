import React from "react";

const LinedTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-6">
      <div className="grow h-1.5 border-b border-slate-300"></div>
      <p className="uppercase text-base font-semibold text-slate-600 text-center tracking-wide">
        {title}
      </p>
      <div className="grow h-1.5 border-b border-slate-300"></div>
    </div>
  );
};
export default LinedTitle;
