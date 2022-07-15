import React, { useEffect } from "react";
import axios from "../../../../../../../../../shared/axios";
import { LogisticsContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { LogisticsTitle } from "../../../../../../../../../shared/Components/pages/Title";
import LogisticsTable from "./Table/LogisticsTable";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  loadLogistics,
  resetToDefault,
  toggleLoading,
} from "../../../../../../../../../redux/Logistics/WithMe/WithMeAction";
import { setMessages } from "../../../../../../../../../redux/Alert/AlertAction";
import { useHistory } from "react-router-dom";

const WithMe = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  // with me redux state
  const logisticsType = useSelector((state) => state.WITH_ME.logisticsType);

  //#region API request configuration
  useEffect(() => {
    async function getLogistics() {
      await axios
        .get(`/api/logistics/with-me/${logisticsType}`)
        .then((res) => {
          if (res.status) {
            batch(() => {
              dispatch(loadLogistics(res.data.logistics));
              dispatch(toggleLoading(false));
            });
          }
        })
        .catch((err) => {
          if (!err.response)
            batch(() => {
              dispatch(
                setMessages([
                  {
                    message:
                      "Something went wrong in retrieving your orders. Refresh your browser or try again later.",
                    severity: "error",
                  },
                ])
              );
              dispatch(toggleLoading(false));
            });
          else if (err.response.status === 403) history.push("/forbidden");
          else if (err.response.status === 401) history.push("unathorized");
          else
            batch(() => {
              dispatch(
                setMessages([
                  {
                    message: err.response.data.message,
                    severity: "error",
                  },
                ])
              );
              dispatch(toggleLoading(false));
            });
        });
    }

    getLogistics();
  }, [logisticsType]);
  //#endregion

  //#region Cleanup
  useEffect(() => {
    return () => {
      dispatch(resetToDefault());
    };
  }, []);
  //#endregion

  return (
    <LogisticsContainer>
      <LogisticsTitle title="With Me" />
      <div className="my-6 xs:my-10 border-b border-gray-300"></div>

      <div className="overflow-x-auto">
        <div className="min-w-rr70">
          <LogisticsTable />
        </div>
      </div>
    </LogisticsContainer>
  );
};

export default WithMe;
