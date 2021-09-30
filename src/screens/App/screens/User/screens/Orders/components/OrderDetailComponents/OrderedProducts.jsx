import React from "react";
import useOrders from "../../../../../../../../hooks/useOrders";
import { formatPrice } from "../../../../../../../../shared/utils/price";

function OrderedProducts() {
  const { order, loading } = useOrders();

  return (
    <>
      {loading || !order ? (
        <></>
      ) : (
        <div className="flex flex-row gap-x-6 overflow-x-auto pb-5">
          {order.orderedProducts.map((e) => (
            <ProductCard key={e._id} data={e} />
          ))}
        </div>
      )}
    </>
  );
}
export default OrderedProducts;

function ProductCard({ data }) {
  return (
    <div className="border border-gray-100 rounded-md">
      <div className="w-44 bg-gray-100 rounded-md mb-1">
        <img
          src={data._product.imageAddress}
          alt="ordered-product"
          className="w-full object-contain p-2"
        />
      </div>

      <div className="px-3 py-2 flex flex-col gap-y-2 w-44">
        <p className="text-gray-600 font-medium">{data._product.item}</p>

        <p className="flex flex-row justify-between items-center">
          <span className="text-my-accent font-medium text-lg">
            {`₱${formatPrice(data.priceAtPoint)}`}
          </span>
          <span>x{data.quantity}</span>
        </p>
      </div>
    </div>
  );
}
