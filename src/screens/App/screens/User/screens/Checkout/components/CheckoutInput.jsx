import React from "react";

function CheckoutInput({
  className,
  placeholder,
  label,
  type,
  name,
  error,
  value,
  onChange,
}) {
  return (
    <div className={`${className} space-y-1`}>
      <p className="font-medium text-gray-400">{label}</p>
      <p className="text-red-400 text-sm">{error}</p>
      <>
        {type === "textarea" ? (
          <textarea
            name={name}
            placeholder={placeholder}
            rows="3"
            className={`${
              error ? "border-red-300" : "border-gray-200"
            } border transition focus:outline-none w-full rounded-md py-2 px-3 font-regular`}
            onChange={onChange}
            value={value}
          ></textarea>
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`${
              error ? "border-red-300" : "border-gray-200"
            } focus:outline-none w-full rounded-md border border-gray-200 py-2 px-3 font-regular`}
            value={value}
            onChange={onChange}
          />
        )}
      </>
    </div>
  );
}
export default CheckoutInput;
