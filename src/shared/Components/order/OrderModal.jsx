import React, { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOrderModal } from "../../../redux/OrderModal/OrderModalAction";
import { formatPrice } from "../../utils/price";
import CloseButton from "../button/CloseButton";
import DesignedPayment from "../payment/DesignedPayment";
import { OrderField, SummaryField } from "./OrderFields";
import OrderProductItem from "./OrderProductItem";

/*
 * A component that will make the API request and
 * display the order and ordered product information.
 * However, only ordered products from the current seller will be shown
 */

const OrderModal = () => {
  // redux
  const dispatch = useDispatch();

  // order modal redux states
  const isOpen = useSelector((state) => state.ORDER_MODAL.isOpen);

  function closeModal() {
    dispatch(toggleOrderModal(false));
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
                  className="w-full max-w-2xl rounded-2xl bg-white p-6 
                            transform overflow-hidden 
                            text-left align-middle shadow-xl transition-all
                            space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <Dialog.Title
                      as="h2"
                      className="text-xl font-semibold leading-6 text-gray-900 font-serif"
                    >
                      Order Details
                    </Dialog.Title>

                    <CloseButton onClick={closeModal} />
                  </div>

                  <div className="flex gap-6 overflow-x-auto py-2">
                    <OrderProductItem />
                    <OrderProductItem />
                    <OrderProductItem />
                    <OrderProductItem />
                    <OrderProductItem />
                    <OrderProductItem />
                    <OrderProductItem />
                    <OrderProductItem />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-1 flex flex-wrap gap-y-4 gap-x-5">
                      <OrderField label="Customer Name" value="John Doe" />
                      <OrderField label="Contact" value="9053660668" />

                      <OrderField label="Barangay" value="a" />
                      <OrderField label="City/Municipality" value="a" />
                      <OrderField label="Province" value="a" />

                      <OrderField
                        label="Customer Notes"
                        value="a"
                        width="w-full"
                      />
                    </div>

                    <div className="col-span-1 space-y-4">
                      <OrderField
                        label="Payment Method"
                        value={<DesignedPayment method="COD" />}
                      />

                      {/* Order summary */}
                      <OrderSummary />
                    </div>
                  </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default OrderModal;

const OrderSummary = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 p-4 border rounded-md">
      <div className="col-span-1">
        <SummaryField label="Subtotal" value={`₱${formatPrice("12341234")}`} />
      </div>

      <div className="col-span-1">
        <SummaryField
          label="Shipping Fee"
          value={`₱${formatPrice("12341234")}`}
        />
      </div>

      <div className="col-span-2">
        <SummaryField
          label="Grand Total"
          value={
            <span className="text-accent text-xl font-semibold">
              ₱{formatPrice("12341234")}
            </span>
          }
        />
      </div>
    </div>
  );
};
