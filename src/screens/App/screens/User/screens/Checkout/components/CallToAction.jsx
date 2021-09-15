import React from "react";
import { Link } from "react-router-dom";

function ReturnToCart() {
  return (
    <Link
      to="/user/cart"
      className="transition duration-200 border border-transparent text-gray-400 rounded-md text-center text-lg font-semibold px-4 py-3 hover:border-gray-300"
    >
      Return To Cart
    </Link>
  );
}

function DesignedButton({ onClick, name }) {
  return (
    <button
      onClick={onClick}
      className="transition duration-200 bg-my-accent border border-transparent text-white rounded-md text-center text-lg font-semibold px-10 py-3 hover:bg-my-accent-mono"
    >
      {name}
    </button>
  );
}

function DesignedBody({ children }) {
  return <div className="flex flex-row gap-x-3">{children}</div>;
}

function ShippingCTA({ submit }) {
  return (
    <DesignedBody>
      <DesignedButton onClick={submit} name="Save Address" />
      <ReturnToCart />
    </DesignedBody>
  );
}

function PaymentCTA({ submit, type }) {
  let display;
  switch (type) {
    case "COD":
      display = "Pay Cash On Delivery";
      break;
    case "CC":
      display = "Pay with Credit Card";
      break;
    case "PP":
      display = "Pay through PayPal";
      break;
    default:
      throw Error;
  }

  return (
    <DesignedBody>
      <DesignedButton onClick={submit} name={display} />
      <ReturnToCart />
    </DesignedBody>
  );
}

function ReviewCTA({ submit }) {
  return (
    <DesignedBody>
      <DesignedButton onClick={submit} name="Place Order" />
      <ReturnToCart />
    </DesignedBody>
  );
}

export { ShippingCTA, PaymentCTA, ReviewCTA };
