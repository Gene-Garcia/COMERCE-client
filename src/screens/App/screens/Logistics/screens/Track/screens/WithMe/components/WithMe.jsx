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
  updateLogisticsType,
} from "../../../../../../../../../redux/Logistics/WithMe/WithMeAction";
import { setMessages } from "../../../../../../../../../redux/Alert/AlertAction";
import { useHistory } from "react-router-dom";
import { logisticsType } from "../../../../../../../../../shared/utils/logisticsType";
import AttemptModal from "./modal/AttemptModal";

const WithMe = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  // with me redux state
  const logisticsType = useSelector((state) => state.WITH_ME.logisticsType);
  const reload = useSelector((state) => state.WITH_ME.reload);

  //#region API request configuration
  useEffect(() => {
    async function getLogistics() {
      await axios
        .get(`/api/logistics/with-me/${logisticsType}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
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
  }, [logisticsType, reload]);
  //#endregion

  //#region Cleanup
  useEffect(() => {
    return () => {
      dispatch(resetToDefault());
    };
  }, []);
  //#endregion

  return (
    <>
      <AttemptModal />

      <LogisticsContainer>
        <LogisticsTitle title="With Me" />
        <div className="my-6 xs:my-10 border-b border-gray-300"></div>

        <LogisticTypeButtons />

        <div className="overflow-x-auto">
          <div className="min-w-[80rem]">
            <LogisticsTable />
          </div>
        </div>
      </LogisticsContainer>
    </>
  );
};

export default WithMe;

const LogisticTypeButtons = () => {
  const data = [
    {
      ID: logisticsType.SELLER_PICK_UP,
      NAME: "Seller Pick Up",
    },
    {
      ID: logisticsType.CUSTOMER_DELIVERY,
      NAME: "Customer Delivery",
    },
  ];

  //#region Logistics type change configuration
  // redux
  const dispatch = useDispatch();

  const logisticButtonClick = async (id) => {
    batch(() => {
      dispatch(toggleLoading(true));
      dispatch(updateLogisticsType(id));
    });
  };
  //#endregion

  return (
    <div className="mb-6 flex gap-4">
      {data.map(({ ID, NAME }) => (
        <LogisticTypeButton
          onClick={logisticButtonClick}
          key={ID}
          id={ID}
          name={NAME}
        />
      ))}
    </div>
  );
};

const LogisticTypeButton = ({ id, name, onClick }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className="bg-white-tint rounded shadow
                w-44 text-center py-1.5
                text-sm font-semibold text-gray-500
                border-b border-transparent
                transition duration-150 ease-linear
                hover:border-accent hover:text-accent
                active:bg-gray-100"
    >
      {name}
    </button>
  );
};
