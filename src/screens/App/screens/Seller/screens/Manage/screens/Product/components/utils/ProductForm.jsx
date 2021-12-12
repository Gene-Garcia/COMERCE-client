import React from "react";
import Button from "../../../../../../../../../../shared/Components/button/Button";

function NameInput() {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        name=""
        className="w-full focus:outline-none text-lg bg-transparent border-b-2 border-gray-300 transition duration-200 ease-linear focus:border-my-accent"
      />
      <label for="" className="uppercase font-semibold text-gray-400 text-sm">
        Product Name
      </label>
    </div>
  );
}

function PriceInput() {
  return (
    <div className="flex flex-col">
      <label for="" className="uppercase font-semibold text-gray-400 text-sm">
        PRICE
      </label>
      <div className="inline-flex gap-2">
        <p className="rounded shadow bg-my-white-tint text-my-accent font-medium text-md px-2 py-1.5 border border-transparent">
          PHP
        </p>
        <input
          type="number"
          className="rounded bg-my-white-tint rounded w-1/4 px-2 py-1.5 shadow focus:outline-none border border-transparent transition ease-linear focus:border-my-accent"
          value="12"
        />
      </div>
    </div>
  );
}

function DataListInput() {
  return (
    <div className="flex flex-col">
      <label className="uppercase font-semibold text-gray-400 text-sm">
        CATEGORY
      </label>
      <input
        type="text"
        list="category-list"
        className="focus:outline-none rounded bg-my-white-tint px-2 py-1.5 text-base w-1/2 shadow border border-transparent transition ease-linear focus:border-my-accent"
      />

      <datalist id="category-list">
        <option key="a">Some Value</option>
      </datalist>
    </div>
  );
}

function GalleryInput() {
  return (
    <div className="space-y-2">
      {/* preview of image */}
      <div className="h-40 bg-my-white-tint rounded flex items-center px-3">
        <span className="font-medium text-base text-gray-500">
          Preview of the image
        </span>
      </div>

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
        />
      </label>
    </div>
  );
}

function DefaultInput({ label, helper, width }) {
  return (
    <div className="flex flex-col">
      <label for="" className="uppercase font-semibold text-gray-400 text-sm">
        {label}
      </label>
      <input
        type="text"
        name=""
        value="asdfasdf"
        className={`${width} px-2 py-1.5 text-base focus:outline-none shadow rounded border border-transparent transition ease-linear focus:border-my-accent`}
      />
      <i className="text-sm text-gray-500">{helper}</i>
    </div>
  );
}

function AreaInput() {
  return (
    <div className="flex flex-col">
      <label className="uppercase font-semibold text-gray-400 text-sm">
        CATEGORY
      </label>
      <textarea
        rows="3"
        className="px-2 py-1.5 text-base focus:outline-none rounded shadow border border-transparent transition ease-linear focus:border-my-accent"
      ></textarea>
    </div>
  );
}

function SubmitCTA() {
  return (
    <Button
      isLoading={false}
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

function Input({ type, name, value, error, placeholder }) {}
