import React, { useEffect } from "react";
import axios from "../../../../../../../../../../shared/caller";
import { batch, useDispatch, useSelector } from "react-redux";
import Loading from "../../../../../../../../../../shared/Loading/Loading";
import {
  loadOrderedProducts,
  updateCollapseLoading,
} from "../../../../../../../../../../redux/Seller/OrdersMaster/OrdersMasterAction";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";

const cellPadding = "px-4 py-2";

const CollapseRow = ({ orderId }) => {
  // redux
  const dispatch = useDispatch();

  // redux orders master reducer & state
  const collapseLoading = useSelector(
    (state) => state.ORDERS_MASTER.collapseLoading
  );

  // triggers everytime this collapse row component is rendered
  useEffect(() => {
    async function getProductsOfThisOrder() {
      await axios
        .get(`/api/seller/orders/master/products/${orderId}`)
        .then((res) => {
          if (res.status === 200) {
            const tempOrder = res.data.order;

            batch(() => {
              dispatch(loadOrderedProducts(tempOrder));
              dispatch(updateCollapseLoading(false));
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }

    getProductsOfThisOrder();
  }, []);

  // clean up
  useEffect(() => {
    return () => {
      dispatch(updateCollapseLoading(true));
    };
  }, []);

  return collapseLoading ? (
    <td colSpan={6}>
      <div className="p-3 opacity-50">
        <Loading />
      </div>
    </td>
  ) : (
    <td className="" colSpan={6}>
      <div className="flex flex-row justify-start gap-6 px-6 py-4">
        {/* table */}
        <table className="w-4/5 table-fixed rounded shadow h-max">
          <thead className="border-b border-opacity-75 border-my-accent">
            <TableHeadings />
          </thead>

          <tbody>
            <RenderCollapseRow />
          </tbody>
        </table>

        {/* pricing */}
        <div className="w-1/5 flex-shrink-0 text-left place-self-end">
          <Pricings />
        </div>
      </div>
    </td>
  );
};
export default CollapseRow;

const TableHeadings = () => {
  return (
    <>
      <tr className="text-left text-gray-400 font-medium text-sm">
        <th className={`${cellPadding}`}>Product</th>
        <th className={`${cellPadding}`}>Status</th>
        <th className={`${cellPadding}`}>Price</th>
        <th className={`${cellPadding}`}>Quantity</th>
        <th className={`${cellPadding}`}>Subtotal</th>
      </tr>
    </>
  );
};

const RenderCollapseRow = () => {
  // redux orders master reducer & state
  const products = useSelector(
    (state) => state.ORDERS_MASTER.order
  ).orderedProducts;

  return products.map((product) => (
    <tr className="text-left text-sm">
      <td className={`w-max ${cellPadding}`}>{product._product.item}</td>
      <td className={`w-min ${cellPadding}`}>
        <span className=" px-3 text-center rounded-full py-0.5 bg-my-accent text-white font-medium text-xs">
          {product.status}
        </span>
      </td>
      <td className={`${cellPadding}`}>₱{formatPrice(product.priceAtPoint)}</td>
      <td className={`w-min ${cellPadding}`}>{product.quantity} piece(s)</td>
      <td className={`${cellPadding}`}>
        ₱{formatPrice(product.priceAtPoint * product.quantity)}
      </td>
    </tr>
  ));
};

const Pricings = () => {
  // redux orders master reducer & state
  const order = useSelector((state) => state.ORDERS_MASTER.order);
  const products = order.orderedProducts;

  let subTotal = 0;
  products.forEach((product) => {
    subTotal = subTotal + product.quantity * product.priceAtPoint;
  });

  const shippingFee = order.shippingFee;
  let grandTotal = subTotal + shippingFee;

  return (
    <>
      <div className="flex flex-row justify-between gap-2">
        <p className="font-medium text-gray-400 text-opacity-80">Subtotal</p>
        <p className="text-gray-400 font-medium">₱{formatPrice(subTotal)}</p>
      </div>

      <div className="flex flex-row justify-between gap-2">
        <p className="font-medium text-gray-400 text-opacity-80">Shipping</p>
        <p className="text-gray-400 font-medium">P70.00</p>
      </div>

      <div className="mt-4 flex flex-row justify-between gap-2">
        <p className="font-semibold text-gray-400 text-lg">Total</p>
        <p className="text-my-accent text-lg font-medium">
          ₱{formatPrice(grandTotal)}
        </p>
      </div>
    </>
  );
};
