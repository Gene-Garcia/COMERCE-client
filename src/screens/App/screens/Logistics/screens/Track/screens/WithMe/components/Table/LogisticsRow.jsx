import React, { useState } from "react";
import {
  Data,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import {
  Action,
  ActionGroup,
} from "../../../../../../../../../../shared/Components/table/TableActions";
import { AttemptsCollapseData, OrderCollapseData } from "./CollapseData";

const LogisticsRow = () => {
  //#region Toggle table configuration
  const [toggled, setToggled] = useState({
    ORDERS: false,
    ATTEMPTS: false,
  });

  const toggleCollapse = (key, toggle) => {
    setToggled((prev) => ({ ...prev, [key]: toggle }));
  };
  //#endregion

  return (
    <Row grid="grid-cols-15">
      <Data className="col-span-1 text-center">
        <input type="checkbox" />
      </Data>
      <Data className="col-span-1 break-all text-xs font-light leading-none">
        624914c0b6f1580e80ccfb6a
      </Data>
      <Data className="col-span-2">
        {toggled.ORDERS ? (
          <OrderCollapseData toggleCollapse={toggleCollapse} />
        ) : (
          <button
            onClick={() => toggleCollapse("ORDERS", true)}
            className="text-gray-700 font-medium text-sm
                     bg-gray-300 px-4 py-1 rounded
                     transition duration-150 ease-linear
                     hover:bg-gray-50 hover:text-gray-800"
          >
            Show Orders
          </button>
        )}
      </Data>
      <Data className="col-span-3">
        Lot 1 Block 14, San Francisco, Binan, Laguna
      </Data>
      <Data className="col-span-2">Apple</Data>
      <Data className="col-span-1">April 3, 2022</Data>
      <Data className="col-span-1">April 8, 2022</Data>
      <Data className="col-span-2">
        {toggled.ATTEMPTS ? (
          <AttemptsCollapseData toggleCollapse={toggleCollapse} />
        ) : (
          <button
            onClick={() => toggleCollapse("ATTEMPTS", true)}
            className="text-gray-700 font-medium text-sm
                     bg-gray-300 px-4 py-1 rounded
                     transition duration-150 ease-linear
                     hover:bg-gray-50 hover:text-gray-800"
          >
            Show Attempts
          </button>
        )}
      </Data>

      <Data className="col-span-2">
        <ActionGroup>
          <Action text="COMPLETED" type="BUTTON" onClick={() => {}} />
        </ActionGroup>
      </Data>
    </Row>
  );
};
export default LogisticsRow;
