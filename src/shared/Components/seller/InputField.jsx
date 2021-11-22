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

function FileInput({ name, label, helper, onChange }) {
  return (
    <div>
      <label for="name" className="font-medium text-gray-400 text-sm">
        {label}
      </label>

      <label class="flex flex-col items-center rounded-md shadow border border-my-accent px-8 py-2.5 w-max cursor-pointer hover:bg-my-accent hover:text-white text-gray-700 transition duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <span className="text-md">Upload Logo</span>
        <input type="file" className="hidden" onChange={onChange} />
      </label>

      <i className="text-sm text-gray-600">{helper}</i>
    </div>
  );
}
export { FileInput };
