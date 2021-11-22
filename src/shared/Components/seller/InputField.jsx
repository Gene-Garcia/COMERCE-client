import React from "react";

function InputField({
  type,
  label,
  name,
  value,
  error,
  onChange,
  className,
  helper,
  placeholder,
}) {
  const inputTheme = {
    valid: "border-gray-300",
    invalid: "border-red-500",
  };

  return (
    <div className={`${className} flex flex-col gap-1.5`}>
      <div className="inline-flex justify-between">
        <label for={name} className="font-medium text-gray-400 text-sm">
          {label}
        </label>
        <span className="text-red-600 text-sm font-light">{error}</span>
      </div>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border-b-2 ${
          error ? inputTheme.invalid : inputTheme.valid
        } font-regular text-black focus:outline-none transition duration-200 focus:border-my-accent`}
        autoComplete={false}
      />

      <i className="text-sm text-gray-600">{helper}</i>
    </div>
  );
}
export default InputField;
