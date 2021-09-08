import { createContext, useReducer } from "react";
import ShoppingCartReducer from "./ShoppingCartReducer";

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

  /* Add items from the API call */
  const loadCartItems = (items) => {
    dispatch({
      type: "LOAD_CART_ITEMS",
      payload: items,
    });
  };

  /* Increase or decrease the quantity of the product with the productId */
  const modifyQuantity = (increment, productId) => {
    dispatch({
      type: increment ? "INCREASE_QUANTITY" : "DECREASE_QUANTITY",
      payload: productId,
    });

    computePrices();
  };

  /* Make an individual item or every item as checkout */
  const addToCheckout = (individual, productId) => {
    dispatch({
      type: individual ? "ADD_TO_CHECKOUT" : "ADD_ALL_TO_CHECKOUT",
      payload: productId,
    });

    computePrices();
    determineCheckoutable();
  };

  /* Change an item with productId's checkout field to false */
  const removeFromCheckout = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CHECKOUT",
      payload: productId,
    });

    computePrices();
    determineCheckoutable();
  };

  /* Computes both sub total and grand total */
  const computePrices = () => {
    dispatch({
      type: "COMPUTE_PRICES",
    });
  };

  /* Determines if the has selected atleast one product for checkout */
  const determineCheckoutable = () => {
    dispatch({
      type: "DETERMINE_CHECKOUTABLE",
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        state,
        loadCartItems,
        modifyQuantity,
        addToCheckout,
        removeFromCheckout,
        computePrices,
        determineCheckoutable,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export { ShoppingCartProvider };
