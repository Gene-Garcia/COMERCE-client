import React from "react";

// <table>
const CompactTable = ({ children, elevate = "rounded-lg shadow-md" }) => {
  return <div className={`bg-white-tint w-full ${elevate}`}>{children}</div>;
};

// <head> <tr </tr> </head>
const Head = ({ children, grid }) => {
  return (
    <div className="bg-gray-100 rounded-t-lg">
      <div
        className={`grid ${grid} w-full rounded-t-lg bg-gray-100
                    border border-gray-300
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
  return <div className="flex flex-col">{children}</div>;
};

// <tr>
const Row = ({ children, grid }) => {
  return (
    <div
      className={`grid ${grid} w-full 
                  bg-gray-100 odd:bg-transparent
                 transition duration-250 ease-linear hover:bg-gray-200
                 border-b border-l border-r border-gray-300`}
    >
      {children}
    </div>
  );
};

// <td>
const Data = ({ children, className }) => {
  return <div className={`px-2 py-2 my-auto ${className}`}>{children}</div>;
};

export default CompactTable;
export { Head, Heading, Body, Row, Data };
