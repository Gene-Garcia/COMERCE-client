import React, { useEffect, useState } from "react";
import Container from "../../../../../../../shared/Components/pages/Container";
import Title from "../../../../../../../shared/Components/pages/Title";
import axios from "../../../../../../../shared/caller";
import validateUser from "../../../../../../../shared/Auth/Validation";
import Loading from "../../../../../../../shared/Loading/Loading";
import CartCheckout from "./CartCheckout";
import CartItems from "./CartItems";

function Cart({ history }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if unauthorized, redirect to login with error message
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

  // dynamic add to checkout, both for individual product or every product
  function addToCheckout(individual, productId) {
    setItems((prev) =>
      prev.map((e) => {
        if (individual)
          return e.productId === productId ? { ...e, checkout: true } : e;
        else return { ...e, checkout: true };
      })
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

  // computes sub total including the quantity checkedout
  function computeSubTotal() {
    // prices = retailPrice * quantity
    const prices = items.map((e) =>
      e.checkout ? e.retailPrice * e.quantity : 0
    );

    return prices.length > 0 ? prices.reduce((a, c) => a + c) : 0.0;
  }

  // computes sub total with added shipping fee
  function computeGrandTotal() {
    const shippingFee = 75;

    return computeSubTotal() + shippingFee;
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
            <CartItems
              items={items}
              changeQuantity={changeQuantity}
              addToCheckout={addToCheckout}
            />
          </div>

          {/* cart checkout */}
          <div className="sticky top-3 w-2/5 place-self-start rounded-lg shadow-lg p-8">
            <CartCheckout
              items={items}
              removeFromCheckout={removeFromCheckout}
              computeSubTotal={computeSubTotal}
              computeGrandTotal={computeGrandTotal}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
export default Cart;
