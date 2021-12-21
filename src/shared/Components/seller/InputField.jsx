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
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border-b-2 ${
          error ? inputTheme.invalid : inputTheme.valid
        } font-regular text-black focus:outline-none transition duration-200 focus:border-my-accent`}
        autoComplete={`new-${name}`}
      />

      <i className="text-sm text-gray-500">{helper}</i>
    </div>
  );
}
export default InputField;

function FileInput({ name, label, helper, onChange, value, error }) {
  const inputTheme = {
    valid: "border-gray-300",
    invalid: "border-red-500",
  };

  return (
    <div>
      <label for="name" className="font-medium text-gray-400 text-sm">
        {label}
      </label>

      <div className="flex flex-row gap-3">
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
          <input
            type="file"
            className="hidden"
            // name={name}
            // onChange={onChange}
          />
        </label>

        <div className="justify-self-start flex flex-col">
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder="Image Address"
            className={`border-b-2 ${
              error ? inputTheme.invalid : inputTheme.valid
            } font-regular text-black focus:outline-none transition duration-200 focus:border-my-accent`}
            autoComplete={`new-${name}`}
          />
          <i className="text-sm text-gray-500">Temporary file upload</i>
        </div>
      </div>

      <i className="text-sm text-gray-500">{helper}</i>
    </div>
  );
}

function DefaultInput({
  type = "text",
  label,
  helper,
  width,
  name,
  value,
  error,
  onChange,
  placeholder,
}) {
  return (
    <div className={`flex flex-col ${width}`}>
      <div className="flex flex-row justify-between">
        <Label label={label} />
        <Error error={error} />
      </div>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-2 py-1.5 text-base shadow rounded 
        border ${error ? "border-red-500" : "border-transparent"}
        transition ease-linear 
        focus:outline-none focus:border-my-accent
        placeholder-gray-300`}
      />
      <i className="text-sm text-gray-500">{helper}</i>
    </div>
  );
}

export { FileInput, DefaultInput };

function Error({ error }) {
  return (
    <span className="text-red-500 font-regular text-sm text-right">
      {error}
    </span>
  );
}

function Label({ label }) {
  return (
    <label className="uppercase font-medium text-gray-500 text-sm">
      {label}
    </label>
  );
}
