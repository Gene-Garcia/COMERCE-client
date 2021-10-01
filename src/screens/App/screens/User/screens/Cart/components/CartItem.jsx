import React from "react";
import useAlert from "../../../../../../../hooks/useAlert";
import { useShoppingCart } from "../../../../../../../hooks/useCart";
import { formatPrice } from "../../../../../../../shared/utils/price";
import axios from "../../.././../../../../shared/caller";

function CartItem({ data, history }) {
  const { setMessage, setSeverity } = useAlert();
  const { cartId, productId, item, retailPrice, quantity, image } = data;
  const { modifyQuantity, addToCheckout, removeCartItem } = useShoppingCart();

  /* API function to delete this cart */
  async function removeFromCart(cId) {
    axios
      .delete(`/api/cart/remove/${cId}`)
      .then((res) => {
        if (res.status === 200) {
          setSeverity("success");
          setMessage(res.data.message);
          removeCartItem(res.data.removedCart);
        }
      })
      .catch((err) => {
        setSeverity("error");
        if (!err.response) setMessage("Something went wrong. Try again later.");
        else if (err.response.status === 403 || err.response.status === 401) {
          setMessage("You don not have access to this page.");
          history.push("/login");
        }
      });
  }

  return (
    <div className="flex flex-row justify-start gap-x-6">
      {/* image */}
      <div className=" flex-grow-0 rounded-md shadow-lg bg-gray-50">
        <img
          className="object-contain w-56 h-56 p-5"
          alt="cart-item"
          src={image}
        />
      </div>

      {/* info */}
      <div className="flex-grow w-4/5 flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between">
          <p className="font-semibold text-gray-700 text-xl">{item}</p>

          <p className="text-gray-600 font-medium text-lg">
            {`₱${formatPrice(retailPrice)}`}
          </p>
        </div>

        <div>
          <p className="mb-0.5 text-sm text-gray-400">Quantity</p>
          <div className="flex flex-row items-center justify-center rounded-md border w-28 h-8 ">
            <button
              onClick={() => modifyQuantity(false, productId)}
              className="transition w-full h-full flex justify-center items-center group hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 group-hover:text-my-accent"
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

            <div className="w-full h-full flex justify-center items-center text-lg font-bold text-gray-500">
              {quantity}
            </div>

            <button
              onClick={() => modifyQuantity(true, productId)}
              className="w-full h-full flex justify-center items-center group hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 group-hover:text-my-accent"
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

        <div className="inline-flex  flex-wrap gap-x-3 gap-y-2">
          <button
            onClick={() => addToCheckout(true, productId)}
            className="transition border border-my-accent font-medium text-my-accent text-md rounded-md px-3 py-0.5 hover:text-white hover:bg-my-accent"
          >
            Add to Checkout
          </button>
          <button
            onClick={() => removeFromCart(cartId)}
            className="group inline-flex items-center gap-x-1.5 transition border border-transparent rounded-md px-2 py-0.5 font-medium text-gray-500 hover:border-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 group-hover:text-my-accent"
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
            <span>Remove From Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
