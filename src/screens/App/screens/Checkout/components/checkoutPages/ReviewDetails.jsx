import React, { useState } from "react";
import { useHistory } from "react-router";

import { batch, useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../redux/Alert/AlertAction";

import axios from "../../../../../../shared/axios";

import { formatDate } from "../../../../../../shared/utils/date";
import {
  displayPaymentInfo,
  methods,
} from "../../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../../shared/utils/price";
import { getShipmentETAs } from "../../../../../../shared/utils/shipping";

import { ReviewCTA } from "../utils/CallToAction";
import LinedTitle from "../../../../../../shared/Components/purchase/LinedTitle";

function ReviewDetails() {
  // history
  const history = useHistory();

  //#region redux configurations
  // redux
  const dispatch = useDispatch();

  // reduc checkout reducer states
  const toggledPayment = useSelector((s) => s.CHECKOUT.toggledPayment);
  const shippingDetails = useSelector((s) => s.CHECKOUT.shippingDetails);
  const paymentDetails = useSelector((s) => s.CHECKOUT.paymentDetails);
  const paymentMethod = useSelector((s) => s.CHECKOUT.paymentMethod);

  // redux shopping cart reducer and states
  const shippingFee = useSelector((s) => s.SHOPPING_CART.shippingFee);
  const subTotal = useSelector((s) => s.SHOPPING_CART.subTotal);
  const grandTotal = useSelector((s) => s.SHOPPING_CART.grandTotal);
  const cartItems = useSelector((s) => s.SHOPPING_CART.cartItems);
  //#endregion

  // helper method to get 5-7 day estimation of delivery date.
  const [early, late] = getShipmentETAs();

  // loading state
  const [loading, setLoading] = useState(false);

  //#region API request to current checkout
  async function placeOrder() {
    // when we place order place order button will be loading and unclickable
    setLoading(true);

    // data needed: items, shippingDetails, paymentMethod, paymentDetails
    await axios
      .post("/api/order/place", {
        items: cartItems,
        shippingFee,
        shippingDetails,
        paymentMethod,
        paymentDetails,
      })
      .then((res) => {
        if (res.status === 200) {
          batch(() => {
            dispatch(setSeverity("success"));
            dispatch(setMessage(res.data.message));
          });

          // no need to setLoading to false because we will redirect
          history.push("/user/orders");
        }
      })
      .catch((err) => {
        setLoading(false);

        if (!err.response)
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(
              setMessage("Unable to process your order. Try again later")
            );
          });
        else if (err.response.data.status === 403) history.push("/forbidden");
        else if (err.response.data.status === 401) history.push("/unathorized");
        else
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage(err.response.data.error));
          });
      });
  }
  //#endregion

  return (
    <div className="rounded-md shadow p-6 grid grid-cols-2 gap-6 md:gap-8">
      <div className="col-span-2">
        <LinedTitle title="Review Checkout" />
      </div>

      <ReviewBody className="col-span-2" title="Estimated Delivery Time">
        <p className="font-medium">
          Receive item by{" "}
          <span className="text-accent">
            {`${formatDate(early, 1)} - ${formatDate(late, 1)}`}
          </span>
        </p>
      </ReviewBody>

      <ReviewBody className="col-span-2 sm:col-span-1" title="Shipping Address">
        <p>{`Ship to ${shippingDetails.firstName} ${shippingDetails.lastName}`}</p>
        <p>{shippingDetails.streetAddress}</p>
        <p>
          {shippingDetails.barangay}, {shippingDetails.cityMunicipality}
        </p>
        <p>{shippingDetails.province}, Philippines</p>
        <p>Zip Code</p>
      </ReviewBody>

      <ReviewBody className="col-span-2 sm:col-span-1" title="Payment Details">
        <p className="font-medium mb-2.5">
          Pay order with{" "}
          <span className="text-accent">{methods[toggledPayment]}</span>
        </p>
        {toggledPayment !== "COD" && (
          <span className="bg-gray-100 px-3 py-1.5 rounded-md">
            {displayPaymentInfo(toggledPayment, paymentDetails)}
          </span>
        )}
      </ReviewBody>

      <ReviewBody className="col-span-2" title="Summary">
        <div className="flex flex-row justify-between font-medium">
          <p className="text-gray-500">Subtotal before shipping fee</p>
          <p>{`₱${formatPrice(subTotal)}`}</p>
        </div>

        <div className="flex flex-row justify-between font-medium">
          <p className="text-gray-500">Shipping Fee</p>
          <p>{`₱${formatPrice(shippingFee)}`}</p>
        </div>
        <br />
        <div className="flex flex-row justify-between font-medium text-lg">
          <p>Grand Total (Incl. vat)</p>
          <p className="text-accent">{`₱${formatPrice(grandTotal)}`}</p>
        </div>
      </ReviewBody>

      <div className="col-span-2">
        {/* CTA of review */}
        <ReviewCTA submit={placeOrder} loading={loading} />
      </div>
    </div>
  );
}
export default ReviewDetails;

function ReviewBody({ title, children, className }) {
  return (
    <div className={`space-y-2.5 ${className}`}>
      <p
        className="bg-neutral-100 rounded-sm px-2 py-1 
            text-md font-semibold text-neutral-500"
      >
        {title}
      </p>

      <div className="px-2 space-y-2">{children}</div>
    </div>
  );
}
