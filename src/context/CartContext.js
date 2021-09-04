import { createContext, useState } from "react";

const CartContext = createContext();
export default CartContext;

function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
}
export { CartProvider };
