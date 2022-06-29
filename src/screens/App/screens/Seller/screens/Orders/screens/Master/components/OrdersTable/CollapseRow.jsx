import React, { useEffect, useState } from "react";
import { batch, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../../redux/Alert/AlertAction";
import axios from "../../../../../../../../../../shared/caller";
import CompactTable, {
  Body as CTBody,
  Data as CTData,
  Head as CTHead,
  Heading as CTHeading,
  Row as CTRow,
} from "../../../../../../../../../../shared/Components/table/CompactTable";
import {
  Data,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import Loading from "../../../../../../../../../../shared/Loading/Loading";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";

const cellPadding = "px-4 py-2";

const CollapseRow = ({ orderId }) => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);

  // triggers everytime this collapse row component is rendered
  useEffect(() => {
    async function getProductsOfThisOrder() {
      await axios
        .get(`/api/seller/orders/master/products/${orderId}`)
        .then((res) => {
          if (res.status === 200) {
            setOrder(res.data.order);
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);

          if (!err.response)
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(
                setMessage(
                  "Something went wrong in retrieving your orders. Refresh your browser or try again later."
                )
              );
            });
          else if (err.response.status === 403) history.push("/forbidden");
          else if (err.response.status === 401) history.push("unathorized");
          else
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
            });
        });
    }

    getProductsOfThisOrder();
  }, []);

  // clean up
  useEffect(() => {
    return () => {
      setLoading(true);
      setOrder(null);
    };
  }, []);

  return loading ? (
    <Data className="col-span-9">
      <div className="p-4 opacity-50">
        <Loading />
      </div>
    </Data>
  ) : (
    <>
      <Data className="col-span-7">
        <div className="flex flex-row justify-start gap-6">
          {/* table */}
          <CompactTable>
            {/* <TableHeadings /> */}
            <CTHead grid="grid-cols-6">
              <CTHeading className="col-span-2">Product</CTHeading>
              <CTHeading className="col-span-1">Status</CTHeading>
              <CTHeading className="col-span-1">Price</CTHeading>
              <CTHeading className="col-span-1">Quantity</CTHeading>
              <CTHeading className="col-span-1">Subtotal</CTHeading>
            </CTHead>

            <CTBody>
              <RenderCollapseRow products={order.orderedProducts} />
            </CTBody>
          </CompactTable>
        </div>
      </Data>
      <Data className="col-span-2">
        <Pricings order={order} />
      </Data>
    </>
  );
};
export default CollapseRow;

const RenderCollapseRow = ({ products }) => {
  return products.map((product) => (
    <CTRow key={product._product._id} grid="grid-cols-6">
      <CTData className="col-span-2">{product._product.item}</CTData>
      <CTData className="col-span-1">
        <span className="px-2 text-center rounded-full py-0.5 bg-my-accent text-white font-medium text-xs">
          {product.status}
        </span>
      </CTData>
      <CTData className="col-span-1">
        ₱{formatPrice(product.priceAtPoint)}
      </CTData>
      <CTData className="col-span-1">{product.quantity} piece(s)</CTData>
      <CTData className="col-span-1 font-medium">
        ₱{formatPrice(product.priceAtPoint * product.quantity)}
      </CTData>
    </CTRow>
  ));
};

const Pricings = ({ order }) => {
  // redux orders master reducer & state
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
        <p className="text-gray-400 font-medium">₱{formatPrice(shippingFee)}</p>
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
