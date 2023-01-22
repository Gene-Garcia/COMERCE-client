import React from "react";
import { Link } from "react-router-dom";
import { FormButton } from "../../../../../../shared/Components/button/ButtonBase";

function ReturnToCart() {
  return (
    <Link
      to="/user/cart"
      className="self-stretch px-5
                flex items-center justify-center
                text-gray-400 rounded font-medium text-sm
                border border-transparent 
                transition duration-200 ease-linear 
                hover:border-gray-300"
    >
      Return to Cart
    </Link>
  );
}

function DesignedBody({ children }) {
  return (
    <div className="flex flex-row gap-x-3 justify-start items-stretch">
      {children}
    </div>
  );
}

function ShippingCTA({ submit }) {
  return (
    <DesignedBody>
      <div>
        <FormButton
          size="REGULAR"
          onClick={submit}
          text="Save Address"
          textColor="text-white"
        />
      </div>

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
      <div>
        <FormButton
          size="REGULAR"
          onClick={submit}
          text={display}
          textColor="text-white"
        />
      </div>
      <ReturnToCart />
    </DesignedBody>
  );
}

function ReviewCTA({ submit, loading }) {
  return (
    <DesignedBody>
      <div>
        <FormButton
          size="REGULAR"
          isLoading={loading}
          text="Place Order"
          textColor="text-white"
          onClick={submit}
        />
      </div>

      <ReturnToCart />
    </DesignedBody>
  );
}

export { ShippingCTA, PaymentCTA, ReviewCTA };
