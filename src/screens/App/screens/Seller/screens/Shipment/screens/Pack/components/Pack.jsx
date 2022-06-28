import React, { forwardRef, useEffect, useRef, useState } from "react";
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
import PackOrderTable, { HeaderRow } from "./utils/PackOrderTable";
import Loading from "../../../../../../../../../shared/Loading/Loading";
import {
  loadOrders,
  resetToDefault as resetPackOrdersToDefault,
  setWaybills,
  toggleModal,
} from "../../../../../../../../../redux/Seller/PackOrders/PackOrdersActions";
import WaybillModal from "./utils/WaybillModal";
import WaybillLayout from "./utils/WaybillLayout";
import { useReactToPrint } from "react-to-print";

const Pack = () => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // loading var
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getForPackOrders() {
      await axios
        .get("/api/seller/logistics/for/pack")
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            dispatch(loadOrders(res.data.orders));
          }
        })
        .catch((err) => {
          setLoading(false);

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
      <WaybillModalWrapper />

      <SellerContainer>
        <div className="flex flex-col xs:flex-row gap-4 xs:gap-0 items-center justify-between">
          <SellerTitle title="Pack Orders" />

          <div className="">
            <PrintSelectedHeaderButton />
          </div>
        </div>

        <div className="my-6 xs:my-10 border-b border-gray-300"></div>

        <div>
          {loading ? (
            <div>
              <table className="bg-my-white-tint w-full rounded">
                <HeaderRow />

                <tbody>
                  <tr>
                    <td className="text-center py-8" colSpan="8">
                      <Loading />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <PackOrderTable />
            </div>
          )}
        </div>
      </SellerContainer>
    </>
  );
};
export default Pack;

const WaybillModalWrapper = () => {
  // redux pack order reducer & state
  const isModalOpen = useSelector((s) => s.PACK_ORDERS.isModalOpen);

  return isModalOpen ? <WaybillModal /> : <></>;
};

const PrintSelectedHeaderButton = () => {
  // redux pack order state
  const orders = useSelector((s) => s.PACK_ORDERS.orders);

  // redux
  const dispatch = useDispatch();

  const history = useHistory();

  const printSelected = async () => {
    dispatch(toggleModal(true));

    //#region build paramaters of selected orders
    const productIds = [];

    const orderIds = [];
    orders.forEach((order) => {
      if (order.checked) {
        const tempProductIds = order.orderedProducts.map(
          (product) => product._product._id
        );

        productIds.push(tempProductIds.join("+"));

        orderIds.push(order._id);
      }
    });

    const joinedOrderIds = orderIds.join("+");
    const joinedProductIds = productIds.join("-");
    //#endregion

    //#region api
    await axios
      .get(
        `/api/logistics/waybill/seller/pick-up/order/${joinedOrderIds}/products/${joinedProductIds}`
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            setWaybills({
              orders: [...res.data.waybillOrders],
              business: res.data.business,
            })
          );
        } else {
          dispatch(toggleModal(false));
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
            dispatch(toggleModal(false));
          });
        else if (err.response.status === 401) history.push("/unauthorized");
        else if (err.response.status === 403) history.push("/forbidden");
        else
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage(err.response.data.error));
            dispatch(toggleModal(false));
          });
      });
    //#endregion
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
