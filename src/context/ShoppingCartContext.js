import { createContext, useReducer, useState } from "react";
import ShoppingCartReducer, { actions } from "./ShoppingCartReducer";

const ShoppingCartContext = createContext();
export default ShoppingCartContext;

const initialState = {
  items: [],
  subTotal: 0,
  shippingFee: 75,
  grandTotal: 0,
  checkoutable: false,
};

function ShoppingCartProvider({ children }) {
  const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);

  /* Loading state which will be used to render any loading components before and during API call.*/
  const [loading, setLoading] = useState(true);

  /* Pass the dispatch and get the actions */
  const {
    loadCartItems,
    modifyQuantity,
    addToCheckout,
    removeFromCheckout,
    removeCartItem,
    resetToDefault,
  } = actions(dispatch);

  return (
    <ShoppingCartContext.Provider
      value={{
        loading,
        setLoading,
        state,
        loadCartItems,
        modifyQuantity,
        addToCheckout,
        removeFromCheckout,
        removeCartItem,
        resetToDefault,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export { ShoppingCartProvider };
