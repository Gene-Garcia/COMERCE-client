// helps in converting the acronym to the full name of the payment method
const methods = {
  CC: "Credit Card",
  PP: "PayPal",
  COD: "Cash On Delivery",
};

/*
 * This utility function basically returns certain information from
 * the data of that payment info. The value will be mostly used for display purposes.
 *
 * For instance, a payment method that is paypal will extract only the paypal email from the data
 */
function displayPaymentInfo(type, data) {
  switch (type) {
    case "COD":
      return "";
    case "PP":
      return data.payPalEmail;
    case "CC":
      return data.cardNumber;
    default:
      return "";
  }
}

export { methods, displayPaymentInfo };
