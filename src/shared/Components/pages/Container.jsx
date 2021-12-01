import React from "react";

function Container({ children }) {
  return (
    <div className="container mx-auto mt-16 pb-12 px-2 sm:px-6 md:px-10 overflow-hidden ">
      {children}
    </div>
  );
}
export default Container;
