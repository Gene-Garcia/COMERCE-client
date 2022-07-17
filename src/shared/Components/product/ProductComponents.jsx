/*
 * This component is made up of the components used in product cards.
 *
 * The card layouts display uses all of these component.
 *
 */

import React, { useState } from "react";
import { batch, useDispatch } from "react-redux";
import { useAddToCart } from "../../../hooks/useCart";
import { setMessage, setSeverity } from "../../../redux/Alert/AlertAction";
import { incrementCartCount } from "../../../redux/ShoppingCart/ShoppingCartAction";
import { formatPrice } from "../../utils/price";
import { ProductButton } from "../button/ButtonBase";

function ProductName({ name }) {
  return (
    <h3 className={`font-sans font-medium text-lg text-gray-700`}>{name}</h3>
  );
}

function ProductPrice({ price, size }) {
  let theme;
  if (size === "large") theme = "text-2xl";
  else if (size === "extralarge") theme = "text-3xl";
  else theme = "text-lg";

  return (
    <h3 className={`text-accent font-semibold text-opacity-80 ${theme}`}>
      {`₱${formatPrice(price)}`}
    </h3>
  );
}

/*
 * 'rating' is an array that contains numbers which are the
 * rating of the product
 *
 * Each star is logically assigned with a range of numbers. If the rating of the product falls within the range
 * of that star, then it will be set as an accented start.
 *
 * from left to right
 * Star 1 is to 1 - 1.99
 * Star 2 is to 1.99 - 2.99
 * Star 3 is to 2.99 - 3.99
 * Star 4 is to 3.99 - 4.99
 * Star 5 is to 4.99 - 5.99
 */
function ProductRating({ size, rating, style }) {
  const Star = ({ color, size }) => {
    let theme;
    if (size === "large") theme = "h-6 w-6";
    else if (size === "extralarge") theme = "h-7 w-7";
    else theme = "h-5 w-5";

    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${theme} ${color}`}
          fill="none"
          viewBox="0 0 25 25"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </div>
    );
  };

  const tempStyle = style ? style.toUpperCase() : "DEFAULT";
  let theme = {
    DEFAULT: {
      rated: "text-accent",
      unrated: "text-gray-500",
    },

    GREYSCALE: {
      rated: "text-gray-500",
      unrated: "text-gray-300",
    },
  };

  let score =
    rating.length > 0
      ? rating.reduce((prev, curr) => prev + curr) / rating.length
      : 0;

  return (
    <div>
      <div className="flex flex-shrink-0">
        <Star
          color={
            score >= 1.99 && score > 0
              ? theme[tempStyle].rated
              : theme[tempStyle].unrated
          }
          size={size}
        />

        <Star
          color={
            score >= 2.99 ? theme[tempStyle].rated : theme[tempStyle].unrated
          }
          size={size}
        />

        <Star
          color={
            score >= 3.99 ? theme[tempStyle].rated : theme[tempStyle].unrated
          }
          size={size}
        />

        <Star
          color={
            score >= 4.99 ? theme[tempStyle].rated : theme[tempStyle].unrated
          }
          size={size}
        />

        <Star
          color={
            score >= 5.99 ? theme[tempStyle].rated : theme[tempStyle].unrated
          }
          size={size}
        />
      </div>

      <div className="">
        <p className="text-gray-500 text-xs font-medium">{`${rating.length} rating(s)`}</p>
      </div>
    </div>
  );
}

function ProductDescription({ desc, fullText }) {
  let truncated;
  if (!fullText && desc)
    truncated = desc.length > 32 ? desc.substring(0, 32).trim() + "..." : desc;
  else truncated = desc;

  return <p className="font-regular font-sans text-gray-900">{truncated}</p>;
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
function ProductPurchase({ productId, size, style = "DEFAULT" }) {
  // redux
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  function success(res) {
    batch(() => {
      // manually increment by one, because we assume that the add to cart was a success
      dispatch(incrementCartCount());

      dispatch(setSeverity("success"));
      dispatch(setMessage("Item added to your cart."));
    });

    setLoading(false);
  }

  function failed(err) {
    batch(() => {
      dispatch(setSeverity("error"));
      dispatch(setMessage("Error encountered in adding item to your cart."));
    });

    setLoading(false);
  }

  const { addToCartClick } = useAddToCart(productId, success, failed);

  let theme;
  if (size === "large") theme = "text-md pt-2 px-6";
  else if (size === "extralarge") theme = "text-md pt-2.5 pb-1 px-5";
  else theme = "text-sm pt-1.5 px-3";

  return (
    <div className="flex flex-wrap gap-2.5">
      <ProductButton
        text="Buy Now"
        hierarchy="primary"
        component="link"
        to={`/checkout?products=${productId}+1`}
        hierarchy="primary"
        textColor="text-white"
        isLoading={false}
        size={style.toUpperCase() === "SHOWCASE" ? "LARGE" : "REGULAR"}
      />

      <ProductButton
        component="button"
        hierarchy="secondary"
        text="Add to Cart"
        textColor="text-gray-600"
        isLoading={loading}
        Icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600 group-hover:text-accent"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        }
        onClick={() => {
          setLoading(true);
          addToCartClick();
        }}
        size={style.toUpperCase() === "SHOWCASE" ? "LARGE" : "REGULAR"}
      />
    </div>
  );
}

export {
  ProductName,
  ProductPrice,
  ProductRating,
  ProductDescription,
  ProductPurchase,
};
