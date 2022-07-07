import React from "react";

// const methods = {
//     CC: "Credit Card",
//     PP: "PayPal",
//     COD: "Cash On Delivery",
//   };

const DesignedPayment = ({ method }) => {
  return (
    <>
      {method === "CC" && <DesignedCreditCard />}
      {method === "PP" && <DesignedPayPal />}
      {method === "COD" && <DesignCOD />}
    </>
  );
};
export default DesignedPayment;

const DesignedCreditCard = () => {
  return (
    <div
      className="inline-flex items-center gap-1.5
                font-semibold text-sm text-green-800
                bg-green-100 px-2.5 py-1.5 rounded-md
                transition duration-200 ease-linear
                ring-2 ring-transparent hover:ring-opacity-80
                hover:ring-green-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-opacity-90 text-green-900"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
      Credit Card
    </div>
  );
};

const DesignedPayPal = () => {
  return (
    <div
      className="inline-flex items-center gap-1.5
                font-semibold text-sm text-blue-800
                bg-blue-100 px-2.5 py-1.5 rounded-md
                transition duration-200 ease-linear
                ring-2 ring-transparent hover:ring-opacity-80
                hover:ring-blue-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-opacity-90 text-green-blue"
        fill="none"
        viewBox="0 0 26 23"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M22 9.761c0 .536-.065 1.084-.169 1.627-.847 4.419-3.746 5.946-7.449 5.946h-.572c-.453 0-.838.334-.908.789l-.803 5.09c-.071.453-.456.787-.908.787h-2.736c-.39 0-.688-.348-.628-.732l1.386-8.88.062-.056h2.155c5.235 0 8.509-2.618 9.473-7.568.812.814 1.097 1.876 1.097 2.997zm-14.216 4.252c.116-.826.459-1.177 1.385-1.179l2.26-.002c4.574 0 7.198-2.09 8.023-6.39.8-4.134-2.102-6.442-6.031-6.442h-7.344c-.517 0-.958.382-1.038.901-2.304 14.835-2.97 18.607-3.038 19.758-.021.362.269.672.635.672h3.989l1.159-7.318z" />
      </svg>
      PayPal
    </div>
  );
};

const DesignCOD = () => {
  return (
    <div
      className="inline-flex items-center gap-1.5
              font-semibold text-sm text-purple-800
              bg-purple-100 px-2.5 py-1.5 rounded-md
              transition duration-200 ease-linear
              ring-2 ring-transparent hover:ring-opacity-80
              hover:ring-purple-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-opacity-90 text-purple-blue"
        fill="none"
        viewBox="0 0 26 23"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
      Cash on Delivery
    </div>
  );
};

export { DesignCOD, DesignedCreditCard, DesignedPayPal };
