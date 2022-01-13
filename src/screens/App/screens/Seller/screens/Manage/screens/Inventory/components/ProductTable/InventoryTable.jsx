import React from "react";
import { ProductData, ProductHead } from "./ProductRow";
import { useManageInventory } from "../../../../../../../../../../hooks/useManage";
import Loading from "../../../../../../../../../../shared/Loading/Loading";

function InventoryTable() {
  const { products, loading, updateSelected } = useManageInventory();

  return (
    <table className="w-full">
      <thead className="">
        <ProductHead />
      </thead>

      <tbody className="">
        {loading || !products || products.length <= 0 ? (
          <div className="w-full flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="space-y-1.5 flex flex-col">
            {products.map((e, i) => (
              <button
                key={i}
                onClick={() => updateSelected(e)}
                className="w-full mx-1 my-2 rounded-md odd:bg-gray-100
              cursor-pointer
              transition duration-150 ease-linear
              hover:bg-gray-200"
              >
                <ProductData data={e} />
              </button>
            ))}
          </div>
        )}
      </tbody>
    </table>
  );
}

export default InventoryTable;
