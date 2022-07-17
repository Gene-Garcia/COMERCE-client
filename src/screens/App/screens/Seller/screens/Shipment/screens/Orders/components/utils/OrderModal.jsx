import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../../../../../../../../../shared/utils/date";
import { methods } from "../../../../../../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";

const OrderModal = () => {
  // redux ship orders reducer and states
  const modalOrder = useSelector((state) => state.SHIP_ORDERS.modalOrder);
  const products = modalOrder.orderedProducts;

  return (
    <div className="w-[36rem] overflow-hidden px-5 pb-5 space-y-6">
      {/* products scrollable */}
      <div className="flex flex-row gap-x-3 pb-3 overflow-x-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
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

const Label = ({ full, title, value, accented }) => {
  return (
    <div className={full ? "w-full" : "w-1/2"}>
      <label className="text-xs text-gray-400 font-medium">{title}</label>
      <p className={`${accented && "text-accent font-medium"}`}>{value}</p>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const info = product._product;
  return (
    <div className="w-full flex flex-col items-center border border-gray-200 rounded">
      <div className="w-36 flex items-center justify-center">
        <img
          src={info.imageAddress}
          alt={info.item}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="flex flex-col justify-between text-left w-full h-full p-1.5">
        <p className="font-medium text-gray-500">{info.item}</p>
        <p className="font-medium">
          <span className="text-accent">{product.quantity}</span> piece(s)
        </p>
        <p className="text-right text-sm text-accent">
          ₱{formatPrice(product.priceAtPoint)}
        </p>
      </div>
    </div>
  );
};
