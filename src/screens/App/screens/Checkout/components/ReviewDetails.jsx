import React from "react";
import useAlert from "../../../../../hooks/useAlert";
import { useShoppingCart } from "../../../../../hooks/useCart";
import useCheckout from "../../../../../hooks/useCheckout";
import { formatDate } from "../../../../../shared/utils/date";
import {
  displayPaymentInfo,
  methods,
} from "../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../shared/utils/price";
import { getShipmentETAs } from "../../../../../shared/utils/shipping";
import { ReviewCTA } from "./utils/CallToAction";
import axios from "../../../../../shared/caller";
import { useHistory } from "react-router";

function ReviewDetails() {
  // history
  const history = useHistory();

  // checkout context
  const {
    toggledPayment,

    shippingDetails,
    paymentDetails,
    paymentMethod,

    loading,
    setLoading,
  } = useCheckout();

  // shopping cart context
  const { shippingFee, subTotal, grandTotal, items } = useShoppingCart();

  // alert context
  const { setMessage, setSeverity } = useAlert();

  // helper method to get 5-7 day estimation of delivery date.
  const [early, late] = getShipmentETAs();

  // API request to current checkout
  async function placeOrder() {
    // when we place order place order button will be loading and unclickable
    setLoading(true);

    // data needed: items, shippingDetails, paymentMethod, paymentDetails
    await axios
      .post("/api/order/place", {
        items,
        shippingFee,
        shippingDetails,
        paymentMethod,
        paymentDetails,
      })
      .then((res) => {
        if (res.status === 200) {
          setSeverity("success");
          setMessage(res.data.message);
          // no need to setLoading to false because we will redirect
          history.push("/user/orders");
        }
      })
      .catch((err) => {
        setSeverity("error");
        if (err.response) {
          if (err.response.data === 403) history.push("/login");
          else setMessage(err.response.data.error);
        } else setMessage("Unable to process your order. Try again later");
      });
  }

  return (
    <div className="rounded-md shadow-md py-4 px-5 flex flex-col gap-y-8">
      <ReviewBody title="Estimated Delivery Time">
        <p className="font-medium">
          Receive item by{" "}
          <span className="text-my-accent">
            {`${formatDate(early, 1)} - ${formatDate(late, 1)}`}
          </span>
        </p>
      </ReviewBody>

      <ReviewBody title="Shipping Address">
        <p>{`Ship to ${shippingDetails.firstName} ${shippingDetails.lastName}`}</p>
        <p>{shippingDetails.streetAddress}</p>
        <p>
          {shippingDetails.barangay}, {shippingDetails.cityMunicipality}
        </p>
        <p>{shippingDetails.province}, Philippines</p>
        <p>Zip Code</p>
      </ReviewBody>

      <ReviewBody title="Payment Details">
        <p className="font-medium mb-2.5">
          Pay order with{" "}
          <span className="text-my-accent">{methods[toggledPayment]}</span>
        </p>
        {toggledPayment !== "COD" && (
          <span className="bg-gray-100 px-3 py-1.5 rounded-md">
            {displayPaymentInfo(toggledPayment, paymentDetails)}
          </span>
        )}
      </ReviewBody>

      <ReviewBody title="Summary">
        <div className="flex flex-row justify-between font-medium">
          <p>Subtotal before shipping fee</p>
          <p>{`₱${formatPrice(subTotal)}`}</p>
        </div>

        <div className="flex flex-row justify-between font-medium">
          <p>Shipping Fee</p>
          <p>{`₱${formatPrice(shippingFee)}`}</p>
        </div>
        <br />
        <div className="flex flex-row justify-between font-medium text-lg">
          <p>Grand Total (Incl. vat)</p>
          <p className="text-my-accent">{`₱${formatPrice(grandTotal)}`}</p>
        </div>
      </ReviewBody>

      {/* CTA of review */}
      <ReviewCTA submit={placeOrder} loading={loading} />
    </div>
  );
}
export default ReviewDetails;

function ReviewBody({ title, children }) {
  return (
    <div className="space-y-3">
      <p className="bg-gray-100 rounded-sm px-2 py-1 text-md font-semibold text-gray-500">
        {title}
      </p>

      <div className="px-2 space-y-2">{children}</div>
    </div>
  );
}