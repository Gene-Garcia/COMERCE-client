import React from "react";

function Container({ children, xSpacing }) {
  const defaultXSpacing = "px-2 sm:px-6 md:px-10";

  return (
    <div
      className={`container mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-16 pb-12 overflow-hidden ${
        xSpacing ? xSpacing : defaultXSpacing
      }`}
    >
      {children}
    </div>
  );
}
export default Container;

function SellerContainer({ children }) {
  return (
    <div className="p-2 xs:p-4 sm:p-5 lg:p-6 2xl:p-8 bg-white-tone">
      {children}
    </div>
  );
}

const LogisticsContainer = ({ children }) => {
  return (
    <>
      <div className="p-2 xs:p-4 sm:p-5 lg:p-6 2xl:p-8 bg-white-tone">
        {children}
      </div>
    </>
  );
};

export { SellerContainer, LogisticsContainer };
