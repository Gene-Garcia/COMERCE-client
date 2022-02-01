/*
 * The cart component is the link going through the user's cart, and
 * displays the current logged in user's number of cart items.
 *
 * The number of cart items is determine through an API call, then the CartCounter
 * redux cart count state variable will be changed. It then
 * casuses the div in this component that uses that state
 * variable to be re-rendered with the new cart count.
 */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCartCount } from "../../../hooks/useCart";
import { updateCartCount } from "../../../redux/ShoppingCart/ShoppingCartAction";

function Cart() {
  // redux
  const dispatch = useDispatch();

  /* Every time this component is rendered, it will always create an API call to set the number of cart items and set it to the CartContext state variable */
  useEffect(() => {
    fetchCartCount((count) => dispatch(updateCartCount(count)));
  }, []);

  return (
    <Link
      to="/user/cart"
      className="rounded-full inline-flex items-center justify-center gap-0.5 h-6 w-11 bg-my-accent text-white transition duration-200 ease-linear hover:ring-4 hover:ring-my-accent hover:ring-opacity-20 active:ring-2 active:ring-offset-2 active:ring-opacity-60"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 transition duration-200 ease-linear"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>

      <>
        <CartCount />
      </>
    </Link>
  );
}

export default Cart;

// single resp. prin.
const CartCount = () => {
  // redux cart counter
  const cartCount = useSelector((state) => state.CART_COUNT);

  return <div className="font-semibold text-sm">{cartCount}</div>;
};
