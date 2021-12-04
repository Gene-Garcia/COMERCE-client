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
