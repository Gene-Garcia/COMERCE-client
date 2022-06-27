import React, { createRef, forwardRef, useRef } from "react";
import { batch, useDispatch, useSelector } from "react-redux";

import Loading from "../../../../../../../../../../shared/Loading/Loading";
import {
  setWaybills,
  toggleModal,
} from "../../../../../../../../../../redux/Seller/PackOrders/PackOrdersActions";

import { useReactToPrint } from "react-to-print";
import WaybillLayout from "./WaybillLayout";

/*
 * will overlay a transparent background to the current page
 * issue is that other than the modal, the user cannot click and interact with other components.
 * unlike bootstrap's modal that closes the model when background is clicked
 */

function WaybillModal() {
  // redux pack orders state
  const waybills = useSelector((s) => s.PACK_ORDERS.waybills);

  // react-to-print
  const waybillRef = useRef();
  const printWayBill = useReactToPrint({ content: () => waybillRef.current });

  return (
    <div className="fixed z-20 inset-0 overflow-auto bg-gray-500 bg-opacity-30">
      <div className="mx-auto w-max h-screen flex items-center">
        {/* content */}
        <div className="bg-my-white-tint shadow-lg rounded-lg border border-my-accent border-opacity-30">
          <div className="inline-flex justify-between w-full">
            <PrintModal printWayBill={printWayBill} />
            <CloseModal />
          </div>

          <div className="mx-3 mb-3 rounded">
            {waybills ? (
              waybills.orders.map((order) => (
                <WaybillContent
                  key={order._id}
                  order={order}
                  business={waybills.business}
                  ref={waybillRef}
                />
              ))
            ) : (
              <div className="flex w-full h-full justify-center items-center">
                <Loading />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default WaybillModal;

const WaybillContent = forwardRef(({ order, business }, ref) => {
  return (
    <div
      ref={ref}
      className="h-waybill-height w-waybill-width 
                grid grid-cols-3 auto-rows-auto 
                divide-y divide-x divide-gray-400
                border-r border-b border-gray-400 rounded"
    >
      <WaybillLayout order={order} business={business} />
    </div>
  );
});

function CloseModal() {
  // redux
  const dispatch = useDispatch();

  const close = () => {
    batch(() => {
      dispatch(toggleModal(false));
      dispatch(setWaybills(null));
    });
  };

  return (
    <div className=" p-3">
      <button
        onClick={close}
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

const PrintModal = ({ printWayBill }) => {
  // API request to change order status as pick up
  const updateOrderStatusAPI = () => {
    printWayBill();

    // API request
  };

  return (
    <div className=" p-3 ">
      <button
        onClick={updateOrderStatusAPI}
        className="py-1 px-1.5 bg-my-white-tone rounded 
              inline-flex gap-1 items-center 
              text-sm font-semibold text-black
              transition duration-200 ease-linear
              hover:shadow-md hover:bg-gray-200
              active:bg-blue-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-my-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          />
        </svg>
        PRINT
      </button>
    </div>
  );
};
