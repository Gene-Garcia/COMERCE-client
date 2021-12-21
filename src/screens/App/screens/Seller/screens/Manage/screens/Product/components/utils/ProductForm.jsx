import React from "react";
import Button from "../../../../../../../../../../shared/Components/button/Button";

function NameInput({ name, value, error, onChange, placeholder }) {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-2 py-1.5 w-full text-lg bg-transparent rounded-t-md
        border-b-2
        ${error ? "border-red-500" : "border-gray-300"}
        transition duration-200 ease-linear 
        focus:shadow-md focus:border-my-accent focus:outline-none
        placeholder-gray-300`}
      />

      <div className="flex flex-row justify-between">
        <Label label="Product Name" />

        <Error error={error} />
      </div>
    </div>
  );
}

function PriceInput({
  label,
  name,
  value,
  error,
  onChange,
  placeholder,
  width,
}) {
  return (
    <div className={`flex flex-col ${width}`}>
      <div className="flex flex-row justify-between">
        <Label label={label} />
        <Error error={error} />
      </div>

      <div className="inline-flex gap-2">
        <p className="rounded shadow bg-my-white-tint text-my-accent font-semibold text-md px-2 py-1.5 border border-transparent">
          PHP
        </p>
        <input
          type="number"
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className={`rounded bg-my-white-tint rounded w-full px-2 py-1.5 shadow 
          border ${error ? "border-red-500" : "border-transparent"}
          transition ease-linear 
          focus:border-my-accent focus:outline-none
          placeholder-gray-300`}
        />
      </div>
    </div>
  );
}

function DataListInput({ name, value, error, onChange, placeholder, width }) {
  return (
    <div className={`flex flex-col ${width}`}>
      <div className="flex flex-row justify-between">
        <Label label="Category" />
        <Error error={error} />
      </div>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        list="category-list"
        className={`rounded bg-my-white-tint px-2 py-1.5 text-base shadow 
        border ${error ? "border-red-500" : "border-transparent"}
        transition ease-linear 
        focus:border-my-accent focus:outline-none
        placeholder-gray-300`}
      />

      <datalist id="category-list">
        <option key="a">Some Value</option>
      </datalist>
    </div>
  );
}

function GalleryInput({ name, value, error, onChange }) {
  return (
    <div className="space-y-2">
      {/* preview of image */}
      <div className="h-28 lg:h-36 xl:h-40 bg-my-white-tint rounded flex items-center px-3">
        <span className="font-medium text-base text-gray-500">
          Preview of the image
        </span>
      </div>

      <div className="flex flex-col xs:flex-row gap-4">
        <label className="h-14 lg:h-16 w-14 lg:w-16 flex items-center justify-center cursor-pointer text-gray-800 bg-my-white-tint transition duration-200 ease-linear hover:bg-gray-200 hover:shadow active:text-my-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 lg:h-8 w-7 lg:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>

          <input
            type="file"
            className="hidden"
            accept="image"
            // name={name}
            // onChange={onChange}
            // value={value}
          />
        </label>

        <DefaultInput
          label="Temporary"
          name={name}
          value={value}
          error={error}
          onChange={onChange}
          width="flex-grow"
          placeholder="Image address"
        />
      </div>
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

function AreaInput({ label, name, value, error, onChange, placeholder }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <Label label={label} />
        <Error error={error} />
      </div>

      <textarea
        rows="3"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-2 py-1.5 text-base rounded shadow 
        border ${error ? "border-red-500" : "border-transparent"}
        transition ease-linear 
        focus:outline-none focus:border-my-accent
        placeholder-gray-300`}
      ></textarea>
    </div>
  );
}

function SubmitCTA({ isLoading, onClick }) {
  return (
    <Button
      isLoading={isLoading}
      onClick={onClick}
      buttonClass="bg-my-accent text-white px-8 sm:px-10 md:px-12 py-3 font-semibold text-sm uppercase 
      transition duration-200 ease-linear rounded
      hover:ring-2 hover:ring-my-accent hover:ring-opacity-70 hover:ring-offset-2
      active:ring active:ring-my-accent active:ring-opacity-30 "
      svgClass="text-white"
    >
      Upload Product
    </Button>
  );
}

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

export {
  PriceInput,
  NameInput,
  GalleryInput,
  DefaultInput,
  DataListInput,
  AreaInput,
  SubmitCTA,
};
