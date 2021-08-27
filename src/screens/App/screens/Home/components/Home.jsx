import React from "react";
import ProductFocused from "../../../../../shared/Components/product/Product.Focused";
import ProductHalf from "../../../../../shared/Components/product/Product.Half";
import ProductLong from "../../../../../shared/Components/product/Product.Long";
import ProductSmall from "../../../../../shared/Components/product/Product.Small";
import HomeNav from "./Home.Nav";

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
