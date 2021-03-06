import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import OrderTable from "./OrdersTable/OrderTable";
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
import OrderStatusDropdown from "./utils/OrderStatusDropdown";

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

    // setting of true loading is done in dropdown on change
    // dispatch(updatePageLoading(true));
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

      {/* order status */}
      <OrderStatusDropdown />

      <div className="mt-8 overflow-auto">
        <div className="min-w-table-60">
          <OrderTable />
        </div>
      </div>
    </SellerContainer>
  );
};
export default OrdersMaster;
