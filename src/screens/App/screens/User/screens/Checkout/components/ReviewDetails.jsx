import React from "react";
import { Link } from "react-router-dom";
import { ReviewCTA } from "./CallToAction";

function ReviewDetails() {
  return (
    <div className="rounded-md shadow-md py-4 px-5 flex flex-col gap-y-8">
      <ReviewBody title="Estimated Delivery Time">
        <p className="font-medium">
          Receive item by
          <span className="text-my-accent"> Month ## - Month ##</span>
        </p>
      </ReviewBody>

      <ReviewBody title="Shipping Address">
        <p>House/Unit/Flr #, Bldg Name, Blk or Lot #</p>
        <p>Barangay, City-Municipality</p>
        <p>Province, Philippines</p>
        <p>Zip Code</p>
      </ReviewBody>

      <ReviewBody title="Payment Details">
        <p className="font-medium mb-2.5">
          Pay order with <span className="text-my-accent"> Payment Method</span>
        </p>
        <span className="bg-gray-100 px-3 py-1.5 rounded-md">
          Credit Card Number or Email
        </span>
      </ReviewBody>

      <ReviewBody title="Summary">
        <div className="flex flex-row justify-between font-medium">
          <p>Subtotal before shipping fee</p>
          <p>P#,###.00</p>
        </div>

        <div className="flex flex-row justify-between font-medium">
          <p>Shipping Fee</p>
          <p>P75.00</p>
        </div>
        <br />
        <div className="flex flex-row justify-between font-medium text-lg">
          <p>Grand Total (Incl. vat)</p>
          <p className="text-my-accent">P##,###.00</p>
        </div>
      </ReviewBody>

      {/* CTA of review */}
      <ReviewCTA submit={() => {}} />
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
