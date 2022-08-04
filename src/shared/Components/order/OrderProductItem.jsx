import React from "react";
import { formatPrice } from "../../utils/price";

const OrderProductItem = ({ price, quantity, item, image }) => {
  return (
    <div
      className="shrink-0 w-[9.5rem] h-60
                  border border-neutral-100 rounded-md shadow
                  flex flex-col items-center justify-start gap-1"
    >
      <div className="grow-0 h-24 w-full bg-slate-100 flex items-center justify-center">
        <img
          src={image}
          alt={item}
          className="object-scale-down w-20 p-1 
                      transition duration-200 ease-linear
                      hover:rotate-[8deg] hover:scale-110"
        />
      </div>

      <div className="p-2 grow space-y-1.5 w-full">
        <p className="font-medium text-gray-900 leading-snug overflow-hidden text-ellipsis">
          {item}
        </p>

        <p className="text-accent">₱{formatPrice(price)}</p>

        <p className="text-gray-700">{quantity} piece(s)</p>
      </div>
    </div>
  );
};
export default OrderProductItem;

const SkeletonOrderProductItem = () => {
  return (
    <div
      className="shrink-0 w-[9.5rem] h-60 
              border border-neutral-100 rounded-md shadow
              flex flex-col items-center justify-start gap-1"
    >
      <div className="rounded-t-md grow-0 animate-pulse bg-slate-100 h-24 w-full"></div>

      <div className="p-2 grow space-y-3 animate-pulse w-full">
        <div className="h-4 w-full bg-slate-200 rounded"></div>

        <div className="h-3 w-3/4 bg-slate-200 rounded"></div>

        <div className="h-3 w-1/2 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
};

export { SkeletonOrderProductItem };
