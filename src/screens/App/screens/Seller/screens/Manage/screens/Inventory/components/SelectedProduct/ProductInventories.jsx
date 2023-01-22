import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../../../../../../../../../shared/utils/date";

function ProductInventories() {
  // redux manage inventory reducer & state
  const { item, onHand, inventory, _inventory } = useSelector(
    (state) => state.MANAGE_INVENTORY.selectedProduct
  );

  return (
    <div className="bg-white-tint rounded">
      <div
        className="w-full p-3 border-b border-gray-200
      flex flex-col sm:flex-row md:flex-col xl:flex-row 
      gap-2 lg:gap-1.5 xl:gap-2.5
      justify-between items-center"
      >
        <p className="place-self-start sm:place-self-auto md:place-self-start font-semibold text-base xl:text-md text-gray-700">
          {item}
        </p>

        {/* total onhand and inventory */}
        <div className="flex flex-row gap-2 place-self-start xs:place-self-end">
          <div className="text-right">
            <label className="uppercase font-medium text-gray-400 text-sm">
              Total Onhand
            </label>
            <p className="-mt-1.5 text-red-500 text-md font-medium">{onHand}</p>
          </div>

          <div className="text-right">
            <label className="uppercase font-medium text-gray-400 text-sm">
              Total Inventory
            </label>
            <p className="-mt-1.5 text-black text-md font-medium">
              {inventory}
            </p>
          </div>
        </div>
      </div>

      <div className="py-3 px-4 space-y-2">
        {_inventory.map((e, i) => (
          <InventoryButton data={e} key={i} />
        ))}
      </div>
    </div>
  );
}
export default ProductInventories;

function InventoryButton({
  data: { dateStored, onHand, quantity: inventory },
}) {
  const [toggled, setToggled] = useState(false);
  return (
    <div
      className={`rounded-md bg-gray-100 space-y-1
    ${toggled && "shadow-md"}`}
    >
      <button
        onClick={() => setToggled((prev) => !prev)}
        className="w-full text-left 
        py-2 px-4 rounded
      inline-flex justify-between items-center
      group transition duration-150 ease-linear
    hover:bg-gray-200"
      >
        <span>{formatDate(dateStored, 1)}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transition duration-100 ease-linear group-hover:text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`${toggled ? "block" : "hidden"} 
      text-center pb-2`}
      >
        <div className="inline-flex gap-10">
          <div className="text-center">
            <label className="font-semibold text-gray-400 text-sm">
              Onhand
            </label>
            <p className="text-red-500 text-lg font-medium">{onHand}</p>
          </div>

          <div className="text-center">
            <label className="font-semibold text-gray-400 text-sm">
              Inventory
            </label>
            <p className="text-black text-lg font-medium">{inventory}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
