import { useContext } from "react";
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
export { useManageProduct };
