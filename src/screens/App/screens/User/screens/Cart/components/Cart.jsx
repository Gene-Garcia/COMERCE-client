import React, { useEffect } from "react";
import axios from "../../../../../../../shared/caller";
import { useShoppingCart } from "../../../../../../../hooks/useCart";
import CartCheckout from "../../../../../../../shared/Components/purchase/CartCheckout";
import CartItems from "./CartItems";
import Container from "../../../../../../../shared/Components/pages/Container";
import Title from "../../../../../../../shared/Components/pages/Title";

function Cart({ history }) {
  const { setLoading, loadCartItems, resetToDefault } = useShoppingCart();

  useEffect(() => {
    async function getUserCart() {
      await axios
        .get("/api/cart/user")
        .then((res) => {
          if (res.status === 200) {
            loadCartItems(res.data.cart);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (!err.response) history.push("/login");
          else if (err.response.status === 401) history.push("/unauthorized");
          else if (err.response.status === 403) history.push("/forbidden");
        });
    }
    getUserCart();
  }, []);

  /*
   * useEffect cleanup to reset the shopping cart state variables
   * so that when we reload or go back to the cart or go the checkout
   * there would no dependen state variables.
   *
   */
  useEffect(() => {
    return () => {
      resetToDefault();
    };
  }, []);

  return (
    <>
      <Title title="Shopping Cart" />

      <Container>
        <div className="flex flex-col lg:flex-row justify-between w-full gap-x-12 gap-y-8">
          {/* cart items */}
          <div className="w-full lg:w-3/5 rounded-lg shadow-lg p-8">
            <CartItems />
          </div>

          {/* cart checkout */}
          <div className="lg:sticky lg:top-3 w-full lg:w-2/5 place-self-start rounded-lg shadow-lg p-8">
            <CartCheckout editable={true} />
          </div>
        </div>
      </Container>
    </>
  );
}
export default Cart;
