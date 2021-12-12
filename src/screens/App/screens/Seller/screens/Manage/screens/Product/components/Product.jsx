import React, { useState } from "react";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import { PageButton } from "./utils/PageButtons";
import AddProduct from "./utils/Pages/AddProduct";
import Navigation from "./utils/Pages/Navigation";
import Overview from "./utils/Pages/Overview";

const Product = () => {
  const [toggled, s] = useState("ADD_PRODUCT");

  return (
    <SellerContainer>
      <div className="flex flex-row justify-between">
        <SellerTitle title="Products" />

        <div className="space-x-4">
          <PageButton type="BUTTON" title="Out-of-Stock" />
          <PageButton type="BUTTON" title="Some Button" />
        </div>
      </div>

      <div className="my-10">
        <Navigation />
      </div>

      <>{toggled === "OVERVIEW" && <Overview />}</>
      <>{toggled === "ADD_PRODUCT" && <AddProduct />}</>
    </SellerContainer>
  );
};
export default Product;
