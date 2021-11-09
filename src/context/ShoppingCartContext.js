import { createContext, useReducer, useState } from "react";
import ShoppingCartReducer, { actions } from "./ShoppingCartReducer";

const ShoppingCartContext = createContext();
export default ShoppingCartContext;

const initialState = {
  // each item object will have an additional field 'checkout' and will be determining variable on products to be for checkout
  items: [],
  subTotal: 0,
  // for now shipping is a fixed 75 pessos
  shippingFee: 75,
  grandTotal: 0,
  // variable that tells on whether the user is able to proceed for checkout. If not, the buttton for checkout page will not be displayed
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
