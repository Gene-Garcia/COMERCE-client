import { createContext, useState } from "react";

/*
 * The CartContext is holds the data to the number of cart items displayed in the
 * navbars.
 *
 * The data is assumed to be based on the API call made by the components which is server
 * request that obtains the exact number of cart items in the user's record
 *
 * To use the state variable of this CartContext, components needs to use
 * the hook useGetCartCount
 */
const CartCountContext = createContext();
export default CartCountContext;

function CartCountProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartCountContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartCountContext.Provider>
  );
}
export { CartCountProvider };
