import React from "react";

function CheckoutInput({ label, className, type, name, placeholder }) {
  return (
    <div className={`${className} space-y-1`}>
      <p className="font-medium text-gray-400">{label}</p>

      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows="3"
          className="focus:outline-none w-full rounded-md border border-gray-200 py-2 px-3 font-regular"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="focus:outline-none w-full rounded-md border border-gray-200 py-2 px-3 font-regular"
        />
      )}
    </div>
  );
}
export default CheckoutInput;
