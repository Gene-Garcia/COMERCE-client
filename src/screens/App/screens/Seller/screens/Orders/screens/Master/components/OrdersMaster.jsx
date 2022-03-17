import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import OrderTable from "./OrdersTable/OrderTable";
import OrderStatusButton from "./utils/OrderStatusButton";
import axios from "../../../../../../../../../shared/caller";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../redux/Alert/AlertAction";
import {
  loadOrders,
  resetToDefault as resetOrdersMasterToDefault,
  updatePageLoading,
} from "../../../../../../../../../redux/Seller/OrdersMaster/OrdersMasterAction";
import { useHistory } from "react-router-dom";

const OrdersMaster = () => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // redux orders master reducer & state
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

  // cleanup
  useEffect(() => {
    return () => dispatch(resetOrdersMasterToDefault());
  }, []);

  return (
    <SellerContainer>
      <SellerTitle title="Orders Master Data" />

      <div className="my-6 xs:my-10 border-b border-gray-300"></div>

      <div className="bg-my-white-tint rounded">
        {/* order status */}
        <OrderStatusButton />

        <div className="h-1.5 bg-my-white-tone"></div>

        <OrderTable />
      </div>
    </SellerContainer>
  );
};
export default OrdersMaster;
