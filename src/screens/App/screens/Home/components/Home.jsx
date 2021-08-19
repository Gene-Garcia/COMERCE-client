import React from "react";
import ProductHalf from "../../../../../shared/Components/product/Product.Half";
import ProductLong from "../../../../../shared/Components/product/Product.Long";
import HomeNav from "./Home.Nav";

function Home() {
  return (
    <>
      <HomeNav />

      <div className="flex flex-col items-center justify-center">
        <ProductLong />
        <br />
        <ProductHalf />
      </div>
    </>
  );
}

export default Home;
