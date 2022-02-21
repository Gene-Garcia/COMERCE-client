import { useContext } from "react";
import ManageInventoryContext from "../context/ManageInventoryContext";

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

export { useManageInventory };
