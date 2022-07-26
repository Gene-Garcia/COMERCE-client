import React from "react";

import LargeScreenNav from "./LargeScreenNav";
import SmallScreenNav from "./SmallScreenNav";

function Navigation() {
  return (
    <>
      <div className="hidden md:block">
        <LargeScreenNav />
      </div>

      <div className="block md:hidden">
        <SmallScreenNav />
      </div>
    </>
  );
}

export default Navigation;
