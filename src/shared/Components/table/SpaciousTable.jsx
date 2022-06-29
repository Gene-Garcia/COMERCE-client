import React from "react";

// <table>
const SpaciousTable = ({ children }) => {
  return (
    <div className="bg-my-white-tint w-full rounded-lg shadow-md">
      {children}
    </div>
  );
};

// <head> <tr </tr> </head>
const Head = ({ children, grid }) => {
  return (
    <div className="px-2 bg-gray-100">
      <div
        className={`grid ${grid} w-full bg-gray-100
                   text-sm font-semibold text-gray-500`}
      >
        {children}
      </div>
    </div>
  );
};

// <th>
const Heading = ({ children, className }) => {
  return <div className={`px-2 py-1 my-auto ${className}`}>{children}</div>;
};

// <body>
const Body = ({ children }) => {
  return <div className="p-2 flex flex-col gap-2">{children}</div>;
};

// <tr>
const Row = ({ children, grid }) => {
  return (
    <div
      className={`grid ${grid} w-full 
                 rounded-md odd:bg-gray-100
                 transition duration-250 ease-linear hover:shadow-lg`}
    >
      {children}
    </div>
  );
};

// <td>
const Data = ({ children, className }) => {
  return <div className={`px-2 py-2 my-auto ${className}`}>{children}</div>;
};

export default SpaciousTable;
export { Head, Heading, Body, Row, Data };
