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
  const {
    loading,
    setLoading,
    products,
    updateProducts,
    selected,
    updateSelected,
    reload,
    setReload,
  } = useContext(ManageInventoryContext);

  return {
    loading,
    setLoading,
    products,
    updateProducts,
    selected,
    updateSelected,
    reload,
    setReload,
  };
}

export { useManageProduct, useManageInventory };
