import { createContext, useReducer } from "react";
import ShoppingCartReducer from "./ShoppingCartReducer";

const ShoppingCartContext = createContext();
export default ShoppingCartContext;

const initialState = {
  items: [],
  subTotal: 0,
  shippingFee: 75,
  grandTotal: 0,
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
  };

  /* Change an item with productId's checkout field to false */
  const removeFromCheckout = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CHECKOUT",
      payload: productId,
    });

    computePrices();
  };

  /* Computes both sub total and grand total */
  const computePrices = () => {
    dispatch({
      type: "COMPUTE_PRICES",
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        items: state.items,
        subTotal: state.subTotal,
        shippingFee: state.shippingFee,
        grandTotal: state.grandTotal,
        loadCartItems,
        modifyQuantity,
        addToCheckout,
        removeFromCheckout,
        computePrices,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export { ShoppingCartProvider };
