import React from "react";
import comerceWhite from "../../../../../../../../shared/images/comerce-logo-white.webp";

function Hero() {
  return (
    <div className="w-1/2 h-full bg-gradient-to-bl from-my-accent via-my-accent-tone to-my-accent-tint rounded-l-3xl p-10 flex flex-col items-center">
      <div className="flex flex-row items-center gap-6">
        <img alt="COMERCE Logo" src={comerceWhite} className="w-24" />
        <h2 className="font-mono text-white text-4xl">COMERCE</h2>
      </div>
    </div>
  );
}
export default Hero;
