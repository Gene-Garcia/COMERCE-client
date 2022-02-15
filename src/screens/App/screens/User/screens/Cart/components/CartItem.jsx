import React, { memo, useState } from "react";
import { batch, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../redux/Alert/AlertAction";
import {
  checkoutThisItem,
  computeCheckoutPricing,
  decreaseThisItemQuantity,
  determineCheckoutable,
  increaseThisItemQuantity,
  removeThisItemFromCart,
} from "../../../../../../../redux/ShoppingCart/ShoppingCartAction";
import ButtonBase from "../../../../../../../shared/Components/button/ButtonBase";
import { formatPrice } from "../../../../../../../shared/utils/price";
import axios from "../../.././../../../../shared/caller";

const CartItem = ({
  cartId,
  productId,
  item,
  retailPrice,
  quantity,
  image,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start gap-3 lg:gap-6">
      {/* image */}
      <ProductImageContainer item={item} image={image} />

      {/* info */}
      <div className="flex-grow w-4/5 flex flex-col gap-4 justify-between">
        <ProductInformationContainer item={item} retailPrice={retailPrice} />

        <div className="space-y-6">
          <ProductQuantityModifer quantity={quantity} productId={productId} />

          <CartProductActionButtons cartId={cartId} productId={productId} />
        </div>
      </div>
    </div>
  );
};
export default CartItem;

/* single responsibility principle */

const ProductImageContainer = memo(({ item, image }) => {
  return (
    <div className="flex-grow-0 rounded-lg shadow-sm bg-gray-100">
      <img
        className="object-contain w-32 h-32 sm:w-52 sm:h-52 p-2 mx-auto"
        alt={item}
        src={image}
      />
    </div>
  );
});

const ProductInformationContainer = memo(({ item, retailPrice }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-y-0.5">
      <p className="font-medium text-gray-700 text-xl">{item}</p>

      <p className="text-gray-600 font-medium text-lg">
        {`₱${formatPrice(retailPrice)}`}
      </p>
    </div>
  );
});

const ProductQuantityModifer = memo(({ productId, quantity }) => {
  // redux
  const dispatch = useDispatch();

  // redux
  return (
    <div>
      <p className="mb-0.5 text-sm text-gray-400">Quantity</p>
      <div className="flex flex-row items-center justify-center rounded-md border w-28 h-8 ">
        <button
          onClick={() =>
            batch(() => {
              dispatch(decreaseThisItemQuantity(productId));
              // re-compute prices because checkout items changed
              dispatch(computeCheckoutPricing());
            })
          }
          className="transition w-full h-full flex justify-center items-center group transition duration-150 ease-linear hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600 transition duration-150 ease-linear group-hover:text-my-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        </button>

        <div className="w-full h-full flex justify-center items-center text-lg font-semibold text-gray-500">
          {quantity}
        </div>

        <button
          onClick={() =>
            batch(() => {
              dispatch(increaseThisItemQuantity(productId));
              // re-compute prices because checkout items changed
              dispatch(computeCheckoutPricing());
            })
          }
          className="w-full h-full flex justify-center items-center group transition duration-150 ease-linear hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600 transition duration-150 ease-linear group-hover:text-my-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
});

const CartProductActionButtons = memo(({ cartId, productId }) => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // loading state for the remove from cart button
  const [loading, setLoading] = useState(false);

  /* API function to delete this cart */
  async function removeFromCart(cartId) {
    setLoading(true);

    await axios
      .delete(`/api/cart/remove/${cartId}`)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);

          batch(() => {
            dispatch(setSeverity("success"));
            dispatch(setMessage(res.data.message));

            dispatch(removeThisItemFromCart(res.data.removedCart));
            // re-compute prices because checkout items changed
            dispatch(computeCheckoutPricing());
            // checkoutable re-processed because the user has checkout an item(s)
            dispatch(determineCheckoutable());
          });
        }
      })
      .catch((err) => {
        setLoading(false);

        if (!err.response)
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage("Something went wrong. Try again later."));
          });
        else if (err.response.status === 403) history.push("/forbidden");
        else if (err.response.status === 401) history.push("/unauthorized");
        else
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage(err.response.data.error));
          });
      });
  }

  return (
    <div className="flex flex-row flex-wrap gap-x-3 gap-y-1 ">
      <ButtonBase
        onClick={() =>
          batch(() => {
            dispatch(checkoutThisItem(productId));
            // re-compute prices because checkout items changed
            dispatch(computeCheckoutPricing());
            // checkoutable re-processed because the user has checkout an item(s)
            dispatch(determineCheckoutable());
          })
        }
        text="Add to Checkout"
        rootSpacing="py-1 px-4"
        rootDesign="w-max
                          inline-flex items-center justify-center flex-wrap 
                          rounded
                          transition duration-250 ease-linear"
        rootAnimation="hover:ring-2 hover:ring-my-accent hover:ring-offset-2 hover:ring-opacity-70
                          active:bg-gray-100
                          active:ring-2 active:ring-my-accent active:ring-opacity-40 active:ring-offset-0"
        rootBaseBgColor="border border-my-accent bg-transparent"
        textDesign="font-sans text-sm font-medium tracking-wide leading-none"
        textColor="text-my-accent"
      />

      <ButtonBase
        isLoading={loading}
        onClick={() => removeFromCart(cartId)}
        text="Remove from Cart"
        Icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        }
        rootSpacing="py-1 px-3"
        rootDesign="w-max
                          inline-flex items-center justify-center flex-wrap 
                          rounded
                          transition duration-250 ease-linear"
        rootAnimation="hover:border-gray-400
                          active:border-transparent
                          active:ring-2 active:ring-gray-400 active:ring-opacity-40 active:ring-offset-2`"
        rootBaseBgColor="bg-transparent border border-transparent"
        rootLoadingState="bg-gray-200 cursor-not-allowed"
        textDesign="font-sans text-sm font-medium tracking-wide leading-none"
        textColor="text-gray-500"
      />
    </div>
  );
});

export {
  ProductImageContainer,
  ProductInformationContainer,
  ProductQuantityModifer,
  CartProductActionButtons,
};
