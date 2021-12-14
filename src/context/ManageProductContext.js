import { createContext, useState } from "react";

/*
 * for now, the primary responsibility of this context is to
 * hold the state of the toggled option.
 *
 * As of now there are only two options or sub pages in manage products
 * 1. Overview
 * 2. Add Product
 */

const ManageProductContext = createContext();
export default ManageProductContext;

function ManageProductProvider({ children }) {
  // variable to hold toggled option {Overview or Add Product}
  const [toggled, setToggled] = useState("OVERVIEW");

  // wrapped functions
  const updateToggled = (id) => setToggled(id);

  return (
    <ManageProductContext.Provider value={{ toggled, updateToggled }}>
      {children}
    </ManageProductContext.Provider>
  );
}
export { ManageProductProvider };
