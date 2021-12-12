import React from "react";
import ProductHeadings from "../Table/ProductHeading";
import ProductRow from "../Table/ProductRow";

function Overview() {
  return (
    <div className="space-y-10">
      <ProductHeadings />
      <div className="flex flex-col gap-y-5">
        <ProductRow data="" />
        <ProductRow data="" />
        <ProductRow data="" />
        <ProductRow data="" />
        <ProductRow data="" />
      </div>
    </div>
  );
}
export default Overview;
