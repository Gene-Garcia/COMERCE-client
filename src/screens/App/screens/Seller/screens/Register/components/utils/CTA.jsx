import React from "react";

function DesignedButton({ value, onClick }) {
  return (
    <button className="bg-my-accent rounded text-white px-10 py-3 text-xl font-medium shadow-lg transition duration-200 hover:bg-my-accent-mono">
      {value}
    </button>
  );
}

function TOACTA() {
  return (
    <div className="flex flex-row gap-8 items-center">
      <DesignedButton value="AGREE" />

      <a href="#" className="text-xl font-medium text-gray-400 group">
        <span className="border-b border-transparent rounded transition duration-200 group-hover:border-gray-900 ">
          Disagree
        </span>
      </a>
    </div>
  );
}

export { TOACTA };
