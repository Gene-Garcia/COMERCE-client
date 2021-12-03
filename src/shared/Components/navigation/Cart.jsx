/*
 * The cart component is the link going through the user's cart, and
 * displays the current logged in user's number of cart items.
 *
 * The number of cart items is determine through an API call, then the CartContext's cart count
 * state variable will be changed. It then casuses the div in this component
 * that uses that state variable to be re-rendered with the new cart count.
 *
 */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCartCount, useGetCartCount } from "../../../hooks/useCart";

function Cart({ bgType }) {
  const themes = {
    accent: {
      svg: "text-gray-50 group-hover:text-my-accent-shade",
      text: "text-gray-50",
    },
    contrast: {
      svg: "text-gray-500 group-hover:text-my-accent",
      text: "text-gray-600",
    },
  };

  const { cartCount, setCartCount } = useGetCartCount();

  /* Every time this component is rendered, it will always create an API call to set the number of cart items and set it to the CartContext state variable */
  useEffect(() => {
    fetchCartCount((count) => setCartCount(count));
  }, []);

  return (
    <Link
      to="/user/cart"
      className="inline-flex place-self-center self-center items-center group"
    >
      <div className={`${themes[bgType].svg} transition duration-200`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
      </div>
      <div className={`ml-1.5 text-lg ${themes[bgType].text} font-medium`}>
        {cartCount}
      </div>
    </Link>
  );
}

export default Cart;
