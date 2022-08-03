import React from "react";
import { formatPrice } from "../../utils/price";

const OrderProductItem = () => {
  return (
    <div
      className="shrink-0 w-[9.5rem] h-60 
                  border border-neutral-100 rounded-md shadow
                  flex flex-col items-center justify-start gap-1"
    >
      <div className="grow-0 h-24 bg-slate-100 flex items-center justify-center">
        <img
          src="https://images.ray-ban.com/is/image/RayBan/805289602057__002.png?impolicy=RB_RB_FBShare"
          className="object-contain h-auto w-auto p-2 
                      transition duration-200 ease-linear
                      hover:rotate-[8deg] hover:scale-110"
        />
      </div>

      <div className="p-2 grow space-y-1.5">
        <p className="font-medium text-gray-900 leading-snug">
          Rayban Limited ED1 Shades
        </p>

        <p className="text-accent">₱{formatPrice("123124")}</p>

        <p className="text-gray-700">X pieces</p>
      </div>
    </div>
  );
};
export default OrderProductItem;
