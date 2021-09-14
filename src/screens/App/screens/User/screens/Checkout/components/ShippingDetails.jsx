import React from "react";
import { Link } from "react-router-dom";
import CheckoutInput from "./CheckoutInput";

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
export default ShippingDetails;
