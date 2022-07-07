import React from "react";
import { Link } from "react-router-dom";
import comerceWhite from "../../../../../../../../shared/images/comerce-logo-white.webp";

function Hero() {
  return (
    <div className="xs:w-1/5 sm:w-thirty md:w-2/5 xl:w-1/2 h-full bg-gradient-to-bl from-my-accent via-my-accent-tone to-my-accent-tint rounded-l-xl md:rounded-l-3xl py-10 px-3 sm:p-10 hidden xs:flex flex-col items-center">
      <Link to="/">
        <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-4 xl:gap-6">
          <img
            alt="COMERCE Logo"
            src={comerceWhite}
            className="w-16 md:w-24 lg:w-20 xl:w-24"
          />
          <h2 className="hidden sm:block font-mono text-white text-2xl md:text-3xl xl:text-4xl">
            COMERCE
          </h2>
        </div>
      </Link>
    </div>
  );
}
export default Hero;