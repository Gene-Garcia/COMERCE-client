import React from "react";
import { Link } from "react-router-dom";
import { FormButton } from "../../../../../../shared/Components/button/ButtonBase";

function ReturnToCart() {
  return (
    <Link
      to="/user/cart"
      className="px-5 text-gray-400 rounded text-center font-semibold border border-transparent transition duration-200 ease-linear hover:border-gray-300"
    >
      Return to Cart
    </Link>
  );
}

function DesignedButton({ onClick, name }) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2.5 bg-accent rounded shadow 
      text-white text-center font-semibold 
      transition duration-200 ease-linear 
      hover:bg-accent-mo     no 
      active:ring active:ring-accent-mono active:ring-opacity-40"
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
      <FormButton
        size="MEDIUM"
        onClick={submit}
        text="Save Address"
        textColor="text-white"
      />
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
      <FormButton
        size="MEDIUM"
        onClick={submit}
        text={display}
        textColor="text-white"
      />
      <ReturnToCart />
    </DesignedBody>
  );
}

function ReviewCTA({ submit, loading }) {
  return (
    <DesignedBody>
      {/* <DesignedButton onClick={submit} name="Place Order" /> */}
      <FormButton
        size="MEDIUM"
        isLoading={loading}
        text="Place Order"
        textColor="text-white"
        onClick={submit}
      />

      <ReturnToCart />
    </DesignedBody>
  );
}

export { ShippingCTA, PaymentCTA, ReviewCTA };
