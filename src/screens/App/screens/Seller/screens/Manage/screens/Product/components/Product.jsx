import React from "react";
import { useManageProduct } from "../../../../../../../../../hooks/useManage";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import HeaderButton from "../../../../../../../../../shared/Components/seller/HeaderButton";
import InformationModal from "./utils/Modal/InformationModal";
import AddProduct from "./utils/Pages/AddProduct";
import Navigation from "./utils/Pages/Navigation";
import Overview from "./utils/Pages/Overview";

const Product = () => {
  const { toggled, toggledModal } = useManageProduct();

  return (
    <>
      {toggledModal && <InformationModal />}

      <SellerContainer>
        <div className="flex flex-col xs:flex-row justify-between items-center gap-4 xs:gap-0">
          <SellerTitle title="Products" />

          <div className="space-x-4 flex flex-row justify-center items-center">
            <HeaderButton type="BUTTON" title="Out-of-Stock" />
            <HeaderButton type="BUTTON" title="Some Button" />
          </div>
        </div>

        <div className="my-6 xs:my-10">
          <Navigation />
        </div>

        <>{toggled === "OVERVIEW" && <Overview />}</>
        <>{toggled === "ADD_PRODUCT" && <AddProduct />}</>
      </SellerContainer>
    </>
  );
};
export default Product;
