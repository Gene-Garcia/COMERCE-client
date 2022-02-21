import React, { memo } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  checkoutAllCartItems,
  computeCheckoutPricing,
  determineCheckoutable,
} from "../../../../../../../redux/ShoppingCart/ShoppingCartAction";
import Loading from "../../../../../../../shared/Loading/Loading";
import CartItem from "./CartItem";

function CartItems() {
  // redux
  const dispatch = useDispatch();

  const checkoutAllClick = () =>
    batch(() => {
      dispatch(checkoutAllCartItems());
      // re-compute prices because checkout items changed
      dispatch(computeCheckoutPricing());
      // checkoutable re-processed because the user has checkout an item(s)
      dispatch(determineCheckoutable());
    });

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div>
          <TotalCartItemsContainer />
        </div>

        <div>
          <button
            onClick={checkoutAllClick}
            className="text-sm text-gray-500 font-medium px-3 py-1 rounded-md border border-gray-500 transition duration-200 ease-linear hover:border-gray-400 hover:bg-gray-400 hover:text-white active:ring-4 active:ring-gray-300"
          >
            Checkout All Items
          </button>
        </div>
      </div>

      {/* items */}
      <CartItemsContainer />
    </>
  );
}

export default CartItems;

/* single responsibility principle components */

const TotalCartItemsContainer = () => {
  // redux shopping cart reducer
  const cartItems = useSelector((state) => state.SHOPPING_CART.cartItems);

  return (
    <p className="text-lg text-gray-600 font-medium">
      Cart {cartItems.length} item(s)
    </p>
  );
};

const CartItemsContainer = () => {
  // redux shopping cart reducer
  const loading = useSelector((state) => state.SHOPPING_CART.loading);

  return (
    <div className="py-10 flex flex-col gap-y-10">
      {loading ? <Loading /> : <RenderCartItems />}
    </div>
  );
};

const RenderCartItems = () => {
  // redux shopping cart reducer
  const cartItems = useSelector((state) => state.SHOPPING_CART.cartItems);

  return (
    <>
      {cartItems.map((item, i) => (
        <CartItem key={item.productId} {...item} />
      ))}
    </>
  );
};
