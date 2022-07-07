import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetToDefault as resetManageProductToDefault } from "../../../../../../../../../redux/Seller/ManageProduct/ManageProductAction";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import HeaderButton from "../../../../../../../../../shared/Components/seller/HeaderButton";
import InformationModal from "./utils/Modal/InformationModal";
import AddProduct from "./utils/Pages/AddProduct";
import Navigation from "./utils/Pages/Navigation";
import Overview from "./utils/Pages/Overview";

const Product = () => {
  // redux
  const dispatch = useDispatch();

  // clean up
  useEffect(() => {
    return () => dispatch(resetManageProductToDefault());
  }, []);

  return (
    <>
      <InformationModalContainer />

      <SellerContainer>
        <div className="flex flex-col xs:flex-row justify-between items-center gap-4 xs:gap-0">
          <SellerTitle title="Products" />

          {/* <div className="space-x-4 flex flex-row justify-center items-center">
            <HeaderButton type="BUTTON" title="Out-of-Stock" />
            <HeaderButton type="BUTTON" title="Some Button" />
          </div> */}
        </div>

        <div className="my-6 xs:my-10">
          <Navigation />
        </div>

        <NavigatedProductAction />
      </SellerContainer>
    </>
  );
};
export default Product;

/* single responsibility principle */
const InformationModalContainer = () => {
  // redux manage product reducer & state
  const isModalOpen = useSelector((state) => state.MANAGE_PRODUCT.isModalOpen);
  return isModalOpen ? <InformationModal /> : <></>;
};

const NavigatedProductAction = () => {
  // redux manage product reducer & state
  const toggled = useSelector(
    (state) => state.MANAGE_PRODUCT.toggledProductSubPage
  );
  return (
    <div className="overflow-x-auto">
      <>{toggled === "OVERVIEW" && <Overview />}</>
      <>{toggled === "ADD_PRODUCT" && <AddProduct />}</>
    </div>
  );
};
