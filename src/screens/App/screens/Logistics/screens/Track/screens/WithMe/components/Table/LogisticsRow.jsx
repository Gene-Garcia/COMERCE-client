import React, { useState } from "react";
import { batch, useDispatch } from "react-redux";
import {
  checkLogistic,
  setLogisticsInModal,
  toggleAttemptModal,
} from "../../../../../../../../../../redux/Logistics/WithMe/WithMeAction";
import {
  Data,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import {
  Action,
  ActionGroup,
} from "../../../../../../../../../../shared/Components/table/TableActions";
import { formatDate } from "../../../../../../../../../../shared/utils/date";
import { AttemptsCollapseData, OrderCollapseData } from "./CollapseData";
import CollapseOrders from "./CollapseOrders";

const LogisticsRow = ({
  data: {
    _id: logisticsId,
    dateStarted,
    orders,
    _business: { contactNumber, businessName, pickUpAddress: address },
    failedAttempts: attempts,
    checked,
  },
}) => {
  const dispatch = useDispatch();

  //#region Toggle table configuration
  const [toggled, setToggled] = useState({
    ORDERS: false,
    ATTEMPTS: false,
  });

  const toggleCollapse = (key, toggle) => {
    setToggled((prev) => ({ ...prev, [key]: toggle }));
  };
  //#endregion

  //#region checkbox configurations
  const checkboxChange = (e) =>
    dispatch(checkLogistic(logisticsId, e.target.checked));
  //#endregion

  const openAttemptModal = () => {
    batch(() => {
      dispatch(setLogisticsInModal(logisticsId));
      dispatch(toggleAttemptModal(true));
    });
  };

  return (
    <>
      <Row grid="grid-cols-14">
        <Data className="col-span-1 text-center">
          <input type="checkbox" onChange={checkboxChange} checked={checked} />
        </Data>

        <Data className="col-span-1 break-all text-xs font-light leading-none">
          {logisticsId}
        </Data>
        <Data className="col-span-1 break-words">
          {formatDate(dateStarted, true)}
        </Data>

        <Data className="col-span-3">
          {`${address.street}, ${address.barangay}, ${address.cityMunicipality}, ${address.province}`}
        </Data>
        <Data className="col-span-2">{businessName}</Data>
        <Data className="col-span-1 break-all">{contactNumber}</Data>

        <Data className="col-span-2">
          {toggled.ATTEMPTS ? (
            <AttemptsCollapseData
              data={attempts}
              toggleCollapse={toggleCollapse}
            />
          ) : attempts && attempts.length > 0 ? (
            <button
              onClick={() => toggleCollapse("ATTEMPTS", true)}
              className="text-gray-600 font-medium text-sm
                     bg-gray-200 px-3.5 py-1 rounded-md
                     transition duration-200 ease-linear
                     hover:ring-2 hover:ring-gray-200 hover:ring-offset-2
                     active:bg-gray-400 active:ring-0 active:text-white"
            >
              Show Attempts
            </button>
          ) : (
            <p className="break-all font-medium text-gray-500">No Attempts</p>
          )}
        </Data>

        <Data className="col-span-3">
          <ActionGroup>
            <Action
              text="SHOW ORDERS"
              type="BUTTON"
              onClick={() => toggleCollapse("ORDERS", !toggled.ORDERS)}
            />
            <Action
              text="ADD ATTEMPT"
              type="BUTTON"
              onClick={openAttemptModal}
            />
            <Action text="FINISHED" type="BUTTON" onClick={() => {}} />
          </ActionGroup>
        </Data>
      </Row>

      {toggled.ORDERS && (
        <Row grid="grid-cols-12">
          <Data className="col-span-6"></Data>
          <Data className="col-span-6">
            <OrderCollapseData data={orders} toggleCollapse={toggleCollapse} />
          </Data>
        </Row>
      )}
    </>
  );
};
export default LogisticsRow;
