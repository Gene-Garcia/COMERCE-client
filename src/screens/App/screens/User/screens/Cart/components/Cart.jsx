import React, { useEffect, useState } from "react";
import Container from "../../../../../../../shared/Components/pages/Container";
import Title from "../../../../../../../shared/Components/pages/Title";
import axios from "../../../../../../../shared/caller";
import validateUser from "../../../../../../../shared/Auth/Validation";
import Loading from "../../../../../../../shared/Loading/Loading";

function Cart({ history }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    validateUser((status) => {
      if (status === "SUCCESS") setLoading(false);
      else if (status === "FAILED") history.push("/login");
      else if (status === "UNAUTHORIZED") history.push("/unauthorized");
      else if (status === "FORBIDDEN") history.push("/forbidden");
    });

    async function getUserCart() {
      await axios
        .get("/api/cart/user")
        .then((res) => {
          if (res.status === 200) setItems(res.data.cart);
        })
        .catch((err) => console.log(err));
    }

    getUserCart();
  }, []);

  const [items, setItems] = useState([]);

  // change quantity
  function changeQuantity(currentQty, increment, productId) {
    if (!(!increment && currentQty - 1 <= 0))
      setItems((prev) =>
        prev.map((e) =>
          e.productId === productId
            ? increment
              ? { ...e, quantity: ++e.quantity }
              : { ...e, quantity: --e.quantity }
            : e
        )
      );
  }

  // add all to checkout
  function addAllToCheckout() {
    setItems((prev) => prev.map((e) => ({ ...e, checkout: true })));
  }

  // add to checkout
  function addToCheckout(productId) {
    setItems((prev) =>
      prev.map((e) =>
        e.productId === productId ? { ...e, checkout: true } : e
      )
    );
  }

  // remove from checkout
  function removeFromCheckout(productId) {
    setItems((prev) =>
      prev.map((e) =>
        e.productId === productId ? { ...e, checkout: false } : e
      )
    );
  }

  return loading ? (
    <Loading />
  ) : (
    <>
      <Title title="Shopping Cart" />

      <Container>
        <div className="flex flex-row justify-between w-full gap-x-12">
          {/* cart items */}
          <div className="w-3/5 rounded-lg shadow-lg p-8">
            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="text-lg text-gray-600 font-medium">
                  Cart (5) items
                </p>
              </div>

              <div>
                <button
                  onClick={addAllToCheckout}
                  className="transition duration-300 text-sm text-gray-500 font-medium px-3 py-1 rounded-md border border-gray-500 hover:border-gray-400 hover:bg-gray-400 hover:text-white active:ring-4 active:ring-gray-300"
                >
                  Checkout All Items
                </button>
              </div>
            </div>

            {/* items */}
            <div className="mt-14 flex flex-col gap-y-10">
              {items.map((e) => (
                <CartItem
                  key={e.productId}
                  data={e}
                  changeQuantity={changeQuantity}
                  addToCheckout={addToCheckout}
                />
              ))}
            </div>
          </div>

          {/* cart checkout */}
          <div className="sticky top-3 w-2/5 place-self-start rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 font-medium">
              Checkout Summary
            </p>

            {/* items */}
            <div className="mt-6 flex flex-col gap-y-3">
              {items.map(
                (e) =>
                  e.checkout && (
                    <CheckoutItem
                      key={e.productId}
                      data={e}
                      removeFromCheckout={removeFromCheckout}
                    />
                  )
              )}
            </div>

            <div className="my-7 border-b border-3 border-gray-300"></div>
            <div className="">
              {/* sub total */}
              <div className="flex flex-row justify-between items-center font-medium text-gray-400 text-base">
                <p className="">Sub Total</p>
                <p className="">P2,729,998.05</p>
              </div>

              {/* shipping fee */}
              <div className="flex flex-row justify-between items-center font-medium text-gray-400 text-base">
                <p className="">Shipping Fee (?)</p>
                <p className="">P78.06</p>
              </div>
            </div>
            <div className="my-7 border-b border-3 border-gray-300"></div>
            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="text-lg font-medium text-gray-700">Grand Total</p>
                <p>(including VAT)</p>
              </div>

              <div>
                <p className="text-xl font-medium text-my-accent">
                  P2,70,076.10
                </p>
              </div>
            </div>
            <div className="mt-8">
              {/* Checkout Button */}
              <button className="transition duration-300 w-full bg-my-accent text-white font-medium text-xl rounded-md py-3 hover:bg-my-accent-mono active:ring-8 active:ring-my-accent-mono active:ring-opacity-20">
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Cart;

function CheckoutItem({
  data: { productId, item, retailPrice, quantity, image },
  removeFromCheckout,
}) {
  return (
    <div className="relative group">
      <div className="absolute z-20 w-full transition duration-300 bg-gradient-to-b from-gray-200 to-gray-100 rounded-md opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50">
        <button
          onClick={() => removeFromCheckout(productId)}
          className="w-full h-12  font-medium text-base text-my-accent"
        >
          Remove from checkout
        </button>
      </div>

      <div className="w-full top-0 z-10 transition duration-300 ">
        <div className="flex flex-row items-center gap-x-2">
          <div className="transition duration-300 shadow-md group-hover:shadow-none rounded-md bg-gray-100 flex-shrink-0">
            <img
              className="object-contain w-12 h-12 p-1"
              alt="for-checkout-item"
              src={image}
            />
          </div>

          <div className="flex-grow flex-shrink -space-y-2">
            <p className="text-md font-medium text-gray-600">{item}</p>
            <p className="text-gray-500 text-base">x{quantity}</p>
          </div>

          <div className="justify-self-end">
            <p className="text-gray-700 font-semibold text-lg">
              P{retailPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartItem({
  data: { productId, item, retailPrice, quantity, image },
  changeQuantity,
  addToCheckout,
}) {
  return (
    <div className="flex flex-row justify-start gap-x-6">
      {/* image */}
      <div className=" flex-grow-0 rounded-md shadow-md bg-gray-100">
        <img
          className="object-contain w-56 h-56 p-5"
          alt="cart-item"
          src={image}
        />
      </div>

      {/* info */}
      <div className="flex-grow w-4/5 flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between">
          <p className="font-semibold text-my-black text-xl">{item}</p>

          <p className="text-gray-500 font-medium text-lg">P{retailPrice}</p>
        </div>

        <div>
          <p className="mb-0.5 text-sm text-gray-400">Quantity</p>
          <div className="flex flex-row items-center justify-center rounded-md border w-28 h-8 ">
            <button
              onClick={() => changeQuantity(quantity, false, productId)}
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
              onClick={() => changeQuantity(quantity, true, productId)}
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
            onClick={() => addToCheckout(productId)}
            className="transition border border-my-accent font-medium text-my-accent text-md rounded-md px-3 py-0.5 hover:text-white hover:bg-my-accent"
          >
            Add to Checkout
          </button>
          <button className="group inline-flex items-center gap-x-1.5 transition border border-transparent rounded-md px-2 py-0.5 font-medium text-gray-500 hover:border-gray-500">
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
