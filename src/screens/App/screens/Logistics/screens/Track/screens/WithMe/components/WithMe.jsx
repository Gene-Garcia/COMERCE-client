import React, { useEffect } from "react";
import axios from "../../../../../../../../../shared/axios";
import { LogisticsContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { LogisticsTitle } from "../../../../../../../../../shared/Components/pages/Title";
import LogisticsTable from "./Table/LogisticsTable";
import { useDispatch, useSelector } from "react-redux";
import { resetToDefault } from "../../../../../../../../../redux/Logistics/WithMe/WithMeAction";

const WithMe = () => {
  const dispatch = useDispatch();

  // with me redux state
  const logisticsType = useSelector((state) => state.WITH_ME.logisticsType);

  //#region API request configuration
  useEffect(() => {
    async function getLogistics() {
      await axios
        .get(`/api/logistics/with-me/${logisticsType}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
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

      <div>
        <div>
          <LogisticsTable />
        </div>
      </div>
    </LogisticsContainer>
  );
};

export default WithMe;
