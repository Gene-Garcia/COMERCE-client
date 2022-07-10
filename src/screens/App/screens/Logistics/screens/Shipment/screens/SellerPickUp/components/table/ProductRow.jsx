import React, { useState } from "react";
import { batch, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../../redux/Alert/AlertAction";
import axios from "../../../../../../../../../../shared/axios";
import {
  Data,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import {
  Action,
  ActionGroup,
} from "../../../../../../../../../../shared/Components/table/TableActions";
import CollapseParcelRow from "./CollapseParcelRow";

const ProductRow = ({
  businessId,
  product: {
    businessName,
    email,
    contactNumber,
    pickUpAddress,
    productQuantity,
    orders,
    checked,
  },
  product,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  //#region API to PACK ORDER
  const PackOrderAPI = async () => {
    console.log("Requesting");
    console.log(product);
    await axios
      .post("/api/logistics/orders/pick-up", {
        products: { [businessId]: product },
      })
      .then((res) => {
        console.log(res);
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
          });
        else if (err.response.status === 403) history.push("/forbidden");
        else if (err.response.status === 401) history.push("unathorized");
        else
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage(err.response.data.error));
          });
      });
  };
  //#endregion

  // checkbox change
  const checkboxChange = (e) => {};

  return (
    <>
      <Row grid="grid-cols-14">
        <Data className="col-span-1 text-center">
          <input
            type="checkbox"
            checked={checked}
            className=""
            onChange={checkboxChange}
          />
        </Data>
        <Data className="col-span-1 font-light text-xs break-all">
          {businessId}
        </Data>

        <Data className="col-span-3">{`${pickUpAddress.street}, ${pickUpAddress.barangay}, ${pickUpAddress.cityMunicipality}, ${pickUpAddress.province}`}</Data>

        <Data className="col-span-1">{productQuantity}</Data>
        <Data className="col-span-2">{businessName}</Data>
        <Data className="col-span-2">{contactNumber}</Data>
        <Data className="col-span-2">{email}</Data>

        <Data className="col-span-2">
          <ActionGroup>
            <Action
              type="BUTTON"
              text="Show Parcels"
              onClick={() => setCollapsed((prev) => !prev)}
            />
            <Action type="BUTTON" text="Pick Up" onClick={PackOrderAPI} />
          </ActionGroup>
        </Data>
      </Row>

      {collapsed && <CollapseParcelRow orders={orders} />}
    </>
  );
};
export default ProductRow;
