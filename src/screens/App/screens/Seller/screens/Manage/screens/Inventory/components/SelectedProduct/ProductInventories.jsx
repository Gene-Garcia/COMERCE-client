import React, { useState } from "react";
import { useManageInventory } from "../../../../../../../../../../hooks/useManage";
import { formatDate } from "../../../../../../../../../../shared/utils/date";

function ProductInventories() {
  const {
    selected: { item, onHand, inventory, _inventory },
  } = useManageInventory();
  return (
    <div className="bg-my-white-tint rounded">
      <div
        className="w-full py-3 px-4 border-b border-gray-200
      inline-flex justify-between items-center"
      >
        <p className="font-semibold text-lg">{item}</p>

        {/* total onhand and inventory */}
        <div className="inline-flex gap-2">
          <div className="text-right">
            <label className="uppercase font-semibold text-gray-400 text-sm">
              Total Onhand
            </label>
            <p className="-mt-1.5 text-red-500 text-md font-medium">{onHand}</p>
          </div>

          <div className="text-right">
            <label className="uppercase font-semibold text-gray-400 text-sm">
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
          className="h-5 w-5 transition duration-100 ease-linear group-hover:text-my-accent"
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
