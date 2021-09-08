import { createContext, useReducer } from "react";
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

  /* Pass the dispatch and get the actions */
  const { loadCartItems, modifyQuantity, addToCheckout, removeFromCheckout } =
    actions(dispatch);

  return (
    <ShoppingCartContext.Provider
      value={{
        state,
        loadCartItems,
        modifyQuantity,
        addToCheckout,
        removeFromCheckout,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export { ShoppingCartProvider };
