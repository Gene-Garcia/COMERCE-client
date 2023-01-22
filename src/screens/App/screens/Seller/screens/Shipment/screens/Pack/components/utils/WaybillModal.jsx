import React, {
  createRef,
  forwardRef,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";

import { Dialog, Transition } from "@headlessui/react";
import { useReactToPrint } from "react-to-print";
import { useHistory } from "react-router-dom";

import axios from "../../../../../../../../../../shared/axios";

import { batch, useDispatch, useSelector } from "react-redux";
import {
  filterOrders,
  resetToDefault,
  setWaybills,
  toggleModal,
} from "../../../../../../../../../../redux/Seller/PackOrders/PackOrdersActions";
import {
  setMessage,
  setMessages,
  setSeverity,
} from "../../../../../../../../../../redux/Alert/AlertAction";

import WaybillLayout from "./WaybillLayout";

import Loading from "../../../../../../../../../../shared/Loading/Loading";
import CloseButton from "../../../../../../../../../../shared/Components/button/CloseButton";

/*
 * will overlay a transparent background to the current page
 * issue is that other than the modal, the user cannot click and interact with other components.
 * unlike bootstrap's modal that closes the model when background is clicked
 */

// inside a wrapper so that only be rendered when modal is actually open
function WaybillModal() {
  // redux
  const dispatch = useDispatch();

  const closeModal = () => {
    batch(() => {
      dispatch(setWaybills([]));
      dispatch(toggleModal(false));
    });
  };

  // redux pack orders state
  const isModalOpen = useSelector((state) => state.PACK_ORDERS.isModalOpen);

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full max-w-lg rounded-2xl bg-white p-6 
                          text-left align-middle 
                          shadow-xl transition-all
                          transform overflow-hidden
                          space-y-4"
              >
                <div className="flex items-center justify-between">
                  <Dialog.Title
                    as="h2"
                    className="text-lg font-semibold font-serif leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>

                  <CloseButton onClick={closeModal} />
                </div>

                <Modal />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
export default WaybillModal;

const Modal = () => {
  const history = useHistory();

  //redux
  const dispatch = useDispatch();

  // redux pack orders state
  const waybillIds = useSelector((s) => s.PACK_ORDERS.waybillIds);

  const [waybills, setWaybillsData] = useState(false);

  // API to get all waybills
  useEffect(() => {
    const getWaybills = async () => {
      //#region build order id and product ids
      let orderIdsArr = []; // ["1", "6", "61"]; // 1+6+61
      let productIdsArr = []; // []; //2+1+12-1-2+5+6

      waybillIds.forEach(({ orderId: oId, productIds: pIds }) => {
        orderIdsArr.push(oId);
        productIdsArr.push(pIds.join("+"));
      });

      let orderIds = orderIdsArr.join("+");
      let productIds = productIdsArr.join("-");
      //#endregion

      //#region API
      await axios
        .get(`/api/logistics/waybill/orders/${orderIds}/products/${productIds}`)
        .then((res) => {
          if (res.status === 200) {
            setWaybillsData({
              business: res.data.business,
              orders: res.data.waybillOrders,
            });
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
              dispatch(
                setMessages([
                  {
                    message:
                      "Something went wrong. Please refresh your browser and try again.",
                    severity: "error",
                  },
                ])
              );
              dispatch(toggleModal(false));
              dispatch(setWaybills([]));
            });
          else if (err.response.status === 401) history.push("/unauthorized");
          else if (err.response.status === 403) history.push("/forbidden");
          else
            batch(() => {
              dispatch(
                setMessages([
                  {
                    message: setMessage(err.response.data.error),
                    severity: "error",
                  },
                ])
              );
              dispatch(toggleModal(false));
              dispatch(setWaybills([]));
            });
        });
      //#endregion
    };

    getWaybills();
  }, []);

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

    //#region  API;
    axios
      .patch("/api/logistics/pack", {
        orders,
      })
      .then((res) => {
        if (res.status === 201)
          batch(() => {
            dispatch(toggleModal(false));

            // remove the updated orders
            dispatch(filterOrders(res.data.updatedOrders));

            // dispatch(setSeverity("success"));
            // dispatch(setMessage(res.data.message));
            dispatch(setMessages(res.data.messages));
          });
        else if (res.status === 200)
          batch(() => {
            dispatch(setSeverity("information"));
            dispatch(setMessage(res.data.message));
          });
      })
      .catch((err) => {
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
    //#endregion
  };

  return (
    <>
      <button
        onClick={updateOrderStatusAPI}
        className="text-white font-semibold text-sm
                   flex items-center justify-center gap-1
                   bg-accent/80 rounded p-2
                   transition duration-200 ease-linear
                   hover:bg-accent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
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

      <div
        className="h-[15.5cm] overflow-y-auto mb-3 
                 py-2 rounded bg-neutral-100"
      >
        <RenderWaybillContent waybills={waybills} ref={waybillsRef} />
      </div>
    </>
  );
};

const RenderWaybillContent = forwardRef(({ waybills }, ref) => {
  return waybills ? (
    <div
      ref={ref}
      className="w-full flex flex-col items-center justify-center gap-36"
    >
      {waybills.orders.map((order) => (
        <WaybillLayout
          key={order._id}
          order={order}
          business={waybills.business}
        />
      ))}
    </div>
  ) : (
    <div className="flex w-full h-full justify-center items-center">
      <Loading />
    </div>
  );
});
