import { useContext } from "react";
import ManageProductContext from "../context/ManageProductContext";

function useManageProduct() {
  const { toggled, updateToggled } = useContext(ManageProductContext);
  return { toggled, updateToggled };
}
export { useManageProduct };
