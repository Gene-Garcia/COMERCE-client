import React, { createRef, forwardRef, useRef } from "react";
import { batch, useDispatch, useSelector } from "react-redux";

import Loading from "../../../../../../../../../../shared/Loading/Loading";
import {
  filterOrders,
  setWaybills,
  toggleModal,
} from "../../../../../../../../../../redux/Seller/PackOrders/PackOrdersActions";

import { useReactToPrint } from "react-to-print";
import WaybillLayout from "./WaybillLayout";
import axios from "../../../../../../../../../../shared/caller";
import { useHistory } from "react-router-dom";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../../redux/Alert/AlertAction";

/*
 * will overlay a transparent background to the current page
 * issue is that other than the modal, the user cannot click and interact with other components.
 * unlike bootstrap's modal that closes the model when background is clicked
 */

function WaybillModal() {
  const history = useHistory();

  //redux
  const dispatch = useDispatch();

  // redux pack orders state
  const waybills = useSelector((s) => s.PACK_ORDERS.waybills);

  // react-to-print
  const waybillsRef = useRef();
  const printWayBill = useReactToPrint({ content: () => waybillsRef.current });

  // API request to change order status as pick up
  const updateOrderStatusAPI = async () => {
    printWayBill();

    // build data, do not concatenate with + and - because this is PATCH request and we can send a structured body
    const orders = waybills.orders.map((order) => ({
      orderId: order._id,
      // all of the sent orderedProducts are from the seller already, no need for further filter
      productIds: order.orderedProducts.map((product) => product._product._id),
    }));

    // API;
    axios
      .patch("/api/logistics/orders/pack", {
        orders,
      })
      .then((res) => {
        if (res.status === 201)
          batch(() => {
            dispatch(toggleModal(false));

            // remove the updated orders
            dispatch(filterOrders(res.data.updatedOrders));

            dispatch(setSeverity("success"));
            dispatch(setMessage(res.data.message));
          });
        else if (res.status === 200)
          batch(() => {
            dispatch(setSeverity("information"));
            dispatch(setMessage(res.data.message));
          });
      })
      .catch((err) => {
        console.log(err);
        if (!err.response)
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(
              setMessage(
                "Something went wrong. Please refresh your browser and try again."
              )
            );
          });
        else if (err.response.status === 401) history.push("/unauthorized");
        else if (err.response.status === 403) history.push("/forbidden");
        else
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage(err.response.data.error));
          });
      });
  };

  return (
    <div className="fixed z-20 inset-0 overflow-auto bg-gray-500 bg-opacity-30">
      <div className="mx-auto w-max h-screen flex items-center">
        {/* content */}
        <div className="bg-white-tint shadow-lg rounded-lg border border-accent border-opacity-30">
          <div className="inline-flex justify-between w-full">
            <PrintModal printWayBill={updateOrderStatusAPI} />
            <CloseModal />
          </div>

          <div className="h-[15cm] overflow-y-auto mx-3 mb-3 rounded">
            {waybills ? (
              <RenderWaybillContent waybills={waybills} ref={waybillsRef} />
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

const RenderWaybillContent = forwardRef(({ waybills }, ref) => {
  return (
    <div ref={ref} className="space-y-36">
      {waybills.orders.map((order) => (
        <WaybillContent
          key={order._id}
          order={order}
          business={waybills.business}
        />
      ))}{" "}
    </div>
  );
});

const WaybillContent = ({ order, business }) => {
  return (
    <div
      className="h-[15cm] w-[10cm] 
                grid grid-cols-3 auto-rows-auto 
                divide-y divide-x divide-gray-400
                border-r border-b border-gray-400 rounded"
    >
      <WaybillLayout order={order} business={business} />
    </div>
  );
};

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

const PrintModal = ({ printWayBill }) => {
  return (
    <div className=" p-3 ">
      <button
        onClick={printWayBill}
        className="py-1 px-1.5 bg-white-tone rounded 
              inline-flex gap-1 items-center 
              text-sm font-semibold text-black
              transition duration-200 ease-linear
              hover:shadow-md hover:bg-gray-200
              active:bg-blue-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-accent"
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
