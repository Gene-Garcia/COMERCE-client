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
    <div className={`${className} space-y-1 `}>
      <div className="flex flex-row justify-between flex-wrap">
        <label className="font-semibold text-sm text-gray-400 uppercase mb-0">
          {label}
        </label>
        <label className="text-red-400 text-sm">{error}</label>
      </div>

      <>
        {type === "textarea" ? (
          <textarea
            name={name}
            placeholder={placeholder}
            rows="3"
            className={`transition duration-200 ease-linear ${
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
            className={`text-black transition duration-200 ease-linear ${
              error ? "border-red-300" : "border-gray-200"
            } focus:outline-none w-full rounded-md border border-gray-200 py-1.5 px-3 font-regular`}
            value={value}
            onChange={onChange}
          />
        )}
      </>
    </div>
  );
}
export default CheckoutInput;
