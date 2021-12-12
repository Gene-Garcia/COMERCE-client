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
        className={`px-2 py-1.5 w-full text-lg bg-transparent shadow rounded 
        border-b-2 
        ${error ? "border-red-500" : "border-gray-300"}
        transition duration-200 ease-linear 
        focus:border-my-accent focus:outline-none`}
      />

      <div className="flex flex-row justify-between">
        <label for="" className="uppercase font-semibold text-gray-400 text-sm">
          Product Name
        </label>

        <span className="text-red-500 font-regular">{error}</span>
      </div>
    </div>
  );
}

function PriceInput({ name, value, error, onChange, placeholder }) {
  return (
    <div className="flex flex-col w-2/5">
      <div className="flex flex-row justify-between">
        <label for="" className="uppercase font-semibold text-gray-400 text-sm">
          PRICE
        </label>

        <span className="text-red-500 font-regular">{error}</span>
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
          focus:border-my-accent focus:outline-none `}
        />
      </div>
    </div>
  );
}

function DataListInput({ name, value, error, onChange, placeholder }) {
  return (
    <div className="flex flex-col w-1/2">
      <div className="flex flex-row justify-between">
        <label className="uppercase font-semibold text-gray-400 text-sm">
          CATEGORY
        </label>

        <span className="text-red-500 font-regular">{error}</span>
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
        focus:border-my-accent focus:outline-none`}
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
      <div className="h-40 bg-my-white-tint rounded flex items-center px-3">
        <span className="font-medium text-base text-gray-500">
          Preview of the image
        </span>
      </div>

      <div className="flex flex-row gap-4">
        <label class="h-16 w-16 flex items-center justify-center cursor-pointer text-gray-800 bg-my-white-tint transition duration-200 ease-linear hover:bg-gray-200 hover:shadow active:text-my-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
          label="Temporary File Input"
          name={name}
          value={value}
          error={error}
          onChange={onChange}
          width="w-full"
          placeholder="Image address"
        />
      </div>
    </div>
  );
}

function DefaultInput({
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
        <label for="" className="uppercase font-semibold text-gray-400 text-sm">
          {label}
        </label>

        <span className="text-red-500 font-regular">{error}</span>
      </div>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-2 py-1.5 text-base shadow rounded 
        border ${error ? "border-red-500" : "border-transparent"}
        transition ease-linear 
        focus:outline-none focus:border-my-accent`}
      />
      <i className="text-sm text-gray-500">{helper}</i>
    </div>
  );
}

function AreaInput({ label, name, value, error, onChange, placeholder }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <label className="uppercase font-semibold text-gray-400 text-sm">
          {label}
        </label>

        <span className="text-red-500 font-regular">{error}</span>
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
        focus:outline-none focus:border-my-accent`}
      ></textarea>
    </div>
  );
}

function SubmitCTA({ onClick }) {
  return (
    <Button
      isLoading={false}
      onClick={onClick}
      buttonClass="bg-my-accent text-white px-14 py-4 font-semibold text-sm uppercase 
      transition duration-200 ease-linear rounded
      hover:ring hover:ring-my-accent hover:ring-opacity-30 
      active:ring-2 active:ring-my-accent active:ring-opacity-70 active:ring-offset-2"
      svgClass="text-white"
    >
      Upload Product
    </Button>
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
