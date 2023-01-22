import React from "react";
import { Link } from "react-router-dom";
import comerceWhiteLogo from "../../../../../../../../shared/images/comerce-logo-white.webp";

const Hero = () => {
  return (
    <div
      className={`w-2/5 h-full shadow-xl rounded-2xl p-14
      bg-gradient-to-bl from-accent via-accent-tone to-accent-tint 
      flex flex-col justify-between items-center`}
    >
      {/* logo */}
      <div className="flex flex-row items-center gap-2 md:gap-4 xl:gap-6">
        <img
          alt="COMERCE express Logo"
          src={comerceWhiteLogo}
          className="h-max w-16 md:w-24 lg:w-20 xl:w-24"
        />

        <div>
          <h2 className="font-mono text-white text-2xl md:text-3xl xl:text-4xl">
            COMERCE
          </h2>
          <p className="text-right font-medium text-white text-xl">express</p>
        </div>
      </div>

      {/* button */}
      <div className="flex flex-row gap-5">
        <HeroLink to="/catalogue" onClick={() => {}} text="Buy Now" />
        <HeroLink to="/login/seller" onClick={() => {}} text="Start Selling " />
      </div>
    </div>
  );
};

const HeroLink = ({ to, text, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`bg-white rounded-full w-36 h-8
      group transition duration-150 ease-linear
      hover:bg-accent
      hover:ring-1 hover:ring-accent hover:ring-offset-2`}
    >
      <div
        className={`bg-accent rounded-full h-full w-[8.5rem] 
          ml-auto
          relative flex items-center justify-center
          transition duration-150 ease-linear
          group-hover:bg-white`}
      >
        <span
          className={`text-white font-semibold
          transition duration-150 ease-linear
          group-hover:text-accent`}
        >
          {text}
        </span>
      </div>
    </Link>
  );
};

export default Hero;
