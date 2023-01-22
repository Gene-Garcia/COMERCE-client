import React, { useEffect } from "react";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import HeaderButton from "../../../../../../../../../shared/Components/seller/HeaderButton";
import axios from "../../../../../../../../../shared/caller";
import { useHistory } from "react-router-dom";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../redux/Alert/AlertAction";
import PackOrderTable from "./table/PackOrderTable";
import {
  loadOrders,
  resetToDefault as resetPackOrdersToDefault,
  setWaybills,
  toggleModal,
  togglePageLoading,
} from "../../../../../../../../../redux/Seller/PackOrders/PackOrdersActions";
import WaybillModal from "./utils/WaybillModal";

const Pack = () => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // loading var
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getForPackOrders() {
      await axios
        .get("/api/seller/logistics/for/pack")
        .then((res) => {
          if (res.status === 200) {
            batch(() => {
              dispatch(loadOrders(res.data.orders));
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
            });
          dispatch(togglePageLoading(false));
        });
    }

    getForPackOrders();
  }, []);

  // clean-up
  useEffect(() => {
    return () => {
      dispatch(resetPackOrdersToDefault());
    };
  }, []);

  return (
    <>
      <WaybillModal />

      <SellerContainer>
        <div className="flex flex-col xs:flex-row gap-4 xs:gap-0 items-center justify-between">
          <SellerTitle title="Pack Orders" />

          <div className="">
            <PrintSelectedHeaderButton />
          </div>
        </div>

        <div className="my-6 xs:my-10 border-b border-gray-300"></div>

        <div>
          <div>
            <PackOrderTable />
          </div>
        </div>
      </SellerContainer>
    </>
  );
};
export default Pack;

const PrintSelectedHeaderButton = () => {
  // redux pack order state
  const orders = useSelector((s) => s.PACK_ORDERS.orders);

  // redux
  const dispatch = useDispatch();

  const printSelected = async () => {
    //#region build paramaters of selected orders
    const waybilldIds = [];

    orders.forEach((order) => {
      if (order.checked) {
        const productIds = order.orderedProducts.map(
          (product) => product._product._id
        );

        if (productIds && productIds.length > 0)
          waybilldIds.push({
            orderId: order._id,
            productIds: productIds,
          });
      }
    });

    if (waybilldIds) {
      batch(() => {
        dispatch(toggleModal(true));
        dispatch(setWaybills(waybilldIds));
      });
    }
  };

  return (
    <>
      <HeaderButton
        type="BUTTON"
        title="Print Selected"
        onClick={printSelected}
      />
    </>
  );
};
