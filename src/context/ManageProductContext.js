import { createContext, useState } from "react";

/*
 * for now, the primary responsibility of this context is to
 * hold the state of the toggled option.
 *
 * As of now there are only two options or sub pages in manage products
 * 1. Overview
 * 2. Add Product
 *
 * This context will hold the variable to toggle the product information toggled
 */

const ManageProductContext = createContext();
export default ManageProductContext;

function ManageProductProvider({ children }) {
  // variable to hold toggled option {Overview or Add Product}
  const [toggled, setToggled] = useState("OVERVIEW");

  // modal
  const [toggledModal, setToggledModal] = useState(false);

  // wrapped functions
  const updateToggled = (id) => setToggled(id);
  const updateToggledModal = (b) => setToggledModal(b);

  return (
    <ManageProductContext.Provider
      value={{ toggled, updateToggled, toggledModal, updateToggledModal }}
    >
      {children}
    </ManageProductContext.Provider>
  );
}
export { ManageProductProvider };
