import React, { useEffect } from "react";

import { batch, useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  setMessages,
  setSeverity,
} from "../../../../../../../../../redux/Alert/AlertAction";
import {
  loadPendingOrders,
  resetToDefault,
  togglePageLoading,
  toggleReload,
} from "../../../../../../../../../redux/Seller/ShipOrders/ShipOrdersAction";
import { resetReduxOrderModal } from "../../../../../../../../../redux/OrderModal/OrderModalAction";

import { useHistory } from "react-router-dom";

import axios from "../../../../../../../../../shared/caller";

import OrderModal from "../../../../../../../../../shared/Components/order/OrderModal";

import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import HeaderButton from "../../../../../../../../../shared/Components/seller/HeaderButton";

import OrderTable from "./table/OrderTable";

const Orders = ({ history }) => {
  // redux
  const dispatch = useDispatch();

  // redux ship order reducer & state
  const reload = useSelector((state) => state.SHIP_ORDERS.reload);

  // api call to get the pending for shipment orders of this user/seller
  // added dependency on reload, usually triggered after shipping a product
  useEffect(() => {
    async function getPendingOrders() {
      await axios
        .get("/api/seller/orders/pending")
        .then((res) => {
          if (res.status === 200) {
            batch(() => {
              dispatch(loadPendingOrders(res.data.orders));
              dispatch(togglePageLoading(false));
            });
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(
                setMessage(
                  "Something went wrong. Please refresh your browser and try again."
                )
              );
              dispatch(togglePageLoading(false));
            });
          else if (err.response.status === 401) history.push("/unauthorized");
          else if (err.response.status === 403) history.push("/forbidden");
          else
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
              dispatch(togglePageLoading(false));
            });
        });
    }

    getPendingOrders();
  }, [reload]);

  // clean up
  useEffect(() => {
    return () => {
      batch(() => {
        dispatch(resetToDefault());
        dispatch(resetReduxOrderModal());
      });
    };
  }, []);

  return (
    <SellerContainer>
      <OrderModal />

      <div className="flex flex-col xs:flex-row justify-between items-center gap-4 xs:gap-0">
        <SellerTitle title="Orders for Shipment" />

        <div className="space-x-4 flex flex-row justify-center items-center">
          <ShipSelectedButton />
        </div>
      </div>

      <div className="my-6 xs:my-10 border-b border-gray-300"></div>

      <div className="overflow-auto">
        <div className="min-w-[70rem] ">
          <OrderTable />
        </div>
      </div>
    </SellerContainer>
  );
};
export default Orders;

const ShipSelectedButton = () => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // redux ship orders reducer & state
  const pendingOrders = useSelector((state) => state.SHIP_ORDERS.pendingOrders);

  async function shipSelected() {
    // check if there is a selected

    // build data
    // get all pendingOrders id where checked is true
    const checkedOrders = pendingOrders.filter((order) => order.checked);

    // turn orderId as the key
    const data = checkedOrders.map((order) => {
      return {
        orderId: order._id,
        productIds: order.orderedProducts.map(
          (product) => product._product._id
        ),
      };
    });

    await axios
      .patch("/api/seller/logistics/ship", { orders: data })
      .then((res) => {
        if (res.status === 201) {
          batch(() => {
            dispatch(togglePageLoading(true));
            dispatch(setMessages(res.data.messages));
            dispatch(toggleReload());
          });
        }
      })
      .catch((err) => {
        if (!err.response)
          dispatch(
            setMessages({
              message:
                "Something went wrong. Please refresh the page and try again.",
              severity: "error",
            })
          );
        else if (err.response.status === 401) history.push("/unauthorized");
        else if (err.response.status === 403) history.push("/forbidden");
        else
          dispatch(
            setMessages({
              message: err.response.data.error,
              severity: "error",
            })
          );
      });
  }

  return (
    <HeaderButton onClick={shipSelected} type="BUTTON" title="Ship Selected" />
  );
};
