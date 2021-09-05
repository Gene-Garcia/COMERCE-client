/*
 * This component is made up of the components used in product cards.
 *
 * The card layouts display uses all of these component.
 *
 */

import React from "react";
import useAlert from "../../../hooks/useAlert";
import { useAddToCart, useGetCartCount } from "../../../hooks/useCart";

function ProductName({ name }) {
  return (
    <h3 className={`text-my-dark font-sans font-semibold text-xl`}>{name}</h3>
  );
}

function ProductPrice({ price, size }) {
  let theme;
  if (size === "large") theme = "text-2xl";
  else if (size === "extralarge") theme = "text-3xl";
  else theme = "text-lg";

  return (
    <h3 className={`text-my-accent font-sans font-semibold ${theme}`}>
      ${price}
    </h3>
  );
}

function ProductRating({ size }) {
  function Star({ color, size }) {
    let theme;
    if (size === "large") theme = "h-6 w-6";
    else if (size === "extralarge") theme = "h-7 w-7";
    else theme = "h-5 w-5";

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${theme} ${color}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    );
  }

  return (
    <div>
      <div className="flex flex-shrink-0">
        <div>
          <Star color="text-my-accent" size={size} />
        </div>
        <div>
          <Star color="text-my-accent" size={size} />
        </div>
        <div>
          <Star color="text-my-accent" size={size} />
        </div>
        <div>
          <Star size={size} />
        </div>
        <div>
          <Star size={size} />
        </div>
      </div>

      <div className="">
        <p className="text-gray-500 text-xs font-medium">401 ratings</p>
      </div>
    </div>
  );
}

function ProductDescription({ desc, fullText }) {
  let truncated;
  if (!fullText && desc)
    truncated = desc.length > 20 ? desc.substring(0, 20) + "..." : desc;
  else truncated = desc;

  return <p className="font-medium text-gray-700 text-md ">{truncated}</p>;
}

/*
 * The product purchase compoment renders the 'add to cart' and 'buy now' button
 *
 * The cart functionality:
 *      The component will use the customer useAddToCart hook and pass
 *      current product id to that hook.
 *      The hook will then return a product-specific/unique add to cart function.
 *      This function, once triggered, will create an API call to store to the user's
 *      cart records the new item
 *
 * The buy functionality:
 *     Redirects user to /checkout/[array of product ids in the format '{id|quantity; id2|5;...}']
 *
 */
function ProductPurchase({ productId, size }) {
  const { setCartCount } = useGetCartCount();

  function success(res) {
    // manually increment by one, because we assume that the add to cart was a success
    setCartCount((p) => p + 1);
    setSeverity("success");
    setMessage("Item added to your cart.");
  }

  function failed(err) {
    setSeverity("error");
    setMessage("Error encountered in adding item to your cart.");
  }

  const { addToCartClick } = useAddToCart(productId, success, failed);
  const { setMessage, setSeverity } = useAlert();

  // this is innefficient because, each product card will now be embedded with an alert component

  let theme;
  if (size === "large") theme = "text-md py-1.5 px-6";
  else if (size === "extralarge") theme = "text-md py-1.5 px-5";
  else theme = "text-sm py-1 px-3";

  return (
    <>
      <div className="flex flex-wrap gap-y-3 gap-x-4">
        <button
          className={`font-medium text-my-contrast bg-my-accent ${theme} rounded-md hover:bg-my-accent-mono`}
        >
          Buy Now
        </button>

        <button
          onClick={addToCartClick}
          className={`group transition inline-flex items-center gap-x-2 font-sans ${theme} rounded-md border border-transparent hover:border hover:border-gray-400`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600 group-hover:text-my-accent"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span className="font-medium text-my-dim">Add to Cart</span>
        </button>
      </div>
    </>
  );
}

export {
  ProductName,
  ProductPrice,
  ProductRating,
  ProductDescription,
  ProductPurchase,
};
