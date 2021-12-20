import { createContext, useState } from "react";

const ManageInventoryContext = createContext();
export default ManageInventoryContext;

function ManageInventoryProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  // wrapper functions
  const updateProducts = (data) => setProducts(data);
  const updateSelected = (data) => {
    if (!data) setSelected(null);
    else setSelected(data);
  };

  return (
    <ManageInventoryContext.Provider
      value={{
        loading,
        setLoading,
        products,
        updateProducts,
        selected,
        updateSelected,
      }}
    >
      {children}
    </ManageInventoryContext.Provider>
  );
}
export { ManageInventoryProvider };
