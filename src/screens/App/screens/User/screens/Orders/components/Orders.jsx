import React, { useEffect } from "react";
import Container from "../../../../../../../shared/Components/pages/Container";
import Title from "../../../../../../../shared/Components/pages/Title";
import Loading from "../../../../../../../shared/Loading/Loading";
import OrderDetails from "./OrderDetails";
import OrderLinks from "./OrderLinks";
import axios from "../../../../../../../shared/caller";
import useQuery from "../../../../../../../hooks/useQuery";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../redux/Alert/AlertAction";
import {
  loadOrders,
  resetToDefault as resetOrderHistoryToDefault,
  setLoading,
  setSelectedOrder,
} from "../../../../../../../redux/OrderHistory/OrderHistoryAction";

function Orders({ history }) {
  // query to get parameter in url
  const query = useQuery();

  // redux
  const dispatch = useDispatch();

  // redux orders reducer & states
  const loading = useSelector((s) => s.ORDER_HISTORY.loading);

  // use effect to fetch all the user's order. also includes validation if there is a logged in user
  useEffect(() => {
    async function getOrders() {
      await axios
        .get("/api/order/orders")
        .then((res) => {
          if (res.status === 200) {
            const orders = res.data.orders;
            const orderId = query.get("oid");

            batch(() => {
              dispatch(loadOrders(orders));

              // determine if there is orderId {oId} parameter
              if (orderId) {
                dispatch(
                  setSelectedOrder(orders.find((order) => order._id == orderId))
                );
              } else {
                // no oid so set a default
                dispatch(
                  setSelectedOrder(
                    orders.length > 0 ? res.data.orders[0] : null
                  )
                );
              }

              dispatch(setLoading(false));
            });
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
              dispatch(setLoading(false));
              dispatch(setSeverity("error"));
              dispatch(setMessage("Something went wrong. Please try again."));
            });
          else if (err.response.status === 401) history.push("/forbidden");
          else if (err.response.status === 403) history.push("/unauthorized");
          else
            batch(() => {
              dispatch(setLoading(false));
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
            });
        });
    }

    getOrders();
  }, []);

  // IMPLEMENT CLEANUP
  useEffect(() => {
    return () => {
      dispatch(resetOrderHistoryToDefault());
    };
  }, []);

  return (
    <>
      <Title title="User Orders" />

      <Container xSpacing="p-4 sm:px-8 lg:px-14 xl:px-16">
        {/* RELOCATE LOADING TO THE COMPONENTS TO IMPLEMENT SINGLE RESPONSIBILITY PRINCIPLE */}
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-10 w-full">
            <div className="w-full md:w-2/5 lg:w-thirty xl:w-1/4 rounded-lg shadow-md md:shadow-lg">
              <OrderLinks />
            </div>

            <div className="w-full md:w-3/5 lg:w-seventy xl:w-3/4">
              <OrderDetails />
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
export default Orders;
