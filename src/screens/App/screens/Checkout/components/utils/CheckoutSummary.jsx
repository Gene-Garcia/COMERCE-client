import React from "react";
import { useSelector } from "react-redux";
import CartCheckout from "../../../../../../shared/Components/purchase/CartCheckout";
import Loading from "../../../../../../shared/Loading/Loading";

const CheckoutSummary = () => {
  // redux shopping cart reducer and states
  const shoppingCartLoading = useSelector((s) => s.SHOPPING_CART.loading);

  return (
    <>{shoppingCartLoading ? <Loading /> : <CartCheckout editable={false} />}</>
  );
};
export default CheckoutSummary;
