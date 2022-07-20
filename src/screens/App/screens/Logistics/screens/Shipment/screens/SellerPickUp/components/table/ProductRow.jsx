import React, { useState } from "react";
import { batch, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setMessage,
  setMessages,
  setSeverity,
} from "../../../../../../../../../../redux/Alert/AlertAction";
import {
  toggleLoading,
  toggleReload,
} from "../../../../../../../../../../redux/Logistics/WithMe/WithMeAction";
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

  //#region API to PICK UP ORDER
  const PickUpOrderAPI = async () => {
    await axios
      .post("/api/logistics/orders/pick-up", {
        products: { [businessId]: product },
      })
      .then((res) => {
        if (res.status === 200) {
          batch(() => {
            dispatch(setMessages(res.data.messages));
            dispatch(toggleLoading(true));
            dispatch(toggleReload());
          });
        }
      })
      .catch((err) => {
        if (!err.response)
          dispatch(
            setMessages([
              {
                message:
                  "Something went wrong in retrieving your orders. Try again",
                severity: "error",
              },
            ])
          );
        else if (err.response.status === 403) history.push("/forbidden");
        else if (err.response.status === 401) history.push("unathorized");
        else
          dispatch(
            setMessages([
              {
                message: err.response.data.error,
                severity: "error",
              },
            ])
          );
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
            <Action type="BUTTON" text="Pick Up" onClick={PickUpOrderAPI} />
          </ActionGroup>
        </Data>
      </Row>

      {collapsed && <CollapseParcelRow orders={orders} />}
    </>
  );
};
export default ProductRow;
