import { useContext } from "react";
import ManageProductContext from "../context/ManageProductContext";

function useManageProduct() {
  const { toggled, updateToggled, toggledModal, updateToggledModal } =
    useContext(ManageProductContext);
  return { toggled, updateToggled, toggledModal, updateToggledModal };
}
export { useManageProduct };
