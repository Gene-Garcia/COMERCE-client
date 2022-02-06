import React from "react";
import { useSelector } from "react-redux";
import { prepareUrlForProducts } from "../../Route/urlParser";
import { formatPrice } from "../../utils/price";
import { FormButton } from "../button/ButtonBase";
import CheckoutItem from "./CheckoutItem";

/*
 * The CartCheckout component will hold the current checkouted product which can be
 * done in the cart page. It also happen on clicking the buy now button of a product card.
 *
 * In the cart page, the CartCheckout component is capable if removing a checkouted item through hover then click.
 * However, since this component is also used the Checkout page, the Checkout page disable
 * that feature to setting editable={false}
 *
 * Also if the editable is false, then the component is probably used in the CheckoutPage, hence
 * the button to redirect to the component page is also hidden.
 *
 * The product item container is the CheckoutItem.
 */
function CartCheckout({ editable }) {
  return (
    <>
      <p className="text-lg text-gray-600 font-medium">Checkout Summary</p>

      {/* items */}
      <div className="mt-6 flex flex-col gap-y-3">
        <RenderCheckoutItems />
      </div>

      <>
        <CheckoutPrices />
      </>

      <div className={`${editable ? "flex" : "hidden"} mt-8`}>
        <CheckoutCTAContainer />
      </div>
    </>
  );
}
export default CartCheckout;

/* single responsibility principle */

const RenderCheckoutItems = () => {
  // redux shopping cart reducer and state
  const cartItems = useSelector((state) => state.SHOPPING_CART.cartItems);

  return cartItems.map(
    (item) =>
      item.checkout && (
        <CheckoutItem key={item.productId} data={item} editable={editable} />
      )
  );
};

const CheckoutPrices = () => {
  // redux shopping cart reducer and state
  const subTotal = useSelector((state) => state.SHOPPING_CART.subTotal);
  const grandTotal = useSelector((state) => state.SHOPPING_CART.grandTotal);
  const shippingFee = useSelector((state) => state.SHOPPING_CART.shippingFee);

  return (
    <div>
      <div className="my-7 border-b border-3 border-gray-300"></div>
      <div className="">
        {/* sub total */}
        <div className="flex flex-row justify-between items-center text-base">
          <p className="text-gray-400 font-regular">Sub Total</p>
          <p className="text-gray-500 font-medium">{`₱${formatPrice(
            subTotal
          )}`}</p>
        </div>

        {/* shipping fee */}
        <div className="flex flex-row justify-between items-center text-base">
          <p className="text-gray-400 font-regular">Shipping Fee (?)</p>
          <p className="text-gray-500 font-medium">{`₱${formatPrice(
            shippingFee
          )}`}</p>
        </div>
      </div>
      <div className="my-7 border-b border-3 border-gray-300"></div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="text-lg font-medium text-gray-700">Grand Total</p>
          <p className="text-sm text-gray-400">(including VAT)</p>
        </div>

        <div>
          <p className="text-xl font-medium text-my-accent">
            {`₱${formatPrice(grandTotal)}`}
          </p>
        </div>
      </div>
    </div>
  );
};

const CheckoutCTAContainer = () => {
  // redux shopping cart reducer and state
  const items = useSelector((state) => state.SHOPPING_CART.cartItems);
  const checkoutable = useSelector((state) => state.SHOPPING_CART.checkoutable);

  return checkoutable ? (
    <FormButton
      size="LARGE"
      to={`/checkout?products=${prepareUrlForProducts(items)}`}
      text="Checkout Products"
      textColor="text-white"
      type="LINK"
    />
  ) : (
    <FormButton
      isLoading={true}
      size="LARGE"
      text="No Product(s) Selected"
      textColor="text-white"
      type="LINK"
    />
  );
};
