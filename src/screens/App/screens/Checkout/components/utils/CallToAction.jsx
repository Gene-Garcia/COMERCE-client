import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../../../shared/Components/button/Button";

function ReturnToCart() {
  return (
    <Link
      to="/user/cart"
      className="px-5 py-2.5 text-gray-400 rounded text-center font-semibold border border-transparent transition duration-200 ease-linear hover:border-gray-300"
    >
      Return to Cart
    </Link>
  );
}

function DesignedButton({ onClick, name }) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2.5 bg-my-accent rounded shadow text-white text-center font-semibold transition duration-200 ease-linear hover:bg-my-accent-mono active:ring active:ring-my-accent-mono active:ring-opacity-40"
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
      display = "Pay by PayPal";
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

function ReviewCTA({ submit, loading }) {
  return (
    <DesignedBody>
      {/* <DesignedButton onClick={submit} name="Place Order" /> */}
      <Button
        isLoading={loading}
        buttonClass="px-6 py-2.5 bg-my-accent text-white rounded-md text-center font-semibold transition duration-200 ease-linear hover:bg-my-accent-mono active:ring active:ring-my-accent-mono active:ring-opacity-40"
        onClick={submit}
      >
        Place Order
      </Button>
      <ReturnToCart />
    </DesignedBody>
  );
}

export { ShippingCTA, PaymentCTA, ReviewCTA };
