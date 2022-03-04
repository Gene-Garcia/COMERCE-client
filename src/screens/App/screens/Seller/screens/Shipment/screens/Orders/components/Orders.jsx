import React, { useEffect, useState } from "react";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import HeaderButton from "../../../../../../../../../shared/Components/seller/HeaderButton";
import OrderTable from "./utils/OrderTable";
import axios from "../../../../../../../../../shared/caller";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../redux/Alert/AlertAction";
import Loading from "../../../../../../../../../shared/Loading/Loading";
import {
  loadPendingOrders,
  triggerModalState,
  updateModaledOrder,
} from "../../../../../../../../../redux/Seller/ShipOrders/ShopOrdersAction";
import ModalContainer from "../../../../../../../../../shared/Modal/ModalContainer";
import OrderModal from "./utils/OrderModal";

const Orders = ({ history }) => {
  // redux
  const dispatch = useDispatch();

  // page loading
  const [loading, setLoading] = useState(true);

  // api call to get the pending for shipment orders of this user/seller
  useEffect(() => {
    async function getPendingOrders() {
      await axios
        .get("/api/seller/orders/pending")
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            dispatch(loadPendingOrders(res.data.orders));
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
            });
          else if (err.response.status === 401) history.push("/unauthorized");
          else if (err.response.status === 403) history.push("/forbidden");
          else
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
            });
        });
    }

    getPendingOrders();
  }, []);

  return (
    <SellerContainer>
      <RenderOrderModal />

      <div className="flex flex-col xs:flex-row justify-between items-center gap-4 xs:gap-0">
        <SellerTitle title="Orders for Shipment" />

        <div className="space-x-4 flex flex-row justify-center items-center">
          <HeaderButton type="BUTTON" title="Ship Selected" />
        </div>
      </div>

      <div className="my-6 xs:my-10 border-b border-gray-300"></div>

      <div>
        {loading ? (
          <div className="bg-my-white-tint rounded-lg shadow-sm p-3">
            <Loading />
          </div>
        ) : (
          <div className="">
            <OrderTable />
          </div>
        )}
      </div>
    </SellerContainer>
  );
};
export default Orders;

// single responsibility principle
const RenderOrderModal = () => {
  // redux
  const dispatch = useDispatch();

  // redux ship orders reducer & state
  const isModalOpen = useSelector((state) => state.SHIP_ORDERS.isModalOpen);

  return (
    isModalOpen && (
      <ModalContainer
        close={() => {
          batch(() => {
            dispatch(triggerModalState(false));
            dispatch(updateModaledOrder(null));
          });
        }}
      >
        <OrderModal />
      </ModalContainer>
    )
  );
};
