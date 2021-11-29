import React from "react";

function Title({ name }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800">
        COMERCE Seller Registration
      </h1>
      <p className="text-lg text-my-accent font-medium">{name}</p>
    </div>
  );
}
export default Title;
