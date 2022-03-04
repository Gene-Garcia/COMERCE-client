import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../../../../../../../../../shared/utils/date";
import { methods } from "../../../../../../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";
import Label from "./Label";

const OrderModal = () => {
  // redux ship orders reducer and states
  const modalOrder = useSelector((state) => state.SHIP_ORDERS.modalOrder);
  const products = modalOrder.orderedProducts;

  return (
    <div className="px-5 pb-5 space-y-6">
      {/* products scrollable */}
      <div className="flex flex-row gap-x-2">
        <RenderProducts products={products} />
      </div>

      {/* customer information */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between gap-4">
          <Label
            title="CUSTOMER NAME"
            value={`${modalOrder.shipmentDetails.firstName} ${modalOrder.shipmentDetails.lastName}`}
          />
          <Label
            title="PAYMENT METHOD"
            value={methods[modalOrder.paymentMethod]}
            accented={true}
          />
        </div>

        <div className="flex flex-row justify-between gap-4">
          <Label
            title="ORDER DATE"
            value={formatDate(modalOrder.orderDate, 1)}
          />
          <Label
            title="ESTIMATED DELIVERY"
            value={formatDate(modalOrder.ETADate, 1)}
          />
        </div>

        <div className="">
          <Label
            full={true}
            title="DELIVERY ADDRESS"
            value={modalOrder.shipmentDetails.streetAddress}
            accented={true}
          />
        </div>

        <div className="flex flex-row justify-between gap-3">
          <Label title="BARANGAY" value={modalOrder.shipmentDetails.barangay} />
          <Label
            title="MUNICIPALITY"
            value={modalOrder.shipmentDetails.cityMunicipality}
          />
          <Label title="PROVINCE" value={modalOrder.shipmentDetails.province} />
        </div>

        <div className="">
          <Label
            full={true}
            title="CUSTOMER NOTES"
            value={modalOrder.shipmentDetails.additionalNotes}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderModal;

const ProductCard = ({ product }) => {
  const info = product._product;
  return (
    <div className="w-32 flex flex-col items-center border border-gray-200 rounded">
      <img
        src={info.imageAddress}
        alt={info.item}
        className="object-contain w-full h-28"
      />

      <div className="flex flex-col justify-between text-left w-full h-full p-1.5">
        <p className="font-medium text-gray-500">{info.item}</p>
        <p className="font-medium">
          <span className="text-my-accent">{product.quantity}</span> piece(s)
        </p>
        <p className="text-right text-sm text-my-accent">
          ₱{formatPrice(product.priceAtPoint)}
        </p>
      </div>
    </div>
  );
};

// single resp principle
const RenderProducts = ({ products }) => {
  return products.map((product) => (
    <ProductCard key={product._id} product={product} />
  ));
};