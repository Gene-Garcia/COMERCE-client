import React, { useEffect } from "react";

import { batch, useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  setMessages,
  setSeverity,
} from "../../../../../redux/Alert/AlertAction";
import { resetToDefault as resetCheckoutToDefault } from "../../../../../redux/Checkout/CheckoutAction";
import {
  checkoutAllCartItems,
  loadCartItems,
  setLoading as setShoppingCartLoading,
  resetToDefault as resetShoppingCartToDefault,
} from "../../../../../redux/ShoppingCart/ShoppingCartAction";

import useQuery from "../../../../../hooks/useQuery";

import axios from "../../../../../shared/axios";

import Title from "../../../../../shared/Components/pages/Title";
import Container from "../../../../../shared/Components/pages/Container";
import StepIndicators from "./utils/StepIndicators";
import CheckoutSummary from "./utils/CheckoutSummary";

import ShippingDetails from "./checkoutPages/ShippingDetails";
import PaymentDetails from "./checkoutPages/PaymentDetails";
import ReviewDetails from "./checkoutPages/ReviewDetails";

import { parseUrlForProducts } from "../../../../../shared/Route/urlParser";

/*
 * The checkout method is able to receive checkouted product through the url parameter.
 *
 * Originally, the plan was to have 2 ways of getting the data. The first one was recycled
 * from the cart page. The second was through the url paramater which is solely triggered by
 * the 'BUY NOW.'
 * However, now, we will persist the URL params to send the data. Because, we will now implement
 * useEffect cleanup on items. Hence, we will also cleanup the stored items.
 * (This cleanup is referring to the cleanup in cart page)
 *
 * format would be products={id}+{quantity}|{id}+{quantity}|{id}+{quantity};
 *
 */
function Checkout({ history }) {
  // redux
  const dispatch = useDispatch();

  // to get URL stored in product id
  const query = useQuery();

  // populate the checkouted products from url value
  useEffect(() => {
    async function getProducts(products) {
      await axios
        .post(`/api/cart/products`, { products })
        .then((res) => {
          if (res.status === 200) {
            batch(() => {
              dispatch(loadCartItems(res.data.products));
              dispatch(checkoutAllCartItems());
              dispatch(setShoppingCartLoading(false));
            });
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
              dispatch(setShoppingCartLoading(false));
              dispatch(
                setMessages([
                  {
                    message: "",
                    severity: "",
                  },
                ])
              );

              dispatch(setSeverity("error"));
              dispatch(setMessage("Something went wrong. Please try again."));
            });
          else if (err.response.status === 403) history.push("/forbidden");
          else if (err.response.status === 401) history.push("/unauthorized");
          else
            batch(() => {
              dispatch(setShoppingCartLoading(false));
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
            });
        });
    }

    // verifies if the url is valid or have the ordered products query
    if (!query.get("products")) {
      batch(() => {
        dispatch(setSeverity("information"));
        dispatch(setMessage("Invalid URL"));
      });

      history.push("/user/cart");
    } else getProducts(parseUrlForProducts(query.get("products")));
  }, []);

  // clean up onWillUnMount both checkout and shopping cart
  useEffect(() => {
    return () =>
      batch(() => {
        dispatch(resetCheckoutToDefault());
        dispatch(resetShoppingCartToDefault());
      });
  }, []);

  return (
    <>
      <Title title="Checkout" />

      <Container>
        <div className="grid grid-cols-12 lg:grid-rows-12 grid-flow-row lg:grid-flow-col gap-4 md:gap-5 xl:gap-8 2xl:gap-12">
          <div className="order-1 col-span-12 lg:col-span-7 xl:col-span-8 lg:row-span-1">
            <StepIndicators />
          </div>
          <div className="order-3 lg:order-2 col-span-12 lg:col-span-7 xl:col-span-8 lg:row-span-11">
            <CheckoutStepsContainer />
          </div>
          <div className="order-2 lg:order-3 col-span-12 lg:col-span-5 xl:col-span-4 lg:row-span-3">
            <CheckoutSummary />
          </div>
        </div>
      </Container>
    </>
  );
}
export default Checkout;

// Single Resp. Prin. - whenever toggledStep changes, only this component re-renders
const CheckoutStepsContainer = () => {
  // redux: checkout reducer
  const toggledStep = useSelector((state) => state.CHECKOUT.toggledStep);

  return (
    <>
      {toggledStep === "SD" && <ShippingDetails />}
      {toggledStep === "PD" && <PaymentDetails />}
      {toggledStep === "RD" && <ReviewDetails />}
    </>
  );
};
