import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../../../../../../../hooks/useCart";
import Title from "../../../../../../../shared/Components/pages/Title";
import useQuery from "../../../../../../../hooks/useQuery";
import axios from "../../../../../../../shared/caller";
import Loading from "../../../../../../../shared/Loading/Loading";
import useAlert from "../../../../../../../hooks/useAlert";
import validateUser from "../../../../../../../shared/Auth/Validation";
import CartCheckout from "../../../../../../../shared/Components/purchase/CartCheckout";
import Container from "../../../../../../../shared/Components/pages/Container";
import { Link } from "react-router-dom";

/*
 * The checkout method is able to receive checkouted product in TWO ways.
 *
 * First way is after the clicking the 'PROCEED TO CHECKOUT' button in the cart page.
 * The data of the checkouted item are the old data used on the ShoppingCart context. The checkout
 * page will still be able to retain and persist those data.
 *
 * Second way is getting the product id on the url which is triggered by clicking the individual
 * 'BUY NOW' button. If the data obtained is from the url, then it will make an API call to get
 * that product. Notably, since we rely on the 'checkout' property, the server will automatically set
 * thet property to true. Then, will be stored again in the ShoppingCart context.
 */
function Checkout({ history }) {
  const { setMessage, setSeverity } = useAlert();
  // Checkout products initially stored in the context, with propert of 'checkout':true
  const { loading, setLoading, items, loadCartItems } = useShoppingCart();
  // URL stored in product id
  const query = useQuery();

  /*
   * This useEffect is to create an API call and verify if there is a user logged in
   * because this checkout can be triggered by a button even there is no user logged in.
   * That is the buy now button in product components
   */
  // useEffect(() => {
  //   validateUser((status) => {
  //     if (status === "SUCCESS") {
  //       // do nothing
  //     } else if (status === "FAILED") history.push("/catalogue");
  //     else if (status === "UNAUTHORIZED") {
  //       setSeverity("error");
  //       setMessage(
  //         "We apologize but you do not have authorization to acces this page. Please login first."
  //       );
  //       history.push("/login");
  //     } else if (status === "FORBIDDEN") history.push("/forbidden");
  //   });
  // }, []);

  // useEffect(() => {
  //   // check if items is empty
  //   // if not empty, then this render was caused by Cart page
  //   // setloading false
  //   // if empty, then it was caused by the buy now button
  //   // create api call
  //   // loadcartitems
  //   // setloading false
  //   // else, history push

  //   async function getProduct(pId) {
  //     await axios
  //       .get(`/api/cart/product/${pId}`)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           console.log(res);
  //           loadCartItems(res.data.product);
  //           setLoading(false);
  //         }
  //       })
  //       .catch((err) => {
  //         if (!err.response) history.push("/login");
  //         else if (err.response.status === 401) history.push("/unauthorized");
  //         else if (err.response.status === 403) history.push("/forbidden");
  //       });
  //   }

  //   if (items && items.length > 0) {
  //     setLoading(false);
  //   } else if (query.get("product")) {
  //     getProduct(query.get("product"));
  //   } else {
  //     console.log("Failed both conditions. Redirect user to some error page");
  //   }
  // }, []);

  return (
    <>
      <Title title="Checkout" />

      <Container>
        <div className="flex flex-row justify-between w-full gap-x-12">
          {/* steps: shipping, payment, and review */}
          <div className="w-3/5 space-y-8">
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

            <div>
              <ShippingDetails />
            </div>
          </div>

          {/* checkout summary */}
          <div className="sticky top-3 w-2/5 place-self-start rounded-lg shadow-lg p-8">
            <CartCheckout />
          </div>
        </div>
      </Container>
    </>
  );
}
export default Checkout;

function CheckoutInput({ label, className, type, name, placeholder }) {
  return (
    <div className={`${className} space-y-1`}>
      <p className="font-medium text-gray-400">{label}</p>

      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows="3"
          className="focus:outline-none w-full rounded-md border border-gray-200 py-2 px-3 font-regular"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="focus:outline-none w-full rounded-md border border-gray-200 py-2 px-3 font-regular"
        />
      )}
    </div>
  );
}

function StepIndicators() {
  return (
    <div className="flex flex-row justify-between shadow-lg rounded-lg py-4 px-5">
      {/* shipping */}
      <div className="flex flex-row items-center gap-x-2">
        <div className="bg-my-accent bg-opacity-90 h-8 w-8 rounded-full text-white text-md font-bold flex items-center justify-center">
          1
        </div>

        <p className="font-semibold text-gray-600">Shipping</p>
      </div>

      {/* payment */}
      <div className="flex flex-row items-center gap-x-2">
        <div className="border border-my-accent bg-opacity-90 h-8 w-8 rounded-full text-my-accent text-md font-bold flex items-center justify-center">
          2
        </div>

        <p className="font-semibold text-gray-600">Payment</p>
      </div>

      {/* review */}
      <div className="flex flex-row items-center gap-x-2">
        <div className="border border-my-accent bg-opacity-90 h-8 w-8 rounded-full text-my-accent text-md font-bold flex items-center justify-center">
          3
        </div>

        <p className="font-semibold text-gray-600">Review</p>
      </div>
    </div>
  );
}

function ShippingDetails() {
  return (
    <div className="rounded-md shadow-md py-4 px-5 flex flex-col gap-y-8">
      <p className="text-lg text-gray-600 font-medium">Shipping Details</p>

      <div className="flex flex-row gap-x-4">
        <CheckoutInput
          label="First Name"
          type="text"
          placeholder="John Doe"
          name="firstName"
          className="w-1/2"
        />
        <CheckoutInput
          label="Last Name"
          type="text"
          placeholder="John Doe"
          name="lastName"
          className="w-1/2"
        />
      </div>

      <CheckoutInput
        label="Cellphone Number"
        type="number"
        placeholder="Cellphone Number"
        name="cellphoneNumber"
        className="w-1/2"
      />

      <CheckoutInput
        label="House/Unit/Flr #, Bldg Name, Blk or Lot #"
        type="text"
        placeholder="Street Address"
        name="address"
        className="w-4/5"
      />

      <div className="flex flex-row gap-x-4">
        <CheckoutInput
          label="Province"
          type="text"
          placeholder="Enter your province"
          name="province"
          className="w-4/6"
        />
        <CheckoutInput
          label="City or Municipality"
          type="text"
          placeholder="Enter your city or municipality"
          name="cityMunicipality"
          className="w-4/6"
        />
      </div>

      <CheckoutInput
        label="Barangay"
        type="text"
        placeholder="Enter your barangay"
        name="barangay"
        className="w-1/2"
      />

      <CheckoutInput
        label="Additional Notes"
        type="textarea"
        placeholder="Enter any notes you want to let the logistic courier to know when they deliver your order"
        name="notes"
        className="w-full"
      />

      {/* CTA of shipping */}
      <div className="flex flex-row gap-x-3">
        <Link className="transition duration-200 bg-my-accent border border-transparent text-white rounded-md text-center text-lg font-semibold px-10 py-3 hover:bg-my-accent-mono">
          Save Address
        </Link>
        <Link
          to="/user/cart"
          className="transition duration-200 border border-transparent text-gray-400 rounded-md text-center text-lg font-semibold px-4 py-3 hover:border-gray-300"
        >
          Cancel Order
        </Link>
      </div>
    </div>
  );
}