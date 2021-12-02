import React from "react";

function Title({ name }) {
  return (
    <div>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
        COMERCE Seller Registration
      </h1>
      <p className="sm:text-md md:text-lg text-my-accent font-medium">{name}</p>
    </div>
  );
}
export default Title;
