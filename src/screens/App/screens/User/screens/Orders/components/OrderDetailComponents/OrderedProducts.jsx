import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../../../../../../shared/utils/price";

function OrderedProducts() {
  // redux order reducer & states
  const loading = useSelector((s) => s.ORDER_HISTORY.loading);
  const order = useSelector((s) => s.ORDER_HISTORY.selectedOrder);

  return (
    <>
      {loading || !order ? (
        <>Loading...</>
      ) : (
        <div className="inline-flex gap-x-6 pb-5 overflow-auto w-full">
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
      <div className="w-44 bg-gray-100 rounded-md mb-1 w-40 lg:w-48 h-40 lg:h-48 ">
        <Link to={`/catalogue/item/${data._product._id}`} target="_blank">
          <img
            src={data._product.imageAddress}
            alt="ordered-product"
            className="w-full h-full object-contain p-2"
          />
        </Link>
      </div>

      <div className="px-2.5 py-1.5 flex flex-col gap-y-0.5 w-44">
        <p className="text-gray-800 font-medium">{data._product.item}</p>

        <p className="flex flex-row justify-between items-center">
          <span className="text-accent font-medium">
            {`₱${formatPrice(data.priceAtPoint)}`}
          </span>
          <span className="italic text-sm text-gray-900">x{data.quantity}</span>
        </p>
      </div>
    </div>
  );
}
