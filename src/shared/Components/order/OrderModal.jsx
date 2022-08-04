import React, { Fragment, useEffect, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";

import axios from "../../axios";
import { useHistory } from "react-router-dom";

import { batch, useDispatch, useSelector } from "react-redux";
import {
  resetReduxOrderModal,
  toggleOrderModal,
  toggleModalLoading,
} from "../../../redux/OrderModal/OrderModalAction";

import CloseButton from "../button/CloseButton";
import { OrderField, SkeletonOrderField, SummaryField } from "./OrderFields";
import OrderProductItem, { SkeletonOrderProductItem } from "./OrderProductItem";

import DesignedPayment from "../payment/DesignedPayment";
import { formatPrice } from "../../utils/price";
import { setMessages } from "../../../redux/Alert/AlertAction";

/*
 * A component that will make the API request and
 * display the order and ordered product information.
 * However, only ordered products from the current seller will be shown
 */

const OrderModal = () => {
  // order modal redux states
  const isOpen = useSelector((state) => state.ORDER_MODAL.isOpen);

  return isOpen && <OrderModalContainer isOpen={isOpen} />;
};
export default OrderModal;

const OrderModalContainer = ({ isOpen }) => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // order modal redux states
  const isLoading = useSelector((state) => state.ORDER_MODAL.isLoading);
  const orderId = useSelector((state) => state.ORDER_MODAL.orderId);

  const [order, setOrder] = useState(null);

  const closeModal = () => {
    dispatch(toggleOrderModal(false));
  };

  // API to query order modal details
  useEffect(() => {
    const APIGetOrderDetails = async () => {
      await axios
        .get(`/api/seller/order/modal/${orderId}`)
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            setOrder(res.data.order);
            dispatch(toggleModalLoading(false));
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
              dispatch(toggleOrderModal(false));
              setMessages([
                {
                  message: "Something went wrong. Try again.",
                  severity: "error",
                },
              ]);
            });
          else if (err.response.status === 401) history.push("/unauthorized");
          else if (err.response.status === 403) history.push("/forbidden");
          else
            batch(() => {
              dispatch(toggleOrderModal(false));
              setMessages([
                {
                  message: err.message,
                  severity: "error",
                },
              ]);
            });
        });
    };

    APIGetOrderDetails();
  }, []);

  // cleanup
  useEffect(() => {
    return () => {
      batch(() => {
        dispatch(resetReduxOrderModal());
      });
    };
  }, []);

  return (
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
                <div className="flex justify-between items-center gap-2">
                  <Dialog.Title
                    as="h2"
                    className="text-xl font-semibold leading-6 text-gray-900 font-serif"
                  >
                    Order Details
                  </Dialog.Title>

                  <CloseButton onClick={closeModal} />
                </div>

                {isLoading ? <SkeletonContent /> : <Content order={order} />}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const Content = ({ order }) => {
  return (
    <>
      <div className="flex gap-6 overflow-x-auto py-2">
        {order.orderedProducts.map(
          ({
            _id,
            priceAtPoint,
            quantity,
            _product: { item, imageAddress },
          }) => (
            <OrderProductItem
              key={_id}
              price={priceAtPoint}
              quantity={quantity}
              item={item}
              image={imageAddress}
            />
          )
        )}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1 flex flex-wrap gap-y-4 gap-x-5">
          <OrderField label="Customer Name" value="John Doe" />
          <OrderField label="Contact" value="9053660668" />

          <OrderField label="Barangay" value="a" />
          <OrderField label="City/Municipality" value="a" />
          <OrderField label="Province" value="a" />

          <OrderField label="Customer Notes" value="a" width="w-full" />
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
    </>
  );
};

const SkeletonContent = () => {
  return (
    <>
      <div className="flex gap-6 overflow-x-auto py-2">
        <SkeletonOrderProductItem />
        <SkeletonOrderProductItem />
        <SkeletonOrderProductItem />
        <SkeletonOrderProductItem />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1 flex flex-wrap gap-y-4 gap-x-5 ">
          <SkeletonOrderField width="w-64" />
          <SkeletonOrderField width="w-24" />

          <SkeletonOrderField width="w-40" />
          <SkeletonOrderField width="w-48" />
          <SkeletonOrderField width="w-32" />

          <SkeletonOrderField width="w-full" />
        </div>

        <div className="col-span-1 space-y-4">
          <SkeletonOrderField width="w-full" />

          <div className="p-4 border rounded grid grid-cols-2 gap-x-4 gap-y-6 ">
            <div className="col-span-1">
              <p className="font-medium text-slate-900 uppercase text-sm">
                Subtotal
              </p>
              <SkeletonOrderField width="w-full" />
            </div>

            <div className="col-span-1">
              <p className="font-medium text-slate-900 uppercase text-sm">
                Shipping Fee
              </p>
              <SkeletonOrderField width="w-full" />
            </div>

            <div className="col-span-2">
              <p className="font-medium text-slate-900 uppercase text-sm">
                Grand Total
              </p>
              <SkeletonOrderField width="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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
