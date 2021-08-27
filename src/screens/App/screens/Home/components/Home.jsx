import React from "react";
import ProductFocused from "../../../../../shared/Components/product/ProductFocused";
import ProductHalf from "../../../../../shared/Components/product/ProductHalf";
import ProductLong from "../../../../../shared/Components/product/ProductLong";
import ProductSmall from "../../../../../shared/Components/product/ProductSmall";
import HomeNav from "./HomeNav";

function Home() {
  return (
    <>
      <HomeNav />

      <div className="flex flex-col items-center justify-center">
        <ProductLong />
        <br />
        <ProductHalf />
        <br />
        <ProductSmall />
        <br />
        <ProductFocused />
      </div>
    </>
  );
}

export default Home;
