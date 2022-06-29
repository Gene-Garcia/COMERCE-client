import React, { useEffect, useState } from "react";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import axios from "../../../../../../../../../shared/caller";
import InventoryTable from "./ProductTable/InventoryTable";
import ProductInventories from "./SelectedProduct/ProductInventories";
import AddInventoryForm from "./SelectedProduct/AddInventoryForm";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../redux/Alert/AlertAction";
import Loading from "../../../../../../../../../shared/Loading/Loading";
import {
  loadProducts,
  resetToDefault as resetManageInventoryToDefault,
  togglePageLoading,
} from "../../../../../../../../../redux/Seller/ManageInventory/ManageInventoryAction";
import SpaciousTable, {
  Body,
  Head,
  Heading,
} from "../../../../../../../../../shared/Components/table/SpaciousTable";

function Inventory({ history }) {
  // redux
  const dispatch = useDispatch();

  // redux manage inventory reducer & states
  const reload = useSelector((state) => state.MANAGE_INVENTORY.reload);

  useEffect(() => {
    async function getProductsInventories() {
      // dispatch(togglePageLoading(true));

      axios
        .get("/api/seller/inventories")
        .then((res) => {
          if (res.status === 200) {
            batch(() => {
              dispatch(loadProducts(res.data.products));
              dispatch(togglePageLoading(false));
            });
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(
                setMessage(
                  "Something went wrong. Please refresh your browser and try again."
                )
              );
              dispatch(togglePageLoading(false));
            });
          else if (err.response.status === 401) history.push("/unathorized");
          else if (err.response.status === 403) history.push("/forbidden");
          else
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
              dispatch(togglePageLoading(false));
            });
        });
    }
    getProductsInventories();
  }, [reload]);

  // clean up
  useEffect(() => {
    return () => dispatch(resetManageInventoryToDefault());
  }, []);

  return (
    <SellerContainer>
      <SellerTitle title="Inventory" />

      <div className="my-6 xs:my-10 border-b border-gray-300"></div>

      <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
        <div className="h-min lg:w-fiftyfive 2xl:w-3/5 overflow-auto">
          <InventoryTable />
        </div>

        <div className="w-full lg:w-fourtyfive 2xl:w-2/5 space-y-6">
          <ProductInventoryContainer />
        </div>
      </div>
    </SellerContainer>
  );
}
export default Inventory;

// sinlge responsibility principle
const ProductInventoryContainer = () => {
  // redux manage inventories reducer & states
  const selectedProduct = useSelector(
    (state) => state.MANAGE_INVENTORY.selectedProduct
  );

  return selectedProduct ? (
    <>
      <ProductInventories />
      <div className="border-b border-gray-300"></div>
      <AddInventoryForm />
    </>
  ) : (
    <div
      className="h-64 rounded-md bg-my-white-tint
    flex flex-col justify-center items-center"
    >
      <h1 className="font-mono text-my-accent text-2xl filter drop-shadow-md">
        COMERCE
      </h1>
      <p className="font-medium text-gray-500 text-lg">Select a product</p>
    </div>
  );
};
