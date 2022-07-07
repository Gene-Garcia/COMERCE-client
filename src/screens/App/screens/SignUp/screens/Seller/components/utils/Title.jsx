import React from "react";
import { Link } from "react-router-dom";
import comerceBlue from "../../../../../../../../shared/images/comerce-logo-blue.webp";

function Title({ name }) {
  return (
    <div className="flex flex-row items-center gap-4 md:gap-6">
      <Link to="/">
        <img src={comerceBlue} className="w-8 md:w-12 h-auto" />
      </Link>

      <div>
        <h1 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
          COMERCE Seller Registration
        </h1>
        <p className="sm:text-md md:text-lg text-my-accent font-medium">
          {name}
        </p>
      </div>
    </div>
  );
}
export default Title;
