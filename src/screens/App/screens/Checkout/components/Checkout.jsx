import React, { useEffect } from "react";
import { useShoppingCart } from "../../../../../hooks/useCart";
import axios from "../../../../../shared/caller";
import Title from "../../../../../shared/Components/pages/Title";
import useQuery from "../../../../../hooks/useQuery";
import useAlert from "../../../../../hooks/useAlert";
import CartCheckout from "../../../../../shared/Components/purchase/CartCheckout";
import Container from "../../../../../shared/Components/pages/Container";
import useCheckout from "../../../../../hooks/useCheckout";
import StepIndicators from "./utils/StepIndicators";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";
import ReviewDetails from "./ReviewDetails";
import { parseUrlForProducts } from "../../../../../shared/Route/urlParser";
import Loading from "../../../../../shared/Loading/Loading";

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
  // alert context
  const { setMessage, setSeverity } = useAlert();

  // shopping cart context is empty
  const {
    loading,
    setLoading,
    loadCartItems,
    addToCheckout,
    resetToDefault: resetCartToDefault,
  } = useShoppingCart();

  // to get URL stored in product id
  const query = useQuery();

  // checkout context, mainly uses the toggled step for this component
  const { toggledStep, resetToDefault: resetCheckoutToDefault } = useCheckout();

  // populate the checkouted products from url value
  useEffect(() => {
    async function getProducts(products) {
      await axios
        .post(`/api/cart/products`, { products })
        .then((res) => {
          if (res.status === 200) {
            loadCartItems(res.data.products);
            addToCheckout(false); //just basically sets all found items into checkout true, also includes computation on prices
            setLoading(false);
          }
        })
        .catch((err) => {
          if (!err.response) history.push("/login");
          else if (err.response.status === 401) history.push("/unauthorized");
          else if (err.response.status === 403) history.push("/forbidden");
        });
    }

    if (!query.get("products")) {
      setSeverity("error");
      setMessage("Invalid URL");
      history.push("/user/cart");
    } else getProducts(parseUrlForProducts(query.get("products")));
  }, []);

  // clean up onWillUnMount both checkout and shopping cart
  useEffect(() => {
    return () => {
      resetCartToDefault();
      resetCheckoutToDefault();
      setLoading(true);
    };
  }, []);

  return (
    <>
      <Title title="Checkout" />

      <Container>
        <div className="flex flex-col lg:flex-row justify-between w-full gap-x-12 gap-y-8">
          {/* steps are: shipping, payment, and review */}
          <div className="w-full lg:w-3/5 space-y-8">
            <div className="flex flex-row items-center gap-x-7">
              <p className="text-lg text-gray-600 font-medium">
                Checkout Details
              </p>

              <p className="flex flex-row items-center gap-x-1 text-gray-400 font-medium ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Your data is protected</span>
              </p>
            </div>

            <div>
              <StepIndicators />
            </div>

            {/* we render all step components and just set them as hidden, even though we can use 
            function that only renders a specific step. We do this so that when we progress to step
            and choose to view finished step, the data there is still present */}
            <div className={toggledStep === "SD" ? "block" : "hidden"}>
              <ShippingDetails />
            </div>

            <div className={toggledStep === "PD" ? "block" : "hidden"}>
              <PaymentDetails />
            </div>

            <div className={toggledStep === "RD" ? "block" : "hidden"}>
              <ReviewDetails />
            </div>
          </div>

          {/* checkout summary */}
          <div className="lg:sticky lg:top-3 w-full lg:w-2/5 place-self-start rounded-lg shadow-lg p-8">
            {loading ? <Loading /> : <CartCheckout editable={false} />}
          </div>
        </div>
      </Container>
    </>
  );
}
export default Checkout;