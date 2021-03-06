import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  toggleProductModal,
  updateInformationModalProduct,
} from "../../../../../../../../../../../redux/Seller/ManageProduct/ManageProductAction";
import { formatDate } from "../../../../../../../../../../../shared/utils/date";
import { formatPrice } from "../../../../../../../../../../../shared/utils/price";

/*
 * will overlay a transparent background to the current page
 * issue is that other than the modal, the user cannot click and interact with other components.
 * unlike bootstrap's modal that closes the model when background is clicked
 */

function InformationModal() {
  return (
    <div className="fixed z-20 inset-0 overflow-auto bg-gray-500 bg-opacity-30">
      <div className="mx-auto w-max h-screen flex items-center">
        {/* content */}
        <div className="bg-white-tint shadow-lg rounded-md border border-accent border-opacity-30">
          {/* close button */}
          <CloseModal />

          <div className="px-8 pb-8 flex flex-row gap-4">
            <InformationContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default InformationModal;

function CloseModal() {
  // redux
  const dispatch = useDispatch();

  return (
    <div className="flex justify-end p-3 ">
      <button
        onClick={() =>
          batch(() => {
            dispatch(toggleProductModal(false));
            dispatch(updateInformationModalProduct(null));
          })
        }
        className="py-1 px-1.5 bg-white-tone rounded 
  inline-flex gap-1 items-center 
  text-sm font-semibold text-black
  transition duration-200 ease-linear
  hover:shadow-md hover:bg-gray-200
  active:bg-red-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        CLOSE
      </button>
    </div>
  );
}

function Label({ label }) {
  return (
    <label className="uppercase text-gray-300 text-sm font-medium">
      {label}
    </label>
  );
}

function InventoryTable({ inventory }) {
  return (
    <div className="bg-white-tone rounded p-1.5">
      <table className="w-full">
        <thead className="">
          <tr className="text-sm font-medium text-gray-400 text-center">
            <td>Onhand</td>
            <td>Inventory</td>
            <td>Date</td>
          </tr>
        </thead>

        <tbody>
          {inventory.map((e, i) => (
            <tr key={i} className="text-center">
              <td className="text-accent font-medium">{e.onHand}</td>
              <td>{e.quantity}</td>
              <td className="text-sm">{formatDate(e.dateStored)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// single responsibility principle
const InformationContainer = () => {
  // redux manage product reducer & state
  const product = useSelector((state) => state.MANAGE_PRODUCT.product);

  return product ? (
    <>
      <div className="flex-shrink space-y-4">
        <div className="bg-white-tone rounded-l-3xl rounded-t-3xl shadow-md w-52 h-52 overflow-hidden">
          <img
            src={product.imageAddress}
            className="m-auto object-contain w-min h-min"
            alt="product-logo"
          />
        </div>

        <div>
          <Label label="Brand" />
          <p>{product.brand}</p>
        </div>

        <div>
          <Label label="Category" />
          <p>{product.category}</p>
        </div>

        <div>
          <Label label="Keywords" />
          <p>{product.keywords}</p>
        </div>
      </div>

      <div className="flex-grow space-y-6">
        <h2 className="font-semibold text-black text-2xl">{product.item}</h2>

        <div className="inline-flex gap-16">
          <div>
            <Label label="Wholesale Price" />
            <p className="font-medium text-lg text-accent">
              {formatPrice(product.wholesalePrice)}
            </p>
            <i className="text-base text-gray-500">
              Capped at {product.wholesaleCap}
            </i>
          </div>

          <div>
            <Label label="Retail Price" />
            <p className="font-medium text-lg text-accent">
              {formatPrice(product.retailPrice)}
            </p>
          </div>
        </div>

        <div className="w-80">
          <Label label="Description" />
          <p className="leading-relaxed">{product.description}</p>
        </div>

        <div>
          <Label label="Inventory" />
          <p>
            <span className="text-red-600 text-xl font-medium">
              {product._inventory
                .map((inv) => inv.onHand)
                .reduce((prev, curr) => prev + curr, 0)}
            </span>{" "}
            <span className="text-sm">total inventory</span>
          </p>

          <InventoryTable inventory={product._inventory} />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};
