import { useContext } from "react";
import ManageInventoryContext from "../context/ManageInventoryContext";
import ManageProductContext from "../context/ManageProductContext";

function useManageProduct() {
  const {
    toggled,
    updateToggled,
    toggledModal,
    updateToggledModal,
    productId,
    updateProductId,
  } = useContext(ManageProductContext);
  return {
    toggled,
    updateToggled,
    toggledModal,
    updateToggledModal,
    productId,
    updateProductId,
  };
}

function useManageInventory() {
  const { products, updateProducts, selected, updateSelected } = useContext(
    ManageInventoryContext
  );

  return { products, updateProducts, selected, updateSelected };
}

export { useManageProduct, useManageInventory };
