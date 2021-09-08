import React from "react";
import { useShoppingCart } from "../../../../../../../hooks/useCart";
import Title from "../../../../../../../shared/Components/pages/Title";

function Checkout() {
  const { items } = useShoppingCart();

  console.log(items);

  return <Title title="Checkout" />;
}
export default Checkout;
