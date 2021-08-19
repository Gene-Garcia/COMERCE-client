import React from "react";
import ProductLong from "../../../../../shared/Components/product/Product.Long";
import HomeNav from "./Home.Nav";

function Home() {
  return (
    <>
      <HomeNav />

      <div className="flex justify-center">
        <ProductLong />
      </div>
    </>
  );
}

export default Home;
