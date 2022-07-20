import React, { useEffect } from "react";
import { LogisticsContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { LogisticsTitle } from "../../../../../../../../../shared/Components/pages/Title";
import PickUpTable from "./table/PickUpTable";
import { useHistory } from "react-router-dom";
import { batch, useDispatch, useSelector } from "react-redux";
import axios from "../../../../../../../../../shared/caller";
import {
  loadForPickUpOrders,
  loadForPickUpProducts,
  resetToDefault,
  togglePageLoading,
} from "../../../../../../../../../redux/Logistics/SellerPickUp/SellerPickUpAction";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../redux/Alert/AlertAction";

const SellerPickUp = () => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // with me redux states
  const reload = useSelector((s) => s.WITH_ME.reload);

  //#region API request to get for pick up orders
  useEffect(() => {
    async function requestForPickUpProducts() {
      await axios
        .get("/api/logistics/for-pick-up")
        .then((res) => {
          if (res.status === 200) {
            batch(() => {
              dispatch(loadForPickUpProducts(res.data.forPickUpProducts));
              dispatch(togglePageLoading(false));
            });
          } else {
            dispatch(togglePageLoading(false));
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
              dispatch(togglePageLoading(false));
            });
          else if (err.response.status === 403) history.push("/forbidden");
          else if (err.response.status === 401) history.push("unathorized");
          else
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
              dispatch(togglePageLoading(false));
            });
        });
    }

    requestForPickUpProducts();
  }, [reload]);
  //#endregion API request

  // cleanup
  useEffect(() => {
    return () => {
      dispatch(resetToDefault());
    };
  }, []);

  return (
    <LogisticsContainer>
      <LogisticsTitle title="Orders for Pick Up" />
      <div className="my-6 xs:my-10 border-b border-gray-300"></div>

      <div>
        <div>
          <PickUpTable />
        </div>
      </div>
    </LogisticsContainer>
  );
};
export default SellerPickUp;
