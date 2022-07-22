import React from "react";
import { Link } from "react-router-dom";
import comerceBlueLogo from "../../../../../../../../shared/images/comerce-logo-blue.webp";
import Steps from "./Steps";

const Heading = () => {
  return (
    <div
      className={`bg-white w-full shadow-2xl rounded-t-2xl p-5 flex flex-col gap-4`}
    >
      <div className="place-self-center">
        {/* logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            alt="COMERCE express Logo"
            src={comerceBlueLogo}
            className="h-max w-12"
          />

          <div className="flex flex-col gap-0 justify-end items-end">
            <h2 className="font-mono text-accent text-2xl leading-none">
              COMERCE
            </h2>
            <p className="text-right font-medium text-accent text-lg leading-none">
              express
            </p>
          </div>
        </Link>
      </div>

      <hr />

      <div className="overflow-x-auto pt-1 pb-7">
        <Steps />
      </div>
    </div>
  );
};
export default Heading;
