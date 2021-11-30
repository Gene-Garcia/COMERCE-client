import React from "react";

function DesignedButton({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-my-accent rounded text-white px-10 py-3 text-lg font-medium shadow-lg transition duration-200 hover:bg-my-accent-mono"
    >
      {value}
    </button>
  );
}

function Body({ children }) {
  return <div className="flex flex-row gap-8 items-center">{children}</div>;
}

function TOACTA({ onClick }) {
  return (
    <Body>
      <DesignedButton value="AGREE" onClick={onClick} />

      <a href="#" className="text-lg font-medium text-gray-400 group">
        <span className="border-b border-transparent rounded transition duration-200 group-hover:border-gray-900 ">
          Disagree
        </span>
      </a>
    </Body>
  );
}

function AccountInfoCTA({ onClick }) {
  return (
    <Body>
      <DesignedButton value="SUBMIT" onClick={onClick} />

      <a href="#" className="text-lg font-medium text-gray-400 group">
        <span className="border-b border-transparent rounded transition duration-200 group-hover:border-gray-900 ">
          Cancel
        </span>
      </a>
    </Body>
  );
}

function BusinessInfoCTA({ onClick }) {
  return (
    <Body>
      <DesignedButton value="CREATE ACCOUNT" onClick={onClick} />

      <a href="#" className="text-lg font-medium text-gray-400 group">
        <span className="border-b border-transparent rounded transition duration-200 group-hover:border-gray-900 ">
          Cancel
        </span>
      </a>
    </Body>
  );
}

export { TOACTA, AccountInfoCTA, BusinessInfoCTA };