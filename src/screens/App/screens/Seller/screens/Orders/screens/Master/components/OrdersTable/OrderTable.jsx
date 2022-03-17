import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { batch, useDispatch, useSelector } from "react-redux";
import Loading from "../../../../../../../../../../shared/Loading/Loading";
import OrderHeading from "./OrderHeading";
import OrderRow from "./OrderRow";
import axios from "../../../../../../../../../../shared/caller";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../../redux/Alert/AlertAction";
import {
  loadOrders,
  updatePageLoading,
} from "../../../../../../../../../../redux/Seller/OrdersMaster/OrdersMasterAction";

const OrderTable = () => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // redux orders master reducer & state
  const loading = useSelector((state) => state.ORDERS_MASTER.pageLoading);
  const status = useSelector((state) => state.ORDERS_MASTER.status);

  // triggered every time status query changes
  useEffect(() => {
    async function getOrders() {
      await axios
        .get(`/api/seller/orders/master/${status}`)
        .then((res) => {
          if (res.status === 200) {
            const orders = res.data.orders;

            batch(() => {
              dispatch(updatePageLoading(false));
              dispatch(loadOrders(orders));
            });
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(
                setMessage(
                  "Something went wrong in retrieving your orders. Refresh your browser or try again later."
                )
              );
              dispatch(updatePageLoading(false));
            });
          else if (err.response.status === 403) history.push("/forbidden");
          else if (err.response.status === 401) history.push("unathorized");
          else
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
              dispatch(updatePageLoading(false));
            });
        });
    }

    getOrders();
  }, [status]);

  return (
    <table className="w-full table-fixed">
      <OrderHeading />

      <tbody className="text-center">
        {loading ? (
          <tr className="">
            <td colSpan={6} className="h-44 text-center">
              <Loading />
            </td>
          </tr>
        ) : (
          <RenderOrderRows />
        )}
      </tbody>
    </table>
  );
};
export default OrderTable;

const RenderOrderRows = () => {
  // redux orders master reducer & state
  const orders = useSelector((state) => state.ORDERS_MASTER.orders);

  return (
    <>
      {orders.length <= 0 ? (
        <h1>No Orders</h1>
      ) : (
        orders.map((order, i) => (
          <OrderRow key={order._id} data={order} stripe={i % 2 !== 0} />
        ))
      )}
    </>
  );
};
