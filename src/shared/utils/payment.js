const methods = {
  CC: "Credit Card",
  PP: "PayPal",
  COD: "Cash On Delivery",
};

function displayPaymentInfo(type, data) {
  switch (type) {
    case "COD":
      return "";
    case "PP":
      return data.payPalEmail;
    case "CC":
      return data.cardNumber;
  }
}

export { methods, displayPaymentInfo };
