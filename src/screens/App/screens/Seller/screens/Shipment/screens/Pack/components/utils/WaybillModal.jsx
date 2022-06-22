import React from "react";
import { batch, useDispatch } from "react-redux";
/*
 * will overlay a transparent background to the current page
 * issue is that other than the modal, the user cannot click and interact with other components.
 * unlike bootstrap's modal that closes the model when background is clicked
 */

function WaybillModal() {
  return (
    <div className="fixed z-20 inset-0 overflow-auto bg-gray-500 bg-opacity-30">
      <div className="mx-auto w-max h-screen flex items-center">
        {/* content */}
        <div className="bg-my-white-tint shadow-lg rounded-lg border border-my-accent border-opacity-30">
          {/* close button */}
          <CloseModal />

          <div className="h-waybill-height w-waybill-width bg-gray-200 mx-3 mb-3 rounded">
            <div className="w-full h-full grid grid-cols-3 auto-rows-auto">
              <div className="col-span-2">logo</div>
              <div>Address</div>

              <div className="col-span-2">receiver</div>
              <div className="col-span-2">seller</div>
              <div className="row-span-2">qr</div>

              <div className="col-span-2">goods</div>
              <div># goods</div>

              <div className="col-span-3">payment</div>

              <div>signature</div>
              <div className="col-span-2">address</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WaybillModal;

function CloseModal() {
  // redux
  const dispatch = useDispatch();

  return (
    <div className="flex justify-end p-3 ">
      <button
        // onClick={() =>
        //   batch(() => {
        //     dispatch(toggleProductModal(false));
        //     dispatch(updateInformationModalProduct(null));
        //   })
        // }
        className="py-1 px-1.5 bg-my-white-tone rounded 
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
